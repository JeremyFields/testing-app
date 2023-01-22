// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Game, Order, GameOrder } = initSchema(schema);

export {
  Game,
  Order,
  GameOrder
};