const fs = require("fs");

function readData(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2));
      return [];
    }
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data || "[]");
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return [];
  }
}

function writeData(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

function addEntity(filePath, newEntity) {
  const items = readData(filePath);

  const nextId = items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1;
  const entityWithId = { id: nextId, ...newEntity };

  items.push(entityWithId);
  writeData(filePath, items);
  console.log(`[CREATE] Added item to ${filePath} with ID: ${nextId}`);
  return entityWithId;
}

function getAllEntities(filePath) {
  return readData(filePath);
}

function getEntityById(filePath, id) {
  const items = readData(filePath);
  return items.find((item) => item.id === id) || null;
}

function updateEntity(filePath, id, updatedFields) {
  const items = readData(filePath);
  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    console.log(`[UPDATE Failed] Item with ID ${id} not found in ${filePath}`);
    return null;
  }

  items[index] = { ...items[index], ...updatedFields, id };
  writeData(filePath, items);
  console.log(`[UPDATE] Updated item ID ${id} in ${filePath}`);
  return items[index];
}

function deleteEntity(filePath, id) {
  const items = readData(filePath);
  const filteredItems = items.filter((item) => item.id !== id);

  if (items.length === filteredItems.length) {
    console.log(`[DELETE Failed] Item with ID ${id} not found in ${filePath}`);
    return false;
  }

  writeData(filePath, filteredItems);
  console.log(`[DELETE] Removed item ID ${id} from ${filePath}`);
  return true;
}

module.exports = {
  addEntity,
  getAllEntities,
  getEntityById,
  updateEntity,
  deleteEntity,
};
