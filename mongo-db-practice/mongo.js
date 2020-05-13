conn = new Mongo();
db = conn.getDB("world");
var c = db.getCollectionNames();
print(c);
