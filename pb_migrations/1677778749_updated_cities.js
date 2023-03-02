migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xz6ulexbzrmiab9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fyvtojew",
    "name": "img",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xz6ulexbzrmiab9")

  // remove
  collection.schema.removeField("fyvtojew")

  return dao.saveCollection(collection)
})
