import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Game, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Price?: number | null;
  readonly Orders?: (GameOrder | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGame = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Game, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Price?: number | null;
  readonly Orders: AsyncCollection<GameOrder>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Game = LazyLoading extends LazyLoadingDisabled ? EagerGame : LazyGame

export declare const Game: (new (init: ModelInit<Game>) => Game) & {
  copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customerName?: string | null;
  readonly customerAddress?: string | null;
  readonly games?: (GameOrder | null)[] | null;
  readonly Games?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customerName?: string | null;
  readonly customerAddress?: string | null;
  readonly games: AsyncCollection<GameOrder>;
  readonly Games?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerGameOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GameOrder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gameId?: string | null;
  readonly orderId?: string | null;
  readonly game: Game;
  readonly order: Order;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGameOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GameOrder, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gameId?: string | null;
  readonly orderId?: string | null;
  readonly game: AsyncItem<Game>;
  readonly order: AsyncItem<Order>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GameOrder = LazyLoading extends LazyLoadingDisabled ? EagerGameOrder : LazyGameOrder

export declare const GameOrder: (new (init: ModelInit<GameOrder>) => GameOrder) & {
  copyOf(source: GameOrder, mutator: (draft: MutableModel<GameOrder>) => MutableModel<GameOrder> | void): GameOrder;
}