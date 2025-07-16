
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TrackedEmail
 * 
 */
export type TrackedEmail = $Result.DefaultSelection<Prisma.$TrackedEmailPayload>
/**
 * Model EmailOpen
 * 
 */
export type EmailOpen = $Result.DefaultSelection<Prisma.$EmailOpenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trackedEmail`: Exposes CRUD operations for the **TrackedEmail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackedEmails
    * const trackedEmails = await prisma.trackedEmail.findMany()
    * ```
    */
  get trackedEmail(): Prisma.TrackedEmailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailOpen`: Exposes CRUD operations for the **EmailOpen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailOpens
    * const emailOpens = await prisma.emailOpen.findMany()
    * ```
    */
  get emailOpen(): Prisma.EmailOpenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    TrackedEmail: 'TrackedEmail',
    EmailOpen: 'EmailOpen'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "trackedEmail" | "emailOpen"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TrackedEmail: {
        payload: Prisma.$TrackedEmailPayload<ExtArgs>
        fields: Prisma.TrackedEmailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackedEmailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEmailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackedEmailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEmailPayload>
          }
          findFirst: {
            args: Prisma.TrackedEmailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEmailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackedEmailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEmailPayload>
          }
          findMany: {
            args: Prisma.TrackedEmailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEmailPayload>[]
          }
          create: {
            args: Prisma.TrackedEmailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEmailPayload>
          }
          createMany: {
            args: Prisma.TrackedEmailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackedEmailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEmailPayload>[]
          }
          delete: {
            args: Prisma.TrackedEmailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEmailPayload>
          }
          update: {
            args: Prisma.TrackedEmailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEmailPayload>
          }
          deleteMany: {
            args: Prisma.TrackedEmailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackedEmailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackedEmailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEmailPayload>[]
          }
          upsert: {
            args: Prisma.TrackedEmailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackedEmailPayload>
          }
          aggregate: {
            args: Prisma.TrackedEmailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackedEmail>
          }
          groupBy: {
            args: Prisma.TrackedEmailGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackedEmailGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackedEmailCountArgs<ExtArgs>
            result: $Utils.Optional<TrackedEmailCountAggregateOutputType> | number
          }
        }
      }
      EmailOpen: {
        payload: Prisma.$EmailOpenPayload<ExtArgs>
        fields: Prisma.EmailOpenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailOpenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOpenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailOpenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOpenPayload>
          }
          findFirst: {
            args: Prisma.EmailOpenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOpenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailOpenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOpenPayload>
          }
          findMany: {
            args: Prisma.EmailOpenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOpenPayload>[]
          }
          create: {
            args: Prisma.EmailOpenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOpenPayload>
          }
          createMany: {
            args: Prisma.EmailOpenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailOpenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOpenPayload>[]
          }
          delete: {
            args: Prisma.EmailOpenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOpenPayload>
          }
          update: {
            args: Prisma.EmailOpenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOpenPayload>
          }
          deleteMany: {
            args: Prisma.EmailOpenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailOpenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailOpenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOpenPayload>[]
          }
          upsert: {
            args: Prisma.EmailOpenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailOpenPayload>
          }
          aggregate: {
            args: Prisma.EmailOpenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailOpen>
          }
          groupBy: {
            args: Prisma.EmailOpenGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailOpenGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailOpenCountArgs<ExtArgs>
            result: $Utils.Optional<EmailOpenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    trackedEmail?: TrackedEmailOmit
    emailOpen?: EmailOpenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentEmails: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentEmails?: boolean | UserCountOutputTypeCountSentEmailsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackedEmailWhereInput
  }


  /**
   * Count Type TrackedEmailCountOutputType
   */

  export type TrackedEmailCountOutputType = {
    opens: number
  }

  export type TrackedEmailCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opens?: boolean | TrackedEmailCountOutputTypeCountOpensArgs
  }

  // Custom InputTypes
  /**
   * TrackedEmailCountOutputType without action
   */
  export type TrackedEmailCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEmailCountOutputType
     */
    select?: TrackedEmailCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrackedEmailCountOutputType without action
   */
  export type TrackedEmailCountOutputTypeCountOpensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailOpenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sentEmails?: boolean | User$sentEmailsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentEmails?: boolean | User$sentEmailsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sentEmails: Prisma.$TrackedEmailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentEmails<T extends User$sentEmailsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentEmailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedEmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sentEmails
   */
  export type User$sentEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEmail
     */
    select?: TrackedEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEmail
     */
    omit?: TrackedEmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEmailInclude<ExtArgs> | null
    where?: TrackedEmailWhereInput
    orderBy?: TrackedEmailOrderByWithRelationInput | TrackedEmailOrderByWithRelationInput[]
    cursor?: TrackedEmailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackedEmailScalarFieldEnum | TrackedEmailScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TrackedEmail
   */

  export type AggregateTrackedEmail = {
    _count: TrackedEmailCountAggregateOutputType | null
    _min: TrackedEmailMinAggregateOutputType | null
    _max: TrackedEmailMaxAggregateOutputType | null
  }

  export type TrackedEmailMinAggregateOutputType = {
    id: string | null
    subject: string | null
    recipient: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type TrackedEmailMaxAggregateOutputType = {
    id: string | null
    subject: string | null
    recipient: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type TrackedEmailCountAggregateOutputType = {
    id: number
    subject: number
    recipient: number
    createdAt: number
    userId: number
    _all: number
  }


  export type TrackedEmailMinAggregateInputType = {
    id?: true
    subject?: true
    recipient?: true
    createdAt?: true
    userId?: true
  }

  export type TrackedEmailMaxAggregateInputType = {
    id?: true
    subject?: true
    recipient?: true
    createdAt?: true
    userId?: true
  }

  export type TrackedEmailCountAggregateInputType = {
    id?: true
    subject?: true
    recipient?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type TrackedEmailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackedEmail to aggregate.
     */
    where?: TrackedEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedEmails to fetch.
     */
    orderBy?: TrackedEmailOrderByWithRelationInput | TrackedEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackedEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedEmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackedEmails
    **/
    _count?: true | TrackedEmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackedEmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackedEmailMaxAggregateInputType
  }

  export type GetTrackedEmailAggregateType<T extends TrackedEmailAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackedEmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackedEmail[P]>
      : GetScalarType<T[P], AggregateTrackedEmail[P]>
  }




  export type TrackedEmailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackedEmailWhereInput
    orderBy?: TrackedEmailOrderByWithAggregationInput | TrackedEmailOrderByWithAggregationInput[]
    by: TrackedEmailScalarFieldEnum[] | TrackedEmailScalarFieldEnum
    having?: TrackedEmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackedEmailCountAggregateInputType | true
    _min?: TrackedEmailMinAggregateInputType
    _max?: TrackedEmailMaxAggregateInputType
  }

  export type TrackedEmailGroupByOutputType = {
    id: string
    subject: string
    recipient: string
    createdAt: Date
    userId: string
    _count: TrackedEmailCountAggregateOutputType | null
    _min: TrackedEmailMinAggregateOutputType | null
    _max: TrackedEmailMaxAggregateOutputType | null
  }

  type GetTrackedEmailGroupByPayload<T extends TrackedEmailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackedEmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackedEmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackedEmailGroupByOutputType[P]>
            : GetScalarType<T[P], TrackedEmailGroupByOutputType[P]>
        }
      >
    >


  export type TrackedEmailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    recipient?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    opens?: boolean | TrackedEmail$opensArgs<ExtArgs>
    _count?: boolean | TrackedEmailCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedEmail"]>

  export type TrackedEmailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    recipient?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedEmail"]>

  export type TrackedEmailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject?: boolean
    recipient?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackedEmail"]>

  export type TrackedEmailSelectScalar = {
    id?: boolean
    subject?: boolean
    recipient?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type TrackedEmailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subject" | "recipient" | "createdAt" | "userId", ExtArgs["result"]["trackedEmail"]>
  export type TrackedEmailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    opens?: boolean | TrackedEmail$opensArgs<ExtArgs>
    _count?: boolean | TrackedEmailCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TrackedEmailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TrackedEmailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TrackedEmailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackedEmail"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      opens: Prisma.$EmailOpenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subject: string
      recipient: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["trackedEmail"]>
    composites: {}
  }

  type TrackedEmailGetPayload<S extends boolean | null | undefined | TrackedEmailDefaultArgs> = $Result.GetResult<Prisma.$TrackedEmailPayload, S>

  type TrackedEmailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackedEmailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackedEmailCountAggregateInputType | true
    }

  export interface TrackedEmailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackedEmail'], meta: { name: 'TrackedEmail' } }
    /**
     * Find zero or one TrackedEmail that matches the filter.
     * @param {TrackedEmailFindUniqueArgs} args - Arguments to find a TrackedEmail
     * @example
     * // Get one TrackedEmail
     * const trackedEmail = await prisma.trackedEmail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackedEmailFindUniqueArgs>(args: SelectSubset<T, TrackedEmailFindUniqueArgs<ExtArgs>>): Prisma__TrackedEmailClient<$Result.GetResult<Prisma.$TrackedEmailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrackedEmail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackedEmailFindUniqueOrThrowArgs} args - Arguments to find a TrackedEmail
     * @example
     * // Get one TrackedEmail
     * const trackedEmail = await prisma.trackedEmail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackedEmailFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackedEmailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackedEmailClient<$Result.GetResult<Prisma.$TrackedEmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackedEmail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedEmailFindFirstArgs} args - Arguments to find a TrackedEmail
     * @example
     * // Get one TrackedEmail
     * const trackedEmail = await prisma.trackedEmail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackedEmailFindFirstArgs>(args?: SelectSubset<T, TrackedEmailFindFirstArgs<ExtArgs>>): Prisma__TrackedEmailClient<$Result.GetResult<Prisma.$TrackedEmailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackedEmail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedEmailFindFirstOrThrowArgs} args - Arguments to find a TrackedEmail
     * @example
     * // Get one TrackedEmail
     * const trackedEmail = await prisma.trackedEmail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackedEmailFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackedEmailFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackedEmailClient<$Result.GetResult<Prisma.$TrackedEmailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrackedEmails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedEmailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackedEmails
     * const trackedEmails = await prisma.trackedEmail.findMany()
     * 
     * // Get first 10 TrackedEmails
     * const trackedEmails = await prisma.trackedEmail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackedEmailWithIdOnly = await prisma.trackedEmail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackedEmailFindManyArgs>(args?: SelectSubset<T, TrackedEmailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedEmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrackedEmail.
     * @param {TrackedEmailCreateArgs} args - Arguments to create a TrackedEmail.
     * @example
     * // Create one TrackedEmail
     * const TrackedEmail = await prisma.trackedEmail.create({
     *   data: {
     *     // ... data to create a TrackedEmail
     *   }
     * })
     * 
     */
    create<T extends TrackedEmailCreateArgs>(args: SelectSubset<T, TrackedEmailCreateArgs<ExtArgs>>): Prisma__TrackedEmailClient<$Result.GetResult<Prisma.$TrackedEmailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrackedEmails.
     * @param {TrackedEmailCreateManyArgs} args - Arguments to create many TrackedEmails.
     * @example
     * // Create many TrackedEmails
     * const trackedEmail = await prisma.trackedEmail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackedEmailCreateManyArgs>(args?: SelectSubset<T, TrackedEmailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackedEmails and returns the data saved in the database.
     * @param {TrackedEmailCreateManyAndReturnArgs} args - Arguments to create many TrackedEmails.
     * @example
     * // Create many TrackedEmails
     * const trackedEmail = await prisma.trackedEmail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackedEmails and only return the `id`
     * const trackedEmailWithIdOnly = await prisma.trackedEmail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackedEmailCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackedEmailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedEmailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrackedEmail.
     * @param {TrackedEmailDeleteArgs} args - Arguments to delete one TrackedEmail.
     * @example
     * // Delete one TrackedEmail
     * const TrackedEmail = await prisma.trackedEmail.delete({
     *   where: {
     *     // ... filter to delete one TrackedEmail
     *   }
     * })
     * 
     */
    delete<T extends TrackedEmailDeleteArgs>(args: SelectSubset<T, TrackedEmailDeleteArgs<ExtArgs>>): Prisma__TrackedEmailClient<$Result.GetResult<Prisma.$TrackedEmailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrackedEmail.
     * @param {TrackedEmailUpdateArgs} args - Arguments to update one TrackedEmail.
     * @example
     * // Update one TrackedEmail
     * const trackedEmail = await prisma.trackedEmail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackedEmailUpdateArgs>(args: SelectSubset<T, TrackedEmailUpdateArgs<ExtArgs>>): Prisma__TrackedEmailClient<$Result.GetResult<Prisma.$TrackedEmailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrackedEmails.
     * @param {TrackedEmailDeleteManyArgs} args - Arguments to filter TrackedEmails to delete.
     * @example
     * // Delete a few TrackedEmails
     * const { count } = await prisma.trackedEmail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackedEmailDeleteManyArgs>(args?: SelectSubset<T, TrackedEmailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackedEmails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedEmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackedEmails
     * const trackedEmail = await prisma.trackedEmail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackedEmailUpdateManyArgs>(args: SelectSubset<T, TrackedEmailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackedEmails and returns the data updated in the database.
     * @param {TrackedEmailUpdateManyAndReturnArgs} args - Arguments to update many TrackedEmails.
     * @example
     * // Update many TrackedEmails
     * const trackedEmail = await prisma.trackedEmail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrackedEmails and only return the `id`
     * const trackedEmailWithIdOnly = await prisma.trackedEmail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrackedEmailUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackedEmailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackedEmailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrackedEmail.
     * @param {TrackedEmailUpsertArgs} args - Arguments to update or create a TrackedEmail.
     * @example
     * // Update or create a TrackedEmail
     * const trackedEmail = await prisma.trackedEmail.upsert({
     *   create: {
     *     // ... data to create a TrackedEmail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackedEmail we want to update
     *   }
     * })
     */
    upsert<T extends TrackedEmailUpsertArgs>(args: SelectSubset<T, TrackedEmailUpsertArgs<ExtArgs>>): Prisma__TrackedEmailClient<$Result.GetResult<Prisma.$TrackedEmailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrackedEmails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedEmailCountArgs} args - Arguments to filter TrackedEmails to count.
     * @example
     * // Count the number of TrackedEmails
     * const count = await prisma.trackedEmail.count({
     *   where: {
     *     // ... the filter for the TrackedEmails we want to count
     *   }
     * })
    **/
    count<T extends TrackedEmailCountArgs>(
      args?: Subset<T, TrackedEmailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackedEmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackedEmail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedEmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrackedEmailAggregateArgs>(args: Subset<T, TrackedEmailAggregateArgs>): Prisma.PrismaPromise<GetTrackedEmailAggregateType<T>>

    /**
     * Group by TrackedEmail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackedEmailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrackedEmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackedEmailGroupByArgs['orderBy'] }
        : { orderBy?: TrackedEmailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrackedEmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackedEmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackedEmail model
   */
  readonly fields: TrackedEmailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackedEmail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackedEmailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    opens<T extends TrackedEmail$opensArgs<ExtArgs> = {}>(args?: Subset<T, TrackedEmail$opensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailOpenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrackedEmail model
   */
  interface TrackedEmailFieldRefs {
    readonly id: FieldRef<"TrackedEmail", 'String'>
    readonly subject: FieldRef<"TrackedEmail", 'String'>
    readonly recipient: FieldRef<"TrackedEmail", 'String'>
    readonly createdAt: FieldRef<"TrackedEmail", 'DateTime'>
    readonly userId: FieldRef<"TrackedEmail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TrackedEmail findUnique
   */
  export type TrackedEmailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEmail
     */
    select?: TrackedEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEmail
     */
    omit?: TrackedEmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEmailInclude<ExtArgs> | null
    /**
     * Filter, which TrackedEmail to fetch.
     */
    where: TrackedEmailWhereUniqueInput
  }

  /**
   * TrackedEmail findUniqueOrThrow
   */
  export type TrackedEmailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEmail
     */
    select?: TrackedEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEmail
     */
    omit?: TrackedEmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEmailInclude<ExtArgs> | null
    /**
     * Filter, which TrackedEmail to fetch.
     */
    where: TrackedEmailWhereUniqueInput
  }

  /**
   * TrackedEmail findFirst
   */
  export type TrackedEmailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEmail
     */
    select?: TrackedEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEmail
     */
    omit?: TrackedEmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEmailInclude<ExtArgs> | null
    /**
     * Filter, which TrackedEmail to fetch.
     */
    where?: TrackedEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedEmails to fetch.
     */
    orderBy?: TrackedEmailOrderByWithRelationInput | TrackedEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackedEmails.
     */
    cursor?: TrackedEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedEmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackedEmails.
     */
    distinct?: TrackedEmailScalarFieldEnum | TrackedEmailScalarFieldEnum[]
  }

  /**
   * TrackedEmail findFirstOrThrow
   */
  export type TrackedEmailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEmail
     */
    select?: TrackedEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEmail
     */
    omit?: TrackedEmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEmailInclude<ExtArgs> | null
    /**
     * Filter, which TrackedEmail to fetch.
     */
    where?: TrackedEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedEmails to fetch.
     */
    orderBy?: TrackedEmailOrderByWithRelationInput | TrackedEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackedEmails.
     */
    cursor?: TrackedEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedEmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackedEmails.
     */
    distinct?: TrackedEmailScalarFieldEnum | TrackedEmailScalarFieldEnum[]
  }

  /**
   * TrackedEmail findMany
   */
  export type TrackedEmailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEmail
     */
    select?: TrackedEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEmail
     */
    omit?: TrackedEmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEmailInclude<ExtArgs> | null
    /**
     * Filter, which TrackedEmails to fetch.
     */
    where?: TrackedEmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackedEmails to fetch.
     */
    orderBy?: TrackedEmailOrderByWithRelationInput | TrackedEmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackedEmails.
     */
    cursor?: TrackedEmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackedEmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackedEmails.
     */
    skip?: number
    distinct?: TrackedEmailScalarFieldEnum | TrackedEmailScalarFieldEnum[]
  }

  /**
   * TrackedEmail create
   */
  export type TrackedEmailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEmail
     */
    select?: TrackedEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEmail
     */
    omit?: TrackedEmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEmailInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackedEmail.
     */
    data: XOR<TrackedEmailCreateInput, TrackedEmailUncheckedCreateInput>
  }

  /**
   * TrackedEmail createMany
   */
  export type TrackedEmailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackedEmails.
     */
    data: TrackedEmailCreateManyInput | TrackedEmailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackedEmail createManyAndReturn
   */
  export type TrackedEmailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEmail
     */
    select?: TrackedEmailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEmail
     */
    omit?: TrackedEmailOmit<ExtArgs> | null
    /**
     * The data used to create many TrackedEmails.
     */
    data: TrackedEmailCreateManyInput | TrackedEmailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEmailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackedEmail update
   */
  export type TrackedEmailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEmail
     */
    select?: TrackedEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEmail
     */
    omit?: TrackedEmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEmailInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackedEmail.
     */
    data: XOR<TrackedEmailUpdateInput, TrackedEmailUncheckedUpdateInput>
    /**
     * Choose, which TrackedEmail to update.
     */
    where: TrackedEmailWhereUniqueInput
  }

  /**
   * TrackedEmail updateMany
   */
  export type TrackedEmailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackedEmails.
     */
    data: XOR<TrackedEmailUpdateManyMutationInput, TrackedEmailUncheckedUpdateManyInput>
    /**
     * Filter which TrackedEmails to update
     */
    where?: TrackedEmailWhereInput
    /**
     * Limit how many TrackedEmails to update.
     */
    limit?: number
  }

  /**
   * TrackedEmail updateManyAndReturn
   */
  export type TrackedEmailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEmail
     */
    select?: TrackedEmailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEmail
     */
    omit?: TrackedEmailOmit<ExtArgs> | null
    /**
     * The data used to update TrackedEmails.
     */
    data: XOR<TrackedEmailUpdateManyMutationInput, TrackedEmailUncheckedUpdateManyInput>
    /**
     * Filter which TrackedEmails to update
     */
    where?: TrackedEmailWhereInput
    /**
     * Limit how many TrackedEmails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEmailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackedEmail upsert
   */
  export type TrackedEmailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEmail
     */
    select?: TrackedEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEmail
     */
    omit?: TrackedEmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEmailInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackedEmail to update in case it exists.
     */
    where: TrackedEmailWhereUniqueInput
    /**
     * In case the TrackedEmail found by the `where` argument doesn't exist, create a new TrackedEmail with this data.
     */
    create: XOR<TrackedEmailCreateInput, TrackedEmailUncheckedCreateInput>
    /**
     * In case the TrackedEmail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackedEmailUpdateInput, TrackedEmailUncheckedUpdateInput>
  }

  /**
   * TrackedEmail delete
   */
  export type TrackedEmailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEmail
     */
    select?: TrackedEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEmail
     */
    omit?: TrackedEmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEmailInclude<ExtArgs> | null
    /**
     * Filter which TrackedEmail to delete.
     */
    where: TrackedEmailWhereUniqueInput
  }

  /**
   * TrackedEmail deleteMany
   */
  export type TrackedEmailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackedEmails to delete
     */
    where?: TrackedEmailWhereInput
    /**
     * Limit how many TrackedEmails to delete.
     */
    limit?: number
  }

  /**
   * TrackedEmail.opens
   */
  export type TrackedEmail$opensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOpen
     */
    select?: EmailOpenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOpen
     */
    omit?: EmailOpenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOpenInclude<ExtArgs> | null
    where?: EmailOpenWhereInput
    orderBy?: EmailOpenOrderByWithRelationInput | EmailOpenOrderByWithRelationInput[]
    cursor?: EmailOpenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailOpenScalarFieldEnum | EmailOpenScalarFieldEnum[]
  }

  /**
   * TrackedEmail without action
   */
  export type TrackedEmailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackedEmail
     */
    select?: TrackedEmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackedEmail
     */
    omit?: TrackedEmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackedEmailInclude<ExtArgs> | null
  }


  /**
   * Model EmailOpen
   */

  export type AggregateEmailOpen = {
    _count: EmailOpenCountAggregateOutputType | null
    _min: EmailOpenMinAggregateOutputType | null
    _max: EmailOpenMaxAggregateOutputType | null
  }

  export type EmailOpenMinAggregateOutputType = {
    id: string | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date | null
    emailId: string | null
  }

  export type EmailOpenMaxAggregateOutputType = {
    id: string | null
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date | null
    emailId: string | null
  }

  export type EmailOpenCountAggregateOutputType = {
    id: number
    userAgent: number
    ipAddress: number
    createdAt: number
    emailId: number
    _all: number
  }


  export type EmailOpenMinAggregateInputType = {
    id?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
    emailId?: true
  }

  export type EmailOpenMaxAggregateInputType = {
    id?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
    emailId?: true
  }

  export type EmailOpenCountAggregateInputType = {
    id?: true
    userAgent?: true
    ipAddress?: true
    createdAt?: true
    emailId?: true
    _all?: true
  }

  export type EmailOpenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailOpen to aggregate.
     */
    where?: EmailOpenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailOpens to fetch.
     */
    orderBy?: EmailOpenOrderByWithRelationInput | EmailOpenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailOpenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailOpens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailOpens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailOpens
    **/
    _count?: true | EmailOpenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailOpenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailOpenMaxAggregateInputType
  }

  export type GetEmailOpenAggregateType<T extends EmailOpenAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailOpen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailOpen[P]>
      : GetScalarType<T[P], AggregateEmailOpen[P]>
  }




  export type EmailOpenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailOpenWhereInput
    orderBy?: EmailOpenOrderByWithAggregationInput | EmailOpenOrderByWithAggregationInput[]
    by: EmailOpenScalarFieldEnum[] | EmailOpenScalarFieldEnum
    having?: EmailOpenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailOpenCountAggregateInputType | true
    _min?: EmailOpenMinAggregateInputType
    _max?: EmailOpenMaxAggregateInputType
  }

  export type EmailOpenGroupByOutputType = {
    id: string
    userAgent: string | null
    ipAddress: string | null
    createdAt: Date
    emailId: string
    _count: EmailOpenCountAggregateOutputType | null
    _min: EmailOpenMinAggregateOutputType | null
    _max: EmailOpenMaxAggregateOutputType | null
  }

  type GetEmailOpenGroupByPayload<T extends EmailOpenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailOpenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailOpenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailOpenGroupByOutputType[P]>
            : GetScalarType<T[P], EmailOpenGroupByOutputType[P]>
        }
      >
    >


  export type EmailOpenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    emailId?: boolean
    email?: boolean | TrackedEmailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailOpen"]>

  export type EmailOpenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    emailId?: boolean
    email?: boolean | TrackedEmailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailOpen"]>

  export type EmailOpenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    emailId?: boolean
    email?: boolean | TrackedEmailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailOpen"]>

  export type EmailOpenSelectScalar = {
    id?: boolean
    userAgent?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    emailId?: boolean
  }

  export type EmailOpenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userAgent" | "ipAddress" | "createdAt" | "emailId", ExtArgs["result"]["emailOpen"]>
  export type EmailOpenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    email?: boolean | TrackedEmailDefaultArgs<ExtArgs>
  }
  export type EmailOpenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    email?: boolean | TrackedEmailDefaultArgs<ExtArgs>
  }
  export type EmailOpenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    email?: boolean | TrackedEmailDefaultArgs<ExtArgs>
  }

  export type $EmailOpenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailOpen"
    objects: {
      email: Prisma.$TrackedEmailPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userAgent: string | null
      ipAddress: string | null
      createdAt: Date
      emailId: string
    }, ExtArgs["result"]["emailOpen"]>
    composites: {}
  }

  type EmailOpenGetPayload<S extends boolean | null | undefined | EmailOpenDefaultArgs> = $Result.GetResult<Prisma.$EmailOpenPayload, S>

  type EmailOpenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailOpenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailOpenCountAggregateInputType | true
    }

  export interface EmailOpenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailOpen'], meta: { name: 'EmailOpen' } }
    /**
     * Find zero or one EmailOpen that matches the filter.
     * @param {EmailOpenFindUniqueArgs} args - Arguments to find a EmailOpen
     * @example
     * // Get one EmailOpen
     * const emailOpen = await prisma.emailOpen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailOpenFindUniqueArgs>(args: SelectSubset<T, EmailOpenFindUniqueArgs<ExtArgs>>): Prisma__EmailOpenClient<$Result.GetResult<Prisma.$EmailOpenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailOpen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailOpenFindUniqueOrThrowArgs} args - Arguments to find a EmailOpen
     * @example
     * // Get one EmailOpen
     * const emailOpen = await prisma.emailOpen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailOpenFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailOpenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailOpenClient<$Result.GetResult<Prisma.$EmailOpenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailOpen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOpenFindFirstArgs} args - Arguments to find a EmailOpen
     * @example
     * // Get one EmailOpen
     * const emailOpen = await prisma.emailOpen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailOpenFindFirstArgs>(args?: SelectSubset<T, EmailOpenFindFirstArgs<ExtArgs>>): Prisma__EmailOpenClient<$Result.GetResult<Prisma.$EmailOpenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailOpen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOpenFindFirstOrThrowArgs} args - Arguments to find a EmailOpen
     * @example
     * // Get one EmailOpen
     * const emailOpen = await prisma.emailOpen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailOpenFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailOpenFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailOpenClient<$Result.GetResult<Prisma.$EmailOpenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailOpens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOpenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailOpens
     * const emailOpens = await prisma.emailOpen.findMany()
     * 
     * // Get first 10 EmailOpens
     * const emailOpens = await prisma.emailOpen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailOpenWithIdOnly = await prisma.emailOpen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailOpenFindManyArgs>(args?: SelectSubset<T, EmailOpenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailOpenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailOpen.
     * @param {EmailOpenCreateArgs} args - Arguments to create a EmailOpen.
     * @example
     * // Create one EmailOpen
     * const EmailOpen = await prisma.emailOpen.create({
     *   data: {
     *     // ... data to create a EmailOpen
     *   }
     * })
     * 
     */
    create<T extends EmailOpenCreateArgs>(args: SelectSubset<T, EmailOpenCreateArgs<ExtArgs>>): Prisma__EmailOpenClient<$Result.GetResult<Prisma.$EmailOpenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailOpens.
     * @param {EmailOpenCreateManyArgs} args - Arguments to create many EmailOpens.
     * @example
     * // Create many EmailOpens
     * const emailOpen = await prisma.emailOpen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailOpenCreateManyArgs>(args?: SelectSubset<T, EmailOpenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailOpens and returns the data saved in the database.
     * @param {EmailOpenCreateManyAndReturnArgs} args - Arguments to create many EmailOpens.
     * @example
     * // Create many EmailOpens
     * const emailOpen = await prisma.emailOpen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailOpens and only return the `id`
     * const emailOpenWithIdOnly = await prisma.emailOpen.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailOpenCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailOpenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailOpenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailOpen.
     * @param {EmailOpenDeleteArgs} args - Arguments to delete one EmailOpen.
     * @example
     * // Delete one EmailOpen
     * const EmailOpen = await prisma.emailOpen.delete({
     *   where: {
     *     // ... filter to delete one EmailOpen
     *   }
     * })
     * 
     */
    delete<T extends EmailOpenDeleteArgs>(args: SelectSubset<T, EmailOpenDeleteArgs<ExtArgs>>): Prisma__EmailOpenClient<$Result.GetResult<Prisma.$EmailOpenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailOpen.
     * @param {EmailOpenUpdateArgs} args - Arguments to update one EmailOpen.
     * @example
     * // Update one EmailOpen
     * const emailOpen = await prisma.emailOpen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailOpenUpdateArgs>(args: SelectSubset<T, EmailOpenUpdateArgs<ExtArgs>>): Prisma__EmailOpenClient<$Result.GetResult<Prisma.$EmailOpenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailOpens.
     * @param {EmailOpenDeleteManyArgs} args - Arguments to filter EmailOpens to delete.
     * @example
     * // Delete a few EmailOpens
     * const { count } = await prisma.emailOpen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailOpenDeleteManyArgs>(args?: SelectSubset<T, EmailOpenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailOpens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOpenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailOpens
     * const emailOpen = await prisma.emailOpen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailOpenUpdateManyArgs>(args: SelectSubset<T, EmailOpenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailOpens and returns the data updated in the database.
     * @param {EmailOpenUpdateManyAndReturnArgs} args - Arguments to update many EmailOpens.
     * @example
     * // Update many EmailOpens
     * const emailOpen = await prisma.emailOpen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailOpens and only return the `id`
     * const emailOpenWithIdOnly = await prisma.emailOpen.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailOpenUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailOpenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailOpenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailOpen.
     * @param {EmailOpenUpsertArgs} args - Arguments to update or create a EmailOpen.
     * @example
     * // Update or create a EmailOpen
     * const emailOpen = await prisma.emailOpen.upsert({
     *   create: {
     *     // ... data to create a EmailOpen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailOpen we want to update
     *   }
     * })
     */
    upsert<T extends EmailOpenUpsertArgs>(args: SelectSubset<T, EmailOpenUpsertArgs<ExtArgs>>): Prisma__EmailOpenClient<$Result.GetResult<Prisma.$EmailOpenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailOpens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOpenCountArgs} args - Arguments to filter EmailOpens to count.
     * @example
     * // Count the number of EmailOpens
     * const count = await prisma.emailOpen.count({
     *   where: {
     *     // ... the filter for the EmailOpens we want to count
     *   }
     * })
    **/
    count<T extends EmailOpenCountArgs>(
      args?: Subset<T, EmailOpenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailOpenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailOpen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOpenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailOpenAggregateArgs>(args: Subset<T, EmailOpenAggregateArgs>): Prisma.PrismaPromise<GetEmailOpenAggregateType<T>>

    /**
     * Group by EmailOpen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailOpenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailOpenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailOpenGroupByArgs['orderBy'] }
        : { orderBy?: EmailOpenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailOpenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailOpenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailOpen model
   */
  readonly fields: EmailOpenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailOpen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailOpenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    email<T extends TrackedEmailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrackedEmailDefaultArgs<ExtArgs>>): Prisma__TrackedEmailClient<$Result.GetResult<Prisma.$TrackedEmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailOpen model
   */
  interface EmailOpenFieldRefs {
    readonly id: FieldRef<"EmailOpen", 'String'>
    readonly userAgent: FieldRef<"EmailOpen", 'String'>
    readonly ipAddress: FieldRef<"EmailOpen", 'String'>
    readonly createdAt: FieldRef<"EmailOpen", 'DateTime'>
    readonly emailId: FieldRef<"EmailOpen", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmailOpen findUnique
   */
  export type EmailOpenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOpen
     */
    select?: EmailOpenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOpen
     */
    omit?: EmailOpenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOpenInclude<ExtArgs> | null
    /**
     * Filter, which EmailOpen to fetch.
     */
    where: EmailOpenWhereUniqueInput
  }

  /**
   * EmailOpen findUniqueOrThrow
   */
  export type EmailOpenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOpen
     */
    select?: EmailOpenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOpen
     */
    omit?: EmailOpenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOpenInclude<ExtArgs> | null
    /**
     * Filter, which EmailOpen to fetch.
     */
    where: EmailOpenWhereUniqueInput
  }

  /**
   * EmailOpen findFirst
   */
  export type EmailOpenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOpen
     */
    select?: EmailOpenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOpen
     */
    omit?: EmailOpenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOpenInclude<ExtArgs> | null
    /**
     * Filter, which EmailOpen to fetch.
     */
    where?: EmailOpenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailOpens to fetch.
     */
    orderBy?: EmailOpenOrderByWithRelationInput | EmailOpenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailOpens.
     */
    cursor?: EmailOpenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailOpens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailOpens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailOpens.
     */
    distinct?: EmailOpenScalarFieldEnum | EmailOpenScalarFieldEnum[]
  }

  /**
   * EmailOpen findFirstOrThrow
   */
  export type EmailOpenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOpen
     */
    select?: EmailOpenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOpen
     */
    omit?: EmailOpenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOpenInclude<ExtArgs> | null
    /**
     * Filter, which EmailOpen to fetch.
     */
    where?: EmailOpenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailOpens to fetch.
     */
    orderBy?: EmailOpenOrderByWithRelationInput | EmailOpenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailOpens.
     */
    cursor?: EmailOpenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailOpens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailOpens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailOpens.
     */
    distinct?: EmailOpenScalarFieldEnum | EmailOpenScalarFieldEnum[]
  }

  /**
   * EmailOpen findMany
   */
  export type EmailOpenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOpen
     */
    select?: EmailOpenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOpen
     */
    omit?: EmailOpenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOpenInclude<ExtArgs> | null
    /**
     * Filter, which EmailOpens to fetch.
     */
    where?: EmailOpenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailOpens to fetch.
     */
    orderBy?: EmailOpenOrderByWithRelationInput | EmailOpenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailOpens.
     */
    cursor?: EmailOpenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailOpens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailOpens.
     */
    skip?: number
    distinct?: EmailOpenScalarFieldEnum | EmailOpenScalarFieldEnum[]
  }

  /**
   * EmailOpen create
   */
  export type EmailOpenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOpen
     */
    select?: EmailOpenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOpen
     */
    omit?: EmailOpenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOpenInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailOpen.
     */
    data: XOR<EmailOpenCreateInput, EmailOpenUncheckedCreateInput>
  }

  /**
   * EmailOpen createMany
   */
  export type EmailOpenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailOpens.
     */
    data: EmailOpenCreateManyInput | EmailOpenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailOpen createManyAndReturn
   */
  export type EmailOpenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOpen
     */
    select?: EmailOpenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOpen
     */
    omit?: EmailOpenOmit<ExtArgs> | null
    /**
     * The data used to create many EmailOpens.
     */
    data: EmailOpenCreateManyInput | EmailOpenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOpenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailOpen update
   */
  export type EmailOpenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOpen
     */
    select?: EmailOpenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOpen
     */
    omit?: EmailOpenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOpenInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailOpen.
     */
    data: XOR<EmailOpenUpdateInput, EmailOpenUncheckedUpdateInput>
    /**
     * Choose, which EmailOpen to update.
     */
    where: EmailOpenWhereUniqueInput
  }

  /**
   * EmailOpen updateMany
   */
  export type EmailOpenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailOpens.
     */
    data: XOR<EmailOpenUpdateManyMutationInput, EmailOpenUncheckedUpdateManyInput>
    /**
     * Filter which EmailOpens to update
     */
    where?: EmailOpenWhereInput
    /**
     * Limit how many EmailOpens to update.
     */
    limit?: number
  }

  /**
   * EmailOpen updateManyAndReturn
   */
  export type EmailOpenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOpen
     */
    select?: EmailOpenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOpen
     */
    omit?: EmailOpenOmit<ExtArgs> | null
    /**
     * The data used to update EmailOpens.
     */
    data: XOR<EmailOpenUpdateManyMutationInput, EmailOpenUncheckedUpdateManyInput>
    /**
     * Filter which EmailOpens to update
     */
    where?: EmailOpenWhereInput
    /**
     * Limit how many EmailOpens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOpenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailOpen upsert
   */
  export type EmailOpenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOpen
     */
    select?: EmailOpenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOpen
     */
    omit?: EmailOpenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOpenInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailOpen to update in case it exists.
     */
    where: EmailOpenWhereUniqueInput
    /**
     * In case the EmailOpen found by the `where` argument doesn't exist, create a new EmailOpen with this data.
     */
    create: XOR<EmailOpenCreateInput, EmailOpenUncheckedCreateInput>
    /**
     * In case the EmailOpen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailOpenUpdateInput, EmailOpenUncheckedUpdateInput>
  }

  /**
   * EmailOpen delete
   */
  export type EmailOpenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOpen
     */
    select?: EmailOpenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOpen
     */
    omit?: EmailOpenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOpenInclude<ExtArgs> | null
    /**
     * Filter which EmailOpen to delete.
     */
    where: EmailOpenWhereUniqueInput
  }

  /**
   * EmailOpen deleteMany
   */
  export type EmailOpenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailOpens to delete
     */
    where?: EmailOpenWhereInput
    /**
     * Limit how many EmailOpens to delete.
     */
    limit?: number
  }

  /**
   * EmailOpen without action
   */
  export type EmailOpenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailOpen
     */
    select?: EmailOpenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailOpen
     */
    omit?: EmailOpenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailOpenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TrackedEmailScalarFieldEnum: {
    id: 'id',
    subject: 'subject',
    recipient: 'recipient',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type TrackedEmailScalarFieldEnum = (typeof TrackedEmailScalarFieldEnum)[keyof typeof TrackedEmailScalarFieldEnum]


  export const EmailOpenScalarFieldEnum: {
    id: 'id',
    userAgent: 'userAgent',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt',
    emailId: 'emailId'
  };

  export type EmailOpenScalarFieldEnum = (typeof EmailOpenScalarFieldEnum)[keyof typeof EmailOpenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sentEmails?: TrackedEmailListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sentEmails?: TrackedEmailOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sentEmails?: TrackedEmailListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TrackedEmailWhereInput = {
    AND?: TrackedEmailWhereInput | TrackedEmailWhereInput[]
    OR?: TrackedEmailWhereInput[]
    NOT?: TrackedEmailWhereInput | TrackedEmailWhereInput[]
    id?: StringFilter<"TrackedEmail"> | string
    subject?: StringFilter<"TrackedEmail"> | string
    recipient?: StringFilter<"TrackedEmail"> | string
    createdAt?: DateTimeFilter<"TrackedEmail"> | Date | string
    userId?: StringFilter<"TrackedEmail"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    opens?: EmailOpenListRelationFilter
  }

  export type TrackedEmailOrderByWithRelationInput = {
    id?: SortOrder
    subject?: SortOrder
    recipient?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    opens?: EmailOpenOrderByRelationAggregateInput
  }

  export type TrackedEmailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrackedEmailWhereInput | TrackedEmailWhereInput[]
    OR?: TrackedEmailWhereInput[]
    NOT?: TrackedEmailWhereInput | TrackedEmailWhereInput[]
    subject?: StringFilter<"TrackedEmail"> | string
    recipient?: StringFilter<"TrackedEmail"> | string
    createdAt?: DateTimeFilter<"TrackedEmail"> | Date | string
    userId?: StringFilter<"TrackedEmail"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    opens?: EmailOpenListRelationFilter
  }, "id">

  export type TrackedEmailOrderByWithAggregationInput = {
    id?: SortOrder
    subject?: SortOrder
    recipient?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: TrackedEmailCountOrderByAggregateInput
    _max?: TrackedEmailMaxOrderByAggregateInput
    _min?: TrackedEmailMinOrderByAggregateInput
  }

  export type TrackedEmailScalarWhereWithAggregatesInput = {
    AND?: TrackedEmailScalarWhereWithAggregatesInput | TrackedEmailScalarWhereWithAggregatesInput[]
    OR?: TrackedEmailScalarWhereWithAggregatesInput[]
    NOT?: TrackedEmailScalarWhereWithAggregatesInput | TrackedEmailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrackedEmail"> | string
    subject?: StringWithAggregatesFilter<"TrackedEmail"> | string
    recipient?: StringWithAggregatesFilter<"TrackedEmail"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TrackedEmail"> | Date | string
    userId?: StringWithAggregatesFilter<"TrackedEmail"> | string
  }

  export type EmailOpenWhereInput = {
    AND?: EmailOpenWhereInput | EmailOpenWhereInput[]
    OR?: EmailOpenWhereInput[]
    NOT?: EmailOpenWhereInput | EmailOpenWhereInput[]
    id?: StringFilter<"EmailOpen"> | string
    userAgent?: StringNullableFilter<"EmailOpen"> | string | null
    ipAddress?: StringNullableFilter<"EmailOpen"> | string | null
    createdAt?: DateTimeFilter<"EmailOpen"> | Date | string
    emailId?: StringFilter<"EmailOpen"> | string
    email?: XOR<TrackedEmailScalarRelationFilter, TrackedEmailWhereInput>
  }

  export type EmailOpenOrderByWithRelationInput = {
    id?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    emailId?: SortOrder
    email?: TrackedEmailOrderByWithRelationInput
  }

  export type EmailOpenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailOpenWhereInput | EmailOpenWhereInput[]
    OR?: EmailOpenWhereInput[]
    NOT?: EmailOpenWhereInput | EmailOpenWhereInput[]
    userAgent?: StringNullableFilter<"EmailOpen"> | string | null
    ipAddress?: StringNullableFilter<"EmailOpen"> | string | null
    createdAt?: DateTimeFilter<"EmailOpen"> | Date | string
    emailId?: StringFilter<"EmailOpen"> | string
    email?: XOR<TrackedEmailScalarRelationFilter, TrackedEmailWhereInput>
  }, "id">

  export type EmailOpenOrderByWithAggregationInput = {
    id?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    emailId?: SortOrder
    _count?: EmailOpenCountOrderByAggregateInput
    _max?: EmailOpenMaxOrderByAggregateInput
    _min?: EmailOpenMinOrderByAggregateInput
  }

  export type EmailOpenScalarWhereWithAggregatesInput = {
    AND?: EmailOpenScalarWhereWithAggregatesInput | EmailOpenScalarWhereWithAggregatesInput[]
    OR?: EmailOpenScalarWhereWithAggregatesInput[]
    NOT?: EmailOpenScalarWhereWithAggregatesInput | EmailOpenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailOpen"> | string
    userAgent?: StringNullableWithAggregatesFilter<"EmailOpen"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"EmailOpen"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmailOpen"> | Date | string
    emailId?: StringWithAggregatesFilter<"EmailOpen"> | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentEmails?: TrackedEmailCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentEmails?: TrackedEmailUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentEmails?: TrackedEmailUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentEmails?: TrackedEmailUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedEmailCreateInput = {
    id?: string
    subject: string
    recipient: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSentEmailsInput
    opens?: EmailOpenCreateNestedManyWithoutEmailInput
  }

  export type TrackedEmailUncheckedCreateInput = {
    id?: string
    subject: string
    recipient: string
    createdAt?: Date | string
    userId: string
    opens?: EmailOpenUncheckedCreateNestedManyWithoutEmailInput
  }

  export type TrackedEmailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSentEmailsNestedInput
    opens?: EmailOpenUpdateManyWithoutEmailNestedInput
  }

  export type TrackedEmailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    opens?: EmailOpenUncheckedUpdateManyWithoutEmailNestedInput
  }

  export type TrackedEmailCreateManyInput = {
    id?: string
    subject: string
    recipient: string
    createdAt?: Date | string
    userId: string
  }

  export type TrackedEmailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackedEmailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailOpenCreateInput = {
    id?: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    email: TrackedEmailCreateNestedOneWithoutOpensInput
  }

  export type EmailOpenUncheckedCreateInput = {
    id?: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    emailId: string
  }

  export type EmailOpenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: TrackedEmailUpdateOneRequiredWithoutOpensNestedInput
  }

  export type EmailOpenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailId?: StringFieldUpdateOperationsInput | string
  }

  export type EmailOpenCreateManyInput = {
    id?: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    emailId: string
  }

  export type EmailOpenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailOpenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TrackedEmailListRelationFilter = {
    every?: TrackedEmailWhereInput
    some?: TrackedEmailWhereInput
    none?: TrackedEmailWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TrackedEmailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmailOpenListRelationFilter = {
    every?: EmailOpenWhereInput
    some?: EmailOpenWhereInput
    none?: EmailOpenWhereInput
  }

  export type EmailOpenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackedEmailCountOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    recipient?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TrackedEmailMaxOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    recipient?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TrackedEmailMinOrderByAggregateInput = {
    id?: SortOrder
    subject?: SortOrder
    recipient?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TrackedEmailScalarRelationFilter = {
    is?: TrackedEmailWhereInput
    isNot?: TrackedEmailWhereInput
  }

  export type EmailOpenCountOrderByAggregateInput = {
    id?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    emailId?: SortOrder
  }

  export type EmailOpenMaxOrderByAggregateInput = {
    id?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    emailId?: SortOrder
  }

  export type EmailOpenMinOrderByAggregateInput = {
    id?: SortOrder
    userAgent?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
    emailId?: SortOrder
  }

  export type TrackedEmailCreateNestedManyWithoutUserInput = {
    create?: XOR<TrackedEmailCreateWithoutUserInput, TrackedEmailUncheckedCreateWithoutUserInput> | TrackedEmailCreateWithoutUserInput[] | TrackedEmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackedEmailCreateOrConnectWithoutUserInput | TrackedEmailCreateOrConnectWithoutUserInput[]
    createMany?: TrackedEmailCreateManyUserInputEnvelope
    connect?: TrackedEmailWhereUniqueInput | TrackedEmailWhereUniqueInput[]
  }

  export type TrackedEmailUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TrackedEmailCreateWithoutUserInput, TrackedEmailUncheckedCreateWithoutUserInput> | TrackedEmailCreateWithoutUserInput[] | TrackedEmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackedEmailCreateOrConnectWithoutUserInput | TrackedEmailCreateOrConnectWithoutUserInput[]
    createMany?: TrackedEmailCreateManyUserInputEnvelope
    connect?: TrackedEmailWhereUniqueInput | TrackedEmailWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TrackedEmailUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrackedEmailCreateWithoutUserInput, TrackedEmailUncheckedCreateWithoutUserInput> | TrackedEmailCreateWithoutUserInput[] | TrackedEmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackedEmailCreateOrConnectWithoutUserInput | TrackedEmailCreateOrConnectWithoutUserInput[]
    upsert?: TrackedEmailUpsertWithWhereUniqueWithoutUserInput | TrackedEmailUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrackedEmailCreateManyUserInputEnvelope
    set?: TrackedEmailWhereUniqueInput | TrackedEmailWhereUniqueInput[]
    disconnect?: TrackedEmailWhereUniqueInput | TrackedEmailWhereUniqueInput[]
    delete?: TrackedEmailWhereUniqueInput | TrackedEmailWhereUniqueInput[]
    connect?: TrackedEmailWhereUniqueInput | TrackedEmailWhereUniqueInput[]
    update?: TrackedEmailUpdateWithWhereUniqueWithoutUserInput | TrackedEmailUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrackedEmailUpdateManyWithWhereWithoutUserInput | TrackedEmailUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrackedEmailScalarWhereInput | TrackedEmailScalarWhereInput[]
  }

  export type TrackedEmailUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrackedEmailCreateWithoutUserInput, TrackedEmailUncheckedCreateWithoutUserInput> | TrackedEmailCreateWithoutUserInput[] | TrackedEmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackedEmailCreateOrConnectWithoutUserInput | TrackedEmailCreateOrConnectWithoutUserInput[]
    upsert?: TrackedEmailUpsertWithWhereUniqueWithoutUserInput | TrackedEmailUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrackedEmailCreateManyUserInputEnvelope
    set?: TrackedEmailWhereUniqueInput | TrackedEmailWhereUniqueInput[]
    disconnect?: TrackedEmailWhereUniqueInput | TrackedEmailWhereUniqueInput[]
    delete?: TrackedEmailWhereUniqueInput | TrackedEmailWhereUniqueInput[]
    connect?: TrackedEmailWhereUniqueInput | TrackedEmailWhereUniqueInput[]
    update?: TrackedEmailUpdateWithWhereUniqueWithoutUserInput | TrackedEmailUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrackedEmailUpdateManyWithWhereWithoutUserInput | TrackedEmailUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrackedEmailScalarWhereInput | TrackedEmailScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentEmailsInput = {
    create?: XOR<UserCreateWithoutSentEmailsInput, UserUncheckedCreateWithoutSentEmailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentEmailsInput
    connect?: UserWhereUniqueInput
  }

  export type EmailOpenCreateNestedManyWithoutEmailInput = {
    create?: XOR<EmailOpenCreateWithoutEmailInput, EmailOpenUncheckedCreateWithoutEmailInput> | EmailOpenCreateWithoutEmailInput[] | EmailOpenUncheckedCreateWithoutEmailInput[]
    connectOrCreate?: EmailOpenCreateOrConnectWithoutEmailInput | EmailOpenCreateOrConnectWithoutEmailInput[]
    createMany?: EmailOpenCreateManyEmailInputEnvelope
    connect?: EmailOpenWhereUniqueInput | EmailOpenWhereUniqueInput[]
  }

  export type EmailOpenUncheckedCreateNestedManyWithoutEmailInput = {
    create?: XOR<EmailOpenCreateWithoutEmailInput, EmailOpenUncheckedCreateWithoutEmailInput> | EmailOpenCreateWithoutEmailInput[] | EmailOpenUncheckedCreateWithoutEmailInput[]
    connectOrCreate?: EmailOpenCreateOrConnectWithoutEmailInput | EmailOpenCreateOrConnectWithoutEmailInput[]
    createMany?: EmailOpenCreateManyEmailInputEnvelope
    connect?: EmailOpenWhereUniqueInput | EmailOpenWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSentEmailsNestedInput = {
    create?: XOR<UserCreateWithoutSentEmailsInput, UserUncheckedCreateWithoutSentEmailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentEmailsInput
    upsert?: UserUpsertWithoutSentEmailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentEmailsInput, UserUpdateWithoutSentEmailsInput>, UserUncheckedUpdateWithoutSentEmailsInput>
  }

  export type EmailOpenUpdateManyWithoutEmailNestedInput = {
    create?: XOR<EmailOpenCreateWithoutEmailInput, EmailOpenUncheckedCreateWithoutEmailInput> | EmailOpenCreateWithoutEmailInput[] | EmailOpenUncheckedCreateWithoutEmailInput[]
    connectOrCreate?: EmailOpenCreateOrConnectWithoutEmailInput | EmailOpenCreateOrConnectWithoutEmailInput[]
    upsert?: EmailOpenUpsertWithWhereUniqueWithoutEmailInput | EmailOpenUpsertWithWhereUniqueWithoutEmailInput[]
    createMany?: EmailOpenCreateManyEmailInputEnvelope
    set?: EmailOpenWhereUniqueInput | EmailOpenWhereUniqueInput[]
    disconnect?: EmailOpenWhereUniqueInput | EmailOpenWhereUniqueInput[]
    delete?: EmailOpenWhereUniqueInput | EmailOpenWhereUniqueInput[]
    connect?: EmailOpenWhereUniqueInput | EmailOpenWhereUniqueInput[]
    update?: EmailOpenUpdateWithWhereUniqueWithoutEmailInput | EmailOpenUpdateWithWhereUniqueWithoutEmailInput[]
    updateMany?: EmailOpenUpdateManyWithWhereWithoutEmailInput | EmailOpenUpdateManyWithWhereWithoutEmailInput[]
    deleteMany?: EmailOpenScalarWhereInput | EmailOpenScalarWhereInput[]
  }

  export type EmailOpenUncheckedUpdateManyWithoutEmailNestedInput = {
    create?: XOR<EmailOpenCreateWithoutEmailInput, EmailOpenUncheckedCreateWithoutEmailInput> | EmailOpenCreateWithoutEmailInput[] | EmailOpenUncheckedCreateWithoutEmailInput[]
    connectOrCreate?: EmailOpenCreateOrConnectWithoutEmailInput | EmailOpenCreateOrConnectWithoutEmailInput[]
    upsert?: EmailOpenUpsertWithWhereUniqueWithoutEmailInput | EmailOpenUpsertWithWhereUniqueWithoutEmailInput[]
    createMany?: EmailOpenCreateManyEmailInputEnvelope
    set?: EmailOpenWhereUniqueInput | EmailOpenWhereUniqueInput[]
    disconnect?: EmailOpenWhereUniqueInput | EmailOpenWhereUniqueInput[]
    delete?: EmailOpenWhereUniqueInput | EmailOpenWhereUniqueInput[]
    connect?: EmailOpenWhereUniqueInput | EmailOpenWhereUniqueInput[]
    update?: EmailOpenUpdateWithWhereUniqueWithoutEmailInput | EmailOpenUpdateWithWhereUniqueWithoutEmailInput[]
    updateMany?: EmailOpenUpdateManyWithWhereWithoutEmailInput | EmailOpenUpdateManyWithWhereWithoutEmailInput[]
    deleteMany?: EmailOpenScalarWhereInput | EmailOpenScalarWhereInput[]
  }

  export type TrackedEmailCreateNestedOneWithoutOpensInput = {
    create?: XOR<TrackedEmailCreateWithoutOpensInput, TrackedEmailUncheckedCreateWithoutOpensInput>
    connectOrCreate?: TrackedEmailCreateOrConnectWithoutOpensInput
    connect?: TrackedEmailWhereUniqueInput
  }

  export type TrackedEmailUpdateOneRequiredWithoutOpensNestedInput = {
    create?: XOR<TrackedEmailCreateWithoutOpensInput, TrackedEmailUncheckedCreateWithoutOpensInput>
    connectOrCreate?: TrackedEmailCreateOrConnectWithoutOpensInput
    upsert?: TrackedEmailUpsertWithoutOpensInput
    connect?: TrackedEmailWhereUniqueInput
    update?: XOR<XOR<TrackedEmailUpdateToOneWithWhereWithoutOpensInput, TrackedEmailUpdateWithoutOpensInput>, TrackedEmailUncheckedUpdateWithoutOpensInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TrackedEmailCreateWithoutUserInput = {
    id?: string
    subject: string
    recipient: string
    createdAt?: Date | string
    opens?: EmailOpenCreateNestedManyWithoutEmailInput
  }

  export type TrackedEmailUncheckedCreateWithoutUserInput = {
    id?: string
    subject: string
    recipient: string
    createdAt?: Date | string
    opens?: EmailOpenUncheckedCreateNestedManyWithoutEmailInput
  }

  export type TrackedEmailCreateOrConnectWithoutUserInput = {
    where: TrackedEmailWhereUniqueInput
    create: XOR<TrackedEmailCreateWithoutUserInput, TrackedEmailUncheckedCreateWithoutUserInput>
  }

  export type TrackedEmailCreateManyUserInputEnvelope = {
    data: TrackedEmailCreateManyUserInput | TrackedEmailCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TrackedEmailUpsertWithWhereUniqueWithoutUserInput = {
    where: TrackedEmailWhereUniqueInput
    update: XOR<TrackedEmailUpdateWithoutUserInput, TrackedEmailUncheckedUpdateWithoutUserInput>
    create: XOR<TrackedEmailCreateWithoutUserInput, TrackedEmailUncheckedCreateWithoutUserInput>
  }

  export type TrackedEmailUpdateWithWhereUniqueWithoutUserInput = {
    where: TrackedEmailWhereUniqueInput
    data: XOR<TrackedEmailUpdateWithoutUserInput, TrackedEmailUncheckedUpdateWithoutUserInput>
  }

  export type TrackedEmailUpdateManyWithWhereWithoutUserInput = {
    where: TrackedEmailScalarWhereInput
    data: XOR<TrackedEmailUpdateManyMutationInput, TrackedEmailUncheckedUpdateManyWithoutUserInput>
  }

  export type TrackedEmailScalarWhereInput = {
    AND?: TrackedEmailScalarWhereInput | TrackedEmailScalarWhereInput[]
    OR?: TrackedEmailScalarWhereInput[]
    NOT?: TrackedEmailScalarWhereInput | TrackedEmailScalarWhereInput[]
    id?: StringFilter<"TrackedEmail"> | string
    subject?: StringFilter<"TrackedEmail"> | string
    recipient?: StringFilter<"TrackedEmail"> | string
    createdAt?: DateTimeFilter<"TrackedEmail"> | Date | string
    userId?: StringFilter<"TrackedEmail"> | string
  }

  export type UserCreateWithoutSentEmailsInput = {
    id?: string
    name?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutSentEmailsInput = {
    id?: string
    name?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutSentEmailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentEmailsInput, UserUncheckedCreateWithoutSentEmailsInput>
  }

  export type EmailOpenCreateWithoutEmailInput = {
    id?: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type EmailOpenUncheckedCreateWithoutEmailInput = {
    id?: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type EmailOpenCreateOrConnectWithoutEmailInput = {
    where: EmailOpenWhereUniqueInput
    create: XOR<EmailOpenCreateWithoutEmailInput, EmailOpenUncheckedCreateWithoutEmailInput>
  }

  export type EmailOpenCreateManyEmailInputEnvelope = {
    data: EmailOpenCreateManyEmailInput | EmailOpenCreateManyEmailInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSentEmailsInput = {
    update: XOR<UserUpdateWithoutSentEmailsInput, UserUncheckedUpdateWithoutSentEmailsInput>
    create: XOR<UserCreateWithoutSentEmailsInput, UserUncheckedCreateWithoutSentEmailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentEmailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentEmailsInput, UserUncheckedUpdateWithoutSentEmailsInput>
  }

  export type UserUpdateWithoutSentEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSentEmailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailOpenUpsertWithWhereUniqueWithoutEmailInput = {
    where: EmailOpenWhereUniqueInput
    update: XOR<EmailOpenUpdateWithoutEmailInput, EmailOpenUncheckedUpdateWithoutEmailInput>
    create: XOR<EmailOpenCreateWithoutEmailInput, EmailOpenUncheckedCreateWithoutEmailInput>
  }

  export type EmailOpenUpdateWithWhereUniqueWithoutEmailInput = {
    where: EmailOpenWhereUniqueInput
    data: XOR<EmailOpenUpdateWithoutEmailInput, EmailOpenUncheckedUpdateWithoutEmailInput>
  }

  export type EmailOpenUpdateManyWithWhereWithoutEmailInput = {
    where: EmailOpenScalarWhereInput
    data: XOR<EmailOpenUpdateManyMutationInput, EmailOpenUncheckedUpdateManyWithoutEmailInput>
  }

  export type EmailOpenScalarWhereInput = {
    AND?: EmailOpenScalarWhereInput | EmailOpenScalarWhereInput[]
    OR?: EmailOpenScalarWhereInput[]
    NOT?: EmailOpenScalarWhereInput | EmailOpenScalarWhereInput[]
    id?: StringFilter<"EmailOpen"> | string
    userAgent?: StringNullableFilter<"EmailOpen"> | string | null
    ipAddress?: StringNullableFilter<"EmailOpen"> | string | null
    createdAt?: DateTimeFilter<"EmailOpen"> | Date | string
    emailId?: StringFilter<"EmailOpen"> | string
  }

  export type TrackedEmailCreateWithoutOpensInput = {
    id?: string
    subject: string
    recipient: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSentEmailsInput
  }

  export type TrackedEmailUncheckedCreateWithoutOpensInput = {
    id?: string
    subject: string
    recipient: string
    createdAt?: Date | string
    userId: string
  }

  export type TrackedEmailCreateOrConnectWithoutOpensInput = {
    where: TrackedEmailWhereUniqueInput
    create: XOR<TrackedEmailCreateWithoutOpensInput, TrackedEmailUncheckedCreateWithoutOpensInput>
  }

  export type TrackedEmailUpsertWithoutOpensInput = {
    update: XOR<TrackedEmailUpdateWithoutOpensInput, TrackedEmailUncheckedUpdateWithoutOpensInput>
    create: XOR<TrackedEmailCreateWithoutOpensInput, TrackedEmailUncheckedCreateWithoutOpensInput>
    where?: TrackedEmailWhereInput
  }

  export type TrackedEmailUpdateToOneWithWhereWithoutOpensInput = {
    where?: TrackedEmailWhereInput
    data: XOR<TrackedEmailUpdateWithoutOpensInput, TrackedEmailUncheckedUpdateWithoutOpensInput>
  }

  export type TrackedEmailUpdateWithoutOpensInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSentEmailsNestedInput
  }

  export type TrackedEmailUncheckedUpdateWithoutOpensInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TrackedEmailCreateManyUserInput = {
    id?: string
    subject: string
    recipient: string
    createdAt?: Date | string
  }

  export type TrackedEmailUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opens?: EmailOpenUpdateManyWithoutEmailNestedInput
  }

  export type TrackedEmailUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opens?: EmailOpenUncheckedUpdateManyWithoutEmailNestedInput
  }

  export type TrackedEmailUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    recipient?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailOpenCreateManyEmailInput = {
    id?: string
    userAgent?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type EmailOpenUpdateWithoutEmailInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailOpenUncheckedUpdateWithoutEmailInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailOpenUncheckedUpdateManyWithoutEmailInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}