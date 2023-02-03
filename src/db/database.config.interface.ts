export interface databaseConfigAttributesInterface {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  urlDatabase?: string;
  define: object;
}

export interface databaseConfigInterface {
  development: databaseConfigAttributesInterface;
  test: databaseConfigAttributesInterface;
  production: databaseConfigAttributesInterface;
}
