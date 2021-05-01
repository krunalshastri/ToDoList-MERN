const router = require("express").Router();
const customList = require("../Models/customList");
const Item = require("../Models/Item");
const _ = require("lodash");

//Get request on custom list by user
router.route('/:topic').get(function (req, res) {
    const customListName = _.capitalize(req.params.topic);

    const welcome = new Item({
        name: "Welcome!!"
    });
    //check if custom list DB is already there or not
    customList.findOne({ name: customListName })
        .then((finalList) => {
            if (!finalList) {
                const customL1 = new customList(
                    {
                        name: customListName,
                        customListItems: [welcome]
                    }
                );
                customL1.save()
                    .then(() => res.json("New custom created!!"));
            }
            else {
                res.json(finalList.customListItems);
            }
        })
        .catch(() => res.json("Error!!"));
});

//Adding the data to display homepage
router.route('/add').post(function (req, res) {
    const itemName = req.body.newItem;
    const listName = req.body.list;

    const I = new Item(
        {
            name: itemName
        }
    );

    console.log(listName);
    customList.findOne({ name: listName })
        .then((finalList) => {
            finalList.customListItems.push(I);
            finalList.save()
                .then(() => res.json(finalList.customListItems))
                .catch(() => "Error!!");
        })
});

router.route('/delete/:listName/:id').delete((req, res) => {
    const deleteItem = req.params.id;
    const listName = req.params.listName;

    customList.findOneAndUpdate({ name: listName }, { $pull: { customListItems: { _id: deleteItem } } })
        .then(() => res.json("item deleted!!"))
        .catch(() => res.json("Error!!"));
});


module.exports = router;