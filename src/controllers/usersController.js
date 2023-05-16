import UserManager from "../managers/users.js";

export const list =
  ("/",
  async (req, res) => {
    const { limit, page } = req.query;

    const userManager = new UserManager();

    const users = await userManager.paginate({ limit, page });

    res.send({
      status: "success",
      users: users.docs,
      ...users,
      docs: undefined,
    });
  });

export const getOne =
  ("/:id",
  async (req, res) => {
    const { id } = req.params;

    const userManager = new UserManager();

    const user = await userManager.getOne(id);

    res.send({ status: "success", user });
  });

export const save =
  ("/",
  async (req, res) => {
    const data = req.body;

    const userManager = new UserManager();

    const user = await userManager.create(data);

    res.send({ status: "success", user, massage: "user created" });
  });

export const update =
  ("/:id",
  async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const userManager = new UserManager();

    const user = await userManager.updateOne(id, data);

    res.send({ status: "success", user, massage: "user updated" });
  });

export const deleteOne =
  ("/:id",
  async (req, res) => {
    const { id } = req.params;

    const userManager = new UserManager();

    await userManager.deleteOne(id);

    res.send({ status: "success", massage: "user deleted" });
  });
