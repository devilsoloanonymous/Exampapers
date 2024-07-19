const database = localStorage.getItem('database') || '{}';
export default JSON.parse(database);
