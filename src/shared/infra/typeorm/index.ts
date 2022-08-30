import { createConnection, getConnectionOptions } from 'typeorm';

import { Category } from '../modules/cars/entities/Category';
import { Specification } from '../modules/cars/entities/Specification';
import { CreateCategories1660347706753 } from './migrations/1660347706753-CreateCategories';

interface IOptions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = 'database_ignite';
  createConnection({ ...options });
});

// const dataSource = new DataSource({
//   type: 'postgres',
//   port: 5432,
//   username: 'docker',
//   password: 'ignite',
//   database: process.env.NODE_ENV === 'test' ? 'rentx_test' : 'rentx',
//   entities: [Category, Specification],
//   migrations: [CreateCategories1660347706753],
// });

// export function createConnection(host = 'database'): Promise<DataSource> {
//   return dataSource.setOptions({ host }).initialize();
// }

// export default dataSource;
