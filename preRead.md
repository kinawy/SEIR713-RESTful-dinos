For this lab, you're going to add a prehistoric creatures section to the `crud_dinosaurs` app.
---

## 1. Add the `prehistoric_creatures.json` file to your `crud_dinosaurs` directory. (That file is included in this repo.)
## 1. Add the `prehistoric_creatures.json` file to your `RESTful-creatures` directory. (That file is included in this repo.)


## 2. Create the following routes:
| VERB | URL | Action (CRUD) | Description |
|------|-----|---------------|-------------|
| GET | /prehistoric_creatures | Index (Read) | displays all prehistoric creatures |
| GET | /prehistoric_creatures/1 | Show (Read) | displays the type and photo of a particular prehistoric creature (id = 1) |
| POST | /prehistoric_creatures | Create | creates an prehistoric creature with the POST payload data |
| GET | /prehistoric_creatures/edit/1 | Show(Read) | form for editting a specific prehistoric creature (id = 1)|
**Hint:** You will need to have two folders inside your `views` directory, one for `dinosaurs` and one for `prehistoric_creatures`. Make sure to change your `res.render()` statements accordingly! (Refer to the `faves_hates_app` from the [Layouts and Controllers Lab](https://github.com/GAWDISeattle/notes/blob/master/05-node-express/express-apis/01organization.md)for a reference.)
## 3. Reorganize your routes into controllers
(one controller for dinosaurs and one controller for prehistoric creatures)