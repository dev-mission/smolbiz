const express = require('express');
const HttpStatus = require('http-status-codes');
const router = express.Router();

//interceptors are functions that handle a request BEFORE your code executes
const interceptors = require('../interceptors');
//models are javascript databases
const models = require('../../models');

//controller, application logic that sends data based on request
router.get('/', async function(req, res) {
  //request data from user/network 
  //decide response- json data that is in an array
  const rows = await models.Shop.findAll();
  res.json(rows);
});

router.post('/', interceptors.requireLogin, async function(req, res) {
  //build is not async (not to database, build new Skill row in memory)
  //the body is the extracted data from the request
  const row = models.Shop.build(req.body);
  //the requireLogin interceptor ensures that the client is logged in, and
  //the user object is accessible on the request object as follows
  row.UserId = req.user.id;
  //try to save this new row
  try {
    await row.save();
    //if successful, return 201 status (CREATED), and the JSON data of the row
    res.status(201).json(row);
  } catch (error) {
      //if the database returned an error, print it to the console
    console.log(error);
    //send back the UNPROCESSABLE ENTITY error code and the error message itself
    res.status(422).json(error);
  }
});

router.get('/me', interceptors.requireLogin, async function(req, res) {
  const row = await req.user.getShop({
    include: [models.ShopType, models.CommunityIdentity]
  });
  if (row) {
    res.json(row);
  } else {
    res.status(HttpStatus.NO_CONTENT).end();
  }
});

router.get('/:id', async function(req, res) {
  const row = await models.Shop.findByPk(req.params.id);
  if (row) {
    res.json(row);
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

router.patch('/:id', interceptors.requireLogin, async function(req, res) {
  await models.sequelize.transaction(async (transaction) => {
    const row = await models.Shop.findByPk(req.params.id, {transaction});
    if (row) {
      try {
        await row.update(req.body, {transaction});
        if (req.body.CommunityIdentities) {
          await row.setCommunityIdentities(await models.CommunityIdentity.findAll({
            where: {
              id: req.body.CommunityIdentities.map((ci) => ci.id)
            },
            transaction
          }), {transaction});
        }
        if (req.body.ShopTypes) {
          await row.setShopTypes(await models.ShopType.findAll({
            where: {
              id: req.body.ShopTypes.map((st) => st.id)
            },
            transaction
          }), {transaction});
        }
        res.status(HttpStatus.OK).end();
      } catch (error) {
        res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(error);
      }
    } else {
      res.status(HttpStatus.NOT_FOUND).end();
    }
  });
});

router.delete('/:id', interceptors.requireLogin, async function(req, res) {
  const row = await models.Shop.findByPk(req.params.id);
  if (row) {
    await row.destroy();
    res.status(HttpStatus.OK).end();
  } else {
    res.status(HttpStatus.NOT_FOUND).end();
  }
});

/*async- the code runs not in order of the code that is written 
takes time, so run it in the background but load everything else in the mean time (ex: find all)

await- inside an async function, finish retrieving before rendering*/

//curl- client url
module.exports = router;