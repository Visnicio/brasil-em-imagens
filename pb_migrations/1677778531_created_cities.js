migrate((db) => {
  const collection = new Collection({
    "id": "xz6ulexbzrmiab9",
    "created": "2023-03-02 17:35:31.466Z",
    "updated": "2023-03-02 17:35:31.466Z",
    "name": "cities",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dnq0xvrl",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "notbcaeh",
        "name": "ibge_code",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xz6ulexbzrmiab9");

  return dao.deleteCollection(collection);
})
