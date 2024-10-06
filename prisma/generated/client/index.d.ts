
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
 * Model LinkPage
 * 
 */
export type LinkPage = $Result.DefaultSelection<Prisma.$LinkPagePayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>
/**
 * Model LoginToken
 * 
 */
export type LoginToken = $Result.DefaultSelection<Prisma.$LoginTokenPayload>
/**
 * Model TwoFactorToken
 * 
 */
export type TwoFactorToken = $Result.DefaultSelection<Prisma.$TwoFactorTokenPayload>
/**
 * Model TwoFactorConfirmation
 * 
 */
export type TwoFactorConfirmation = $Result.DefaultSelection<Prisma.$TwoFactorConfirmationPayload>
/**
 * Model Web3Asset
 * 
 */
export type Web3Asset = $Result.DefaultSelection<Prisma.$Web3AssetPayload>
/**
 * Model Web3CryptoAsset
 * 
 */
export type Web3CryptoAsset = $Result.DefaultSelection<Prisma.$Web3CryptoAssetPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AssetType: {
  TOKEN: 'TOKEN',
  NFT: 'NFT',
  OTHER: 'OTHER'
};

export type AssetType = (typeof AssetType)[keyof typeof AssetType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AssetType = $Enums.AssetType

export const AssetType: typeof $Enums.AssetType

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.linkPage`: Exposes CRUD operations for the **LinkPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkPages
    * const linkPages = await prisma.linkPage.findMany()
    * ```
    */
  get linkPage(): Prisma.LinkPageDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs>;

  /**
   * `prisma.loginToken`: Exposes CRUD operations for the **LoginToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoginTokens
    * const loginTokens = await prisma.loginToken.findMany()
    * ```
    */
  get loginToken(): Prisma.LoginTokenDelegate<ExtArgs>;

  /**
   * `prisma.twoFactorToken`: Exposes CRUD operations for the **TwoFactorToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwoFactorTokens
    * const twoFactorTokens = await prisma.twoFactorToken.findMany()
    * ```
    */
  get twoFactorToken(): Prisma.TwoFactorTokenDelegate<ExtArgs>;

  /**
   * `prisma.twoFactorConfirmation`: Exposes CRUD operations for the **TwoFactorConfirmation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwoFactorConfirmations
    * const twoFactorConfirmations = await prisma.twoFactorConfirmation.findMany()
    * ```
    */
  get twoFactorConfirmation(): Prisma.TwoFactorConfirmationDelegate<ExtArgs>;

  /**
   * `prisma.web3Asset`: Exposes CRUD operations for the **Web3Asset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Web3Assets
    * const web3Assets = await prisma.web3Asset.findMany()
    * ```
    */
  get web3Asset(): Prisma.Web3AssetDelegate<ExtArgs>;

  /**
   * `prisma.web3CryptoAsset`: Exposes CRUD operations for the **Web3CryptoAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Web3CryptoAssets
    * const web3CryptoAssets = await prisma.web3CryptoAsset.findMany()
    * ```
    */
  get web3CryptoAsset(): Prisma.Web3CryptoAssetDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    LinkPage: 'LinkPage',
    Account: 'Account',
    VerificationToken: 'VerificationToken',
    PasswordResetToken: 'PasswordResetToken',
    LoginToken: 'LoginToken',
    TwoFactorToken: 'TwoFactorToken',
    TwoFactorConfirmation: 'TwoFactorConfirmation',
    Web3Asset: 'Web3Asset',
    Web3CryptoAsset: 'Web3CryptoAsset'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "linkPage" | "account" | "verificationToken" | "passwordResetToken" | "loginToken" | "twoFactorToken" | "twoFactorConfirmation" | "web3Asset" | "web3CryptoAsset"
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
      LinkPage: {
        payload: Prisma.$LinkPagePayload<ExtArgs>
        fields: Prisma.LinkPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPagePayload>
          }
          findFirst: {
            args: Prisma.LinkPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPagePayload>
          }
          findMany: {
            args: Prisma.LinkPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPagePayload>[]
          }
          create: {
            args: Prisma.LinkPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPagePayload>
          }
          createMany: {
            args: Prisma.LinkPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPagePayload>[]
          }
          delete: {
            args: Prisma.LinkPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPagePayload>
          }
          update: {
            args: Prisma.LinkPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPagePayload>
          }
          deleteMany: {
            args: Prisma.LinkPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LinkPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPagePayload>
          }
          aggregate: {
            args: Prisma.LinkPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkPage>
          }
          groupBy: {
            args: Prisma.LinkPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkPageCountArgs<ExtArgs>
            result: $Utils.Optional<LinkPageCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
      LoginToken: {
        payload: Prisma.$LoginTokenPayload<ExtArgs>
        fields: Prisma.LoginTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoginTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoginTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokenPayload>
          }
          findFirst: {
            args: Prisma.LoginTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoginTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokenPayload>
          }
          findMany: {
            args: Prisma.LoginTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokenPayload>[]
          }
          create: {
            args: Prisma.LoginTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokenPayload>
          }
          createMany: {
            args: Prisma.LoginTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoginTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokenPayload>[]
          }
          delete: {
            args: Prisma.LoginTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokenPayload>
          }
          update: {
            args: Prisma.LoginTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokenPayload>
          }
          deleteMany: {
            args: Prisma.LoginTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoginTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoginTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginTokenPayload>
          }
          aggregate: {
            args: Prisma.LoginTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoginToken>
          }
          groupBy: {
            args: Prisma.LoginTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoginTokenCountArgs<ExtArgs>
            result: $Utils.Optional<LoginTokenCountAggregateOutputType> | number
          }
        }
      }
      TwoFactorToken: {
        payload: Prisma.$TwoFactorTokenPayload<ExtArgs>
        fields: Prisma.TwoFactorTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TwoFactorTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TwoFactorTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>
          }
          findFirst: {
            args: Prisma.TwoFactorTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TwoFactorTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>
          }
          findMany: {
            args: Prisma.TwoFactorTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>[]
          }
          create: {
            args: Prisma.TwoFactorTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>
          }
          createMany: {
            args: Prisma.TwoFactorTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TwoFactorTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>[]
          }
          delete: {
            args: Prisma.TwoFactorTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>
          }
          update: {
            args: Prisma.TwoFactorTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>
          }
          deleteMany: {
            args: Prisma.TwoFactorTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TwoFactorTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TwoFactorTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>
          }
          aggregate: {
            args: Prisma.TwoFactorTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTwoFactorToken>
          }
          groupBy: {
            args: Prisma.TwoFactorTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TwoFactorTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TwoFactorTokenCountArgs<ExtArgs>
            result: $Utils.Optional<TwoFactorTokenCountAggregateOutputType> | number
          }
        }
      }
      TwoFactorConfirmation: {
        payload: Prisma.$TwoFactorConfirmationPayload<ExtArgs>
        fields: Prisma.TwoFactorConfirmationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TwoFactorConfirmationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TwoFactorConfirmationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>
          }
          findFirst: {
            args: Prisma.TwoFactorConfirmationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TwoFactorConfirmationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>
          }
          findMany: {
            args: Prisma.TwoFactorConfirmationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>[]
          }
          create: {
            args: Prisma.TwoFactorConfirmationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>
          }
          createMany: {
            args: Prisma.TwoFactorConfirmationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TwoFactorConfirmationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>[]
          }
          delete: {
            args: Prisma.TwoFactorConfirmationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>
          }
          update: {
            args: Prisma.TwoFactorConfirmationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>
          }
          deleteMany: {
            args: Prisma.TwoFactorConfirmationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TwoFactorConfirmationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TwoFactorConfirmationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>
          }
          aggregate: {
            args: Prisma.TwoFactorConfirmationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTwoFactorConfirmation>
          }
          groupBy: {
            args: Prisma.TwoFactorConfirmationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TwoFactorConfirmationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TwoFactorConfirmationCountArgs<ExtArgs>
            result: $Utils.Optional<TwoFactorConfirmationCountAggregateOutputType> | number
          }
        }
      }
      Web3Asset: {
        payload: Prisma.$Web3AssetPayload<ExtArgs>
        fields: Prisma.Web3AssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Web3AssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3AssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Web3AssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3AssetPayload>
          }
          findFirst: {
            args: Prisma.Web3AssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3AssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Web3AssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3AssetPayload>
          }
          findMany: {
            args: Prisma.Web3AssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3AssetPayload>[]
          }
          create: {
            args: Prisma.Web3AssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3AssetPayload>
          }
          createMany: {
            args: Prisma.Web3AssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Web3AssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3AssetPayload>[]
          }
          delete: {
            args: Prisma.Web3AssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3AssetPayload>
          }
          update: {
            args: Prisma.Web3AssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3AssetPayload>
          }
          deleteMany: {
            args: Prisma.Web3AssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Web3AssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Web3AssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3AssetPayload>
          }
          aggregate: {
            args: Prisma.Web3AssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeb3Asset>
          }
          groupBy: {
            args: Prisma.Web3AssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<Web3AssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.Web3AssetCountArgs<ExtArgs>
            result: $Utils.Optional<Web3AssetCountAggregateOutputType> | number
          }
        }
      }
      Web3CryptoAsset: {
        payload: Prisma.$Web3CryptoAssetPayload<ExtArgs>
        fields: Prisma.Web3CryptoAssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Web3CryptoAssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3CryptoAssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Web3CryptoAssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3CryptoAssetPayload>
          }
          findFirst: {
            args: Prisma.Web3CryptoAssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3CryptoAssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Web3CryptoAssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3CryptoAssetPayload>
          }
          findMany: {
            args: Prisma.Web3CryptoAssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3CryptoAssetPayload>[]
          }
          create: {
            args: Prisma.Web3CryptoAssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3CryptoAssetPayload>
          }
          createMany: {
            args: Prisma.Web3CryptoAssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Web3CryptoAssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3CryptoAssetPayload>[]
          }
          delete: {
            args: Prisma.Web3CryptoAssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3CryptoAssetPayload>
          }
          update: {
            args: Prisma.Web3CryptoAssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3CryptoAssetPayload>
          }
          deleteMany: {
            args: Prisma.Web3CryptoAssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Web3CryptoAssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Web3CryptoAssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Web3CryptoAssetPayload>
          }
          aggregate: {
            args: Prisma.Web3CryptoAssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeb3CryptoAsset>
          }
          groupBy: {
            args: Prisma.Web3CryptoAssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<Web3CryptoAssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.Web3CryptoAssetCountArgs<ExtArgs>
            result: $Utils.Optional<Web3CryptoAssetCountAggregateOutputType> | number
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
    accounts: number
    linkPages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    linkPages?: boolean | UserCountOutputTypeCountLinkPagesArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLinkPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkPageWhereInput
  }


  /**
   * Count Type LinkPageCountOutputType
   */

  export type LinkPageCountOutputType = {
    web3Assets: number
    web3CryptoAssets: number
  }

  export type LinkPageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    web3Assets?: boolean | LinkPageCountOutputTypeCountWeb3AssetsArgs
    web3CryptoAssets?: boolean | LinkPageCountOutputTypeCountWeb3CryptoAssetsArgs
  }

  // Custom InputTypes
  /**
   * LinkPageCountOutputType without action
   */
  export type LinkPageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPageCountOutputType
     */
    select?: LinkPageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LinkPageCountOutputType without action
   */
  export type LinkPageCountOutputTypeCountWeb3AssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Web3AssetWhereInput
  }

  /**
   * LinkPageCountOutputType without action
   */
  export type LinkPageCountOutputTypeCountWeb3CryptoAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Web3CryptoAssetWhereInput
  }


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    web3Assets: number
    web3CryptoAssets: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    web3Assets?: boolean | AccountCountOutputTypeCountWeb3AssetsArgs
    web3CryptoAssets?: boolean | AccountCountOutputTypeCountWeb3CryptoAssetsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountWeb3AssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Web3AssetWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountWeb3CryptoAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Web3CryptoAssetWhereInput
  }


  /**
   * Count Type Web3AssetCountOutputType
   */

  export type Web3AssetCountOutputType = {
    accounts: number
    linkPages: number
  }

  export type Web3AssetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | Web3AssetCountOutputTypeCountAccountsArgs
    linkPages?: boolean | Web3AssetCountOutputTypeCountLinkPagesArgs
  }

  // Custom InputTypes
  /**
   * Web3AssetCountOutputType without action
   */
  export type Web3AssetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3AssetCountOutputType
     */
    select?: Web3AssetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Web3AssetCountOutputType without action
   */
  export type Web3AssetCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * Web3AssetCountOutputType without action
   */
  export type Web3AssetCountOutputTypeCountLinkPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkPageWhereInput
  }


  /**
   * Count Type Web3CryptoAssetCountOutputType
   */

  export type Web3CryptoAssetCountOutputType = {
    accounts: number
    linkPages: number
  }

  export type Web3CryptoAssetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | Web3CryptoAssetCountOutputTypeCountAccountsArgs
    linkPages?: boolean | Web3CryptoAssetCountOutputTypeCountLinkPagesArgs
  }

  // Custom InputTypes
  /**
   * Web3CryptoAssetCountOutputType without action
   */
  export type Web3CryptoAssetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3CryptoAssetCountOutputType
     */
    select?: Web3CryptoAssetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Web3CryptoAssetCountOutputType without action
   */
  export type Web3CryptoAssetCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * Web3CryptoAssetCountOutputType without action
   */
  export type Web3CryptoAssetCountOutputTypeCountLinkPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkPageWhereInput
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
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.UserRole | null
    isTwoFactorEnabled: boolean | null
    handle: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.UserRole | null
    isTwoFactorEnabled: boolean | null
    handle: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password: number
    role: number
    isTwoFactorEnabled: number
    handle: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    isTwoFactorEnabled?: true
    handle?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    isTwoFactorEnabled?: true
    handle?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    isTwoFactorEnabled?: true
    handle?: true
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
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: $Enums.UserRole
    isTwoFactorEnabled: boolean
    handle: string | null
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
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    isTwoFactorEnabled?: boolean
    handle?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    linkPages?: boolean | User$linkPagesArgs<ExtArgs>
    twoFactorConfirmation?: boolean | User$twoFactorConfirmationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    isTwoFactorEnabled?: boolean
    handle?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    isTwoFactorEnabled?: boolean
    handle?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    linkPages?: boolean | User$linkPagesArgs<ExtArgs>
    twoFactorConfirmation?: boolean | User$twoFactorConfirmationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      linkPages: Prisma.$LinkPagePayload<ExtArgs>[]
      twoFactorConfirmation: Prisma.$TwoFactorConfirmationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      password: string | null
      role: $Enums.UserRole
      isTwoFactorEnabled: boolean
      handle: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    linkPages<T extends User$linkPagesArgs<ExtArgs> = {}>(args?: Subset<T, User$linkPagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPagePayload<ExtArgs>, T, "findMany"> | Null>
    twoFactorConfirmation<T extends User$twoFactorConfirmationArgs<ExtArgs> = {}>(args?: Subset<T, User$twoFactorConfirmationArgs<ExtArgs>>): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isTwoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly handle: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
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
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.linkPages
   */
  export type User$linkPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPage
     */
    select?: LinkPageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPageInclude<ExtArgs> | null
    where?: LinkPageWhereInput
    orderBy?: LinkPageOrderByWithRelationInput | LinkPageOrderByWithRelationInput[]
    cursor?: LinkPageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkPageScalarFieldEnum | LinkPageScalarFieldEnum[]
  }

  /**
   * User.twoFactorConfirmation
   */
  export type User$twoFactorConfirmationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    where?: TwoFactorConfirmationWhereInput
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model LinkPage
   */

  export type AggregateLinkPage = {
    _count: LinkPageCountAggregateOutputType | null
    _min: LinkPageMinAggregateOutputType | null
    _max: LinkPageMaxAggregateOutputType | null
  }

  export type LinkPageMinAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    description: string | null
    image: string | null
    userId: string | null
    isComplete: boolean | null
    isPublic: boolean | null
    isTemplate: boolean | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    isEditing: boolean | null
  }

  export type LinkPageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    description: string | null
    image: string | null
    userId: string | null
    isComplete: boolean | null
    isPublic: boolean | null
    isTemplate: boolean | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    isEditing: boolean | null
  }

  export type LinkPageCountAggregateOutputType = {
    id: number
    url: number
    title: number
    description: number
    image: number
    userId: number
    template: number
    isComplete: number
    isPublic: number
    isTemplate: number
    isPublished: number
    createdAt: number
    updatedAt: number
    isEditing: number
    profile: number
    _all: number
  }


  export type LinkPageMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    description?: true
    image?: true
    userId?: true
    isComplete?: true
    isPublic?: true
    isTemplate?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    isEditing?: true
  }

  export type LinkPageMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    description?: true
    image?: true
    userId?: true
    isComplete?: true
    isPublic?: true
    isTemplate?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    isEditing?: true
  }

  export type LinkPageCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    description?: true
    image?: true
    userId?: true
    template?: true
    isComplete?: true
    isPublic?: true
    isTemplate?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    isEditing?: true
    profile?: true
    _all?: true
  }

  export type LinkPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkPage to aggregate.
     */
    where?: LinkPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkPages to fetch.
     */
    orderBy?: LinkPageOrderByWithRelationInput | LinkPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkPages
    **/
    _count?: true | LinkPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkPageMaxAggregateInputType
  }

  export type GetLinkPageAggregateType<T extends LinkPageAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkPage[P]>
      : GetScalarType<T[P], AggregateLinkPage[P]>
  }




  export type LinkPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkPageWhereInput
    orderBy?: LinkPageOrderByWithAggregationInput | LinkPageOrderByWithAggregationInput[]
    by: LinkPageScalarFieldEnum[] | LinkPageScalarFieldEnum
    having?: LinkPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkPageCountAggregateInputType | true
    _min?: LinkPageMinAggregateInputType
    _max?: LinkPageMaxAggregateInputType
  }

  export type LinkPageGroupByOutputType = {
    id: string
    url: string
    title: string | null
    description: string | null
    image: string | null
    userId: string
    template: JsonValue | null
    isComplete: boolean
    isPublic: boolean
    isTemplate: boolean
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    isEditing: boolean
    profile: JsonValue | null
    _count: LinkPageCountAggregateOutputType | null
    _min: LinkPageMinAggregateOutputType | null
    _max: LinkPageMaxAggregateOutputType | null
  }

  type GetLinkPageGroupByPayload<T extends LinkPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkPageGroupByOutputType[P]>
            : GetScalarType<T[P], LinkPageGroupByOutputType[P]>
        }
      >
    >


  export type LinkPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    userId?: boolean
    template?: boolean
    isComplete?: boolean
    isPublic?: boolean
    isTemplate?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEditing?: boolean
    profile?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    web3Assets?: boolean | LinkPage$web3AssetsArgs<ExtArgs>
    web3CryptoAssets?: boolean | LinkPage$web3CryptoAssetsArgs<ExtArgs>
    _count?: boolean | LinkPageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkPage"]>

  export type LinkPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    userId?: boolean
    template?: boolean
    isComplete?: boolean
    isPublic?: boolean
    isTemplate?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEditing?: boolean
    profile?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkPage"]>

  export type LinkPageSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    userId?: boolean
    template?: boolean
    isComplete?: boolean
    isPublic?: boolean
    isTemplate?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEditing?: boolean
    profile?: boolean
  }

  export type LinkPageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    web3Assets?: boolean | LinkPage$web3AssetsArgs<ExtArgs>
    web3CryptoAssets?: boolean | LinkPage$web3CryptoAssetsArgs<ExtArgs>
    _count?: boolean | LinkPageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LinkPageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LinkPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkPage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      web3Assets: Prisma.$Web3AssetPayload<ExtArgs>[]
      web3CryptoAssets: Prisma.$Web3CryptoAssetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      title: string | null
      description: string | null
      image: string | null
      userId: string
      template: Prisma.JsonValue | null
      isComplete: boolean
      isPublic: boolean
      isTemplate: boolean
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
      isEditing: boolean
      profile: Prisma.JsonValue | null
    }, ExtArgs["result"]["linkPage"]>
    composites: {}
  }

  type LinkPageGetPayload<S extends boolean | null | undefined | LinkPageDefaultArgs> = $Result.GetResult<Prisma.$LinkPagePayload, S>

  type LinkPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LinkPageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LinkPageCountAggregateInputType | true
    }

  export interface LinkPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkPage'], meta: { name: 'LinkPage' } }
    /**
     * Find zero or one LinkPage that matches the filter.
     * @param {LinkPageFindUniqueArgs} args - Arguments to find a LinkPage
     * @example
     * // Get one LinkPage
     * const linkPage = await prisma.linkPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkPageFindUniqueArgs>(args: SelectSubset<T, LinkPageFindUniqueArgs<ExtArgs>>): Prisma__LinkPageClient<$Result.GetResult<Prisma.$LinkPagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LinkPage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LinkPageFindUniqueOrThrowArgs} args - Arguments to find a LinkPage
     * @example
     * // Get one LinkPage
     * const linkPage = await prisma.linkPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkPageFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkPageClient<$Result.GetResult<Prisma.$LinkPagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LinkPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPageFindFirstArgs} args - Arguments to find a LinkPage
     * @example
     * // Get one LinkPage
     * const linkPage = await prisma.linkPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkPageFindFirstArgs>(args?: SelectSubset<T, LinkPageFindFirstArgs<ExtArgs>>): Prisma__LinkPageClient<$Result.GetResult<Prisma.$LinkPagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LinkPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPageFindFirstOrThrowArgs} args - Arguments to find a LinkPage
     * @example
     * // Get one LinkPage
     * const linkPage = await prisma.linkPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkPageFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkPageClient<$Result.GetResult<Prisma.$LinkPagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LinkPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkPages
     * const linkPages = await prisma.linkPage.findMany()
     * 
     * // Get first 10 LinkPages
     * const linkPages = await prisma.linkPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkPageWithIdOnly = await prisma.linkPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkPageFindManyArgs>(args?: SelectSubset<T, LinkPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LinkPage.
     * @param {LinkPageCreateArgs} args - Arguments to create a LinkPage.
     * @example
     * // Create one LinkPage
     * const LinkPage = await prisma.linkPage.create({
     *   data: {
     *     // ... data to create a LinkPage
     *   }
     * })
     * 
     */
    create<T extends LinkPageCreateArgs>(args: SelectSubset<T, LinkPageCreateArgs<ExtArgs>>): Prisma__LinkPageClient<$Result.GetResult<Prisma.$LinkPagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LinkPages.
     * @param {LinkPageCreateManyArgs} args - Arguments to create many LinkPages.
     * @example
     * // Create many LinkPages
     * const linkPage = await prisma.linkPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkPageCreateManyArgs>(args?: SelectSubset<T, LinkPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkPages and returns the data saved in the database.
     * @param {LinkPageCreateManyAndReturnArgs} args - Arguments to create many LinkPages.
     * @example
     * // Create many LinkPages
     * const linkPage = await prisma.linkPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkPages and only return the `id`
     * const linkPageWithIdOnly = await prisma.linkPage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkPageCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LinkPage.
     * @param {LinkPageDeleteArgs} args - Arguments to delete one LinkPage.
     * @example
     * // Delete one LinkPage
     * const LinkPage = await prisma.linkPage.delete({
     *   where: {
     *     // ... filter to delete one LinkPage
     *   }
     * })
     * 
     */
    delete<T extends LinkPageDeleteArgs>(args: SelectSubset<T, LinkPageDeleteArgs<ExtArgs>>): Prisma__LinkPageClient<$Result.GetResult<Prisma.$LinkPagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LinkPage.
     * @param {LinkPageUpdateArgs} args - Arguments to update one LinkPage.
     * @example
     * // Update one LinkPage
     * const linkPage = await prisma.linkPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkPageUpdateArgs>(args: SelectSubset<T, LinkPageUpdateArgs<ExtArgs>>): Prisma__LinkPageClient<$Result.GetResult<Prisma.$LinkPagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LinkPages.
     * @param {LinkPageDeleteManyArgs} args - Arguments to filter LinkPages to delete.
     * @example
     * // Delete a few LinkPages
     * const { count } = await prisma.linkPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkPageDeleteManyArgs>(args?: SelectSubset<T, LinkPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkPages
     * const linkPage = await prisma.linkPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkPageUpdateManyArgs>(args: SelectSubset<T, LinkPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LinkPage.
     * @param {LinkPageUpsertArgs} args - Arguments to update or create a LinkPage.
     * @example
     * // Update or create a LinkPage
     * const linkPage = await prisma.linkPage.upsert({
     *   create: {
     *     // ... data to create a LinkPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkPage we want to update
     *   }
     * })
     */
    upsert<T extends LinkPageUpsertArgs>(args: SelectSubset<T, LinkPageUpsertArgs<ExtArgs>>): Prisma__LinkPageClient<$Result.GetResult<Prisma.$LinkPagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LinkPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPageCountArgs} args - Arguments to filter LinkPages to count.
     * @example
     * // Count the number of LinkPages
     * const count = await prisma.linkPage.count({
     *   where: {
     *     // ... the filter for the LinkPages we want to count
     *   }
     * })
    **/
    count<T extends LinkPageCountArgs>(
      args?: Subset<T, LinkPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkPageAggregateArgs>(args: Subset<T, LinkPageAggregateArgs>): Prisma.PrismaPromise<GetLinkPageAggregateType<T>>

    /**
     * Group by LinkPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkPageGroupByArgs} args - Group by arguments.
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
      T extends LinkPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkPageGroupByArgs['orderBy'] }
        : { orderBy?: LinkPageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LinkPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkPage model
   */
  readonly fields: LinkPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    web3Assets<T extends LinkPage$web3AssetsArgs<ExtArgs> = {}>(args?: Subset<T, LinkPage$web3AssetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Web3AssetPayload<ExtArgs>, T, "findMany"> | Null>
    web3CryptoAssets<T extends LinkPage$web3CryptoAssetsArgs<ExtArgs> = {}>(args?: Subset<T, LinkPage$web3CryptoAssetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Web3CryptoAssetPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the LinkPage model
   */ 
  interface LinkPageFieldRefs {
    readonly id: FieldRef<"LinkPage", 'String'>
    readonly url: FieldRef<"LinkPage", 'String'>
    readonly title: FieldRef<"LinkPage", 'String'>
    readonly description: FieldRef<"LinkPage", 'String'>
    readonly image: FieldRef<"LinkPage", 'String'>
    readonly userId: FieldRef<"LinkPage", 'String'>
    readonly template: FieldRef<"LinkPage", 'Json'>
    readonly isComplete: FieldRef<"LinkPage", 'Boolean'>
    readonly isPublic: FieldRef<"LinkPage", 'Boolean'>
    readonly isTemplate: FieldRef<"LinkPage", 'Boolean'>
    readonly isPublished: FieldRef<"LinkPage", 'Boolean'>
    readonly createdAt: FieldRef<"LinkPage", 'DateTime'>
    readonly updatedAt: FieldRef<"LinkPage", 'DateTime'>
    readonly isEditing: FieldRef<"LinkPage", 'Boolean'>
    readonly profile: FieldRef<"LinkPage", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * LinkPage findUnique
   */
  export type LinkPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPage
     */
    select?: LinkPageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPageInclude<ExtArgs> | null
    /**
     * Filter, which LinkPage to fetch.
     */
    where: LinkPageWhereUniqueInput
  }

  /**
   * LinkPage findUniqueOrThrow
   */
  export type LinkPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPage
     */
    select?: LinkPageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPageInclude<ExtArgs> | null
    /**
     * Filter, which LinkPage to fetch.
     */
    where: LinkPageWhereUniqueInput
  }

  /**
   * LinkPage findFirst
   */
  export type LinkPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPage
     */
    select?: LinkPageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPageInclude<ExtArgs> | null
    /**
     * Filter, which LinkPage to fetch.
     */
    where?: LinkPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkPages to fetch.
     */
    orderBy?: LinkPageOrderByWithRelationInput | LinkPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkPages.
     */
    cursor?: LinkPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkPages.
     */
    distinct?: LinkPageScalarFieldEnum | LinkPageScalarFieldEnum[]
  }

  /**
   * LinkPage findFirstOrThrow
   */
  export type LinkPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPage
     */
    select?: LinkPageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPageInclude<ExtArgs> | null
    /**
     * Filter, which LinkPage to fetch.
     */
    where?: LinkPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkPages to fetch.
     */
    orderBy?: LinkPageOrderByWithRelationInput | LinkPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkPages.
     */
    cursor?: LinkPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkPages.
     */
    distinct?: LinkPageScalarFieldEnum | LinkPageScalarFieldEnum[]
  }

  /**
   * LinkPage findMany
   */
  export type LinkPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPage
     */
    select?: LinkPageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPageInclude<ExtArgs> | null
    /**
     * Filter, which LinkPages to fetch.
     */
    where?: LinkPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkPages to fetch.
     */
    orderBy?: LinkPageOrderByWithRelationInput | LinkPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkPages.
     */
    cursor?: LinkPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkPages.
     */
    skip?: number
    distinct?: LinkPageScalarFieldEnum | LinkPageScalarFieldEnum[]
  }

  /**
   * LinkPage create
   */
  export type LinkPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPage
     */
    select?: LinkPageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPageInclude<ExtArgs> | null
    /**
     * The data needed to create a LinkPage.
     */
    data: XOR<LinkPageCreateInput, LinkPageUncheckedCreateInput>
  }

  /**
   * LinkPage createMany
   */
  export type LinkPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkPages.
     */
    data: LinkPageCreateManyInput | LinkPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkPage createManyAndReturn
   */
  export type LinkPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPage
     */
    select?: LinkPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LinkPages.
     */
    data: LinkPageCreateManyInput | LinkPageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkPage update
   */
  export type LinkPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPage
     */
    select?: LinkPageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPageInclude<ExtArgs> | null
    /**
     * The data needed to update a LinkPage.
     */
    data: XOR<LinkPageUpdateInput, LinkPageUncheckedUpdateInput>
    /**
     * Choose, which LinkPage to update.
     */
    where: LinkPageWhereUniqueInput
  }

  /**
   * LinkPage updateMany
   */
  export type LinkPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkPages.
     */
    data: XOR<LinkPageUpdateManyMutationInput, LinkPageUncheckedUpdateManyInput>
    /**
     * Filter which LinkPages to update
     */
    where?: LinkPageWhereInput
  }

  /**
   * LinkPage upsert
   */
  export type LinkPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPage
     */
    select?: LinkPageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPageInclude<ExtArgs> | null
    /**
     * The filter to search for the LinkPage to update in case it exists.
     */
    where: LinkPageWhereUniqueInput
    /**
     * In case the LinkPage found by the `where` argument doesn't exist, create a new LinkPage with this data.
     */
    create: XOR<LinkPageCreateInput, LinkPageUncheckedCreateInput>
    /**
     * In case the LinkPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkPageUpdateInput, LinkPageUncheckedUpdateInput>
  }

  /**
   * LinkPage delete
   */
  export type LinkPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPage
     */
    select?: LinkPageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPageInclude<ExtArgs> | null
    /**
     * Filter which LinkPage to delete.
     */
    where: LinkPageWhereUniqueInput
  }

  /**
   * LinkPage deleteMany
   */
  export type LinkPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkPages to delete
     */
    where?: LinkPageWhereInput
  }

  /**
   * LinkPage.web3Assets
   */
  export type LinkPage$web3AssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3Asset
     */
    select?: Web3AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3AssetInclude<ExtArgs> | null
    where?: Web3AssetWhereInput
    orderBy?: Web3AssetOrderByWithRelationInput | Web3AssetOrderByWithRelationInput[]
    cursor?: Web3AssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Web3AssetScalarFieldEnum | Web3AssetScalarFieldEnum[]
  }

  /**
   * LinkPage.web3CryptoAssets
   */
  export type LinkPage$web3CryptoAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3CryptoAsset
     */
    select?: Web3CryptoAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3CryptoAssetInclude<ExtArgs> | null
    where?: Web3CryptoAssetWhereInput
    orderBy?: Web3CryptoAssetOrderByWithRelationInput | Web3CryptoAssetOrderByWithRelationInput[]
    cursor?: Web3CryptoAssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Web3CryptoAssetScalarFieldEnum | Web3CryptoAssetScalarFieldEnum[]
  }

  /**
   * LinkPage without action
   */
  export type LinkPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPage
     */
    select?: LinkPageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPageInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    profile: number
    achievement: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    profile?: true
    achievement?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    profile: JsonValue | null
    achievement: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    profile?: boolean
    achievement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    web3Assets?: boolean | Account$web3AssetsArgs<ExtArgs>
    web3CryptoAssets?: boolean | Account$web3CryptoAssetsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    profile?: boolean
    achievement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    profile?: boolean
    achievement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    web3Assets?: boolean | Account$web3AssetsArgs<ExtArgs>
    web3CryptoAssets?: boolean | Account$web3CryptoAssetsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      web3Assets: Prisma.$Web3AssetPayload<ExtArgs>[]
      web3CryptoAssets: Prisma.$Web3CryptoAssetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      profile: Prisma.JsonValue | null
      achievement: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    web3Assets<T extends Account$web3AssetsArgs<ExtArgs> = {}>(args?: Subset<T, Account$web3AssetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Web3AssetPayload<ExtArgs>, T, "findMany"> | Null>
    web3CryptoAssets<T extends Account$web3CryptoAssetsArgs<ExtArgs> = {}>(args?: Subset<T, Account$web3CryptoAssetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Web3CryptoAssetPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly profile: FieldRef<"Account", 'Json'>
    readonly achievement: FieldRef<"Account", 'Json'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account.web3Assets
   */
  export type Account$web3AssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3Asset
     */
    select?: Web3AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3AssetInclude<ExtArgs> | null
    where?: Web3AssetWhereInput
    orderBy?: Web3AssetOrderByWithRelationInput | Web3AssetOrderByWithRelationInput[]
    cursor?: Web3AssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Web3AssetScalarFieldEnum | Web3AssetScalarFieldEnum[]
  }

  /**
   * Account.web3CryptoAssets
   */
  export type Account$web3CryptoAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3CryptoAsset
     */
    select?: Web3CryptoAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3CryptoAssetInclude<ExtArgs> | null
    where?: Web3CryptoAssetWhereInput
    orderBy?: Web3CryptoAssetOrderByWithRelationInput | Web3CryptoAssetOrderByWithRelationInput[]
    cursor?: Web3CryptoAssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Web3CryptoAssetScalarFieldEnum | Web3CryptoAssetScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    id: string
    email: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly id: FieldRef<"VerificationToken", 'String'>
    readonly email: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expires: number
    _all: number
  }


  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: string
    email: string
    token: string
    expires: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expires: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PasswordResetToken model
   */ 
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'String'>
    readonly email: FieldRef<"PasswordResetToken", 'String'>
    readonly token: FieldRef<"PasswordResetToken", 'String'>
    readonly expires: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
  }


  /**
   * Model LoginToken
   */

  export type AggregateLoginToken = {
    _count: LoginTokenCountAggregateOutputType | null
    _min: LoginTokenMinAggregateOutputType | null
    _max: LoginTokenMaxAggregateOutputType | null
  }

  export type LoginTokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
  }

  export type LoginTokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
  }

  export type LoginTokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expires: number
    _all: number
  }


  export type LoginTokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
  }

  export type LoginTokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
  }

  export type LoginTokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type LoginTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginToken to aggregate.
     */
    where?: LoginTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginTokens to fetch.
     */
    orderBy?: LoginTokenOrderByWithRelationInput | LoginTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoginTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoginTokens
    **/
    _count?: true | LoginTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginTokenMaxAggregateInputType
  }

  export type GetLoginTokenAggregateType<T extends LoginTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateLoginToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoginToken[P]>
      : GetScalarType<T[P], AggregateLoginToken[P]>
  }




  export type LoginTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginTokenWhereInput
    orderBy?: LoginTokenOrderByWithAggregationInput | LoginTokenOrderByWithAggregationInput[]
    by: LoginTokenScalarFieldEnum[] | LoginTokenScalarFieldEnum
    having?: LoginTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginTokenCountAggregateInputType | true
    _min?: LoginTokenMinAggregateInputType
    _max?: LoginTokenMaxAggregateInputType
  }

  export type LoginTokenGroupByOutputType = {
    id: string
    email: string
    token: string
    expires: Date
    _count: LoginTokenCountAggregateOutputType | null
    _min: LoginTokenMinAggregateOutputType | null
    _max: LoginTokenMaxAggregateOutputType | null
  }

  type GetLoginTokenGroupByPayload<T extends LoginTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginTokenGroupByOutputType[P]>
            : GetScalarType<T[P], LoginTokenGroupByOutputType[P]>
        }
      >
    >


  export type LoginTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["loginToken"]>

  export type LoginTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["loginToken"]>

  export type LoginTokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $LoginTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoginToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expires: Date
    }, ExtArgs["result"]["loginToken"]>
    composites: {}
  }

  type LoginTokenGetPayload<S extends boolean | null | undefined | LoginTokenDefaultArgs> = $Result.GetResult<Prisma.$LoginTokenPayload, S>

  type LoginTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LoginTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LoginTokenCountAggregateInputType | true
    }

  export interface LoginTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoginToken'], meta: { name: 'LoginToken' } }
    /**
     * Find zero or one LoginToken that matches the filter.
     * @param {LoginTokenFindUniqueArgs} args - Arguments to find a LoginToken
     * @example
     * // Get one LoginToken
     * const loginToken = await prisma.loginToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoginTokenFindUniqueArgs>(args: SelectSubset<T, LoginTokenFindUniqueArgs<ExtArgs>>): Prisma__LoginTokenClient<$Result.GetResult<Prisma.$LoginTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LoginToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LoginTokenFindUniqueOrThrowArgs} args - Arguments to find a LoginToken
     * @example
     * // Get one LoginToken
     * const loginToken = await prisma.loginToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoginTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, LoginTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoginTokenClient<$Result.GetResult<Prisma.$LoginTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LoginToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginTokenFindFirstArgs} args - Arguments to find a LoginToken
     * @example
     * // Get one LoginToken
     * const loginToken = await prisma.loginToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoginTokenFindFirstArgs>(args?: SelectSubset<T, LoginTokenFindFirstArgs<ExtArgs>>): Prisma__LoginTokenClient<$Result.GetResult<Prisma.$LoginTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LoginToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginTokenFindFirstOrThrowArgs} args - Arguments to find a LoginToken
     * @example
     * // Get one LoginToken
     * const loginToken = await prisma.loginToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoginTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, LoginTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoginTokenClient<$Result.GetResult<Prisma.$LoginTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LoginTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoginTokens
     * const loginTokens = await prisma.loginToken.findMany()
     * 
     * // Get first 10 LoginTokens
     * const loginTokens = await prisma.loginToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginTokenWithIdOnly = await prisma.loginToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoginTokenFindManyArgs>(args?: SelectSubset<T, LoginTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LoginToken.
     * @param {LoginTokenCreateArgs} args - Arguments to create a LoginToken.
     * @example
     * // Create one LoginToken
     * const LoginToken = await prisma.loginToken.create({
     *   data: {
     *     // ... data to create a LoginToken
     *   }
     * })
     * 
     */
    create<T extends LoginTokenCreateArgs>(args: SelectSubset<T, LoginTokenCreateArgs<ExtArgs>>): Prisma__LoginTokenClient<$Result.GetResult<Prisma.$LoginTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LoginTokens.
     * @param {LoginTokenCreateManyArgs} args - Arguments to create many LoginTokens.
     * @example
     * // Create many LoginTokens
     * const loginToken = await prisma.loginToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoginTokenCreateManyArgs>(args?: SelectSubset<T, LoginTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoginTokens and returns the data saved in the database.
     * @param {LoginTokenCreateManyAndReturnArgs} args - Arguments to create many LoginTokens.
     * @example
     * // Create many LoginTokens
     * const loginToken = await prisma.loginToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoginTokens and only return the `id`
     * const loginTokenWithIdOnly = await prisma.loginToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoginTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, LoginTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LoginToken.
     * @param {LoginTokenDeleteArgs} args - Arguments to delete one LoginToken.
     * @example
     * // Delete one LoginToken
     * const LoginToken = await prisma.loginToken.delete({
     *   where: {
     *     // ... filter to delete one LoginToken
     *   }
     * })
     * 
     */
    delete<T extends LoginTokenDeleteArgs>(args: SelectSubset<T, LoginTokenDeleteArgs<ExtArgs>>): Prisma__LoginTokenClient<$Result.GetResult<Prisma.$LoginTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LoginToken.
     * @param {LoginTokenUpdateArgs} args - Arguments to update one LoginToken.
     * @example
     * // Update one LoginToken
     * const loginToken = await prisma.loginToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoginTokenUpdateArgs>(args: SelectSubset<T, LoginTokenUpdateArgs<ExtArgs>>): Prisma__LoginTokenClient<$Result.GetResult<Prisma.$LoginTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LoginTokens.
     * @param {LoginTokenDeleteManyArgs} args - Arguments to filter LoginTokens to delete.
     * @example
     * // Delete a few LoginTokens
     * const { count } = await prisma.loginToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoginTokenDeleteManyArgs>(args?: SelectSubset<T, LoginTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoginTokens
     * const loginToken = await prisma.loginToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoginTokenUpdateManyArgs>(args: SelectSubset<T, LoginTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LoginToken.
     * @param {LoginTokenUpsertArgs} args - Arguments to update or create a LoginToken.
     * @example
     * // Update or create a LoginToken
     * const loginToken = await prisma.loginToken.upsert({
     *   create: {
     *     // ... data to create a LoginToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoginToken we want to update
     *   }
     * })
     */
    upsert<T extends LoginTokenUpsertArgs>(args: SelectSubset<T, LoginTokenUpsertArgs<ExtArgs>>): Prisma__LoginTokenClient<$Result.GetResult<Prisma.$LoginTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LoginTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginTokenCountArgs} args - Arguments to filter LoginTokens to count.
     * @example
     * // Count the number of LoginTokens
     * const count = await prisma.loginToken.count({
     *   where: {
     *     // ... the filter for the LoginTokens we want to count
     *   }
     * })
    **/
    count<T extends LoginTokenCountArgs>(
      args?: Subset<T, LoginTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoginToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoginTokenAggregateArgs>(args: Subset<T, LoginTokenAggregateArgs>): Prisma.PrismaPromise<GetLoginTokenAggregateType<T>>

    /**
     * Group by LoginToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginTokenGroupByArgs} args - Group by arguments.
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
      T extends LoginTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoginTokenGroupByArgs['orderBy'] }
        : { orderBy?: LoginTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoginTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoginToken model
   */
  readonly fields: LoginTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoginToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoginTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the LoginToken model
   */ 
  interface LoginTokenFieldRefs {
    readonly id: FieldRef<"LoginToken", 'String'>
    readonly email: FieldRef<"LoginToken", 'String'>
    readonly token: FieldRef<"LoginToken", 'String'>
    readonly expires: FieldRef<"LoginToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoginToken findUnique
   */
  export type LoginTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginToken
     */
    select?: LoginTokenSelect<ExtArgs> | null
    /**
     * Filter, which LoginToken to fetch.
     */
    where: LoginTokenWhereUniqueInput
  }

  /**
   * LoginToken findUniqueOrThrow
   */
  export type LoginTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginToken
     */
    select?: LoginTokenSelect<ExtArgs> | null
    /**
     * Filter, which LoginToken to fetch.
     */
    where: LoginTokenWhereUniqueInput
  }

  /**
   * LoginToken findFirst
   */
  export type LoginTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginToken
     */
    select?: LoginTokenSelect<ExtArgs> | null
    /**
     * Filter, which LoginToken to fetch.
     */
    where?: LoginTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginTokens to fetch.
     */
    orderBy?: LoginTokenOrderByWithRelationInput | LoginTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginTokens.
     */
    cursor?: LoginTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginTokens.
     */
    distinct?: LoginTokenScalarFieldEnum | LoginTokenScalarFieldEnum[]
  }

  /**
   * LoginToken findFirstOrThrow
   */
  export type LoginTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginToken
     */
    select?: LoginTokenSelect<ExtArgs> | null
    /**
     * Filter, which LoginToken to fetch.
     */
    where?: LoginTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginTokens to fetch.
     */
    orderBy?: LoginTokenOrderByWithRelationInput | LoginTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginTokens.
     */
    cursor?: LoginTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginTokens.
     */
    distinct?: LoginTokenScalarFieldEnum | LoginTokenScalarFieldEnum[]
  }

  /**
   * LoginToken findMany
   */
  export type LoginTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginToken
     */
    select?: LoginTokenSelect<ExtArgs> | null
    /**
     * Filter, which LoginTokens to fetch.
     */
    where?: LoginTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginTokens to fetch.
     */
    orderBy?: LoginTokenOrderByWithRelationInput | LoginTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoginTokens.
     */
    cursor?: LoginTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginTokens.
     */
    skip?: number
    distinct?: LoginTokenScalarFieldEnum | LoginTokenScalarFieldEnum[]
  }

  /**
   * LoginToken create
   */
  export type LoginTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginToken
     */
    select?: LoginTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a LoginToken.
     */
    data: XOR<LoginTokenCreateInput, LoginTokenUncheckedCreateInput>
  }

  /**
   * LoginToken createMany
   */
  export type LoginTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoginTokens.
     */
    data: LoginTokenCreateManyInput | LoginTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoginToken createManyAndReturn
   */
  export type LoginTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginToken
     */
    select?: LoginTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LoginTokens.
     */
    data: LoginTokenCreateManyInput | LoginTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoginToken update
   */
  export type LoginTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginToken
     */
    select?: LoginTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a LoginToken.
     */
    data: XOR<LoginTokenUpdateInput, LoginTokenUncheckedUpdateInput>
    /**
     * Choose, which LoginToken to update.
     */
    where: LoginTokenWhereUniqueInput
  }

  /**
   * LoginToken updateMany
   */
  export type LoginTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoginTokens.
     */
    data: XOR<LoginTokenUpdateManyMutationInput, LoginTokenUncheckedUpdateManyInput>
    /**
     * Filter which LoginTokens to update
     */
    where?: LoginTokenWhereInput
  }

  /**
   * LoginToken upsert
   */
  export type LoginTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginToken
     */
    select?: LoginTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the LoginToken to update in case it exists.
     */
    where: LoginTokenWhereUniqueInput
    /**
     * In case the LoginToken found by the `where` argument doesn't exist, create a new LoginToken with this data.
     */
    create: XOR<LoginTokenCreateInput, LoginTokenUncheckedCreateInput>
    /**
     * In case the LoginToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoginTokenUpdateInput, LoginTokenUncheckedUpdateInput>
  }

  /**
   * LoginToken delete
   */
  export type LoginTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginToken
     */
    select?: LoginTokenSelect<ExtArgs> | null
    /**
     * Filter which LoginToken to delete.
     */
    where: LoginTokenWhereUniqueInput
  }

  /**
   * LoginToken deleteMany
   */
  export type LoginTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginTokens to delete
     */
    where?: LoginTokenWhereInput
  }

  /**
   * LoginToken without action
   */
  export type LoginTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginToken
     */
    select?: LoginTokenSelect<ExtArgs> | null
  }


  /**
   * Model TwoFactorToken
   */

  export type AggregateTwoFactorToken = {
    _count: TwoFactorTokenCountAggregateOutputType | null
    _min: TwoFactorTokenMinAggregateOutputType | null
    _max: TwoFactorTokenMaxAggregateOutputType | null
  }

  export type TwoFactorTokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
  }

  export type TwoFactorTokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expires: Date | null
  }

  export type TwoFactorTokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expires: number
    _all: number
  }


  export type TwoFactorTokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
  }

  export type TwoFactorTokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
  }

  export type TwoFactorTokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type TwoFactorTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwoFactorToken to aggregate.
     */
    where?: TwoFactorTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorTokens to fetch.
     */
    orderBy?: TwoFactorTokenOrderByWithRelationInput | TwoFactorTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwoFactorTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwoFactorTokens
    **/
    _count?: true | TwoFactorTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwoFactorTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwoFactorTokenMaxAggregateInputType
  }

  export type GetTwoFactorTokenAggregateType<T extends TwoFactorTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateTwoFactorToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwoFactorToken[P]>
      : GetScalarType<T[P], AggregateTwoFactorToken[P]>
  }




  export type TwoFactorTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TwoFactorTokenWhereInput
    orderBy?: TwoFactorTokenOrderByWithAggregationInput | TwoFactorTokenOrderByWithAggregationInput[]
    by: TwoFactorTokenScalarFieldEnum[] | TwoFactorTokenScalarFieldEnum
    having?: TwoFactorTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwoFactorTokenCountAggregateInputType | true
    _min?: TwoFactorTokenMinAggregateInputType
    _max?: TwoFactorTokenMaxAggregateInputType
  }

  export type TwoFactorTokenGroupByOutputType = {
    id: string
    email: string
    token: string
    expires: Date
    _count: TwoFactorTokenCountAggregateOutputType | null
    _min: TwoFactorTokenMinAggregateOutputType | null
    _max: TwoFactorTokenMaxAggregateOutputType | null
  }

  type GetTwoFactorTokenGroupByPayload<T extends TwoFactorTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TwoFactorTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwoFactorTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwoFactorTokenGroupByOutputType[P]>
            : GetScalarType<T[P], TwoFactorTokenGroupByOutputType[P]>
        }
      >
    >


  export type TwoFactorTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["twoFactorToken"]>

  export type TwoFactorTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["twoFactorToken"]>

  export type TwoFactorTokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $TwoFactorTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TwoFactorToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expires: Date
    }, ExtArgs["result"]["twoFactorToken"]>
    composites: {}
  }

  type TwoFactorTokenGetPayload<S extends boolean | null | undefined | TwoFactorTokenDefaultArgs> = $Result.GetResult<Prisma.$TwoFactorTokenPayload, S>

  type TwoFactorTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TwoFactorTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TwoFactorTokenCountAggregateInputType | true
    }

  export interface TwoFactorTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TwoFactorToken'], meta: { name: 'TwoFactorToken' } }
    /**
     * Find zero or one TwoFactorToken that matches the filter.
     * @param {TwoFactorTokenFindUniqueArgs} args - Arguments to find a TwoFactorToken
     * @example
     * // Get one TwoFactorToken
     * const twoFactorToken = await prisma.twoFactorToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TwoFactorTokenFindUniqueArgs>(args: SelectSubset<T, TwoFactorTokenFindUniqueArgs<ExtArgs>>): Prisma__TwoFactorTokenClient<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TwoFactorToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TwoFactorTokenFindUniqueOrThrowArgs} args - Arguments to find a TwoFactorToken
     * @example
     * // Get one TwoFactorToken
     * const twoFactorToken = await prisma.twoFactorToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TwoFactorTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TwoFactorTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TwoFactorTokenClient<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TwoFactorToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorTokenFindFirstArgs} args - Arguments to find a TwoFactorToken
     * @example
     * // Get one TwoFactorToken
     * const twoFactorToken = await prisma.twoFactorToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TwoFactorTokenFindFirstArgs>(args?: SelectSubset<T, TwoFactorTokenFindFirstArgs<ExtArgs>>): Prisma__TwoFactorTokenClient<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TwoFactorToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorTokenFindFirstOrThrowArgs} args - Arguments to find a TwoFactorToken
     * @example
     * // Get one TwoFactorToken
     * const twoFactorToken = await prisma.twoFactorToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TwoFactorTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TwoFactorTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TwoFactorTokenClient<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TwoFactorTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwoFactorTokens
     * const twoFactorTokens = await prisma.twoFactorToken.findMany()
     * 
     * // Get first 10 TwoFactorTokens
     * const twoFactorTokens = await prisma.twoFactorToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twoFactorTokenWithIdOnly = await prisma.twoFactorToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TwoFactorTokenFindManyArgs>(args?: SelectSubset<T, TwoFactorTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TwoFactorToken.
     * @param {TwoFactorTokenCreateArgs} args - Arguments to create a TwoFactorToken.
     * @example
     * // Create one TwoFactorToken
     * const TwoFactorToken = await prisma.twoFactorToken.create({
     *   data: {
     *     // ... data to create a TwoFactorToken
     *   }
     * })
     * 
     */
    create<T extends TwoFactorTokenCreateArgs>(args: SelectSubset<T, TwoFactorTokenCreateArgs<ExtArgs>>): Prisma__TwoFactorTokenClient<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TwoFactorTokens.
     * @param {TwoFactorTokenCreateManyArgs} args - Arguments to create many TwoFactorTokens.
     * @example
     * // Create many TwoFactorTokens
     * const twoFactorToken = await prisma.twoFactorToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TwoFactorTokenCreateManyArgs>(args?: SelectSubset<T, TwoFactorTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TwoFactorTokens and returns the data saved in the database.
     * @param {TwoFactorTokenCreateManyAndReturnArgs} args - Arguments to create many TwoFactorTokens.
     * @example
     * // Create many TwoFactorTokens
     * const twoFactorToken = await prisma.twoFactorToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TwoFactorTokens and only return the `id`
     * const twoFactorTokenWithIdOnly = await prisma.twoFactorToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TwoFactorTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TwoFactorTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TwoFactorToken.
     * @param {TwoFactorTokenDeleteArgs} args - Arguments to delete one TwoFactorToken.
     * @example
     * // Delete one TwoFactorToken
     * const TwoFactorToken = await prisma.twoFactorToken.delete({
     *   where: {
     *     // ... filter to delete one TwoFactorToken
     *   }
     * })
     * 
     */
    delete<T extends TwoFactorTokenDeleteArgs>(args: SelectSubset<T, TwoFactorTokenDeleteArgs<ExtArgs>>): Prisma__TwoFactorTokenClient<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TwoFactorToken.
     * @param {TwoFactorTokenUpdateArgs} args - Arguments to update one TwoFactorToken.
     * @example
     * // Update one TwoFactorToken
     * const twoFactorToken = await prisma.twoFactorToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TwoFactorTokenUpdateArgs>(args: SelectSubset<T, TwoFactorTokenUpdateArgs<ExtArgs>>): Prisma__TwoFactorTokenClient<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TwoFactorTokens.
     * @param {TwoFactorTokenDeleteManyArgs} args - Arguments to filter TwoFactorTokens to delete.
     * @example
     * // Delete a few TwoFactorTokens
     * const { count } = await prisma.twoFactorToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TwoFactorTokenDeleteManyArgs>(args?: SelectSubset<T, TwoFactorTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwoFactorTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwoFactorTokens
     * const twoFactorToken = await prisma.twoFactorToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TwoFactorTokenUpdateManyArgs>(args: SelectSubset<T, TwoFactorTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TwoFactorToken.
     * @param {TwoFactorTokenUpsertArgs} args - Arguments to update or create a TwoFactorToken.
     * @example
     * // Update or create a TwoFactorToken
     * const twoFactorToken = await prisma.twoFactorToken.upsert({
     *   create: {
     *     // ... data to create a TwoFactorToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwoFactorToken we want to update
     *   }
     * })
     */
    upsert<T extends TwoFactorTokenUpsertArgs>(args: SelectSubset<T, TwoFactorTokenUpsertArgs<ExtArgs>>): Prisma__TwoFactorTokenClient<$Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TwoFactorTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorTokenCountArgs} args - Arguments to filter TwoFactorTokens to count.
     * @example
     * // Count the number of TwoFactorTokens
     * const count = await prisma.twoFactorToken.count({
     *   where: {
     *     // ... the filter for the TwoFactorTokens we want to count
     *   }
     * })
    **/
    count<T extends TwoFactorTokenCountArgs>(
      args?: Subset<T, TwoFactorTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwoFactorTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwoFactorToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwoFactorTokenAggregateArgs>(args: Subset<T, TwoFactorTokenAggregateArgs>): Prisma.PrismaPromise<GetTwoFactorTokenAggregateType<T>>

    /**
     * Group by TwoFactorToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorTokenGroupByArgs} args - Group by arguments.
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
      T extends TwoFactorTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwoFactorTokenGroupByArgs['orderBy'] }
        : { orderBy?: TwoFactorTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TwoFactorTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwoFactorTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TwoFactorToken model
   */
  readonly fields: TwoFactorTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TwoFactorToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TwoFactorTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TwoFactorToken model
   */ 
  interface TwoFactorTokenFieldRefs {
    readonly id: FieldRef<"TwoFactorToken", 'String'>
    readonly email: FieldRef<"TwoFactorToken", 'String'>
    readonly token: FieldRef<"TwoFactorToken", 'String'>
    readonly expires: FieldRef<"TwoFactorToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TwoFactorToken findUnique
   */
  export type TwoFactorTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * Filter, which TwoFactorToken to fetch.
     */
    where: TwoFactorTokenWhereUniqueInput
  }

  /**
   * TwoFactorToken findUniqueOrThrow
   */
  export type TwoFactorTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * Filter, which TwoFactorToken to fetch.
     */
    where: TwoFactorTokenWhereUniqueInput
  }

  /**
   * TwoFactorToken findFirst
   */
  export type TwoFactorTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * Filter, which TwoFactorToken to fetch.
     */
    where?: TwoFactorTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorTokens to fetch.
     */
    orderBy?: TwoFactorTokenOrderByWithRelationInput | TwoFactorTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwoFactorTokens.
     */
    cursor?: TwoFactorTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwoFactorTokens.
     */
    distinct?: TwoFactorTokenScalarFieldEnum | TwoFactorTokenScalarFieldEnum[]
  }

  /**
   * TwoFactorToken findFirstOrThrow
   */
  export type TwoFactorTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * Filter, which TwoFactorToken to fetch.
     */
    where?: TwoFactorTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorTokens to fetch.
     */
    orderBy?: TwoFactorTokenOrderByWithRelationInput | TwoFactorTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwoFactorTokens.
     */
    cursor?: TwoFactorTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwoFactorTokens.
     */
    distinct?: TwoFactorTokenScalarFieldEnum | TwoFactorTokenScalarFieldEnum[]
  }

  /**
   * TwoFactorToken findMany
   */
  export type TwoFactorTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * Filter, which TwoFactorTokens to fetch.
     */
    where?: TwoFactorTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorTokens to fetch.
     */
    orderBy?: TwoFactorTokenOrderByWithRelationInput | TwoFactorTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwoFactorTokens.
     */
    cursor?: TwoFactorTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorTokens.
     */
    skip?: number
    distinct?: TwoFactorTokenScalarFieldEnum | TwoFactorTokenScalarFieldEnum[]
  }

  /**
   * TwoFactorToken create
   */
  export type TwoFactorTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a TwoFactorToken.
     */
    data: XOR<TwoFactorTokenCreateInput, TwoFactorTokenUncheckedCreateInput>
  }

  /**
   * TwoFactorToken createMany
   */
  export type TwoFactorTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TwoFactorTokens.
     */
    data: TwoFactorTokenCreateManyInput | TwoFactorTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TwoFactorToken createManyAndReturn
   */
  export type TwoFactorTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TwoFactorTokens.
     */
    data: TwoFactorTokenCreateManyInput | TwoFactorTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TwoFactorToken update
   */
  export type TwoFactorTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a TwoFactorToken.
     */
    data: XOR<TwoFactorTokenUpdateInput, TwoFactorTokenUncheckedUpdateInput>
    /**
     * Choose, which TwoFactorToken to update.
     */
    where: TwoFactorTokenWhereUniqueInput
  }

  /**
   * TwoFactorToken updateMany
   */
  export type TwoFactorTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TwoFactorTokens.
     */
    data: XOR<TwoFactorTokenUpdateManyMutationInput, TwoFactorTokenUncheckedUpdateManyInput>
    /**
     * Filter which TwoFactorTokens to update
     */
    where?: TwoFactorTokenWhereInput
  }

  /**
   * TwoFactorToken upsert
   */
  export type TwoFactorTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the TwoFactorToken to update in case it exists.
     */
    where: TwoFactorTokenWhereUniqueInput
    /**
     * In case the TwoFactorToken found by the `where` argument doesn't exist, create a new TwoFactorToken with this data.
     */
    create: XOR<TwoFactorTokenCreateInput, TwoFactorTokenUncheckedCreateInput>
    /**
     * In case the TwoFactorToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwoFactorTokenUpdateInput, TwoFactorTokenUncheckedUpdateInput>
  }

  /**
   * TwoFactorToken delete
   */
  export type TwoFactorTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
    /**
     * Filter which TwoFactorToken to delete.
     */
    where: TwoFactorTokenWhereUniqueInput
  }

  /**
   * TwoFactorToken deleteMany
   */
  export type TwoFactorTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwoFactorTokens to delete
     */
    where?: TwoFactorTokenWhereInput
  }

  /**
   * TwoFactorToken without action
   */
  export type TwoFactorTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorToken
     */
    select?: TwoFactorTokenSelect<ExtArgs> | null
  }


  /**
   * Model TwoFactorConfirmation
   */

  export type AggregateTwoFactorConfirmation = {
    _count: TwoFactorConfirmationCountAggregateOutputType | null
    _min: TwoFactorConfirmationMinAggregateOutputType | null
    _max: TwoFactorConfirmationMaxAggregateOutputType | null
  }

  export type TwoFactorConfirmationMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type TwoFactorConfirmationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type TwoFactorConfirmationCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type TwoFactorConfirmationMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TwoFactorConfirmationMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TwoFactorConfirmationCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type TwoFactorConfirmationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwoFactorConfirmation to aggregate.
     */
    where?: TwoFactorConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorConfirmations to fetch.
     */
    orderBy?: TwoFactorConfirmationOrderByWithRelationInput | TwoFactorConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwoFactorConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwoFactorConfirmations
    **/
    _count?: true | TwoFactorConfirmationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwoFactorConfirmationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwoFactorConfirmationMaxAggregateInputType
  }

  export type GetTwoFactorConfirmationAggregateType<T extends TwoFactorConfirmationAggregateArgs> = {
        [P in keyof T & keyof AggregateTwoFactorConfirmation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwoFactorConfirmation[P]>
      : GetScalarType<T[P], AggregateTwoFactorConfirmation[P]>
  }




  export type TwoFactorConfirmationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TwoFactorConfirmationWhereInput
    orderBy?: TwoFactorConfirmationOrderByWithAggregationInput | TwoFactorConfirmationOrderByWithAggregationInput[]
    by: TwoFactorConfirmationScalarFieldEnum[] | TwoFactorConfirmationScalarFieldEnum
    having?: TwoFactorConfirmationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwoFactorConfirmationCountAggregateInputType | true
    _min?: TwoFactorConfirmationMinAggregateInputType
    _max?: TwoFactorConfirmationMaxAggregateInputType
  }

  export type TwoFactorConfirmationGroupByOutputType = {
    id: string
    userId: string
    _count: TwoFactorConfirmationCountAggregateOutputType | null
    _min: TwoFactorConfirmationMinAggregateOutputType | null
    _max: TwoFactorConfirmationMaxAggregateOutputType | null
  }

  type GetTwoFactorConfirmationGroupByPayload<T extends TwoFactorConfirmationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TwoFactorConfirmationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwoFactorConfirmationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwoFactorConfirmationGroupByOutputType[P]>
            : GetScalarType<T[P], TwoFactorConfirmationGroupByOutputType[P]>
        }
      >
    >


  export type TwoFactorConfirmationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["twoFactorConfirmation"]>

  export type TwoFactorConfirmationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["twoFactorConfirmation"]>

  export type TwoFactorConfirmationSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type TwoFactorConfirmationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TwoFactorConfirmationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TwoFactorConfirmationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TwoFactorConfirmation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["twoFactorConfirmation"]>
    composites: {}
  }

  type TwoFactorConfirmationGetPayload<S extends boolean | null | undefined | TwoFactorConfirmationDefaultArgs> = $Result.GetResult<Prisma.$TwoFactorConfirmationPayload, S>

  type TwoFactorConfirmationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TwoFactorConfirmationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TwoFactorConfirmationCountAggregateInputType | true
    }

  export interface TwoFactorConfirmationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TwoFactorConfirmation'], meta: { name: 'TwoFactorConfirmation' } }
    /**
     * Find zero or one TwoFactorConfirmation that matches the filter.
     * @param {TwoFactorConfirmationFindUniqueArgs} args - Arguments to find a TwoFactorConfirmation
     * @example
     * // Get one TwoFactorConfirmation
     * const twoFactorConfirmation = await prisma.twoFactorConfirmation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TwoFactorConfirmationFindUniqueArgs>(args: SelectSubset<T, TwoFactorConfirmationFindUniqueArgs<ExtArgs>>): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TwoFactorConfirmation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TwoFactorConfirmationFindUniqueOrThrowArgs} args - Arguments to find a TwoFactorConfirmation
     * @example
     * // Get one TwoFactorConfirmation
     * const twoFactorConfirmation = await prisma.twoFactorConfirmation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TwoFactorConfirmationFindUniqueOrThrowArgs>(args: SelectSubset<T, TwoFactorConfirmationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TwoFactorConfirmation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorConfirmationFindFirstArgs} args - Arguments to find a TwoFactorConfirmation
     * @example
     * // Get one TwoFactorConfirmation
     * const twoFactorConfirmation = await prisma.twoFactorConfirmation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TwoFactorConfirmationFindFirstArgs>(args?: SelectSubset<T, TwoFactorConfirmationFindFirstArgs<ExtArgs>>): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TwoFactorConfirmation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorConfirmationFindFirstOrThrowArgs} args - Arguments to find a TwoFactorConfirmation
     * @example
     * // Get one TwoFactorConfirmation
     * const twoFactorConfirmation = await prisma.twoFactorConfirmation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TwoFactorConfirmationFindFirstOrThrowArgs>(args?: SelectSubset<T, TwoFactorConfirmationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TwoFactorConfirmations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorConfirmationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwoFactorConfirmations
     * const twoFactorConfirmations = await prisma.twoFactorConfirmation.findMany()
     * 
     * // Get first 10 TwoFactorConfirmations
     * const twoFactorConfirmations = await prisma.twoFactorConfirmation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const twoFactorConfirmationWithIdOnly = await prisma.twoFactorConfirmation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TwoFactorConfirmationFindManyArgs>(args?: SelectSubset<T, TwoFactorConfirmationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TwoFactorConfirmation.
     * @param {TwoFactorConfirmationCreateArgs} args - Arguments to create a TwoFactorConfirmation.
     * @example
     * // Create one TwoFactorConfirmation
     * const TwoFactorConfirmation = await prisma.twoFactorConfirmation.create({
     *   data: {
     *     // ... data to create a TwoFactorConfirmation
     *   }
     * })
     * 
     */
    create<T extends TwoFactorConfirmationCreateArgs>(args: SelectSubset<T, TwoFactorConfirmationCreateArgs<ExtArgs>>): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TwoFactorConfirmations.
     * @param {TwoFactorConfirmationCreateManyArgs} args - Arguments to create many TwoFactorConfirmations.
     * @example
     * // Create many TwoFactorConfirmations
     * const twoFactorConfirmation = await prisma.twoFactorConfirmation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TwoFactorConfirmationCreateManyArgs>(args?: SelectSubset<T, TwoFactorConfirmationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TwoFactorConfirmations and returns the data saved in the database.
     * @param {TwoFactorConfirmationCreateManyAndReturnArgs} args - Arguments to create many TwoFactorConfirmations.
     * @example
     * // Create many TwoFactorConfirmations
     * const twoFactorConfirmation = await prisma.twoFactorConfirmation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TwoFactorConfirmations and only return the `id`
     * const twoFactorConfirmationWithIdOnly = await prisma.twoFactorConfirmation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TwoFactorConfirmationCreateManyAndReturnArgs>(args?: SelectSubset<T, TwoFactorConfirmationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TwoFactorConfirmation.
     * @param {TwoFactorConfirmationDeleteArgs} args - Arguments to delete one TwoFactorConfirmation.
     * @example
     * // Delete one TwoFactorConfirmation
     * const TwoFactorConfirmation = await prisma.twoFactorConfirmation.delete({
     *   where: {
     *     // ... filter to delete one TwoFactorConfirmation
     *   }
     * })
     * 
     */
    delete<T extends TwoFactorConfirmationDeleteArgs>(args: SelectSubset<T, TwoFactorConfirmationDeleteArgs<ExtArgs>>): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TwoFactorConfirmation.
     * @param {TwoFactorConfirmationUpdateArgs} args - Arguments to update one TwoFactorConfirmation.
     * @example
     * // Update one TwoFactorConfirmation
     * const twoFactorConfirmation = await prisma.twoFactorConfirmation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TwoFactorConfirmationUpdateArgs>(args: SelectSubset<T, TwoFactorConfirmationUpdateArgs<ExtArgs>>): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TwoFactorConfirmations.
     * @param {TwoFactorConfirmationDeleteManyArgs} args - Arguments to filter TwoFactorConfirmations to delete.
     * @example
     * // Delete a few TwoFactorConfirmations
     * const { count } = await prisma.twoFactorConfirmation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TwoFactorConfirmationDeleteManyArgs>(args?: SelectSubset<T, TwoFactorConfirmationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwoFactorConfirmations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorConfirmationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwoFactorConfirmations
     * const twoFactorConfirmation = await prisma.twoFactorConfirmation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TwoFactorConfirmationUpdateManyArgs>(args: SelectSubset<T, TwoFactorConfirmationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TwoFactorConfirmation.
     * @param {TwoFactorConfirmationUpsertArgs} args - Arguments to update or create a TwoFactorConfirmation.
     * @example
     * // Update or create a TwoFactorConfirmation
     * const twoFactorConfirmation = await prisma.twoFactorConfirmation.upsert({
     *   create: {
     *     // ... data to create a TwoFactorConfirmation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwoFactorConfirmation we want to update
     *   }
     * })
     */
    upsert<T extends TwoFactorConfirmationUpsertArgs>(args: SelectSubset<T, TwoFactorConfirmationUpsertArgs<ExtArgs>>): Prisma__TwoFactorConfirmationClient<$Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TwoFactorConfirmations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorConfirmationCountArgs} args - Arguments to filter TwoFactorConfirmations to count.
     * @example
     * // Count the number of TwoFactorConfirmations
     * const count = await prisma.twoFactorConfirmation.count({
     *   where: {
     *     // ... the filter for the TwoFactorConfirmations we want to count
     *   }
     * })
    **/
    count<T extends TwoFactorConfirmationCountArgs>(
      args?: Subset<T, TwoFactorConfirmationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwoFactorConfirmationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwoFactorConfirmation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorConfirmationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TwoFactorConfirmationAggregateArgs>(args: Subset<T, TwoFactorConfirmationAggregateArgs>): Prisma.PrismaPromise<GetTwoFactorConfirmationAggregateType<T>>

    /**
     * Group by TwoFactorConfirmation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwoFactorConfirmationGroupByArgs} args - Group by arguments.
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
      T extends TwoFactorConfirmationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwoFactorConfirmationGroupByArgs['orderBy'] }
        : { orderBy?: TwoFactorConfirmationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TwoFactorConfirmationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwoFactorConfirmationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TwoFactorConfirmation model
   */
  readonly fields: TwoFactorConfirmationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TwoFactorConfirmation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TwoFactorConfirmationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TwoFactorConfirmation model
   */ 
  interface TwoFactorConfirmationFieldRefs {
    readonly id: FieldRef<"TwoFactorConfirmation", 'String'>
    readonly userId: FieldRef<"TwoFactorConfirmation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TwoFactorConfirmation findUnique
   */
  export type TwoFactorConfirmationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorConfirmation to fetch.
     */
    where: TwoFactorConfirmationWhereUniqueInput
  }

  /**
   * TwoFactorConfirmation findUniqueOrThrow
   */
  export type TwoFactorConfirmationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorConfirmation to fetch.
     */
    where: TwoFactorConfirmationWhereUniqueInput
  }

  /**
   * TwoFactorConfirmation findFirst
   */
  export type TwoFactorConfirmationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorConfirmation to fetch.
     */
    where?: TwoFactorConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorConfirmations to fetch.
     */
    orderBy?: TwoFactorConfirmationOrderByWithRelationInput | TwoFactorConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwoFactorConfirmations.
     */
    cursor?: TwoFactorConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwoFactorConfirmations.
     */
    distinct?: TwoFactorConfirmationScalarFieldEnum | TwoFactorConfirmationScalarFieldEnum[]
  }

  /**
   * TwoFactorConfirmation findFirstOrThrow
   */
  export type TwoFactorConfirmationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorConfirmation to fetch.
     */
    where?: TwoFactorConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorConfirmations to fetch.
     */
    orderBy?: TwoFactorConfirmationOrderByWithRelationInput | TwoFactorConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwoFactorConfirmations.
     */
    cursor?: TwoFactorConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwoFactorConfirmations.
     */
    distinct?: TwoFactorConfirmationScalarFieldEnum | TwoFactorConfirmationScalarFieldEnum[]
  }

  /**
   * TwoFactorConfirmation findMany
   */
  export type TwoFactorConfirmationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which TwoFactorConfirmations to fetch.
     */
    where?: TwoFactorConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwoFactorConfirmations to fetch.
     */
    orderBy?: TwoFactorConfirmationOrderByWithRelationInput | TwoFactorConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwoFactorConfirmations.
     */
    cursor?: TwoFactorConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwoFactorConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwoFactorConfirmations.
     */
    skip?: number
    distinct?: TwoFactorConfirmationScalarFieldEnum | TwoFactorConfirmationScalarFieldEnum[]
  }

  /**
   * TwoFactorConfirmation create
   */
  export type TwoFactorConfirmationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * The data needed to create a TwoFactorConfirmation.
     */
    data: XOR<TwoFactorConfirmationCreateInput, TwoFactorConfirmationUncheckedCreateInput>
  }

  /**
   * TwoFactorConfirmation createMany
   */
  export type TwoFactorConfirmationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TwoFactorConfirmations.
     */
    data: TwoFactorConfirmationCreateManyInput | TwoFactorConfirmationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TwoFactorConfirmation createManyAndReturn
   */
  export type TwoFactorConfirmationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TwoFactorConfirmations.
     */
    data: TwoFactorConfirmationCreateManyInput | TwoFactorConfirmationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorConfirmationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TwoFactorConfirmation update
   */
  export type TwoFactorConfirmationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * The data needed to update a TwoFactorConfirmation.
     */
    data: XOR<TwoFactorConfirmationUpdateInput, TwoFactorConfirmationUncheckedUpdateInput>
    /**
     * Choose, which TwoFactorConfirmation to update.
     */
    where: TwoFactorConfirmationWhereUniqueInput
  }

  /**
   * TwoFactorConfirmation updateMany
   */
  export type TwoFactorConfirmationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TwoFactorConfirmations.
     */
    data: XOR<TwoFactorConfirmationUpdateManyMutationInput, TwoFactorConfirmationUncheckedUpdateManyInput>
    /**
     * Filter which TwoFactorConfirmations to update
     */
    where?: TwoFactorConfirmationWhereInput
  }

  /**
   * TwoFactorConfirmation upsert
   */
  export type TwoFactorConfirmationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * The filter to search for the TwoFactorConfirmation to update in case it exists.
     */
    where: TwoFactorConfirmationWhereUniqueInput
    /**
     * In case the TwoFactorConfirmation found by the `where` argument doesn't exist, create a new TwoFactorConfirmation with this data.
     */
    create: XOR<TwoFactorConfirmationCreateInput, TwoFactorConfirmationUncheckedCreateInput>
    /**
     * In case the TwoFactorConfirmation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwoFactorConfirmationUpdateInput, TwoFactorConfirmationUncheckedUpdateInput>
  }

  /**
   * TwoFactorConfirmation delete
   */
  export type TwoFactorConfirmationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
    /**
     * Filter which TwoFactorConfirmation to delete.
     */
    where: TwoFactorConfirmationWhereUniqueInput
  }

  /**
   * TwoFactorConfirmation deleteMany
   */
  export type TwoFactorConfirmationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwoFactorConfirmations to delete
     */
    where?: TwoFactorConfirmationWhereInput
  }

  /**
   * TwoFactorConfirmation without action
   */
  export type TwoFactorConfirmationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwoFactorConfirmation
     */
    select?: TwoFactorConfirmationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TwoFactorConfirmationInclude<ExtArgs> | null
  }


  /**
   * Model Web3Asset
   */

  export type AggregateWeb3Asset = {
    _count: Web3AssetCountAggregateOutputType | null
    _avg: Web3AssetAvgAggregateOutputType | null
    _sum: Web3AssetSumAggregateOutputType | null
    _min: Web3AssetMinAggregateOutputType | null
    _max: Web3AssetMaxAggregateOutputType | null
  }

  export type Web3AssetAvgAggregateOutputType = {
    amount: number | null
    decimals: number | null
  }

  export type Web3AssetSumAggregateOutputType = {
    amount: number | null
    decimals: number | null
  }

  export type Web3AssetMinAggregateOutputType = {
    id: string | null
    type: $Enums.AssetType | null
    chain: string | null
    provider: string | null
    walletAddress: string | null
    contractAddress: string | null
    tokenId: string | null
    name: string | null
    symbol: string | null
    amount: number | null
    decimals: number | null
    imageUrl: string | null
    externalUrl: string | null
    ownerOf: string | null
    lastUpdated: Date | null
    blockNumber: string | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Web3AssetMaxAggregateOutputType = {
    id: string | null
    type: $Enums.AssetType | null
    chain: string | null
    provider: string | null
    walletAddress: string | null
    contractAddress: string | null
    tokenId: string | null
    name: string | null
    symbol: string | null
    amount: number | null
    decimals: number | null
    imageUrl: string | null
    externalUrl: string | null
    ownerOf: string | null
    lastUpdated: Date | null
    blockNumber: string | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Web3AssetCountAggregateOutputType = {
    id: number
    type: number
    chain: number
    provider: number
    walletAddress: number
    contractAddress: number
    tokenId: number
    name: number
    symbol: number
    amount: number
    decimals: number
    metadata: number
    imageUrl: number
    externalUrl: number
    ownerOf: number
    lastUpdated: number
    blockNumber: number
    verified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Web3AssetAvgAggregateInputType = {
    amount?: true
    decimals?: true
  }

  export type Web3AssetSumAggregateInputType = {
    amount?: true
    decimals?: true
  }

  export type Web3AssetMinAggregateInputType = {
    id?: true
    type?: true
    chain?: true
    provider?: true
    walletAddress?: true
    contractAddress?: true
    tokenId?: true
    name?: true
    symbol?: true
    amount?: true
    decimals?: true
    imageUrl?: true
    externalUrl?: true
    ownerOf?: true
    lastUpdated?: true
    blockNumber?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Web3AssetMaxAggregateInputType = {
    id?: true
    type?: true
    chain?: true
    provider?: true
    walletAddress?: true
    contractAddress?: true
    tokenId?: true
    name?: true
    symbol?: true
    amount?: true
    decimals?: true
    imageUrl?: true
    externalUrl?: true
    ownerOf?: true
    lastUpdated?: true
    blockNumber?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Web3AssetCountAggregateInputType = {
    id?: true
    type?: true
    chain?: true
    provider?: true
    walletAddress?: true
    contractAddress?: true
    tokenId?: true
    name?: true
    symbol?: true
    amount?: true
    decimals?: true
    metadata?: true
    imageUrl?: true
    externalUrl?: true
    ownerOf?: true
    lastUpdated?: true
    blockNumber?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Web3AssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Web3Asset to aggregate.
     */
    where?: Web3AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Web3Assets to fetch.
     */
    orderBy?: Web3AssetOrderByWithRelationInput | Web3AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Web3AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Web3Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Web3Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Web3Assets
    **/
    _count?: true | Web3AssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Web3AssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Web3AssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Web3AssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Web3AssetMaxAggregateInputType
  }

  export type GetWeb3AssetAggregateType<T extends Web3AssetAggregateArgs> = {
        [P in keyof T & keyof AggregateWeb3Asset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeb3Asset[P]>
      : GetScalarType<T[P], AggregateWeb3Asset[P]>
  }




  export type Web3AssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Web3AssetWhereInput
    orderBy?: Web3AssetOrderByWithAggregationInput | Web3AssetOrderByWithAggregationInput[]
    by: Web3AssetScalarFieldEnum[] | Web3AssetScalarFieldEnum
    having?: Web3AssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Web3AssetCountAggregateInputType | true
    _avg?: Web3AssetAvgAggregateInputType
    _sum?: Web3AssetSumAggregateInputType
    _min?: Web3AssetMinAggregateInputType
    _max?: Web3AssetMaxAggregateInputType
  }

  export type Web3AssetGroupByOutputType = {
    id: string
    type: $Enums.AssetType
    chain: string
    provider: string
    walletAddress: string
    contractAddress: string | null
    tokenId: string | null
    name: string
    symbol: string | null
    amount: number | null
    decimals: number | null
    metadata: JsonValue | null
    imageUrl: string | null
    externalUrl: string | null
    ownerOf: string
    lastUpdated: Date
    blockNumber: string | null
    verified: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: Web3AssetCountAggregateOutputType | null
    _avg: Web3AssetAvgAggregateOutputType | null
    _sum: Web3AssetSumAggregateOutputType | null
    _min: Web3AssetMinAggregateOutputType | null
    _max: Web3AssetMaxAggregateOutputType | null
  }

  type GetWeb3AssetGroupByPayload<T extends Web3AssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Web3AssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Web3AssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Web3AssetGroupByOutputType[P]>
            : GetScalarType<T[P], Web3AssetGroupByOutputType[P]>
        }
      >
    >


  export type Web3AssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    chain?: boolean
    provider?: boolean
    walletAddress?: boolean
    contractAddress?: boolean
    tokenId?: boolean
    name?: boolean
    symbol?: boolean
    amount?: boolean
    decimals?: boolean
    metadata?: boolean
    imageUrl?: boolean
    externalUrl?: boolean
    ownerOf?: boolean
    lastUpdated?: boolean
    blockNumber?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | Web3Asset$accountsArgs<ExtArgs>
    linkPages?: boolean | Web3Asset$linkPagesArgs<ExtArgs>
    _count?: boolean | Web3AssetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["web3Asset"]>

  export type Web3AssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    chain?: boolean
    provider?: boolean
    walletAddress?: boolean
    contractAddress?: boolean
    tokenId?: boolean
    name?: boolean
    symbol?: boolean
    amount?: boolean
    decimals?: boolean
    metadata?: boolean
    imageUrl?: boolean
    externalUrl?: boolean
    ownerOf?: boolean
    lastUpdated?: boolean
    blockNumber?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["web3Asset"]>

  export type Web3AssetSelectScalar = {
    id?: boolean
    type?: boolean
    chain?: boolean
    provider?: boolean
    walletAddress?: boolean
    contractAddress?: boolean
    tokenId?: boolean
    name?: boolean
    symbol?: boolean
    amount?: boolean
    decimals?: boolean
    metadata?: boolean
    imageUrl?: boolean
    externalUrl?: boolean
    ownerOf?: boolean
    lastUpdated?: boolean
    blockNumber?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Web3AssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | Web3Asset$accountsArgs<ExtArgs>
    linkPages?: boolean | Web3Asset$linkPagesArgs<ExtArgs>
    _count?: boolean | Web3AssetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Web3AssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Web3AssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Web3Asset"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      linkPages: Prisma.$LinkPagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.AssetType
      chain: string
      provider: string
      walletAddress: string
      contractAddress: string | null
      tokenId: string | null
      name: string
      symbol: string | null
      amount: number | null
      decimals: number | null
      metadata: Prisma.JsonValue | null
      imageUrl: string | null
      externalUrl: string | null
      ownerOf: string
      lastUpdated: Date
      blockNumber: string | null
      verified: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["web3Asset"]>
    composites: {}
  }

  type Web3AssetGetPayload<S extends boolean | null | undefined | Web3AssetDefaultArgs> = $Result.GetResult<Prisma.$Web3AssetPayload, S>

  type Web3AssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Web3AssetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Web3AssetCountAggregateInputType | true
    }

  export interface Web3AssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Web3Asset'], meta: { name: 'Web3Asset' } }
    /**
     * Find zero or one Web3Asset that matches the filter.
     * @param {Web3AssetFindUniqueArgs} args - Arguments to find a Web3Asset
     * @example
     * // Get one Web3Asset
     * const web3Asset = await prisma.web3Asset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Web3AssetFindUniqueArgs>(args: SelectSubset<T, Web3AssetFindUniqueArgs<ExtArgs>>): Prisma__Web3AssetClient<$Result.GetResult<Prisma.$Web3AssetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Web3Asset that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Web3AssetFindUniqueOrThrowArgs} args - Arguments to find a Web3Asset
     * @example
     * // Get one Web3Asset
     * const web3Asset = await prisma.web3Asset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Web3AssetFindUniqueOrThrowArgs>(args: SelectSubset<T, Web3AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Web3AssetClient<$Result.GetResult<Prisma.$Web3AssetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Web3Asset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Web3AssetFindFirstArgs} args - Arguments to find a Web3Asset
     * @example
     * // Get one Web3Asset
     * const web3Asset = await prisma.web3Asset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Web3AssetFindFirstArgs>(args?: SelectSubset<T, Web3AssetFindFirstArgs<ExtArgs>>): Prisma__Web3AssetClient<$Result.GetResult<Prisma.$Web3AssetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Web3Asset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Web3AssetFindFirstOrThrowArgs} args - Arguments to find a Web3Asset
     * @example
     * // Get one Web3Asset
     * const web3Asset = await prisma.web3Asset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Web3AssetFindFirstOrThrowArgs>(args?: SelectSubset<T, Web3AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__Web3AssetClient<$Result.GetResult<Prisma.$Web3AssetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Web3Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Web3AssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Web3Assets
     * const web3Assets = await prisma.web3Asset.findMany()
     * 
     * // Get first 10 Web3Assets
     * const web3Assets = await prisma.web3Asset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const web3AssetWithIdOnly = await prisma.web3Asset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Web3AssetFindManyArgs>(args?: SelectSubset<T, Web3AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Web3AssetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Web3Asset.
     * @param {Web3AssetCreateArgs} args - Arguments to create a Web3Asset.
     * @example
     * // Create one Web3Asset
     * const Web3Asset = await prisma.web3Asset.create({
     *   data: {
     *     // ... data to create a Web3Asset
     *   }
     * })
     * 
     */
    create<T extends Web3AssetCreateArgs>(args: SelectSubset<T, Web3AssetCreateArgs<ExtArgs>>): Prisma__Web3AssetClient<$Result.GetResult<Prisma.$Web3AssetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Web3Assets.
     * @param {Web3AssetCreateManyArgs} args - Arguments to create many Web3Assets.
     * @example
     * // Create many Web3Assets
     * const web3Asset = await prisma.web3Asset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Web3AssetCreateManyArgs>(args?: SelectSubset<T, Web3AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Web3Assets and returns the data saved in the database.
     * @param {Web3AssetCreateManyAndReturnArgs} args - Arguments to create many Web3Assets.
     * @example
     * // Create many Web3Assets
     * const web3Asset = await prisma.web3Asset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Web3Assets and only return the `id`
     * const web3AssetWithIdOnly = await prisma.web3Asset.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Web3AssetCreateManyAndReturnArgs>(args?: SelectSubset<T, Web3AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Web3AssetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Web3Asset.
     * @param {Web3AssetDeleteArgs} args - Arguments to delete one Web3Asset.
     * @example
     * // Delete one Web3Asset
     * const Web3Asset = await prisma.web3Asset.delete({
     *   where: {
     *     // ... filter to delete one Web3Asset
     *   }
     * })
     * 
     */
    delete<T extends Web3AssetDeleteArgs>(args: SelectSubset<T, Web3AssetDeleteArgs<ExtArgs>>): Prisma__Web3AssetClient<$Result.GetResult<Prisma.$Web3AssetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Web3Asset.
     * @param {Web3AssetUpdateArgs} args - Arguments to update one Web3Asset.
     * @example
     * // Update one Web3Asset
     * const web3Asset = await prisma.web3Asset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Web3AssetUpdateArgs>(args: SelectSubset<T, Web3AssetUpdateArgs<ExtArgs>>): Prisma__Web3AssetClient<$Result.GetResult<Prisma.$Web3AssetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Web3Assets.
     * @param {Web3AssetDeleteManyArgs} args - Arguments to filter Web3Assets to delete.
     * @example
     * // Delete a few Web3Assets
     * const { count } = await prisma.web3Asset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Web3AssetDeleteManyArgs>(args?: SelectSubset<T, Web3AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Web3Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Web3AssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Web3Assets
     * const web3Asset = await prisma.web3Asset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Web3AssetUpdateManyArgs>(args: SelectSubset<T, Web3AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Web3Asset.
     * @param {Web3AssetUpsertArgs} args - Arguments to update or create a Web3Asset.
     * @example
     * // Update or create a Web3Asset
     * const web3Asset = await prisma.web3Asset.upsert({
     *   create: {
     *     // ... data to create a Web3Asset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Web3Asset we want to update
     *   }
     * })
     */
    upsert<T extends Web3AssetUpsertArgs>(args: SelectSubset<T, Web3AssetUpsertArgs<ExtArgs>>): Prisma__Web3AssetClient<$Result.GetResult<Prisma.$Web3AssetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Web3Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Web3AssetCountArgs} args - Arguments to filter Web3Assets to count.
     * @example
     * // Count the number of Web3Assets
     * const count = await prisma.web3Asset.count({
     *   where: {
     *     // ... the filter for the Web3Assets we want to count
     *   }
     * })
    **/
    count<T extends Web3AssetCountArgs>(
      args?: Subset<T, Web3AssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Web3AssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Web3Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Web3AssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Web3AssetAggregateArgs>(args: Subset<T, Web3AssetAggregateArgs>): Prisma.PrismaPromise<GetWeb3AssetAggregateType<T>>

    /**
     * Group by Web3Asset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Web3AssetGroupByArgs} args - Group by arguments.
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
      T extends Web3AssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Web3AssetGroupByArgs['orderBy'] }
        : { orderBy?: Web3AssetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Web3AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeb3AssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Web3Asset model
   */
  readonly fields: Web3AssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Web3Asset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Web3AssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends Web3Asset$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Web3Asset$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    linkPages<T extends Web3Asset$linkPagesArgs<ExtArgs> = {}>(args?: Subset<T, Web3Asset$linkPagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPagePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Web3Asset model
   */ 
  interface Web3AssetFieldRefs {
    readonly id: FieldRef<"Web3Asset", 'String'>
    readonly type: FieldRef<"Web3Asset", 'AssetType'>
    readonly chain: FieldRef<"Web3Asset", 'String'>
    readonly provider: FieldRef<"Web3Asset", 'String'>
    readonly walletAddress: FieldRef<"Web3Asset", 'String'>
    readonly contractAddress: FieldRef<"Web3Asset", 'String'>
    readonly tokenId: FieldRef<"Web3Asset", 'String'>
    readonly name: FieldRef<"Web3Asset", 'String'>
    readonly symbol: FieldRef<"Web3Asset", 'String'>
    readonly amount: FieldRef<"Web3Asset", 'Float'>
    readonly decimals: FieldRef<"Web3Asset", 'Int'>
    readonly metadata: FieldRef<"Web3Asset", 'Json'>
    readonly imageUrl: FieldRef<"Web3Asset", 'String'>
    readonly externalUrl: FieldRef<"Web3Asset", 'String'>
    readonly ownerOf: FieldRef<"Web3Asset", 'String'>
    readonly lastUpdated: FieldRef<"Web3Asset", 'DateTime'>
    readonly blockNumber: FieldRef<"Web3Asset", 'String'>
    readonly verified: FieldRef<"Web3Asset", 'Boolean'>
    readonly createdAt: FieldRef<"Web3Asset", 'DateTime'>
    readonly updatedAt: FieldRef<"Web3Asset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Web3Asset findUnique
   */
  export type Web3AssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3Asset
     */
    select?: Web3AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3AssetInclude<ExtArgs> | null
    /**
     * Filter, which Web3Asset to fetch.
     */
    where: Web3AssetWhereUniqueInput
  }

  /**
   * Web3Asset findUniqueOrThrow
   */
  export type Web3AssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3Asset
     */
    select?: Web3AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3AssetInclude<ExtArgs> | null
    /**
     * Filter, which Web3Asset to fetch.
     */
    where: Web3AssetWhereUniqueInput
  }

  /**
   * Web3Asset findFirst
   */
  export type Web3AssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3Asset
     */
    select?: Web3AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3AssetInclude<ExtArgs> | null
    /**
     * Filter, which Web3Asset to fetch.
     */
    where?: Web3AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Web3Assets to fetch.
     */
    orderBy?: Web3AssetOrderByWithRelationInput | Web3AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Web3Assets.
     */
    cursor?: Web3AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Web3Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Web3Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Web3Assets.
     */
    distinct?: Web3AssetScalarFieldEnum | Web3AssetScalarFieldEnum[]
  }

  /**
   * Web3Asset findFirstOrThrow
   */
  export type Web3AssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3Asset
     */
    select?: Web3AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3AssetInclude<ExtArgs> | null
    /**
     * Filter, which Web3Asset to fetch.
     */
    where?: Web3AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Web3Assets to fetch.
     */
    orderBy?: Web3AssetOrderByWithRelationInput | Web3AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Web3Assets.
     */
    cursor?: Web3AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Web3Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Web3Assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Web3Assets.
     */
    distinct?: Web3AssetScalarFieldEnum | Web3AssetScalarFieldEnum[]
  }

  /**
   * Web3Asset findMany
   */
  export type Web3AssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3Asset
     */
    select?: Web3AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3AssetInclude<ExtArgs> | null
    /**
     * Filter, which Web3Assets to fetch.
     */
    where?: Web3AssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Web3Assets to fetch.
     */
    orderBy?: Web3AssetOrderByWithRelationInput | Web3AssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Web3Assets.
     */
    cursor?: Web3AssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Web3Assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Web3Assets.
     */
    skip?: number
    distinct?: Web3AssetScalarFieldEnum | Web3AssetScalarFieldEnum[]
  }

  /**
   * Web3Asset create
   */
  export type Web3AssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3Asset
     */
    select?: Web3AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3AssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Web3Asset.
     */
    data: XOR<Web3AssetCreateInput, Web3AssetUncheckedCreateInput>
  }

  /**
   * Web3Asset createMany
   */
  export type Web3AssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Web3Assets.
     */
    data: Web3AssetCreateManyInput | Web3AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Web3Asset createManyAndReturn
   */
  export type Web3AssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3Asset
     */
    select?: Web3AssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Web3Assets.
     */
    data: Web3AssetCreateManyInput | Web3AssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Web3Asset update
   */
  export type Web3AssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3Asset
     */
    select?: Web3AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3AssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Web3Asset.
     */
    data: XOR<Web3AssetUpdateInput, Web3AssetUncheckedUpdateInput>
    /**
     * Choose, which Web3Asset to update.
     */
    where: Web3AssetWhereUniqueInput
  }

  /**
   * Web3Asset updateMany
   */
  export type Web3AssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Web3Assets.
     */
    data: XOR<Web3AssetUpdateManyMutationInput, Web3AssetUncheckedUpdateManyInput>
    /**
     * Filter which Web3Assets to update
     */
    where?: Web3AssetWhereInput
  }

  /**
   * Web3Asset upsert
   */
  export type Web3AssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3Asset
     */
    select?: Web3AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3AssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Web3Asset to update in case it exists.
     */
    where: Web3AssetWhereUniqueInput
    /**
     * In case the Web3Asset found by the `where` argument doesn't exist, create a new Web3Asset with this data.
     */
    create: XOR<Web3AssetCreateInput, Web3AssetUncheckedCreateInput>
    /**
     * In case the Web3Asset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Web3AssetUpdateInput, Web3AssetUncheckedUpdateInput>
  }

  /**
   * Web3Asset delete
   */
  export type Web3AssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3Asset
     */
    select?: Web3AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3AssetInclude<ExtArgs> | null
    /**
     * Filter which Web3Asset to delete.
     */
    where: Web3AssetWhereUniqueInput
  }

  /**
   * Web3Asset deleteMany
   */
  export type Web3AssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Web3Assets to delete
     */
    where?: Web3AssetWhereInput
  }

  /**
   * Web3Asset.accounts
   */
  export type Web3Asset$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Web3Asset.linkPages
   */
  export type Web3Asset$linkPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPage
     */
    select?: LinkPageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPageInclude<ExtArgs> | null
    where?: LinkPageWhereInput
    orderBy?: LinkPageOrderByWithRelationInput | LinkPageOrderByWithRelationInput[]
    cursor?: LinkPageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkPageScalarFieldEnum | LinkPageScalarFieldEnum[]
  }

  /**
   * Web3Asset without action
   */
  export type Web3AssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3Asset
     */
    select?: Web3AssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3AssetInclude<ExtArgs> | null
  }


  /**
   * Model Web3CryptoAsset
   */

  export type AggregateWeb3CryptoAsset = {
    _count: Web3CryptoAssetCountAggregateOutputType | null
    _avg: Web3CryptoAssetAvgAggregateOutputType | null
    _sum: Web3CryptoAssetSumAggregateOutputType | null
    _min: Web3CryptoAssetMinAggregateOutputType | null
    _max: Web3CryptoAssetMaxAggregateOutputType | null
  }

  export type Web3CryptoAssetAvgAggregateOutputType = {
    decimals: number | null
    balance: number | null
    usdPrice: number | null
    usdValue: number | null
    usdPrice24hrPercentChange: number | null
    usdValue24hrUsdChange: number | null
    holders: number | null
  }

  export type Web3CryptoAssetSumAggregateOutputType = {
    decimals: number | null
    balance: number | null
    usdPrice: number | null
    usdValue: number | null
    usdPrice24hrPercentChange: number | null
    usdValue24hrUsdChange: number | null
    holders: number | null
  }

  export type Web3CryptoAssetMinAggregateOutputType = {
    id: string | null
    type: $Enums.AssetType | null
    walletAddress: string | null
    contractAddress: string | null
    symbol: string | null
    name: string | null
    logo: string | null
    decimals: number | null
    balance: number | null
    balanceFormatted: string | null
    usdPrice: number | null
    usdValue: number | null
    usdPrice24hrPercentChange: number | null
    usdValue24hrUsdChange: number | null
    possibleSpam: boolean | null
    verifiedContract: boolean | null
    nativeToken: boolean | null
    holders: number | null
    chainId: string | null
    blockchain: string | null
    provider: string | null
    network: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Web3CryptoAssetMaxAggregateOutputType = {
    id: string | null
    type: $Enums.AssetType | null
    walletAddress: string | null
    contractAddress: string | null
    symbol: string | null
    name: string | null
    logo: string | null
    decimals: number | null
    balance: number | null
    balanceFormatted: string | null
    usdPrice: number | null
    usdValue: number | null
    usdPrice24hrPercentChange: number | null
    usdValue24hrUsdChange: number | null
    possibleSpam: boolean | null
    verifiedContract: boolean | null
    nativeToken: boolean | null
    holders: number | null
    chainId: string | null
    blockchain: string | null
    provider: string | null
    network: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Web3CryptoAssetCountAggregateOutputType = {
    id: number
    type: number
    walletAddress: number
    contractAddress: number
    symbol: number
    name: number
    logo: number
    decimals: number
    balance: number
    balanceFormatted: number
    usdPrice: number
    usdValue: number
    usdPrice24hrPercentChange: number
    usdValue24hrUsdChange: number
    possibleSpam: number
    verifiedContract: number
    nativeToken: number
    holders: number
    chainId: number
    blockchain: number
    provider: number
    network: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Web3CryptoAssetAvgAggregateInputType = {
    decimals?: true
    balance?: true
    usdPrice?: true
    usdValue?: true
    usdPrice24hrPercentChange?: true
    usdValue24hrUsdChange?: true
    holders?: true
  }

  export type Web3CryptoAssetSumAggregateInputType = {
    decimals?: true
    balance?: true
    usdPrice?: true
    usdValue?: true
    usdPrice24hrPercentChange?: true
    usdValue24hrUsdChange?: true
    holders?: true
  }

  export type Web3CryptoAssetMinAggregateInputType = {
    id?: true
    type?: true
    walletAddress?: true
    contractAddress?: true
    symbol?: true
    name?: true
    logo?: true
    decimals?: true
    balance?: true
    balanceFormatted?: true
    usdPrice?: true
    usdValue?: true
    usdPrice24hrPercentChange?: true
    usdValue24hrUsdChange?: true
    possibleSpam?: true
    verifiedContract?: true
    nativeToken?: true
    holders?: true
    chainId?: true
    blockchain?: true
    provider?: true
    network?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Web3CryptoAssetMaxAggregateInputType = {
    id?: true
    type?: true
    walletAddress?: true
    contractAddress?: true
    symbol?: true
    name?: true
    logo?: true
    decimals?: true
    balance?: true
    balanceFormatted?: true
    usdPrice?: true
    usdValue?: true
    usdPrice24hrPercentChange?: true
    usdValue24hrUsdChange?: true
    possibleSpam?: true
    verifiedContract?: true
    nativeToken?: true
    holders?: true
    chainId?: true
    blockchain?: true
    provider?: true
    network?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Web3CryptoAssetCountAggregateInputType = {
    id?: true
    type?: true
    walletAddress?: true
    contractAddress?: true
    symbol?: true
    name?: true
    logo?: true
    decimals?: true
    balance?: true
    balanceFormatted?: true
    usdPrice?: true
    usdValue?: true
    usdPrice24hrPercentChange?: true
    usdValue24hrUsdChange?: true
    possibleSpam?: true
    verifiedContract?: true
    nativeToken?: true
    holders?: true
    chainId?: true
    blockchain?: true
    provider?: true
    network?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Web3CryptoAssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Web3CryptoAsset to aggregate.
     */
    where?: Web3CryptoAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Web3CryptoAssets to fetch.
     */
    orderBy?: Web3CryptoAssetOrderByWithRelationInput | Web3CryptoAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Web3CryptoAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Web3CryptoAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Web3CryptoAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Web3CryptoAssets
    **/
    _count?: true | Web3CryptoAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Web3CryptoAssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Web3CryptoAssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Web3CryptoAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Web3CryptoAssetMaxAggregateInputType
  }

  export type GetWeb3CryptoAssetAggregateType<T extends Web3CryptoAssetAggregateArgs> = {
        [P in keyof T & keyof AggregateWeb3CryptoAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeb3CryptoAsset[P]>
      : GetScalarType<T[P], AggregateWeb3CryptoAsset[P]>
  }




  export type Web3CryptoAssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Web3CryptoAssetWhereInput
    orderBy?: Web3CryptoAssetOrderByWithAggregationInput | Web3CryptoAssetOrderByWithAggregationInput[]
    by: Web3CryptoAssetScalarFieldEnum[] | Web3CryptoAssetScalarFieldEnum
    having?: Web3CryptoAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Web3CryptoAssetCountAggregateInputType | true
    _avg?: Web3CryptoAssetAvgAggregateInputType
    _sum?: Web3CryptoAssetSumAggregateInputType
    _min?: Web3CryptoAssetMinAggregateInputType
    _max?: Web3CryptoAssetMaxAggregateInputType
  }

  export type Web3CryptoAssetGroupByOutputType = {
    id: string
    type: $Enums.AssetType
    walletAddress: string
    contractAddress: string
    symbol: string
    name: string
    logo: string | null
    decimals: number
    balance: number
    balanceFormatted: string | null
    usdPrice: number | null
    usdValue: number | null
    usdPrice24hrPercentChange: number | null
    usdValue24hrUsdChange: number | null
    possibleSpam: boolean | null
    verifiedContract: boolean
    nativeToken: boolean | null
    holders: number | null
    chainId: string
    blockchain: string
    provider: string
    network: string
    createdAt: Date
    updatedAt: Date
    _count: Web3CryptoAssetCountAggregateOutputType | null
    _avg: Web3CryptoAssetAvgAggregateOutputType | null
    _sum: Web3CryptoAssetSumAggregateOutputType | null
    _min: Web3CryptoAssetMinAggregateOutputType | null
    _max: Web3CryptoAssetMaxAggregateOutputType | null
  }

  type GetWeb3CryptoAssetGroupByPayload<T extends Web3CryptoAssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Web3CryptoAssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Web3CryptoAssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Web3CryptoAssetGroupByOutputType[P]>
            : GetScalarType<T[P], Web3CryptoAssetGroupByOutputType[P]>
        }
      >
    >


  export type Web3CryptoAssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    walletAddress?: boolean
    contractAddress?: boolean
    symbol?: boolean
    name?: boolean
    logo?: boolean
    decimals?: boolean
    balance?: boolean
    balanceFormatted?: boolean
    usdPrice?: boolean
    usdValue?: boolean
    usdPrice24hrPercentChange?: boolean
    usdValue24hrUsdChange?: boolean
    possibleSpam?: boolean
    verifiedContract?: boolean
    nativeToken?: boolean
    holders?: boolean
    chainId?: boolean
    blockchain?: boolean
    provider?: boolean
    network?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | Web3CryptoAsset$accountsArgs<ExtArgs>
    linkPages?: boolean | Web3CryptoAsset$linkPagesArgs<ExtArgs>
    _count?: boolean | Web3CryptoAssetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["web3CryptoAsset"]>

  export type Web3CryptoAssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    walletAddress?: boolean
    contractAddress?: boolean
    symbol?: boolean
    name?: boolean
    logo?: boolean
    decimals?: boolean
    balance?: boolean
    balanceFormatted?: boolean
    usdPrice?: boolean
    usdValue?: boolean
    usdPrice24hrPercentChange?: boolean
    usdValue24hrUsdChange?: boolean
    possibleSpam?: boolean
    verifiedContract?: boolean
    nativeToken?: boolean
    holders?: boolean
    chainId?: boolean
    blockchain?: boolean
    provider?: boolean
    network?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["web3CryptoAsset"]>

  export type Web3CryptoAssetSelectScalar = {
    id?: boolean
    type?: boolean
    walletAddress?: boolean
    contractAddress?: boolean
    symbol?: boolean
    name?: boolean
    logo?: boolean
    decimals?: boolean
    balance?: boolean
    balanceFormatted?: boolean
    usdPrice?: boolean
    usdValue?: boolean
    usdPrice24hrPercentChange?: boolean
    usdValue24hrUsdChange?: boolean
    possibleSpam?: boolean
    verifiedContract?: boolean
    nativeToken?: boolean
    holders?: boolean
    chainId?: boolean
    blockchain?: boolean
    provider?: boolean
    network?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Web3CryptoAssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | Web3CryptoAsset$accountsArgs<ExtArgs>
    linkPages?: boolean | Web3CryptoAsset$linkPagesArgs<ExtArgs>
    _count?: boolean | Web3CryptoAssetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Web3CryptoAssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Web3CryptoAssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Web3CryptoAsset"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      linkPages: Prisma.$LinkPagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.AssetType
      walletAddress: string
      contractAddress: string
      symbol: string
      name: string
      logo: string | null
      decimals: number
      balance: number
      balanceFormatted: string | null
      usdPrice: number | null
      usdValue: number | null
      usdPrice24hrPercentChange: number | null
      usdValue24hrUsdChange: number | null
      possibleSpam: boolean | null
      verifiedContract: boolean
      nativeToken: boolean | null
      holders: number | null
      chainId: string
      blockchain: string
      provider: string
      network: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["web3CryptoAsset"]>
    composites: {}
  }

  type Web3CryptoAssetGetPayload<S extends boolean | null | undefined | Web3CryptoAssetDefaultArgs> = $Result.GetResult<Prisma.$Web3CryptoAssetPayload, S>

  type Web3CryptoAssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<Web3CryptoAssetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Web3CryptoAssetCountAggregateInputType | true
    }

  export interface Web3CryptoAssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Web3CryptoAsset'], meta: { name: 'Web3CryptoAsset' } }
    /**
     * Find zero or one Web3CryptoAsset that matches the filter.
     * @param {Web3CryptoAssetFindUniqueArgs} args - Arguments to find a Web3CryptoAsset
     * @example
     * // Get one Web3CryptoAsset
     * const web3CryptoAsset = await prisma.web3CryptoAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Web3CryptoAssetFindUniqueArgs>(args: SelectSubset<T, Web3CryptoAssetFindUniqueArgs<ExtArgs>>): Prisma__Web3CryptoAssetClient<$Result.GetResult<Prisma.$Web3CryptoAssetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Web3CryptoAsset that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {Web3CryptoAssetFindUniqueOrThrowArgs} args - Arguments to find a Web3CryptoAsset
     * @example
     * // Get one Web3CryptoAsset
     * const web3CryptoAsset = await prisma.web3CryptoAsset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Web3CryptoAssetFindUniqueOrThrowArgs>(args: SelectSubset<T, Web3CryptoAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Web3CryptoAssetClient<$Result.GetResult<Prisma.$Web3CryptoAssetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Web3CryptoAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Web3CryptoAssetFindFirstArgs} args - Arguments to find a Web3CryptoAsset
     * @example
     * // Get one Web3CryptoAsset
     * const web3CryptoAsset = await prisma.web3CryptoAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Web3CryptoAssetFindFirstArgs>(args?: SelectSubset<T, Web3CryptoAssetFindFirstArgs<ExtArgs>>): Prisma__Web3CryptoAssetClient<$Result.GetResult<Prisma.$Web3CryptoAssetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Web3CryptoAsset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Web3CryptoAssetFindFirstOrThrowArgs} args - Arguments to find a Web3CryptoAsset
     * @example
     * // Get one Web3CryptoAsset
     * const web3CryptoAsset = await prisma.web3CryptoAsset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Web3CryptoAssetFindFirstOrThrowArgs>(args?: SelectSubset<T, Web3CryptoAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__Web3CryptoAssetClient<$Result.GetResult<Prisma.$Web3CryptoAssetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Web3CryptoAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Web3CryptoAssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Web3CryptoAssets
     * const web3CryptoAssets = await prisma.web3CryptoAsset.findMany()
     * 
     * // Get first 10 Web3CryptoAssets
     * const web3CryptoAssets = await prisma.web3CryptoAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const web3CryptoAssetWithIdOnly = await prisma.web3CryptoAsset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Web3CryptoAssetFindManyArgs>(args?: SelectSubset<T, Web3CryptoAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Web3CryptoAssetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Web3CryptoAsset.
     * @param {Web3CryptoAssetCreateArgs} args - Arguments to create a Web3CryptoAsset.
     * @example
     * // Create one Web3CryptoAsset
     * const Web3CryptoAsset = await prisma.web3CryptoAsset.create({
     *   data: {
     *     // ... data to create a Web3CryptoAsset
     *   }
     * })
     * 
     */
    create<T extends Web3CryptoAssetCreateArgs>(args: SelectSubset<T, Web3CryptoAssetCreateArgs<ExtArgs>>): Prisma__Web3CryptoAssetClient<$Result.GetResult<Prisma.$Web3CryptoAssetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Web3CryptoAssets.
     * @param {Web3CryptoAssetCreateManyArgs} args - Arguments to create many Web3CryptoAssets.
     * @example
     * // Create many Web3CryptoAssets
     * const web3CryptoAsset = await prisma.web3CryptoAsset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Web3CryptoAssetCreateManyArgs>(args?: SelectSubset<T, Web3CryptoAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Web3CryptoAssets and returns the data saved in the database.
     * @param {Web3CryptoAssetCreateManyAndReturnArgs} args - Arguments to create many Web3CryptoAssets.
     * @example
     * // Create many Web3CryptoAssets
     * const web3CryptoAsset = await prisma.web3CryptoAsset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Web3CryptoAssets and only return the `id`
     * const web3CryptoAssetWithIdOnly = await prisma.web3CryptoAsset.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Web3CryptoAssetCreateManyAndReturnArgs>(args?: SelectSubset<T, Web3CryptoAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Web3CryptoAssetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Web3CryptoAsset.
     * @param {Web3CryptoAssetDeleteArgs} args - Arguments to delete one Web3CryptoAsset.
     * @example
     * // Delete one Web3CryptoAsset
     * const Web3CryptoAsset = await prisma.web3CryptoAsset.delete({
     *   where: {
     *     // ... filter to delete one Web3CryptoAsset
     *   }
     * })
     * 
     */
    delete<T extends Web3CryptoAssetDeleteArgs>(args: SelectSubset<T, Web3CryptoAssetDeleteArgs<ExtArgs>>): Prisma__Web3CryptoAssetClient<$Result.GetResult<Prisma.$Web3CryptoAssetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Web3CryptoAsset.
     * @param {Web3CryptoAssetUpdateArgs} args - Arguments to update one Web3CryptoAsset.
     * @example
     * // Update one Web3CryptoAsset
     * const web3CryptoAsset = await prisma.web3CryptoAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Web3CryptoAssetUpdateArgs>(args: SelectSubset<T, Web3CryptoAssetUpdateArgs<ExtArgs>>): Prisma__Web3CryptoAssetClient<$Result.GetResult<Prisma.$Web3CryptoAssetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Web3CryptoAssets.
     * @param {Web3CryptoAssetDeleteManyArgs} args - Arguments to filter Web3CryptoAssets to delete.
     * @example
     * // Delete a few Web3CryptoAssets
     * const { count } = await prisma.web3CryptoAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Web3CryptoAssetDeleteManyArgs>(args?: SelectSubset<T, Web3CryptoAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Web3CryptoAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Web3CryptoAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Web3CryptoAssets
     * const web3CryptoAsset = await prisma.web3CryptoAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Web3CryptoAssetUpdateManyArgs>(args: SelectSubset<T, Web3CryptoAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Web3CryptoAsset.
     * @param {Web3CryptoAssetUpsertArgs} args - Arguments to update or create a Web3CryptoAsset.
     * @example
     * // Update or create a Web3CryptoAsset
     * const web3CryptoAsset = await prisma.web3CryptoAsset.upsert({
     *   create: {
     *     // ... data to create a Web3CryptoAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Web3CryptoAsset we want to update
     *   }
     * })
     */
    upsert<T extends Web3CryptoAssetUpsertArgs>(args: SelectSubset<T, Web3CryptoAssetUpsertArgs<ExtArgs>>): Prisma__Web3CryptoAssetClient<$Result.GetResult<Prisma.$Web3CryptoAssetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Web3CryptoAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Web3CryptoAssetCountArgs} args - Arguments to filter Web3CryptoAssets to count.
     * @example
     * // Count the number of Web3CryptoAssets
     * const count = await prisma.web3CryptoAsset.count({
     *   where: {
     *     // ... the filter for the Web3CryptoAssets we want to count
     *   }
     * })
    **/
    count<T extends Web3CryptoAssetCountArgs>(
      args?: Subset<T, Web3CryptoAssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Web3CryptoAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Web3CryptoAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Web3CryptoAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Web3CryptoAssetAggregateArgs>(args: Subset<T, Web3CryptoAssetAggregateArgs>): Prisma.PrismaPromise<GetWeb3CryptoAssetAggregateType<T>>

    /**
     * Group by Web3CryptoAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Web3CryptoAssetGroupByArgs} args - Group by arguments.
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
      T extends Web3CryptoAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Web3CryptoAssetGroupByArgs['orderBy'] }
        : { orderBy?: Web3CryptoAssetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Web3CryptoAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeb3CryptoAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Web3CryptoAsset model
   */
  readonly fields: Web3CryptoAssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Web3CryptoAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Web3CryptoAssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends Web3CryptoAsset$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Web3CryptoAsset$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    linkPages<T extends Web3CryptoAsset$linkPagesArgs<ExtArgs> = {}>(args?: Subset<T, Web3CryptoAsset$linkPagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPagePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Web3CryptoAsset model
   */ 
  interface Web3CryptoAssetFieldRefs {
    readonly id: FieldRef<"Web3CryptoAsset", 'String'>
    readonly type: FieldRef<"Web3CryptoAsset", 'AssetType'>
    readonly walletAddress: FieldRef<"Web3CryptoAsset", 'String'>
    readonly contractAddress: FieldRef<"Web3CryptoAsset", 'String'>
    readonly symbol: FieldRef<"Web3CryptoAsset", 'String'>
    readonly name: FieldRef<"Web3CryptoAsset", 'String'>
    readonly logo: FieldRef<"Web3CryptoAsset", 'String'>
    readonly decimals: FieldRef<"Web3CryptoAsset", 'Int'>
    readonly balance: FieldRef<"Web3CryptoAsset", 'Float'>
    readonly balanceFormatted: FieldRef<"Web3CryptoAsset", 'String'>
    readonly usdPrice: FieldRef<"Web3CryptoAsset", 'Float'>
    readonly usdValue: FieldRef<"Web3CryptoAsset", 'Float'>
    readonly usdPrice24hrPercentChange: FieldRef<"Web3CryptoAsset", 'Float'>
    readonly usdValue24hrUsdChange: FieldRef<"Web3CryptoAsset", 'Float'>
    readonly possibleSpam: FieldRef<"Web3CryptoAsset", 'Boolean'>
    readonly verifiedContract: FieldRef<"Web3CryptoAsset", 'Boolean'>
    readonly nativeToken: FieldRef<"Web3CryptoAsset", 'Boolean'>
    readonly holders: FieldRef<"Web3CryptoAsset", 'Int'>
    readonly chainId: FieldRef<"Web3CryptoAsset", 'String'>
    readonly blockchain: FieldRef<"Web3CryptoAsset", 'String'>
    readonly provider: FieldRef<"Web3CryptoAsset", 'String'>
    readonly network: FieldRef<"Web3CryptoAsset", 'String'>
    readonly createdAt: FieldRef<"Web3CryptoAsset", 'DateTime'>
    readonly updatedAt: FieldRef<"Web3CryptoAsset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Web3CryptoAsset findUnique
   */
  export type Web3CryptoAssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3CryptoAsset
     */
    select?: Web3CryptoAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3CryptoAssetInclude<ExtArgs> | null
    /**
     * Filter, which Web3CryptoAsset to fetch.
     */
    where: Web3CryptoAssetWhereUniqueInput
  }

  /**
   * Web3CryptoAsset findUniqueOrThrow
   */
  export type Web3CryptoAssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3CryptoAsset
     */
    select?: Web3CryptoAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3CryptoAssetInclude<ExtArgs> | null
    /**
     * Filter, which Web3CryptoAsset to fetch.
     */
    where: Web3CryptoAssetWhereUniqueInput
  }

  /**
   * Web3CryptoAsset findFirst
   */
  export type Web3CryptoAssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3CryptoAsset
     */
    select?: Web3CryptoAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3CryptoAssetInclude<ExtArgs> | null
    /**
     * Filter, which Web3CryptoAsset to fetch.
     */
    where?: Web3CryptoAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Web3CryptoAssets to fetch.
     */
    orderBy?: Web3CryptoAssetOrderByWithRelationInput | Web3CryptoAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Web3CryptoAssets.
     */
    cursor?: Web3CryptoAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Web3CryptoAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Web3CryptoAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Web3CryptoAssets.
     */
    distinct?: Web3CryptoAssetScalarFieldEnum | Web3CryptoAssetScalarFieldEnum[]
  }

  /**
   * Web3CryptoAsset findFirstOrThrow
   */
  export type Web3CryptoAssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3CryptoAsset
     */
    select?: Web3CryptoAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3CryptoAssetInclude<ExtArgs> | null
    /**
     * Filter, which Web3CryptoAsset to fetch.
     */
    where?: Web3CryptoAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Web3CryptoAssets to fetch.
     */
    orderBy?: Web3CryptoAssetOrderByWithRelationInput | Web3CryptoAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Web3CryptoAssets.
     */
    cursor?: Web3CryptoAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Web3CryptoAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Web3CryptoAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Web3CryptoAssets.
     */
    distinct?: Web3CryptoAssetScalarFieldEnum | Web3CryptoAssetScalarFieldEnum[]
  }

  /**
   * Web3CryptoAsset findMany
   */
  export type Web3CryptoAssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3CryptoAsset
     */
    select?: Web3CryptoAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3CryptoAssetInclude<ExtArgs> | null
    /**
     * Filter, which Web3CryptoAssets to fetch.
     */
    where?: Web3CryptoAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Web3CryptoAssets to fetch.
     */
    orderBy?: Web3CryptoAssetOrderByWithRelationInput | Web3CryptoAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Web3CryptoAssets.
     */
    cursor?: Web3CryptoAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Web3CryptoAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Web3CryptoAssets.
     */
    skip?: number
    distinct?: Web3CryptoAssetScalarFieldEnum | Web3CryptoAssetScalarFieldEnum[]
  }

  /**
   * Web3CryptoAsset create
   */
  export type Web3CryptoAssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3CryptoAsset
     */
    select?: Web3CryptoAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3CryptoAssetInclude<ExtArgs> | null
    /**
     * The data needed to create a Web3CryptoAsset.
     */
    data: XOR<Web3CryptoAssetCreateInput, Web3CryptoAssetUncheckedCreateInput>
  }

  /**
   * Web3CryptoAsset createMany
   */
  export type Web3CryptoAssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Web3CryptoAssets.
     */
    data: Web3CryptoAssetCreateManyInput | Web3CryptoAssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Web3CryptoAsset createManyAndReturn
   */
  export type Web3CryptoAssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3CryptoAsset
     */
    select?: Web3CryptoAssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Web3CryptoAssets.
     */
    data: Web3CryptoAssetCreateManyInput | Web3CryptoAssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Web3CryptoAsset update
   */
  export type Web3CryptoAssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3CryptoAsset
     */
    select?: Web3CryptoAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3CryptoAssetInclude<ExtArgs> | null
    /**
     * The data needed to update a Web3CryptoAsset.
     */
    data: XOR<Web3CryptoAssetUpdateInput, Web3CryptoAssetUncheckedUpdateInput>
    /**
     * Choose, which Web3CryptoAsset to update.
     */
    where: Web3CryptoAssetWhereUniqueInput
  }

  /**
   * Web3CryptoAsset updateMany
   */
  export type Web3CryptoAssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Web3CryptoAssets.
     */
    data: XOR<Web3CryptoAssetUpdateManyMutationInput, Web3CryptoAssetUncheckedUpdateManyInput>
    /**
     * Filter which Web3CryptoAssets to update
     */
    where?: Web3CryptoAssetWhereInput
  }

  /**
   * Web3CryptoAsset upsert
   */
  export type Web3CryptoAssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3CryptoAsset
     */
    select?: Web3CryptoAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3CryptoAssetInclude<ExtArgs> | null
    /**
     * The filter to search for the Web3CryptoAsset to update in case it exists.
     */
    where: Web3CryptoAssetWhereUniqueInput
    /**
     * In case the Web3CryptoAsset found by the `where` argument doesn't exist, create a new Web3CryptoAsset with this data.
     */
    create: XOR<Web3CryptoAssetCreateInput, Web3CryptoAssetUncheckedCreateInput>
    /**
     * In case the Web3CryptoAsset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Web3CryptoAssetUpdateInput, Web3CryptoAssetUncheckedUpdateInput>
  }

  /**
   * Web3CryptoAsset delete
   */
  export type Web3CryptoAssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3CryptoAsset
     */
    select?: Web3CryptoAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3CryptoAssetInclude<ExtArgs> | null
    /**
     * Filter which Web3CryptoAsset to delete.
     */
    where: Web3CryptoAssetWhereUniqueInput
  }

  /**
   * Web3CryptoAsset deleteMany
   */
  export type Web3CryptoAssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Web3CryptoAssets to delete
     */
    where?: Web3CryptoAssetWhereInput
  }

  /**
   * Web3CryptoAsset.accounts
   */
  export type Web3CryptoAsset$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Web3CryptoAsset.linkPages
   */
  export type Web3CryptoAsset$linkPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkPage
     */
    select?: LinkPageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkPageInclude<ExtArgs> | null
    where?: LinkPageWhereInput
    orderBy?: LinkPageOrderByWithRelationInput | LinkPageOrderByWithRelationInput[]
    cursor?: LinkPageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkPageScalarFieldEnum | LinkPageScalarFieldEnum[]
  }

  /**
   * Web3CryptoAsset without action
   */
  export type Web3CryptoAssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Web3CryptoAsset
     */
    select?: Web3CryptoAssetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Web3CryptoAssetInclude<ExtArgs> | null
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
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    role: 'role',
    isTwoFactorEnabled: 'isTwoFactorEnabled',
    handle: 'handle'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LinkPageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    description: 'description',
    image: 'image',
    userId: 'userId',
    template: 'template',
    isComplete: 'isComplete',
    isPublic: 'isPublic',
    isTemplate: 'isTemplate',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isEditing: 'isEditing',
    profile: 'profile'
  };

  export type LinkPageScalarFieldEnum = (typeof LinkPageScalarFieldEnum)[keyof typeof LinkPageScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    profile: 'profile',
    achievement: 'achievement',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expires: 'expires'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const LoginTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expires: 'expires'
  };

  export type LoginTokenScalarFieldEnum = (typeof LoginTokenScalarFieldEnum)[keyof typeof LoginTokenScalarFieldEnum]


  export const TwoFactorTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expires: 'expires'
  };

  export type TwoFactorTokenScalarFieldEnum = (typeof TwoFactorTokenScalarFieldEnum)[keyof typeof TwoFactorTokenScalarFieldEnum]


  export const TwoFactorConfirmationScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type TwoFactorConfirmationScalarFieldEnum = (typeof TwoFactorConfirmationScalarFieldEnum)[keyof typeof TwoFactorConfirmationScalarFieldEnum]


  export const Web3AssetScalarFieldEnum: {
    id: 'id',
    type: 'type',
    chain: 'chain',
    provider: 'provider',
    walletAddress: 'walletAddress',
    contractAddress: 'contractAddress',
    tokenId: 'tokenId',
    name: 'name',
    symbol: 'symbol',
    amount: 'amount',
    decimals: 'decimals',
    metadata: 'metadata',
    imageUrl: 'imageUrl',
    externalUrl: 'externalUrl',
    ownerOf: 'ownerOf',
    lastUpdated: 'lastUpdated',
    blockNumber: 'blockNumber',
    verified: 'verified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Web3AssetScalarFieldEnum = (typeof Web3AssetScalarFieldEnum)[keyof typeof Web3AssetScalarFieldEnum]


  export const Web3CryptoAssetScalarFieldEnum: {
    id: 'id',
    type: 'type',
    walletAddress: 'walletAddress',
    contractAddress: 'contractAddress',
    symbol: 'symbol',
    name: 'name',
    logo: 'logo',
    decimals: 'decimals',
    balance: 'balance',
    balanceFormatted: 'balanceFormatted',
    usdPrice: 'usdPrice',
    usdValue: 'usdValue',
    usdPrice24hrPercentChange: 'usdPrice24hrPercentChange',
    usdValue24hrUsdChange: 'usdValue24hrUsdChange',
    possibleSpam: 'possibleSpam',
    verifiedContract: 'verifiedContract',
    nativeToken: 'nativeToken',
    holders: 'holders',
    chainId: 'chainId',
    blockchain: 'blockchain',
    provider: 'provider',
    network: 'network',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Web3CryptoAssetScalarFieldEnum = (typeof Web3CryptoAssetScalarFieldEnum)[keyof typeof Web3CryptoAssetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AssetType'
   */
  export type EnumAssetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetType'>
    


  /**
   * Reference to a field of type 'AssetType[]'
   */
  export type ListEnumAssetTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssetType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    handle?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    linkPages?: LinkPageListRelationFilter
    twoFactorConfirmation?: XOR<TwoFactorConfirmationNullableRelationFilter, TwoFactorConfirmationWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    isTwoFactorEnabled?: SortOrder
    handle?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    linkPages?: LinkPageOrderByRelationAggregateInput
    twoFactorConfirmation?: TwoFactorConfirmationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    handle?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    accounts?: AccountListRelationFilter
    linkPages?: LinkPageListRelationFilter
    twoFactorConfirmation?: XOR<TwoFactorConfirmationNullableRelationFilter, TwoFactorConfirmationWhereInput> | null
  }, "id" | "email" | "handle">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    isTwoFactorEnabled?: SortOrder
    handle?: SortOrderInput | SortOrder
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
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isTwoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    handle?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type LinkPageWhereInput = {
    AND?: LinkPageWhereInput | LinkPageWhereInput[]
    OR?: LinkPageWhereInput[]
    NOT?: LinkPageWhereInput | LinkPageWhereInput[]
    id?: StringFilter<"LinkPage"> | string
    url?: StringFilter<"LinkPage"> | string
    title?: StringNullableFilter<"LinkPage"> | string | null
    description?: StringNullableFilter<"LinkPage"> | string | null
    image?: StringNullableFilter<"LinkPage"> | string | null
    userId?: StringFilter<"LinkPage"> | string
    template?: JsonNullableFilter<"LinkPage">
    isComplete?: BoolFilter<"LinkPage"> | boolean
    isPublic?: BoolFilter<"LinkPage"> | boolean
    isTemplate?: BoolFilter<"LinkPage"> | boolean
    isPublished?: BoolFilter<"LinkPage"> | boolean
    createdAt?: DateTimeFilter<"LinkPage"> | Date | string
    updatedAt?: DateTimeFilter<"LinkPage"> | Date | string
    isEditing?: BoolFilter<"LinkPage"> | boolean
    profile?: JsonNullableFilter<"LinkPage">
    user?: XOR<UserRelationFilter, UserWhereInput>
    web3Assets?: Web3AssetListRelationFilter
    web3CryptoAssets?: Web3CryptoAssetListRelationFilter
  }

  export type LinkPageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    userId?: SortOrder
    template?: SortOrderInput | SortOrder
    isComplete?: SortOrder
    isPublic?: SortOrder
    isTemplate?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEditing?: SortOrder
    profile?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    web3Assets?: Web3AssetOrderByRelationAggregateInput
    web3CryptoAssets?: Web3CryptoAssetOrderByRelationAggregateInput
  }

  export type LinkPageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: LinkPageWhereInput | LinkPageWhereInput[]
    OR?: LinkPageWhereInput[]
    NOT?: LinkPageWhereInput | LinkPageWhereInput[]
    title?: StringNullableFilter<"LinkPage"> | string | null
    description?: StringNullableFilter<"LinkPage"> | string | null
    image?: StringNullableFilter<"LinkPage"> | string | null
    userId?: StringFilter<"LinkPage"> | string
    template?: JsonNullableFilter<"LinkPage">
    isComplete?: BoolFilter<"LinkPage"> | boolean
    isPublic?: BoolFilter<"LinkPage"> | boolean
    isTemplate?: BoolFilter<"LinkPage"> | boolean
    isPublished?: BoolFilter<"LinkPage"> | boolean
    createdAt?: DateTimeFilter<"LinkPage"> | Date | string
    updatedAt?: DateTimeFilter<"LinkPage"> | Date | string
    isEditing?: BoolFilter<"LinkPage"> | boolean
    profile?: JsonNullableFilter<"LinkPage">
    user?: XOR<UserRelationFilter, UserWhereInput>
    web3Assets?: Web3AssetListRelationFilter
    web3CryptoAssets?: Web3CryptoAssetListRelationFilter
  }, "id" | "url">

  export type LinkPageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    userId?: SortOrder
    template?: SortOrderInput | SortOrder
    isComplete?: SortOrder
    isPublic?: SortOrder
    isTemplate?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEditing?: SortOrder
    profile?: SortOrderInput | SortOrder
    _count?: LinkPageCountOrderByAggregateInput
    _max?: LinkPageMaxOrderByAggregateInput
    _min?: LinkPageMinOrderByAggregateInput
  }

  export type LinkPageScalarWhereWithAggregatesInput = {
    AND?: LinkPageScalarWhereWithAggregatesInput | LinkPageScalarWhereWithAggregatesInput[]
    OR?: LinkPageScalarWhereWithAggregatesInput[]
    NOT?: LinkPageScalarWhereWithAggregatesInput | LinkPageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LinkPage"> | string
    url?: StringWithAggregatesFilter<"LinkPage"> | string
    title?: StringNullableWithAggregatesFilter<"LinkPage"> | string | null
    description?: StringNullableWithAggregatesFilter<"LinkPage"> | string | null
    image?: StringNullableWithAggregatesFilter<"LinkPage"> | string | null
    userId?: StringWithAggregatesFilter<"LinkPage"> | string
    template?: JsonNullableWithAggregatesFilter<"LinkPage">
    isComplete?: BoolWithAggregatesFilter<"LinkPage"> | boolean
    isPublic?: BoolWithAggregatesFilter<"LinkPage"> | boolean
    isTemplate?: BoolWithAggregatesFilter<"LinkPage"> | boolean
    isPublished?: BoolWithAggregatesFilter<"LinkPage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"LinkPage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LinkPage"> | Date | string
    isEditing?: BoolWithAggregatesFilter<"LinkPage"> | boolean
    profile?: JsonNullableWithAggregatesFilter<"LinkPage">
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    profile?: JsonNullableFilter<"Account">
    achievement?: JsonNullableFilter<"Account">
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    web3Assets?: Web3AssetListRelationFilter
    web3CryptoAssets?: Web3CryptoAssetListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    profile?: SortOrderInput | SortOrder
    achievement?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    web3Assets?: Web3AssetOrderByRelationAggregateInput
    web3CryptoAssets?: Web3CryptoAssetOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    profile?: JsonNullableFilter<"Account">
    achievement?: JsonNullableFilter<"Account">
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    web3Assets?: Web3AssetListRelationFilter
    web3CryptoAssets?: Web3CryptoAssetListRelationFilter
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    profile?: SortOrderInput | SortOrder
    achievement?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    profile?: JsonNullableWithAggregatesFilter<"Account">
    achievement?: JsonNullableWithAggregatesFilter<"Account">
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    id?: StringFilter<"VerificationToken"> | string
    email?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    email_token?: VerificationTokenEmailTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    email?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "id" | "token" | "email_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationToken"> | string
    email?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    email?: StringFilter<"PasswordResetToken"> | string
    token?: StringFilter<"PasswordResetToken"> | string
    expires?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    email_token?: PasswordResetTokenEmailTokenCompoundUniqueInput
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    email?: StringFilter<"PasswordResetToken"> | string
    expires?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }, "id" | "token" | "email_token">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    email?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    token?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expires?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
  }

  export type LoginTokenWhereInput = {
    AND?: LoginTokenWhereInput | LoginTokenWhereInput[]
    OR?: LoginTokenWhereInput[]
    NOT?: LoginTokenWhereInput | LoginTokenWhereInput[]
    id?: StringFilter<"LoginToken"> | string
    email?: StringFilter<"LoginToken"> | string
    token?: StringFilter<"LoginToken"> | string
    expires?: DateTimeFilter<"LoginToken"> | Date | string
  }

  export type LoginTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type LoginTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    email_token?: LoginTokenEmailTokenCompoundUniqueInput
    AND?: LoginTokenWhereInput | LoginTokenWhereInput[]
    OR?: LoginTokenWhereInput[]
    NOT?: LoginTokenWhereInput | LoginTokenWhereInput[]
    email?: StringFilter<"LoginToken"> | string
    expires?: DateTimeFilter<"LoginToken"> | Date | string
  }, "id" | "token" | "email_token">

  export type LoginTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: LoginTokenCountOrderByAggregateInput
    _max?: LoginTokenMaxOrderByAggregateInput
    _min?: LoginTokenMinOrderByAggregateInput
  }

  export type LoginTokenScalarWhereWithAggregatesInput = {
    AND?: LoginTokenScalarWhereWithAggregatesInput | LoginTokenScalarWhereWithAggregatesInput[]
    OR?: LoginTokenScalarWhereWithAggregatesInput[]
    NOT?: LoginTokenScalarWhereWithAggregatesInput | LoginTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoginToken"> | string
    email?: StringWithAggregatesFilter<"LoginToken"> | string
    token?: StringWithAggregatesFilter<"LoginToken"> | string
    expires?: DateTimeWithAggregatesFilter<"LoginToken"> | Date | string
  }

  export type TwoFactorTokenWhereInput = {
    AND?: TwoFactorTokenWhereInput | TwoFactorTokenWhereInput[]
    OR?: TwoFactorTokenWhereInput[]
    NOT?: TwoFactorTokenWhereInput | TwoFactorTokenWhereInput[]
    id?: StringFilter<"TwoFactorToken"> | string
    email?: StringFilter<"TwoFactorToken"> | string
    token?: StringFilter<"TwoFactorToken"> | string
    expires?: DateTimeFilter<"TwoFactorToken"> | Date | string
  }

  export type TwoFactorTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type TwoFactorTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    email_token?: TwoFactorTokenEmailTokenCompoundUniqueInput
    AND?: TwoFactorTokenWhereInput | TwoFactorTokenWhereInput[]
    OR?: TwoFactorTokenWhereInput[]
    NOT?: TwoFactorTokenWhereInput | TwoFactorTokenWhereInput[]
    email?: StringFilter<"TwoFactorToken"> | string
    expires?: DateTimeFilter<"TwoFactorToken"> | Date | string
  }, "id" | "token" | "email_token">

  export type TwoFactorTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: TwoFactorTokenCountOrderByAggregateInput
    _max?: TwoFactorTokenMaxOrderByAggregateInput
    _min?: TwoFactorTokenMinOrderByAggregateInput
  }

  export type TwoFactorTokenScalarWhereWithAggregatesInput = {
    AND?: TwoFactorTokenScalarWhereWithAggregatesInput | TwoFactorTokenScalarWhereWithAggregatesInput[]
    OR?: TwoFactorTokenScalarWhereWithAggregatesInput[]
    NOT?: TwoFactorTokenScalarWhereWithAggregatesInput | TwoFactorTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TwoFactorToken"> | string
    email?: StringWithAggregatesFilter<"TwoFactorToken"> | string
    token?: StringWithAggregatesFilter<"TwoFactorToken"> | string
    expires?: DateTimeWithAggregatesFilter<"TwoFactorToken"> | Date | string
  }

  export type TwoFactorConfirmationWhereInput = {
    AND?: TwoFactorConfirmationWhereInput | TwoFactorConfirmationWhereInput[]
    OR?: TwoFactorConfirmationWhereInput[]
    NOT?: TwoFactorConfirmationWhereInput | TwoFactorConfirmationWhereInput[]
    id?: StringFilter<"TwoFactorConfirmation"> | string
    userId?: StringFilter<"TwoFactorConfirmation"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TwoFactorConfirmationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TwoFactorConfirmationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TwoFactorConfirmationWhereInput | TwoFactorConfirmationWhereInput[]
    OR?: TwoFactorConfirmationWhereInput[]
    NOT?: TwoFactorConfirmationWhereInput | TwoFactorConfirmationWhereInput[]
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TwoFactorConfirmationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: TwoFactorConfirmationCountOrderByAggregateInput
    _max?: TwoFactorConfirmationMaxOrderByAggregateInput
    _min?: TwoFactorConfirmationMinOrderByAggregateInput
  }

  export type TwoFactorConfirmationScalarWhereWithAggregatesInput = {
    AND?: TwoFactorConfirmationScalarWhereWithAggregatesInput | TwoFactorConfirmationScalarWhereWithAggregatesInput[]
    OR?: TwoFactorConfirmationScalarWhereWithAggregatesInput[]
    NOT?: TwoFactorConfirmationScalarWhereWithAggregatesInput | TwoFactorConfirmationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TwoFactorConfirmation"> | string
    userId?: StringWithAggregatesFilter<"TwoFactorConfirmation"> | string
  }

  export type Web3AssetWhereInput = {
    AND?: Web3AssetWhereInput | Web3AssetWhereInput[]
    OR?: Web3AssetWhereInput[]
    NOT?: Web3AssetWhereInput | Web3AssetWhereInput[]
    id?: StringFilter<"Web3Asset"> | string
    type?: EnumAssetTypeFilter<"Web3Asset"> | $Enums.AssetType
    chain?: StringFilter<"Web3Asset"> | string
    provider?: StringFilter<"Web3Asset"> | string
    walletAddress?: StringFilter<"Web3Asset"> | string
    contractAddress?: StringNullableFilter<"Web3Asset"> | string | null
    tokenId?: StringNullableFilter<"Web3Asset"> | string | null
    name?: StringFilter<"Web3Asset"> | string
    symbol?: StringNullableFilter<"Web3Asset"> | string | null
    amount?: FloatNullableFilter<"Web3Asset"> | number | null
    decimals?: IntNullableFilter<"Web3Asset"> | number | null
    metadata?: JsonNullableFilter<"Web3Asset">
    imageUrl?: StringNullableFilter<"Web3Asset"> | string | null
    externalUrl?: StringNullableFilter<"Web3Asset"> | string | null
    ownerOf?: StringFilter<"Web3Asset"> | string
    lastUpdated?: DateTimeFilter<"Web3Asset"> | Date | string
    blockNumber?: StringNullableFilter<"Web3Asset"> | string | null
    verified?: BoolNullableFilter<"Web3Asset"> | boolean | null
    createdAt?: DateTimeFilter<"Web3Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Web3Asset"> | Date | string
    accounts?: AccountListRelationFilter
    linkPages?: LinkPageListRelationFilter
  }

  export type Web3AssetOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    chain?: SortOrder
    provider?: SortOrder
    walletAddress?: SortOrder
    contractAddress?: SortOrderInput | SortOrder
    tokenId?: SortOrderInput | SortOrder
    name?: SortOrder
    symbol?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    decimals?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    externalUrl?: SortOrderInput | SortOrder
    ownerOf?: SortOrder
    lastUpdated?: SortOrder
    blockNumber?: SortOrderInput | SortOrder
    verified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    linkPages?: LinkPageOrderByRelationAggregateInput
  }

  export type Web3AssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Web3AssetWhereInput | Web3AssetWhereInput[]
    OR?: Web3AssetWhereInput[]
    NOT?: Web3AssetWhereInput | Web3AssetWhereInput[]
    type?: EnumAssetTypeFilter<"Web3Asset"> | $Enums.AssetType
    chain?: StringFilter<"Web3Asset"> | string
    provider?: StringFilter<"Web3Asset"> | string
    walletAddress?: StringFilter<"Web3Asset"> | string
    contractAddress?: StringNullableFilter<"Web3Asset"> | string | null
    tokenId?: StringNullableFilter<"Web3Asset"> | string | null
    name?: StringFilter<"Web3Asset"> | string
    symbol?: StringNullableFilter<"Web3Asset"> | string | null
    amount?: FloatNullableFilter<"Web3Asset"> | number | null
    decimals?: IntNullableFilter<"Web3Asset"> | number | null
    metadata?: JsonNullableFilter<"Web3Asset">
    imageUrl?: StringNullableFilter<"Web3Asset"> | string | null
    externalUrl?: StringNullableFilter<"Web3Asset"> | string | null
    ownerOf?: StringFilter<"Web3Asset"> | string
    lastUpdated?: DateTimeFilter<"Web3Asset"> | Date | string
    blockNumber?: StringNullableFilter<"Web3Asset"> | string | null
    verified?: BoolNullableFilter<"Web3Asset"> | boolean | null
    createdAt?: DateTimeFilter<"Web3Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Web3Asset"> | Date | string
    accounts?: AccountListRelationFilter
    linkPages?: LinkPageListRelationFilter
  }, "id">

  export type Web3AssetOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    chain?: SortOrder
    provider?: SortOrder
    walletAddress?: SortOrder
    contractAddress?: SortOrderInput | SortOrder
    tokenId?: SortOrderInput | SortOrder
    name?: SortOrder
    symbol?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    decimals?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    externalUrl?: SortOrderInput | SortOrder
    ownerOf?: SortOrder
    lastUpdated?: SortOrder
    blockNumber?: SortOrderInput | SortOrder
    verified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Web3AssetCountOrderByAggregateInput
    _avg?: Web3AssetAvgOrderByAggregateInput
    _max?: Web3AssetMaxOrderByAggregateInput
    _min?: Web3AssetMinOrderByAggregateInput
    _sum?: Web3AssetSumOrderByAggregateInput
  }

  export type Web3AssetScalarWhereWithAggregatesInput = {
    AND?: Web3AssetScalarWhereWithAggregatesInput | Web3AssetScalarWhereWithAggregatesInput[]
    OR?: Web3AssetScalarWhereWithAggregatesInput[]
    NOT?: Web3AssetScalarWhereWithAggregatesInput | Web3AssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Web3Asset"> | string
    type?: EnumAssetTypeWithAggregatesFilter<"Web3Asset"> | $Enums.AssetType
    chain?: StringWithAggregatesFilter<"Web3Asset"> | string
    provider?: StringWithAggregatesFilter<"Web3Asset"> | string
    walletAddress?: StringWithAggregatesFilter<"Web3Asset"> | string
    contractAddress?: StringNullableWithAggregatesFilter<"Web3Asset"> | string | null
    tokenId?: StringNullableWithAggregatesFilter<"Web3Asset"> | string | null
    name?: StringWithAggregatesFilter<"Web3Asset"> | string
    symbol?: StringNullableWithAggregatesFilter<"Web3Asset"> | string | null
    amount?: FloatNullableWithAggregatesFilter<"Web3Asset"> | number | null
    decimals?: IntNullableWithAggregatesFilter<"Web3Asset"> | number | null
    metadata?: JsonNullableWithAggregatesFilter<"Web3Asset">
    imageUrl?: StringNullableWithAggregatesFilter<"Web3Asset"> | string | null
    externalUrl?: StringNullableWithAggregatesFilter<"Web3Asset"> | string | null
    ownerOf?: StringWithAggregatesFilter<"Web3Asset"> | string
    lastUpdated?: DateTimeWithAggregatesFilter<"Web3Asset"> | Date | string
    blockNumber?: StringNullableWithAggregatesFilter<"Web3Asset"> | string | null
    verified?: BoolNullableWithAggregatesFilter<"Web3Asset"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Web3Asset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Web3Asset"> | Date | string
  }

  export type Web3CryptoAssetWhereInput = {
    AND?: Web3CryptoAssetWhereInput | Web3CryptoAssetWhereInput[]
    OR?: Web3CryptoAssetWhereInput[]
    NOT?: Web3CryptoAssetWhereInput | Web3CryptoAssetWhereInput[]
    id?: StringFilter<"Web3CryptoAsset"> | string
    type?: EnumAssetTypeFilter<"Web3CryptoAsset"> | $Enums.AssetType
    walletAddress?: StringFilter<"Web3CryptoAsset"> | string
    contractAddress?: StringFilter<"Web3CryptoAsset"> | string
    symbol?: StringFilter<"Web3CryptoAsset"> | string
    name?: StringFilter<"Web3CryptoAsset"> | string
    logo?: StringNullableFilter<"Web3CryptoAsset"> | string | null
    decimals?: IntFilter<"Web3CryptoAsset"> | number
    balance?: FloatFilter<"Web3CryptoAsset"> | number
    balanceFormatted?: StringNullableFilter<"Web3CryptoAsset"> | string | null
    usdPrice?: FloatNullableFilter<"Web3CryptoAsset"> | number | null
    usdValue?: FloatNullableFilter<"Web3CryptoAsset"> | number | null
    usdPrice24hrPercentChange?: FloatNullableFilter<"Web3CryptoAsset"> | number | null
    usdValue24hrUsdChange?: FloatNullableFilter<"Web3CryptoAsset"> | number | null
    possibleSpam?: BoolNullableFilter<"Web3CryptoAsset"> | boolean | null
    verifiedContract?: BoolFilter<"Web3CryptoAsset"> | boolean
    nativeToken?: BoolNullableFilter<"Web3CryptoAsset"> | boolean | null
    holders?: IntNullableFilter<"Web3CryptoAsset"> | number | null
    chainId?: StringFilter<"Web3CryptoAsset"> | string
    blockchain?: StringFilter<"Web3CryptoAsset"> | string
    provider?: StringFilter<"Web3CryptoAsset"> | string
    network?: StringFilter<"Web3CryptoAsset"> | string
    createdAt?: DateTimeFilter<"Web3CryptoAsset"> | Date | string
    updatedAt?: DateTimeFilter<"Web3CryptoAsset"> | Date | string
    accounts?: AccountListRelationFilter
    linkPages?: LinkPageListRelationFilter
  }

  export type Web3CryptoAssetOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    walletAddress?: SortOrder
    contractAddress?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    decimals?: SortOrder
    balance?: SortOrder
    balanceFormatted?: SortOrderInput | SortOrder
    usdPrice?: SortOrderInput | SortOrder
    usdValue?: SortOrderInput | SortOrder
    usdPrice24hrPercentChange?: SortOrderInput | SortOrder
    usdValue24hrUsdChange?: SortOrderInput | SortOrder
    possibleSpam?: SortOrderInput | SortOrder
    verifiedContract?: SortOrder
    nativeToken?: SortOrderInput | SortOrder
    holders?: SortOrderInput | SortOrder
    chainId?: SortOrder
    blockchain?: SortOrder
    provider?: SortOrder
    network?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    linkPages?: LinkPageOrderByRelationAggregateInput
  }

  export type Web3CryptoAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Web3CryptoAssetWhereInput | Web3CryptoAssetWhereInput[]
    OR?: Web3CryptoAssetWhereInput[]
    NOT?: Web3CryptoAssetWhereInput | Web3CryptoAssetWhereInput[]
    type?: EnumAssetTypeFilter<"Web3CryptoAsset"> | $Enums.AssetType
    walletAddress?: StringFilter<"Web3CryptoAsset"> | string
    contractAddress?: StringFilter<"Web3CryptoAsset"> | string
    symbol?: StringFilter<"Web3CryptoAsset"> | string
    name?: StringFilter<"Web3CryptoAsset"> | string
    logo?: StringNullableFilter<"Web3CryptoAsset"> | string | null
    decimals?: IntFilter<"Web3CryptoAsset"> | number
    balance?: FloatFilter<"Web3CryptoAsset"> | number
    balanceFormatted?: StringNullableFilter<"Web3CryptoAsset"> | string | null
    usdPrice?: FloatNullableFilter<"Web3CryptoAsset"> | number | null
    usdValue?: FloatNullableFilter<"Web3CryptoAsset"> | number | null
    usdPrice24hrPercentChange?: FloatNullableFilter<"Web3CryptoAsset"> | number | null
    usdValue24hrUsdChange?: FloatNullableFilter<"Web3CryptoAsset"> | number | null
    possibleSpam?: BoolNullableFilter<"Web3CryptoAsset"> | boolean | null
    verifiedContract?: BoolFilter<"Web3CryptoAsset"> | boolean
    nativeToken?: BoolNullableFilter<"Web3CryptoAsset"> | boolean | null
    holders?: IntNullableFilter<"Web3CryptoAsset"> | number | null
    chainId?: StringFilter<"Web3CryptoAsset"> | string
    blockchain?: StringFilter<"Web3CryptoAsset"> | string
    provider?: StringFilter<"Web3CryptoAsset"> | string
    network?: StringFilter<"Web3CryptoAsset"> | string
    createdAt?: DateTimeFilter<"Web3CryptoAsset"> | Date | string
    updatedAt?: DateTimeFilter<"Web3CryptoAsset"> | Date | string
    accounts?: AccountListRelationFilter
    linkPages?: LinkPageListRelationFilter
  }, "id">

  export type Web3CryptoAssetOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    walletAddress?: SortOrder
    contractAddress?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    decimals?: SortOrder
    balance?: SortOrder
    balanceFormatted?: SortOrderInput | SortOrder
    usdPrice?: SortOrderInput | SortOrder
    usdValue?: SortOrderInput | SortOrder
    usdPrice24hrPercentChange?: SortOrderInput | SortOrder
    usdValue24hrUsdChange?: SortOrderInput | SortOrder
    possibleSpam?: SortOrderInput | SortOrder
    verifiedContract?: SortOrder
    nativeToken?: SortOrderInput | SortOrder
    holders?: SortOrderInput | SortOrder
    chainId?: SortOrder
    blockchain?: SortOrder
    provider?: SortOrder
    network?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Web3CryptoAssetCountOrderByAggregateInput
    _avg?: Web3CryptoAssetAvgOrderByAggregateInput
    _max?: Web3CryptoAssetMaxOrderByAggregateInput
    _min?: Web3CryptoAssetMinOrderByAggregateInput
    _sum?: Web3CryptoAssetSumOrderByAggregateInput
  }

  export type Web3CryptoAssetScalarWhereWithAggregatesInput = {
    AND?: Web3CryptoAssetScalarWhereWithAggregatesInput | Web3CryptoAssetScalarWhereWithAggregatesInput[]
    OR?: Web3CryptoAssetScalarWhereWithAggregatesInput[]
    NOT?: Web3CryptoAssetScalarWhereWithAggregatesInput | Web3CryptoAssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Web3CryptoAsset"> | string
    type?: EnumAssetTypeWithAggregatesFilter<"Web3CryptoAsset"> | $Enums.AssetType
    walletAddress?: StringWithAggregatesFilter<"Web3CryptoAsset"> | string
    contractAddress?: StringWithAggregatesFilter<"Web3CryptoAsset"> | string
    symbol?: StringWithAggregatesFilter<"Web3CryptoAsset"> | string
    name?: StringWithAggregatesFilter<"Web3CryptoAsset"> | string
    logo?: StringNullableWithAggregatesFilter<"Web3CryptoAsset"> | string | null
    decimals?: IntWithAggregatesFilter<"Web3CryptoAsset"> | number
    balance?: FloatWithAggregatesFilter<"Web3CryptoAsset"> | number
    balanceFormatted?: StringNullableWithAggregatesFilter<"Web3CryptoAsset"> | string | null
    usdPrice?: FloatNullableWithAggregatesFilter<"Web3CryptoAsset"> | number | null
    usdValue?: FloatNullableWithAggregatesFilter<"Web3CryptoAsset"> | number | null
    usdPrice24hrPercentChange?: FloatNullableWithAggregatesFilter<"Web3CryptoAsset"> | number | null
    usdValue24hrUsdChange?: FloatNullableWithAggregatesFilter<"Web3CryptoAsset"> | number | null
    possibleSpam?: BoolNullableWithAggregatesFilter<"Web3CryptoAsset"> | boolean | null
    verifiedContract?: BoolWithAggregatesFilter<"Web3CryptoAsset"> | boolean
    nativeToken?: BoolNullableWithAggregatesFilter<"Web3CryptoAsset"> | boolean | null
    holders?: IntNullableWithAggregatesFilter<"Web3CryptoAsset"> | number | null
    chainId?: StringWithAggregatesFilter<"Web3CryptoAsset"> | string
    blockchain?: StringWithAggregatesFilter<"Web3CryptoAsset"> | string
    provider?: StringWithAggregatesFilter<"Web3CryptoAsset"> | string
    network?: StringWithAggregatesFilter<"Web3CryptoAsset"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Web3CryptoAsset"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Web3CryptoAsset"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.UserRole
    isTwoFactorEnabled?: boolean
    handle?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    linkPages?: LinkPageCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.UserRole
    isTwoFactorEnabled?: boolean
    handle?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    linkPages?: LinkPageUncheckedCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    linkPages?: LinkPageUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    linkPages?: LinkPageUncheckedUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.UserRole
    isTwoFactorEnabled?: boolean
    handle?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    handle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    handle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkPageCreateInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    image?: string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: boolean
    isPublic?: boolean
    isTemplate?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isEditing?: boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutLinkPagesInput
    web3Assets?: Web3AssetCreateNestedManyWithoutLinkPagesInput
    web3CryptoAssets?: Web3CryptoAssetCreateNestedManyWithoutLinkPagesInput
  }

  export type LinkPageUncheckedCreateInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    image?: string | null
    userId: string
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: boolean
    isPublic?: boolean
    isTemplate?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isEditing?: boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
    web3Assets?: Web3AssetUncheckedCreateNestedManyWithoutLinkPagesInput
    web3CryptoAssets?: Web3CryptoAssetUncheckedCreateNestedManyWithoutLinkPagesInput
  }

  export type LinkPageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEditing?: BoolFieldUpdateOperationsInput | boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutLinkPagesNestedInput
    web3Assets?: Web3AssetUpdateManyWithoutLinkPagesNestedInput
    web3CryptoAssets?: Web3CryptoAssetUpdateManyWithoutLinkPagesNestedInput
  }

  export type LinkPageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEditing?: BoolFieldUpdateOperationsInput | boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
    web3Assets?: Web3AssetUncheckedUpdateManyWithoutLinkPagesNestedInput
    web3CryptoAssets?: Web3CryptoAssetUncheckedUpdateManyWithoutLinkPagesNestedInput
  }

  export type LinkPageCreateManyInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    image?: string | null
    userId: string
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: boolean
    isPublic?: boolean
    isTemplate?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isEditing?: boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LinkPageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEditing?: BoolFieldUpdateOperationsInput | boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LinkPageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEditing?: BoolFieldUpdateOperationsInput | boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
    web3Assets?: Web3AssetCreateNestedManyWithoutAccountsInput
    web3CryptoAssets?: Web3CryptoAssetCreateNestedManyWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    web3Assets?: Web3AssetUncheckedCreateNestedManyWithoutAccountsInput
    web3CryptoAssets?: Web3CryptoAssetUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    web3Assets?: Web3AssetUpdateManyWithoutAccountsNestedInput
    web3CryptoAssets?: Web3CryptoAssetUpdateManyWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    web3Assets?: Web3AssetUncheckedUpdateManyWithoutAccountsNestedInput
    web3CryptoAssets?: Web3CryptoAssetUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type PasswordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginTokenCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type LoginTokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type LoginTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginTokenCreateManyInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type LoginTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorTokenCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type TwoFactorTokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type TwoFactorTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorTokenCreateManyInput = {
    id?: string
    email: string
    token: string
    expires: Date | string
  }

  export type TwoFactorTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwoFactorConfirmationCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutTwoFactorConfirmationInput
  }

  export type TwoFactorConfirmationUncheckedCreateInput = {
    id?: string
    userId: string
  }

  export type TwoFactorConfirmationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTwoFactorConfirmationNestedInput
  }

  export type TwoFactorConfirmationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TwoFactorConfirmationCreateManyInput = {
    id?: string
    userId: string
  }

  export type TwoFactorConfirmationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TwoFactorConfirmationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type Web3AssetCreateInput = {
    id?: string
    type?: $Enums.AssetType
    chain: string
    provider: string
    walletAddress: string
    contractAddress?: string | null
    tokenId?: string | null
    name: string
    symbol?: string | null
    amount?: number | null
    decimals?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    externalUrl?: string | null
    ownerOf: string
    lastUpdated: Date | string
    blockNumber?: string | null
    verified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutWeb3AssetsInput
    linkPages?: LinkPageCreateNestedManyWithoutWeb3AssetsInput
  }

  export type Web3AssetUncheckedCreateInput = {
    id?: string
    type?: $Enums.AssetType
    chain: string
    provider: string
    walletAddress: string
    contractAddress?: string | null
    tokenId?: string | null
    name: string
    symbol?: string | null
    amount?: number | null
    decimals?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    externalUrl?: string | null
    ownerOf: string
    lastUpdated: Date | string
    blockNumber?: string | null
    verified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutWeb3AssetsInput
    linkPages?: LinkPageUncheckedCreateNestedManyWithoutWeb3AssetsInput
  }

  export type Web3AssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    chain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    decimals?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOf?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    blockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutWeb3AssetsNestedInput
    linkPages?: LinkPageUpdateManyWithoutWeb3AssetsNestedInput
  }

  export type Web3AssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    chain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    decimals?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOf?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    blockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutWeb3AssetsNestedInput
    linkPages?: LinkPageUncheckedUpdateManyWithoutWeb3AssetsNestedInput
  }

  export type Web3AssetCreateManyInput = {
    id?: string
    type?: $Enums.AssetType
    chain: string
    provider: string
    walletAddress: string
    contractAddress?: string | null
    tokenId?: string | null
    name: string
    symbol?: string | null
    amount?: number | null
    decimals?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    externalUrl?: string | null
    ownerOf: string
    lastUpdated: Date | string
    blockNumber?: string | null
    verified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Web3AssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    chain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    decimals?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOf?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    blockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Web3AssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    chain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    decimals?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOf?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    blockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Web3CryptoAssetCreateInput = {
    id?: string
    type?: $Enums.AssetType
    walletAddress: string
    contractAddress: string
    symbol: string
    name: string
    logo?: string | null
    decimals: number
    balance: number
    balanceFormatted?: string | null
    usdPrice?: number | null
    usdValue?: number | null
    usdPrice24hrPercentChange?: number | null
    usdValue24hrUsdChange?: number | null
    possibleSpam?: boolean | null
    verifiedContract: boolean
    nativeToken?: boolean | null
    holders?: number | null
    chainId: string
    blockchain: string
    provider: string
    network: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutWeb3CryptoAssetsInput
    linkPages?: LinkPageCreateNestedManyWithoutWeb3CryptoAssetsInput
  }

  export type Web3CryptoAssetUncheckedCreateInput = {
    id?: string
    type?: $Enums.AssetType
    walletAddress: string
    contractAddress: string
    symbol: string
    name: string
    logo?: string | null
    decimals: number
    balance: number
    balanceFormatted?: string | null
    usdPrice?: number | null
    usdValue?: number | null
    usdPrice24hrPercentChange?: number | null
    usdValue24hrUsdChange?: number | null
    possibleSpam?: boolean | null
    verifiedContract: boolean
    nativeToken?: boolean | null
    holders?: number | null
    chainId: string
    blockchain: string
    provider: string
    network: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutWeb3CryptoAssetsInput
    linkPages?: LinkPageUncheckedCreateNestedManyWithoutWeb3CryptoAssetsInput
  }

  export type Web3CryptoAssetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    balanceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    usdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue?: NullableFloatFieldUpdateOperationsInput | number | null
    usdPrice24hrPercentChange?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue24hrUsdChange?: NullableFloatFieldUpdateOperationsInput | number | null
    possibleSpam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedContract?: BoolFieldUpdateOperationsInput | boolean
    nativeToken?: NullableBoolFieldUpdateOperationsInput | boolean | null
    holders?: NullableIntFieldUpdateOperationsInput | number | null
    chainId?: StringFieldUpdateOperationsInput | string
    blockchain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutWeb3CryptoAssetsNestedInput
    linkPages?: LinkPageUpdateManyWithoutWeb3CryptoAssetsNestedInput
  }

  export type Web3CryptoAssetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    balanceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    usdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue?: NullableFloatFieldUpdateOperationsInput | number | null
    usdPrice24hrPercentChange?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue24hrUsdChange?: NullableFloatFieldUpdateOperationsInput | number | null
    possibleSpam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedContract?: BoolFieldUpdateOperationsInput | boolean
    nativeToken?: NullableBoolFieldUpdateOperationsInput | boolean | null
    holders?: NullableIntFieldUpdateOperationsInput | number | null
    chainId?: StringFieldUpdateOperationsInput | string
    blockchain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutWeb3CryptoAssetsNestedInput
    linkPages?: LinkPageUncheckedUpdateManyWithoutWeb3CryptoAssetsNestedInput
  }

  export type Web3CryptoAssetCreateManyInput = {
    id?: string
    type?: $Enums.AssetType
    walletAddress: string
    contractAddress: string
    symbol: string
    name: string
    logo?: string | null
    decimals: number
    balance: number
    balanceFormatted?: string | null
    usdPrice?: number | null
    usdValue?: number | null
    usdPrice24hrPercentChange?: number | null
    usdValue24hrUsdChange?: number | null
    possibleSpam?: boolean | null
    verifiedContract: boolean
    nativeToken?: boolean | null
    holders?: number | null
    chainId: string
    blockchain: string
    provider: string
    network: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Web3CryptoAssetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    balanceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    usdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue?: NullableFloatFieldUpdateOperationsInput | number | null
    usdPrice24hrPercentChange?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue24hrUsdChange?: NullableFloatFieldUpdateOperationsInput | number | null
    possibleSpam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedContract?: BoolFieldUpdateOperationsInput | boolean
    nativeToken?: NullableBoolFieldUpdateOperationsInput | boolean | null
    holders?: NullableIntFieldUpdateOperationsInput | number | null
    chainId?: StringFieldUpdateOperationsInput | string
    blockchain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Web3CryptoAssetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    balanceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    usdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue?: NullableFloatFieldUpdateOperationsInput | number | null
    usdPrice24hrPercentChange?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue24hrUsdChange?: NullableFloatFieldUpdateOperationsInput | number | null
    possibleSpam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedContract?: BoolFieldUpdateOperationsInput | boolean
    nativeToken?: NullableBoolFieldUpdateOperationsInput | boolean | null
    holders?: NullableIntFieldUpdateOperationsInput | number | null
    chainId?: StringFieldUpdateOperationsInput | string
    blockchain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type LinkPageListRelationFilter = {
    every?: LinkPageWhereInput
    some?: LinkPageWhereInput
    none?: LinkPageWhereInput
  }

  export type TwoFactorConfirmationNullableRelationFilter = {
    is?: TwoFactorConfirmationWhereInput | null
    isNot?: TwoFactorConfirmationWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkPageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isTwoFactorEnabled?: SortOrder
    handle?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isTwoFactorEnabled?: SortOrder
    handle?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isTwoFactorEnabled?: SortOrder
    handle?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type Web3AssetListRelationFilter = {
    every?: Web3AssetWhereInput
    some?: Web3AssetWhereInput
    none?: Web3AssetWhereInput
  }

  export type Web3CryptoAssetListRelationFilter = {
    every?: Web3CryptoAssetWhereInput
    some?: Web3CryptoAssetWhereInput
    none?: Web3CryptoAssetWhereInput
  }

  export type Web3AssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Web3CryptoAssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkPageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    userId?: SortOrder
    template?: SortOrder
    isComplete?: SortOrder
    isPublic?: SortOrder
    isTemplate?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEditing?: SortOrder
    profile?: SortOrder
  }

  export type LinkPageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    userId?: SortOrder
    isComplete?: SortOrder
    isPublic?: SortOrder
    isTemplate?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEditing?: SortOrder
  }

  export type LinkPageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    userId?: SortOrder
    isComplete?: SortOrder
    isPublic?: SortOrder
    isTemplate?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEditing?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    profile?: SortOrder
    achievement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type VerificationTokenEmailTokenCompoundUniqueInput = {
    email: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type PasswordResetTokenEmailTokenCompoundUniqueInput = {
    email: string
    token: string
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type LoginTokenEmailTokenCompoundUniqueInput = {
    email: string
    token: string
  }

  export type LoginTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type LoginTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type LoginTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type TwoFactorTokenEmailTokenCompoundUniqueInput = {
    email: string
    token: string
  }

  export type TwoFactorTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type TwoFactorTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type TwoFactorTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type TwoFactorConfirmationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TwoFactorConfirmationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TwoFactorConfirmationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumAssetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeFilter<$PrismaModel> | $Enums.AssetType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Web3AssetCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    chain?: SortOrder
    provider?: SortOrder
    walletAddress?: SortOrder
    contractAddress?: SortOrder
    tokenId?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    amount?: SortOrder
    decimals?: SortOrder
    metadata?: SortOrder
    imageUrl?: SortOrder
    externalUrl?: SortOrder
    ownerOf?: SortOrder
    lastUpdated?: SortOrder
    blockNumber?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Web3AssetAvgOrderByAggregateInput = {
    amount?: SortOrder
    decimals?: SortOrder
  }

  export type Web3AssetMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    chain?: SortOrder
    provider?: SortOrder
    walletAddress?: SortOrder
    contractAddress?: SortOrder
    tokenId?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    amount?: SortOrder
    decimals?: SortOrder
    imageUrl?: SortOrder
    externalUrl?: SortOrder
    ownerOf?: SortOrder
    lastUpdated?: SortOrder
    blockNumber?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Web3AssetMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    chain?: SortOrder
    provider?: SortOrder
    walletAddress?: SortOrder
    contractAddress?: SortOrder
    tokenId?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    amount?: SortOrder
    decimals?: SortOrder
    imageUrl?: SortOrder
    externalUrl?: SortOrder
    ownerOf?: SortOrder
    lastUpdated?: SortOrder
    blockNumber?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Web3AssetSumOrderByAggregateInput = {
    amount?: SortOrder
    decimals?: SortOrder
  }

  export type EnumAssetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetTypeFilter<$PrismaModel>
    _max?: NestedEnumAssetTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Web3CryptoAssetCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    walletAddress?: SortOrder
    contractAddress?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    decimals?: SortOrder
    balance?: SortOrder
    balanceFormatted?: SortOrder
    usdPrice?: SortOrder
    usdValue?: SortOrder
    usdPrice24hrPercentChange?: SortOrder
    usdValue24hrUsdChange?: SortOrder
    possibleSpam?: SortOrder
    verifiedContract?: SortOrder
    nativeToken?: SortOrder
    holders?: SortOrder
    chainId?: SortOrder
    blockchain?: SortOrder
    provider?: SortOrder
    network?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Web3CryptoAssetAvgOrderByAggregateInput = {
    decimals?: SortOrder
    balance?: SortOrder
    usdPrice?: SortOrder
    usdValue?: SortOrder
    usdPrice24hrPercentChange?: SortOrder
    usdValue24hrUsdChange?: SortOrder
    holders?: SortOrder
  }

  export type Web3CryptoAssetMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    walletAddress?: SortOrder
    contractAddress?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    decimals?: SortOrder
    balance?: SortOrder
    balanceFormatted?: SortOrder
    usdPrice?: SortOrder
    usdValue?: SortOrder
    usdPrice24hrPercentChange?: SortOrder
    usdValue24hrUsdChange?: SortOrder
    possibleSpam?: SortOrder
    verifiedContract?: SortOrder
    nativeToken?: SortOrder
    holders?: SortOrder
    chainId?: SortOrder
    blockchain?: SortOrder
    provider?: SortOrder
    network?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Web3CryptoAssetMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    walletAddress?: SortOrder
    contractAddress?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    decimals?: SortOrder
    balance?: SortOrder
    balanceFormatted?: SortOrder
    usdPrice?: SortOrder
    usdValue?: SortOrder
    usdPrice24hrPercentChange?: SortOrder
    usdValue24hrUsdChange?: SortOrder
    possibleSpam?: SortOrder
    verifiedContract?: SortOrder
    nativeToken?: SortOrder
    holders?: SortOrder
    chainId?: SortOrder
    blockchain?: SortOrder
    provider?: SortOrder
    network?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Web3CryptoAssetSumOrderByAggregateInput = {
    decimals?: SortOrder
    balance?: SortOrder
    usdPrice?: SortOrder
    usdValue?: SortOrder
    usdPrice24hrPercentChange?: SortOrder
    usdValue24hrUsdChange?: SortOrder
    holders?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type LinkPageCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkPageCreateWithoutUserInput, LinkPageUncheckedCreateWithoutUserInput> | LinkPageCreateWithoutUserInput[] | LinkPageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkPageCreateOrConnectWithoutUserInput | LinkPageCreateOrConnectWithoutUserInput[]
    createMany?: LinkPageCreateManyUserInputEnvelope
    connect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
  }

  export type TwoFactorConfirmationCreateNestedOneWithoutUserInput = {
    create?: XOR<TwoFactorConfirmationCreateWithoutUserInput, TwoFactorConfirmationUncheckedCreateWithoutUserInput>
    connectOrCreate?: TwoFactorConfirmationCreateOrConnectWithoutUserInput
    connect?: TwoFactorConfirmationWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type LinkPageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkPageCreateWithoutUserInput, LinkPageUncheckedCreateWithoutUserInput> | LinkPageCreateWithoutUserInput[] | LinkPageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkPageCreateOrConnectWithoutUserInput | LinkPageCreateOrConnectWithoutUserInput[]
    createMany?: LinkPageCreateManyUserInputEnvelope
    connect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
  }

  export type TwoFactorConfirmationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TwoFactorConfirmationCreateWithoutUserInput, TwoFactorConfirmationUncheckedCreateWithoutUserInput>
    connectOrCreate?: TwoFactorConfirmationCreateOrConnectWithoutUserInput
    connect?: TwoFactorConfirmationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type LinkPageUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkPageCreateWithoutUserInput, LinkPageUncheckedCreateWithoutUserInput> | LinkPageCreateWithoutUserInput[] | LinkPageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkPageCreateOrConnectWithoutUserInput | LinkPageCreateOrConnectWithoutUserInput[]
    upsert?: LinkPageUpsertWithWhereUniqueWithoutUserInput | LinkPageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkPageCreateManyUserInputEnvelope
    set?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    disconnect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    delete?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    connect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    update?: LinkPageUpdateWithWhereUniqueWithoutUserInput | LinkPageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkPageUpdateManyWithWhereWithoutUserInput | LinkPageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkPageScalarWhereInput | LinkPageScalarWhereInput[]
  }

  export type TwoFactorConfirmationUpdateOneWithoutUserNestedInput = {
    create?: XOR<TwoFactorConfirmationCreateWithoutUserInput, TwoFactorConfirmationUncheckedCreateWithoutUserInput>
    connectOrCreate?: TwoFactorConfirmationCreateOrConnectWithoutUserInput
    upsert?: TwoFactorConfirmationUpsertWithoutUserInput
    disconnect?: TwoFactorConfirmationWhereInput | boolean
    delete?: TwoFactorConfirmationWhereInput | boolean
    connect?: TwoFactorConfirmationWhereUniqueInput
    update?: XOR<XOR<TwoFactorConfirmationUpdateToOneWithWhereWithoutUserInput, TwoFactorConfirmationUpdateWithoutUserInput>, TwoFactorConfirmationUncheckedUpdateWithoutUserInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type LinkPageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkPageCreateWithoutUserInput, LinkPageUncheckedCreateWithoutUserInput> | LinkPageCreateWithoutUserInput[] | LinkPageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkPageCreateOrConnectWithoutUserInput | LinkPageCreateOrConnectWithoutUserInput[]
    upsert?: LinkPageUpsertWithWhereUniqueWithoutUserInput | LinkPageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkPageCreateManyUserInputEnvelope
    set?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    disconnect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    delete?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    connect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    update?: LinkPageUpdateWithWhereUniqueWithoutUserInput | LinkPageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkPageUpdateManyWithWhereWithoutUserInput | LinkPageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkPageScalarWhereInput | LinkPageScalarWhereInput[]
  }

  export type TwoFactorConfirmationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TwoFactorConfirmationCreateWithoutUserInput, TwoFactorConfirmationUncheckedCreateWithoutUserInput>
    connectOrCreate?: TwoFactorConfirmationCreateOrConnectWithoutUserInput
    upsert?: TwoFactorConfirmationUpsertWithoutUserInput
    disconnect?: TwoFactorConfirmationWhereInput | boolean
    delete?: TwoFactorConfirmationWhereInput | boolean
    connect?: TwoFactorConfirmationWhereUniqueInput
    update?: XOR<XOR<TwoFactorConfirmationUpdateToOneWithWhereWithoutUserInput, TwoFactorConfirmationUpdateWithoutUserInput>, TwoFactorConfirmationUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutLinkPagesInput = {
    create?: XOR<UserCreateWithoutLinkPagesInput, UserUncheckedCreateWithoutLinkPagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkPagesInput
    connect?: UserWhereUniqueInput
  }

  export type Web3AssetCreateNestedManyWithoutLinkPagesInput = {
    create?: XOR<Web3AssetCreateWithoutLinkPagesInput, Web3AssetUncheckedCreateWithoutLinkPagesInput> | Web3AssetCreateWithoutLinkPagesInput[] | Web3AssetUncheckedCreateWithoutLinkPagesInput[]
    connectOrCreate?: Web3AssetCreateOrConnectWithoutLinkPagesInput | Web3AssetCreateOrConnectWithoutLinkPagesInput[]
    connect?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
  }

  export type Web3CryptoAssetCreateNestedManyWithoutLinkPagesInput = {
    create?: XOR<Web3CryptoAssetCreateWithoutLinkPagesInput, Web3CryptoAssetUncheckedCreateWithoutLinkPagesInput> | Web3CryptoAssetCreateWithoutLinkPagesInput[] | Web3CryptoAssetUncheckedCreateWithoutLinkPagesInput[]
    connectOrCreate?: Web3CryptoAssetCreateOrConnectWithoutLinkPagesInput | Web3CryptoAssetCreateOrConnectWithoutLinkPagesInput[]
    connect?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
  }

  export type Web3AssetUncheckedCreateNestedManyWithoutLinkPagesInput = {
    create?: XOR<Web3AssetCreateWithoutLinkPagesInput, Web3AssetUncheckedCreateWithoutLinkPagesInput> | Web3AssetCreateWithoutLinkPagesInput[] | Web3AssetUncheckedCreateWithoutLinkPagesInput[]
    connectOrCreate?: Web3AssetCreateOrConnectWithoutLinkPagesInput | Web3AssetCreateOrConnectWithoutLinkPagesInput[]
    connect?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
  }

  export type Web3CryptoAssetUncheckedCreateNestedManyWithoutLinkPagesInput = {
    create?: XOR<Web3CryptoAssetCreateWithoutLinkPagesInput, Web3CryptoAssetUncheckedCreateWithoutLinkPagesInput> | Web3CryptoAssetCreateWithoutLinkPagesInput[] | Web3CryptoAssetUncheckedCreateWithoutLinkPagesInput[]
    connectOrCreate?: Web3CryptoAssetCreateOrConnectWithoutLinkPagesInput | Web3CryptoAssetCreateOrConnectWithoutLinkPagesInput[]
    connect?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutLinkPagesNestedInput = {
    create?: XOR<UserCreateWithoutLinkPagesInput, UserUncheckedCreateWithoutLinkPagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkPagesInput
    upsert?: UserUpsertWithoutLinkPagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLinkPagesInput, UserUpdateWithoutLinkPagesInput>, UserUncheckedUpdateWithoutLinkPagesInput>
  }

  export type Web3AssetUpdateManyWithoutLinkPagesNestedInput = {
    create?: XOR<Web3AssetCreateWithoutLinkPagesInput, Web3AssetUncheckedCreateWithoutLinkPagesInput> | Web3AssetCreateWithoutLinkPagesInput[] | Web3AssetUncheckedCreateWithoutLinkPagesInput[]
    connectOrCreate?: Web3AssetCreateOrConnectWithoutLinkPagesInput | Web3AssetCreateOrConnectWithoutLinkPagesInput[]
    upsert?: Web3AssetUpsertWithWhereUniqueWithoutLinkPagesInput | Web3AssetUpsertWithWhereUniqueWithoutLinkPagesInput[]
    set?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
    disconnect?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
    delete?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
    connect?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
    update?: Web3AssetUpdateWithWhereUniqueWithoutLinkPagesInput | Web3AssetUpdateWithWhereUniqueWithoutLinkPagesInput[]
    updateMany?: Web3AssetUpdateManyWithWhereWithoutLinkPagesInput | Web3AssetUpdateManyWithWhereWithoutLinkPagesInput[]
    deleteMany?: Web3AssetScalarWhereInput | Web3AssetScalarWhereInput[]
  }

  export type Web3CryptoAssetUpdateManyWithoutLinkPagesNestedInput = {
    create?: XOR<Web3CryptoAssetCreateWithoutLinkPagesInput, Web3CryptoAssetUncheckedCreateWithoutLinkPagesInput> | Web3CryptoAssetCreateWithoutLinkPagesInput[] | Web3CryptoAssetUncheckedCreateWithoutLinkPagesInput[]
    connectOrCreate?: Web3CryptoAssetCreateOrConnectWithoutLinkPagesInput | Web3CryptoAssetCreateOrConnectWithoutLinkPagesInput[]
    upsert?: Web3CryptoAssetUpsertWithWhereUniqueWithoutLinkPagesInput | Web3CryptoAssetUpsertWithWhereUniqueWithoutLinkPagesInput[]
    set?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
    disconnect?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
    delete?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
    connect?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
    update?: Web3CryptoAssetUpdateWithWhereUniqueWithoutLinkPagesInput | Web3CryptoAssetUpdateWithWhereUniqueWithoutLinkPagesInput[]
    updateMany?: Web3CryptoAssetUpdateManyWithWhereWithoutLinkPagesInput | Web3CryptoAssetUpdateManyWithWhereWithoutLinkPagesInput[]
    deleteMany?: Web3CryptoAssetScalarWhereInput | Web3CryptoAssetScalarWhereInput[]
  }

  export type Web3AssetUncheckedUpdateManyWithoutLinkPagesNestedInput = {
    create?: XOR<Web3AssetCreateWithoutLinkPagesInput, Web3AssetUncheckedCreateWithoutLinkPagesInput> | Web3AssetCreateWithoutLinkPagesInput[] | Web3AssetUncheckedCreateWithoutLinkPagesInput[]
    connectOrCreate?: Web3AssetCreateOrConnectWithoutLinkPagesInput | Web3AssetCreateOrConnectWithoutLinkPagesInput[]
    upsert?: Web3AssetUpsertWithWhereUniqueWithoutLinkPagesInput | Web3AssetUpsertWithWhereUniqueWithoutLinkPagesInput[]
    set?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
    disconnect?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
    delete?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
    connect?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
    update?: Web3AssetUpdateWithWhereUniqueWithoutLinkPagesInput | Web3AssetUpdateWithWhereUniqueWithoutLinkPagesInput[]
    updateMany?: Web3AssetUpdateManyWithWhereWithoutLinkPagesInput | Web3AssetUpdateManyWithWhereWithoutLinkPagesInput[]
    deleteMany?: Web3AssetScalarWhereInput | Web3AssetScalarWhereInput[]
  }

  export type Web3CryptoAssetUncheckedUpdateManyWithoutLinkPagesNestedInput = {
    create?: XOR<Web3CryptoAssetCreateWithoutLinkPagesInput, Web3CryptoAssetUncheckedCreateWithoutLinkPagesInput> | Web3CryptoAssetCreateWithoutLinkPagesInput[] | Web3CryptoAssetUncheckedCreateWithoutLinkPagesInput[]
    connectOrCreate?: Web3CryptoAssetCreateOrConnectWithoutLinkPagesInput | Web3CryptoAssetCreateOrConnectWithoutLinkPagesInput[]
    upsert?: Web3CryptoAssetUpsertWithWhereUniqueWithoutLinkPagesInput | Web3CryptoAssetUpsertWithWhereUniqueWithoutLinkPagesInput[]
    set?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
    disconnect?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
    delete?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
    connect?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
    update?: Web3CryptoAssetUpdateWithWhereUniqueWithoutLinkPagesInput | Web3CryptoAssetUpdateWithWhereUniqueWithoutLinkPagesInput[]
    updateMany?: Web3CryptoAssetUpdateManyWithWhereWithoutLinkPagesInput | Web3CryptoAssetUpdateManyWithWhereWithoutLinkPagesInput[]
    deleteMany?: Web3CryptoAssetScalarWhereInput | Web3CryptoAssetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type Web3AssetCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Web3AssetCreateWithoutAccountsInput, Web3AssetUncheckedCreateWithoutAccountsInput> | Web3AssetCreateWithoutAccountsInput[] | Web3AssetUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: Web3AssetCreateOrConnectWithoutAccountsInput | Web3AssetCreateOrConnectWithoutAccountsInput[]
    connect?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
  }

  export type Web3CryptoAssetCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Web3CryptoAssetCreateWithoutAccountsInput, Web3CryptoAssetUncheckedCreateWithoutAccountsInput> | Web3CryptoAssetCreateWithoutAccountsInput[] | Web3CryptoAssetUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: Web3CryptoAssetCreateOrConnectWithoutAccountsInput | Web3CryptoAssetCreateOrConnectWithoutAccountsInput[]
    connect?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
  }

  export type Web3AssetUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Web3AssetCreateWithoutAccountsInput, Web3AssetUncheckedCreateWithoutAccountsInput> | Web3AssetCreateWithoutAccountsInput[] | Web3AssetUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: Web3AssetCreateOrConnectWithoutAccountsInput | Web3AssetCreateOrConnectWithoutAccountsInput[]
    connect?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
  }

  export type Web3CryptoAssetUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<Web3CryptoAssetCreateWithoutAccountsInput, Web3CryptoAssetUncheckedCreateWithoutAccountsInput> | Web3CryptoAssetCreateWithoutAccountsInput[] | Web3CryptoAssetUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: Web3CryptoAssetCreateOrConnectWithoutAccountsInput | Web3CryptoAssetCreateOrConnectWithoutAccountsInput[]
    connect?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type Web3AssetUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<Web3AssetCreateWithoutAccountsInput, Web3AssetUncheckedCreateWithoutAccountsInput> | Web3AssetCreateWithoutAccountsInput[] | Web3AssetUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: Web3AssetCreateOrConnectWithoutAccountsInput | Web3AssetCreateOrConnectWithoutAccountsInput[]
    upsert?: Web3AssetUpsertWithWhereUniqueWithoutAccountsInput | Web3AssetUpsertWithWhereUniqueWithoutAccountsInput[]
    set?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
    disconnect?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
    delete?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
    connect?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
    update?: Web3AssetUpdateWithWhereUniqueWithoutAccountsInput | Web3AssetUpdateWithWhereUniqueWithoutAccountsInput[]
    updateMany?: Web3AssetUpdateManyWithWhereWithoutAccountsInput | Web3AssetUpdateManyWithWhereWithoutAccountsInput[]
    deleteMany?: Web3AssetScalarWhereInput | Web3AssetScalarWhereInput[]
  }

  export type Web3CryptoAssetUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<Web3CryptoAssetCreateWithoutAccountsInput, Web3CryptoAssetUncheckedCreateWithoutAccountsInput> | Web3CryptoAssetCreateWithoutAccountsInput[] | Web3CryptoAssetUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: Web3CryptoAssetCreateOrConnectWithoutAccountsInput | Web3CryptoAssetCreateOrConnectWithoutAccountsInput[]
    upsert?: Web3CryptoAssetUpsertWithWhereUniqueWithoutAccountsInput | Web3CryptoAssetUpsertWithWhereUniqueWithoutAccountsInput[]
    set?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
    disconnect?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
    delete?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
    connect?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
    update?: Web3CryptoAssetUpdateWithWhereUniqueWithoutAccountsInput | Web3CryptoAssetUpdateWithWhereUniqueWithoutAccountsInput[]
    updateMany?: Web3CryptoAssetUpdateManyWithWhereWithoutAccountsInput | Web3CryptoAssetUpdateManyWithWhereWithoutAccountsInput[]
    deleteMany?: Web3CryptoAssetScalarWhereInput | Web3CryptoAssetScalarWhereInput[]
  }

  export type Web3AssetUncheckedUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<Web3AssetCreateWithoutAccountsInput, Web3AssetUncheckedCreateWithoutAccountsInput> | Web3AssetCreateWithoutAccountsInput[] | Web3AssetUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: Web3AssetCreateOrConnectWithoutAccountsInput | Web3AssetCreateOrConnectWithoutAccountsInput[]
    upsert?: Web3AssetUpsertWithWhereUniqueWithoutAccountsInput | Web3AssetUpsertWithWhereUniqueWithoutAccountsInput[]
    set?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
    disconnect?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
    delete?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
    connect?: Web3AssetWhereUniqueInput | Web3AssetWhereUniqueInput[]
    update?: Web3AssetUpdateWithWhereUniqueWithoutAccountsInput | Web3AssetUpdateWithWhereUniqueWithoutAccountsInput[]
    updateMany?: Web3AssetUpdateManyWithWhereWithoutAccountsInput | Web3AssetUpdateManyWithWhereWithoutAccountsInput[]
    deleteMany?: Web3AssetScalarWhereInput | Web3AssetScalarWhereInput[]
  }

  export type Web3CryptoAssetUncheckedUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<Web3CryptoAssetCreateWithoutAccountsInput, Web3CryptoAssetUncheckedCreateWithoutAccountsInput> | Web3CryptoAssetCreateWithoutAccountsInput[] | Web3CryptoAssetUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: Web3CryptoAssetCreateOrConnectWithoutAccountsInput | Web3CryptoAssetCreateOrConnectWithoutAccountsInput[]
    upsert?: Web3CryptoAssetUpsertWithWhereUniqueWithoutAccountsInput | Web3CryptoAssetUpsertWithWhereUniqueWithoutAccountsInput[]
    set?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
    disconnect?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
    delete?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
    connect?: Web3CryptoAssetWhereUniqueInput | Web3CryptoAssetWhereUniqueInput[]
    update?: Web3CryptoAssetUpdateWithWhereUniqueWithoutAccountsInput | Web3CryptoAssetUpdateWithWhereUniqueWithoutAccountsInput[]
    updateMany?: Web3CryptoAssetUpdateManyWithWhereWithoutAccountsInput | Web3CryptoAssetUpdateManyWithWhereWithoutAccountsInput[]
    deleteMany?: Web3CryptoAssetScalarWhereInput | Web3CryptoAssetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTwoFactorConfirmationInput = {
    create?: XOR<UserCreateWithoutTwoFactorConfirmationInput, UserUncheckedCreateWithoutTwoFactorConfirmationInput>
    connectOrCreate?: UserCreateOrConnectWithoutTwoFactorConfirmationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTwoFactorConfirmationNestedInput = {
    create?: XOR<UserCreateWithoutTwoFactorConfirmationInput, UserUncheckedCreateWithoutTwoFactorConfirmationInput>
    connectOrCreate?: UserCreateOrConnectWithoutTwoFactorConfirmationInput
    upsert?: UserUpsertWithoutTwoFactorConfirmationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTwoFactorConfirmationInput, UserUpdateWithoutTwoFactorConfirmationInput>, UserUncheckedUpdateWithoutTwoFactorConfirmationInput>
  }

  export type AccountCreateNestedManyWithoutWeb3AssetsInput = {
    create?: XOR<AccountCreateWithoutWeb3AssetsInput, AccountUncheckedCreateWithoutWeb3AssetsInput> | AccountCreateWithoutWeb3AssetsInput[] | AccountUncheckedCreateWithoutWeb3AssetsInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutWeb3AssetsInput | AccountCreateOrConnectWithoutWeb3AssetsInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type LinkPageCreateNestedManyWithoutWeb3AssetsInput = {
    create?: XOR<LinkPageCreateWithoutWeb3AssetsInput, LinkPageUncheckedCreateWithoutWeb3AssetsInput> | LinkPageCreateWithoutWeb3AssetsInput[] | LinkPageUncheckedCreateWithoutWeb3AssetsInput[]
    connectOrCreate?: LinkPageCreateOrConnectWithoutWeb3AssetsInput | LinkPageCreateOrConnectWithoutWeb3AssetsInput[]
    connect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutWeb3AssetsInput = {
    create?: XOR<AccountCreateWithoutWeb3AssetsInput, AccountUncheckedCreateWithoutWeb3AssetsInput> | AccountCreateWithoutWeb3AssetsInput[] | AccountUncheckedCreateWithoutWeb3AssetsInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutWeb3AssetsInput | AccountCreateOrConnectWithoutWeb3AssetsInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type LinkPageUncheckedCreateNestedManyWithoutWeb3AssetsInput = {
    create?: XOR<LinkPageCreateWithoutWeb3AssetsInput, LinkPageUncheckedCreateWithoutWeb3AssetsInput> | LinkPageCreateWithoutWeb3AssetsInput[] | LinkPageUncheckedCreateWithoutWeb3AssetsInput[]
    connectOrCreate?: LinkPageCreateOrConnectWithoutWeb3AssetsInput | LinkPageCreateOrConnectWithoutWeb3AssetsInput[]
    connect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
  }

  export type EnumAssetTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssetType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type AccountUpdateManyWithoutWeb3AssetsNestedInput = {
    create?: XOR<AccountCreateWithoutWeb3AssetsInput, AccountUncheckedCreateWithoutWeb3AssetsInput> | AccountCreateWithoutWeb3AssetsInput[] | AccountUncheckedCreateWithoutWeb3AssetsInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutWeb3AssetsInput | AccountCreateOrConnectWithoutWeb3AssetsInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutWeb3AssetsInput | AccountUpsertWithWhereUniqueWithoutWeb3AssetsInput[]
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutWeb3AssetsInput | AccountUpdateWithWhereUniqueWithoutWeb3AssetsInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutWeb3AssetsInput | AccountUpdateManyWithWhereWithoutWeb3AssetsInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type LinkPageUpdateManyWithoutWeb3AssetsNestedInput = {
    create?: XOR<LinkPageCreateWithoutWeb3AssetsInput, LinkPageUncheckedCreateWithoutWeb3AssetsInput> | LinkPageCreateWithoutWeb3AssetsInput[] | LinkPageUncheckedCreateWithoutWeb3AssetsInput[]
    connectOrCreate?: LinkPageCreateOrConnectWithoutWeb3AssetsInput | LinkPageCreateOrConnectWithoutWeb3AssetsInput[]
    upsert?: LinkPageUpsertWithWhereUniqueWithoutWeb3AssetsInput | LinkPageUpsertWithWhereUniqueWithoutWeb3AssetsInput[]
    set?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    disconnect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    delete?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    connect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    update?: LinkPageUpdateWithWhereUniqueWithoutWeb3AssetsInput | LinkPageUpdateWithWhereUniqueWithoutWeb3AssetsInput[]
    updateMany?: LinkPageUpdateManyWithWhereWithoutWeb3AssetsInput | LinkPageUpdateManyWithWhereWithoutWeb3AssetsInput[]
    deleteMany?: LinkPageScalarWhereInput | LinkPageScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutWeb3AssetsNestedInput = {
    create?: XOR<AccountCreateWithoutWeb3AssetsInput, AccountUncheckedCreateWithoutWeb3AssetsInput> | AccountCreateWithoutWeb3AssetsInput[] | AccountUncheckedCreateWithoutWeb3AssetsInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutWeb3AssetsInput | AccountCreateOrConnectWithoutWeb3AssetsInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutWeb3AssetsInput | AccountUpsertWithWhereUniqueWithoutWeb3AssetsInput[]
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutWeb3AssetsInput | AccountUpdateWithWhereUniqueWithoutWeb3AssetsInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutWeb3AssetsInput | AccountUpdateManyWithWhereWithoutWeb3AssetsInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type LinkPageUncheckedUpdateManyWithoutWeb3AssetsNestedInput = {
    create?: XOR<LinkPageCreateWithoutWeb3AssetsInput, LinkPageUncheckedCreateWithoutWeb3AssetsInput> | LinkPageCreateWithoutWeb3AssetsInput[] | LinkPageUncheckedCreateWithoutWeb3AssetsInput[]
    connectOrCreate?: LinkPageCreateOrConnectWithoutWeb3AssetsInput | LinkPageCreateOrConnectWithoutWeb3AssetsInput[]
    upsert?: LinkPageUpsertWithWhereUniqueWithoutWeb3AssetsInput | LinkPageUpsertWithWhereUniqueWithoutWeb3AssetsInput[]
    set?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    disconnect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    delete?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    connect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    update?: LinkPageUpdateWithWhereUniqueWithoutWeb3AssetsInput | LinkPageUpdateWithWhereUniqueWithoutWeb3AssetsInput[]
    updateMany?: LinkPageUpdateManyWithWhereWithoutWeb3AssetsInput | LinkPageUpdateManyWithWhereWithoutWeb3AssetsInput[]
    deleteMany?: LinkPageScalarWhereInput | LinkPageScalarWhereInput[]
  }

  export type AccountCreateNestedManyWithoutWeb3CryptoAssetsInput = {
    create?: XOR<AccountCreateWithoutWeb3CryptoAssetsInput, AccountUncheckedCreateWithoutWeb3CryptoAssetsInput> | AccountCreateWithoutWeb3CryptoAssetsInput[] | AccountUncheckedCreateWithoutWeb3CryptoAssetsInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutWeb3CryptoAssetsInput | AccountCreateOrConnectWithoutWeb3CryptoAssetsInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type LinkPageCreateNestedManyWithoutWeb3CryptoAssetsInput = {
    create?: XOR<LinkPageCreateWithoutWeb3CryptoAssetsInput, LinkPageUncheckedCreateWithoutWeb3CryptoAssetsInput> | LinkPageCreateWithoutWeb3CryptoAssetsInput[] | LinkPageUncheckedCreateWithoutWeb3CryptoAssetsInput[]
    connectOrCreate?: LinkPageCreateOrConnectWithoutWeb3CryptoAssetsInput | LinkPageCreateOrConnectWithoutWeb3CryptoAssetsInput[]
    connect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutWeb3CryptoAssetsInput = {
    create?: XOR<AccountCreateWithoutWeb3CryptoAssetsInput, AccountUncheckedCreateWithoutWeb3CryptoAssetsInput> | AccountCreateWithoutWeb3CryptoAssetsInput[] | AccountUncheckedCreateWithoutWeb3CryptoAssetsInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutWeb3CryptoAssetsInput | AccountCreateOrConnectWithoutWeb3CryptoAssetsInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type LinkPageUncheckedCreateNestedManyWithoutWeb3CryptoAssetsInput = {
    create?: XOR<LinkPageCreateWithoutWeb3CryptoAssetsInput, LinkPageUncheckedCreateWithoutWeb3CryptoAssetsInput> | LinkPageCreateWithoutWeb3CryptoAssetsInput[] | LinkPageUncheckedCreateWithoutWeb3CryptoAssetsInput[]
    connectOrCreate?: LinkPageCreateOrConnectWithoutWeb3CryptoAssetsInput | LinkPageCreateOrConnectWithoutWeb3CryptoAssetsInput[]
    connect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUpdateManyWithoutWeb3CryptoAssetsNestedInput = {
    create?: XOR<AccountCreateWithoutWeb3CryptoAssetsInput, AccountUncheckedCreateWithoutWeb3CryptoAssetsInput> | AccountCreateWithoutWeb3CryptoAssetsInput[] | AccountUncheckedCreateWithoutWeb3CryptoAssetsInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutWeb3CryptoAssetsInput | AccountCreateOrConnectWithoutWeb3CryptoAssetsInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutWeb3CryptoAssetsInput | AccountUpsertWithWhereUniqueWithoutWeb3CryptoAssetsInput[]
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutWeb3CryptoAssetsInput | AccountUpdateWithWhereUniqueWithoutWeb3CryptoAssetsInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutWeb3CryptoAssetsInput | AccountUpdateManyWithWhereWithoutWeb3CryptoAssetsInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type LinkPageUpdateManyWithoutWeb3CryptoAssetsNestedInput = {
    create?: XOR<LinkPageCreateWithoutWeb3CryptoAssetsInput, LinkPageUncheckedCreateWithoutWeb3CryptoAssetsInput> | LinkPageCreateWithoutWeb3CryptoAssetsInput[] | LinkPageUncheckedCreateWithoutWeb3CryptoAssetsInput[]
    connectOrCreate?: LinkPageCreateOrConnectWithoutWeb3CryptoAssetsInput | LinkPageCreateOrConnectWithoutWeb3CryptoAssetsInput[]
    upsert?: LinkPageUpsertWithWhereUniqueWithoutWeb3CryptoAssetsInput | LinkPageUpsertWithWhereUniqueWithoutWeb3CryptoAssetsInput[]
    set?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    disconnect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    delete?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    connect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    update?: LinkPageUpdateWithWhereUniqueWithoutWeb3CryptoAssetsInput | LinkPageUpdateWithWhereUniqueWithoutWeb3CryptoAssetsInput[]
    updateMany?: LinkPageUpdateManyWithWhereWithoutWeb3CryptoAssetsInput | LinkPageUpdateManyWithWhereWithoutWeb3CryptoAssetsInput[]
    deleteMany?: LinkPageScalarWhereInput | LinkPageScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutWeb3CryptoAssetsNestedInput = {
    create?: XOR<AccountCreateWithoutWeb3CryptoAssetsInput, AccountUncheckedCreateWithoutWeb3CryptoAssetsInput> | AccountCreateWithoutWeb3CryptoAssetsInput[] | AccountUncheckedCreateWithoutWeb3CryptoAssetsInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutWeb3CryptoAssetsInput | AccountCreateOrConnectWithoutWeb3CryptoAssetsInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutWeb3CryptoAssetsInput | AccountUpsertWithWhereUniqueWithoutWeb3CryptoAssetsInput[]
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutWeb3CryptoAssetsInput | AccountUpdateWithWhereUniqueWithoutWeb3CryptoAssetsInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutWeb3CryptoAssetsInput | AccountUpdateManyWithWhereWithoutWeb3CryptoAssetsInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type LinkPageUncheckedUpdateManyWithoutWeb3CryptoAssetsNestedInput = {
    create?: XOR<LinkPageCreateWithoutWeb3CryptoAssetsInput, LinkPageUncheckedCreateWithoutWeb3CryptoAssetsInput> | LinkPageCreateWithoutWeb3CryptoAssetsInput[] | LinkPageUncheckedCreateWithoutWeb3CryptoAssetsInput[]
    connectOrCreate?: LinkPageCreateOrConnectWithoutWeb3CryptoAssetsInput | LinkPageCreateOrConnectWithoutWeb3CryptoAssetsInput[]
    upsert?: LinkPageUpsertWithWhereUniqueWithoutWeb3CryptoAssetsInput | LinkPageUpsertWithWhereUniqueWithoutWeb3CryptoAssetsInput[]
    set?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    disconnect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    delete?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    connect?: LinkPageWhereUniqueInput | LinkPageWhereUniqueInput[]
    update?: LinkPageUpdateWithWhereUniqueWithoutWeb3CryptoAssetsInput | LinkPageUpdateWithWhereUniqueWithoutWeb3CryptoAssetsInput[]
    updateMany?: LinkPageUpdateManyWithWhereWithoutWeb3CryptoAssetsInput | LinkPageUpdateManyWithWhereWithoutWeb3CryptoAssetsInput[]
    deleteMany?: LinkPageScalarWhereInput | LinkPageScalarWhereInput[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAssetTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeFilter<$PrismaModel> | $Enums.AssetType
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssetType | EnumAssetTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssetType[] | ListEnumAssetTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssetTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssetType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssetTypeFilter<$PrismaModel>
    _max?: NestedEnumAssetTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    web3Assets?: Web3AssetCreateNestedManyWithoutAccountsInput
    web3CryptoAssets?: Web3CryptoAssetCreateNestedManyWithoutAccountsInput
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    web3Assets?: Web3AssetUncheckedCreateNestedManyWithoutAccountsInput
    web3CryptoAssets?: Web3CryptoAssetUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LinkPageCreateWithoutUserInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    image?: string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: boolean
    isPublic?: boolean
    isTemplate?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isEditing?: boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
    web3Assets?: Web3AssetCreateNestedManyWithoutLinkPagesInput
    web3CryptoAssets?: Web3CryptoAssetCreateNestedManyWithoutLinkPagesInput
  }

  export type LinkPageUncheckedCreateWithoutUserInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    image?: string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: boolean
    isPublic?: boolean
    isTemplate?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isEditing?: boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
    web3Assets?: Web3AssetUncheckedCreateNestedManyWithoutLinkPagesInput
    web3CryptoAssets?: Web3CryptoAssetUncheckedCreateNestedManyWithoutLinkPagesInput
  }

  export type LinkPageCreateOrConnectWithoutUserInput = {
    where: LinkPageWhereUniqueInput
    create: XOR<LinkPageCreateWithoutUserInput, LinkPageUncheckedCreateWithoutUserInput>
  }

  export type LinkPageCreateManyUserInputEnvelope = {
    data: LinkPageCreateManyUserInput | LinkPageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TwoFactorConfirmationCreateWithoutUserInput = {
    id?: string
  }

  export type TwoFactorConfirmationUncheckedCreateWithoutUserInput = {
    id?: string
  }

  export type TwoFactorConfirmationCreateOrConnectWithoutUserInput = {
    where: TwoFactorConfirmationWhereUniqueInput
    create: XOR<TwoFactorConfirmationCreateWithoutUserInput, TwoFactorConfirmationUncheckedCreateWithoutUserInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    profile?: JsonNullableFilter<"Account">
    achievement?: JsonNullableFilter<"Account">
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type LinkPageUpsertWithWhereUniqueWithoutUserInput = {
    where: LinkPageWhereUniqueInput
    update: XOR<LinkPageUpdateWithoutUserInput, LinkPageUncheckedUpdateWithoutUserInput>
    create: XOR<LinkPageCreateWithoutUserInput, LinkPageUncheckedCreateWithoutUserInput>
  }

  export type LinkPageUpdateWithWhereUniqueWithoutUserInput = {
    where: LinkPageWhereUniqueInput
    data: XOR<LinkPageUpdateWithoutUserInput, LinkPageUncheckedUpdateWithoutUserInput>
  }

  export type LinkPageUpdateManyWithWhereWithoutUserInput = {
    where: LinkPageScalarWhereInput
    data: XOR<LinkPageUpdateManyMutationInput, LinkPageUncheckedUpdateManyWithoutUserInput>
  }

  export type LinkPageScalarWhereInput = {
    AND?: LinkPageScalarWhereInput | LinkPageScalarWhereInput[]
    OR?: LinkPageScalarWhereInput[]
    NOT?: LinkPageScalarWhereInput | LinkPageScalarWhereInput[]
    id?: StringFilter<"LinkPage"> | string
    url?: StringFilter<"LinkPage"> | string
    title?: StringNullableFilter<"LinkPage"> | string | null
    description?: StringNullableFilter<"LinkPage"> | string | null
    image?: StringNullableFilter<"LinkPage"> | string | null
    userId?: StringFilter<"LinkPage"> | string
    template?: JsonNullableFilter<"LinkPage">
    isComplete?: BoolFilter<"LinkPage"> | boolean
    isPublic?: BoolFilter<"LinkPage"> | boolean
    isTemplate?: BoolFilter<"LinkPage"> | boolean
    isPublished?: BoolFilter<"LinkPage"> | boolean
    createdAt?: DateTimeFilter<"LinkPage"> | Date | string
    updatedAt?: DateTimeFilter<"LinkPage"> | Date | string
    isEditing?: BoolFilter<"LinkPage"> | boolean
    profile?: JsonNullableFilter<"LinkPage">
  }

  export type TwoFactorConfirmationUpsertWithoutUserInput = {
    update: XOR<TwoFactorConfirmationUpdateWithoutUserInput, TwoFactorConfirmationUncheckedUpdateWithoutUserInput>
    create: XOR<TwoFactorConfirmationCreateWithoutUserInput, TwoFactorConfirmationUncheckedCreateWithoutUserInput>
    where?: TwoFactorConfirmationWhereInput
  }

  export type TwoFactorConfirmationUpdateToOneWithWhereWithoutUserInput = {
    where?: TwoFactorConfirmationWhereInput
    data: XOR<TwoFactorConfirmationUpdateWithoutUserInput, TwoFactorConfirmationUncheckedUpdateWithoutUserInput>
  }

  export type TwoFactorConfirmationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TwoFactorConfirmationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutLinkPagesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.UserRole
    isTwoFactorEnabled?: boolean
    handle?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLinkPagesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.UserRole
    isTwoFactorEnabled?: boolean
    handle?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLinkPagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLinkPagesInput, UserUncheckedCreateWithoutLinkPagesInput>
  }

  export type Web3AssetCreateWithoutLinkPagesInput = {
    id?: string
    type?: $Enums.AssetType
    chain: string
    provider: string
    walletAddress: string
    contractAddress?: string | null
    tokenId?: string | null
    name: string
    symbol?: string | null
    amount?: number | null
    decimals?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    externalUrl?: string | null
    ownerOf: string
    lastUpdated: Date | string
    blockNumber?: string | null
    verified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutWeb3AssetsInput
  }

  export type Web3AssetUncheckedCreateWithoutLinkPagesInput = {
    id?: string
    type?: $Enums.AssetType
    chain: string
    provider: string
    walletAddress: string
    contractAddress?: string | null
    tokenId?: string | null
    name: string
    symbol?: string | null
    amount?: number | null
    decimals?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    externalUrl?: string | null
    ownerOf: string
    lastUpdated: Date | string
    blockNumber?: string | null
    verified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutWeb3AssetsInput
  }

  export type Web3AssetCreateOrConnectWithoutLinkPagesInput = {
    where: Web3AssetWhereUniqueInput
    create: XOR<Web3AssetCreateWithoutLinkPagesInput, Web3AssetUncheckedCreateWithoutLinkPagesInput>
  }

  export type Web3CryptoAssetCreateWithoutLinkPagesInput = {
    id?: string
    type?: $Enums.AssetType
    walletAddress: string
    contractAddress: string
    symbol: string
    name: string
    logo?: string | null
    decimals: number
    balance: number
    balanceFormatted?: string | null
    usdPrice?: number | null
    usdValue?: number | null
    usdPrice24hrPercentChange?: number | null
    usdValue24hrUsdChange?: number | null
    possibleSpam?: boolean | null
    verifiedContract: boolean
    nativeToken?: boolean | null
    holders?: number | null
    chainId: string
    blockchain: string
    provider: string
    network: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutWeb3CryptoAssetsInput
  }

  export type Web3CryptoAssetUncheckedCreateWithoutLinkPagesInput = {
    id?: string
    type?: $Enums.AssetType
    walletAddress: string
    contractAddress: string
    symbol: string
    name: string
    logo?: string | null
    decimals: number
    balance: number
    balanceFormatted?: string | null
    usdPrice?: number | null
    usdValue?: number | null
    usdPrice24hrPercentChange?: number | null
    usdValue24hrUsdChange?: number | null
    possibleSpam?: boolean | null
    verifiedContract: boolean
    nativeToken?: boolean | null
    holders?: number | null
    chainId: string
    blockchain: string
    provider: string
    network: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutWeb3CryptoAssetsInput
  }

  export type Web3CryptoAssetCreateOrConnectWithoutLinkPagesInput = {
    where: Web3CryptoAssetWhereUniqueInput
    create: XOR<Web3CryptoAssetCreateWithoutLinkPagesInput, Web3CryptoAssetUncheckedCreateWithoutLinkPagesInput>
  }

  export type UserUpsertWithoutLinkPagesInput = {
    update: XOR<UserUpdateWithoutLinkPagesInput, UserUncheckedUpdateWithoutLinkPagesInput>
    create: XOR<UserCreateWithoutLinkPagesInput, UserUncheckedCreateWithoutLinkPagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLinkPagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLinkPagesInput, UserUncheckedUpdateWithoutLinkPagesInput>
  }

  export type UserUpdateWithoutLinkPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLinkPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type Web3AssetUpsertWithWhereUniqueWithoutLinkPagesInput = {
    where: Web3AssetWhereUniqueInput
    update: XOR<Web3AssetUpdateWithoutLinkPagesInput, Web3AssetUncheckedUpdateWithoutLinkPagesInput>
    create: XOR<Web3AssetCreateWithoutLinkPagesInput, Web3AssetUncheckedCreateWithoutLinkPagesInput>
  }

  export type Web3AssetUpdateWithWhereUniqueWithoutLinkPagesInput = {
    where: Web3AssetWhereUniqueInput
    data: XOR<Web3AssetUpdateWithoutLinkPagesInput, Web3AssetUncheckedUpdateWithoutLinkPagesInput>
  }

  export type Web3AssetUpdateManyWithWhereWithoutLinkPagesInput = {
    where: Web3AssetScalarWhereInput
    data: XOR<Web3AssetUpdateManyMutationInput, Web3AssetUncheckedUpdateManyWithoutLinkPagesInput>
  }

  export type Web3AssetScalarWhereInput = {
    AND?: Web3AssetScalarWhereInput | Web3AssetScalarWhereInput[]
    OR?: Web3AssetScalarWhereInput[]
    NOT?: Web3AssetScalarWhereInput | Web3AssetScalarWhereInput[]
    id?: StringFilter<"Web3Asset"> | string
    type?: EnumAssetTypeFilter<"Web3Asset"> | $Enums.AssetType
    chain?: StringFilter<"Web3Asset"> | string
    provider?: StringFilter<"Web3Asset"> | string
    walletAddress?: StringFilter<"Web3Asset"> | string
    contractAddress?: StringNullableFilter<"Web3Asset"> | string | null
    tokenId?: StringNullableFilter<"Web3Asset"> | string | null
    name?: StringFilter<"Web3Asset"> | string
    symbol?: StringNullableFilter<"Web3Asset"> | string | null
    amount?: FloatNullableFilter<"Web3Asset"> | number | null
    decimals?: IntNullableFilter<"Web3Asset"> | number | null
    metadata?: JsonNullableFilter<"Web3Asset">
    imageUrl?: StringNullableFilter<"Web3Asset"> | string | null
    externalUrl?: StringNullableFilter<"Web3Asset"> | string | null
    ownerOf?: StringFilter<"Web3Asset"> | string
    lastUpdated?: DateTimeFilter<"Web3Asset"> | Date | string
    blockNumber?: StringNullableFilter<"Web3Asset"> | string | null
    verified?: BoolNullableFilter<"Web3Asset"> | boolean | null
    createdAt?: DateTimeFilter<"Web3Asset"> | Date | string
    updatedAt?: DateTimeFilter<"Web3Asset"> | Date | string
  }

  export type Web3CryptoAssetUpsertWithWhereUniqueWithoutLinkPagesInput = {
    where: Web3CryptoAssetWhereUniqueInput
    update: XOR<Web3CryptoAssetUpdateWithoutLinkPagesInput, Web3CryptoAssetUncheckedUpdateWithoutLinkPagesInput>
    create: XOR<Web3CryptoAssetCreateWithoutLinkPagesInput, Web3CryptoAssetUncheckedCreateWithoutLinkPagesInput>
  }

  export type Web3CryptoAssetUpdateWithWhereUniqueWithoutLinkPagesInput = {
    where: Web3CryptoAssetWhereUniqueInput
    data: XOR<Web3CryptoAssetUpdateWithoutLinkPagesInput, Web3CryptoAssetUncheckedUpdateWithoutLinkPagesInput>
  }

  export type Web3CryptoAssetUpdateManyWithWhereWithoutLinkPagesInput = {
    where: Web3CryptoAssetScalarWhereInput
    data: XOR<Web3CryptoAssetUpdateManyMutationInput, Web3CryptoAssetUncheckedUpdateManyWithoutLinkPagesInput>
  }

  export type Web3CryptoAssetScalarWhereInput = {
    AND?: Web3CryptoAssetScalarWhereInput | Web3CryptoAssetScalarWhereInput[]
    OR?: Web3CryptoAssetScalarWhereInput[]
    NOT?: Web3CryptoAssetScalarWhereInput | Web3CryptoAssetScalarWhereInput[]
    id?: StringFilter<"Web3CryptoAsset"> | string
    type?: EnumAssetTypeFilter<"Web3CryptoAsset"> | $Enums.AssetType
    walletAddress?: StringFilter<"Web3CryptoAsset"> | string
    contractAddress?: StringFilter<"Web3CryptoAsset"> | string
    symbol?: StringFilter<"Web3CryptoAsset"> | string
    name?: StringFilter<"Web3CryptoAsset"> | string
    logo?: StringNullableFilter<"Web3CryptoAsset"> | string | null
    decimals?: IntFilter<"Web3CryptoAsset"> | number
    balance?: FloatFilter<"Web3CryptoAsset"> | number
    balanceFormatted?: StringNullableFilter<"Web3CryptoAsset"> | string | null
    usdPrice?: FloatNullableFilter<"Web3CryptoAsset"> | number | null
    usdValue?: FloatNullableFilter<"Web3CryptoAsset"> | number | null
    usdPrice24hrPercentChange?: FloatNullableFilter<"Web3CryptoAsset"> | number | null
    usdValue24hrUsdChange?: FloatNullableFilter<"Web3CryptoAsset"> | number | null
    possibleSpam?: BoolNullableFilter<"Web3CryptoAsset"> | boolean | null
    verifiedContract?: BoolFilter<"Web3CryptoAsset"> | boolean
    nativeToken?: BoolNullableFilter<"Web3CryptoAsset"> | boolean | null
    holders?: IntNullableFilter<"Web3CryptoAsset"> | number | null
    chainId?: StringFilter<"Web3CryptoAsset"> | string
    blockchain?: StringFilter<"Web3CryptoAsset"> | string
    provider?: StringFilter<"Web3CryptoAsset"> | string
    network?: StringFilter<"Web3CryptoAsset"> | string
    createdAt?: DateTimeFilter<"Web3CryptoAsset"> | Date | string
    updatedAt?: DateTimeFilter<"Web3CryptoAsset"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.UserRole
    isTwoFactorEnabled?: boolean
    handle?: string | null
    linkPages?: LinkPageCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.UserRole
    isTwoFactorEnabled?: boolean
    handle?: string | null
    linkPages?: LinkPageUncheckedCreateNestedManyWithoutUserInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type Web3AssetCreateWithoutAccountsInput = {
    id?: string
    type?: $Enums.AssetType
    chain: string
    provider: string
    walletAddress: string
    contractAddress?: string | null
    tokenId?: string | null
    name: string
    symbol?: string | null
    amount?: number | null
    decimals?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    externalUrl?: string | null
    ownerOf: string
    lastUpdated: Date | string
    blockNumber?: string | null
    verified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    linkPages?: LinkPageCreateNestedManyWithoutWeb3AssetsInput
  }

  export type Web3AssetUncheckedCreateWithoutAccountsInput = {
    id?: string
    type?: $Enums.AssetType
    chain: string
    provider: string
    walletAddress: string
    contractAddress?: string | null
    tokenId?: string | null
    name: string
    symbol?: string | null
    amount?: number | null
    decimals?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: string | null
    externalUrl?: string | null
    ownerOf: string
    lastUpdated: Date | string
    blockNumber?: string | null
    verified?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    linkPages?: LinkPageUncheckedCreateNestedManyWithoutWeb3AssetsInput
  }

  export type Web3AssetCreateOrConnectWithoutAccountsInput = {
    where: Web3AssetWhereUniqueInput
    create: XOR<Web3AssetCreateWithoutAccountsInput, Web3AssetUncheckedCreateWithoutAccountsInput>
  }

  export type Web3CryptoAssetCreateWithoutAccountsInput = {
    id?: string
    type?: $Enums.AssetType
    walletAddress: string
    contractAddress: string
    symbol: string
    name: string
    logo?: string | null
    decimals: number
    balance: number
    balanceFormatted?: string | null
    usdPrice?: number | null
    usdValue?: number | null
    usdPrice24hrPercentChange?: number | null
    usdValue24hrUsdChange?: number | null
    possibleSpam?: boolean | null
    verifiedContract: boolean
    nativeToken?: boolean | null
    holders?: number | null
    chainId: string
    blockchain: string
    provider: string
    network: string
    createdAt?: Date | string
    updatedAt?: Date | string
    linkPages?: LinkPageCreateNestedManyWithoutWeb3CryptoAssetsInput
  }

  export type Web3CryptoAssetUncheckedCreateWithoutAccountsInput = {
    id?: string
    type?: $Enums.AssetType
    walletAddress: string
    contractAddress: string
    symbol: string
    name: string
    logo?: string | null
    decimals: number
    balance: number
    balanceFormatted?: string | null
    usdPrice?: number | null
    usdValue?: number | null
    usdPrice24hrPercentChange?: number | null
    usdValue24hrUsdChange?: number | null
    possibleSpam?: boolean | null
    verifiedContract: boolean
    nativeToken?: boolean | null
    holders?: number | null
    chainId: string
    blockchain: string
    provider: string
    network: string
    createdAt?: Date | string
    updatedAt?: Date | string
    linkPages?: LinkPageUncheckedCreateNestedManyWithoutWeb3CryptoAssetsInput
  }

  export type Web3CryptoAssetCreateOrConnectWithoutAccountsInput = {
    where: Web3CryptoAssetWhereUniqueInput
    create: XOR<Web3CryptoAssetCreateWithoutAccountsInput, Web3CryptoAssetUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    linkPages?: LinkPageUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    linkPages?: LinkPageUncheckedUpdateManyWithoutUserNestedInput
    twoFactorConfirmation?: TwoFactorConfirmationUncheckedUpdateOneWithoutUserNestedInput
  }

  export type Web3AssetUpsertWithWhereUniqueWithoutAccountsInput = {
    where: Web3AssetWhereUniqueInput
    update: XOR<Web3AssetUpdateWithoutAccountsInput, Web3AssetUncheckedUpdateWithoutAccountsInput>
    create: XOR<Web3AssetCreateWithoutAccountsInput, Web3AssetUncheckedCreateWithoutAccountsInput>
  }

  export type Web3AssetUpdateWithWhereUniqueWithoutAccountsInput = {
    where: Web3AssetWhereUniqueInput
    data: XOR<Web3AssetUpdateWithoutAccountsInput, Web3AssetUncheckedUpdateWithoutAccountsInput>
  }

  export type Web3AssetUpdateManyWithWhereWithoutAccountsInput = {
    where: Web3AssetScalarWhereInput
    data: XOR<Web3AssetUpdateManyMutationInput, Web3AssetUncheckedUpdateManyWithoutAccountsInput>
  }

  export type Web3CryptoAssetUpsertWithWhereUniqueWithoutAccountsInput = {
    where: Web3CryptoAssetWhereUniqueInput
    update: XOR<Web3CryptoAssetUpdateWithoutAccountsInput, Web3CryptoAssetUncheckedUpdateWithoutAccountsInput>
    create: XOR<Web3CryptoAssetCreateWithoutAccountsInput, Web3CryptoAssetUncheckedCreateWithoutAccountsInput>
  }

  export type Web3CryptoAssetUpdateWithWhereUniqueWithoutAccountsInput = {
    where: Web3CryptoAssetWhereUniqueInput
    data: XOR<Web3CryptoAssetUpdateWithoutAccountsInput, Web3CryptoAssetUncheckedUpdateWithoutAccountsInput>
  }

  export type Web3CryptoAssetUpdateManyWithWhereWithoutAccountsInput = {
    where: Web3CryptoAssetScalarWhereInput
    data: XOR<Web3CryptoAssetUpdateManyMutationInput, Web3CryptoAssetUncheckedUpdateManyWithoutAccountsInput>
  }

  export type UserCreateWithoutTwoFactorConfirmationInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.UserRole
    isTwoFactorEnabled?: boolean
    handle?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    linkPages?: LinkPageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTwoFactorConfirmationInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: $Enums.UserRole
    isTwoFactorEnabled?: boolean
    handle?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    linkPages?: LinkPageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTwoFactorConfirmationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTwoFactorConfirmationInput, UserUncheckedCreateWithoutTwoFactorConfirmationInput>
  }

  export type UserUpsertWithoutTwoFactorConfirmationInput = {
    update: XOR<UserUpdateWithoutTwoFactorConfirmationInput, UserUncheckedUpdateWithoutTwoFactorConfirmationInput>
    create: XOR<UserCreateWithoutTwoFactorConfirmationInput, UserUncheckedCreateWithoutTwoFactorConfirmationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTwoFactorConfirmationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTwoFactorConfirmationInput, UserUncheckedUpdateWithoutTwoFactorConfirmationInput>
  }

  export type UserUpdateWithoutTwoFactorConfirmationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    linkPages?: LinkPageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTwoFactorConfirmationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    linkPages?: LinkPageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutWeb3AssetsInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
    web3CryptoAssets?: Web3CryptoAssetCreateNestedManyWithoutAccountsInput
  }

  export type AccountUncheckedCreateWithoutWeb3AssetsInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    web3CryptoAssets?: Web3CryptoAssetUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type AccountCreateOrConnectWithoutWeb3AssetsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutWeb3AssetsInput, AccountUncheckedCreateWithoutWeb3AssetsInput>
  }

  export type LinkPageCreateWithoutWeb3AssetsInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    image?: string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: boolean
    isPublic?: boolean
    isTemplate?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isEditing?: boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutLinkPagesInput
    web3CryptoAssets?: Web3CryptoAssetCreateNestedManyWithoutLinkPagesInput
  }

  export type LinkPageUncheckedCreateWithoutWeb3AssetsInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    image?: string | null
    userId: string
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: boolean
    isPublic?: boolean
    isTemplate?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isEditing?: boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
    web3CryptoAssets?: Web3CryptoAssetUncheckedCreateNestedManyWithoutLinkPagesInput
  }

  export type LinkPageCreateOrConnectWithoutWeb3AssetsInput = {
    where: LinkPageWhereUniqueInput
    create: XOR<LinkPageCreateWithoutWeb3AssetsInput, LinkPageUncheckedCreateWithoutWeb3AssetsInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutWeb3AssetsInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutWeb3AssetsInput, AccountUncheckedUpdateWithoutWeb3AssetsInput>
    create: XOR<AccountCreateWithoutWeb3AssetsInput, AccountUncheckedCreateWithoutWeb3AssetsInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutWeb3AssetsInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutWeb3AssetsInput, AccountUncheckedUpdateWithoutWeb3AssetsInput>
  }

  export type AccountUpdateManyWithWhereWithoutWeb3AssetsInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutWeb3AssetsInput>
  }

  export type LinkPageUpsertWithWhereUniqueWithoutWeb3AssetsInput = {
    where: LinkPageWhereUniqueInput
    update: XOR<LinkPageUpdateWithoutWeb3AssetsInput, LinkPageUncheckedUpdateWithoutWeb3AssetsInput>
    create: XOR<LinkPageCreateWithoutWeb3AssetsInput, LinkPageUncheckedCreateWithoutWeb3AssetsInput>
  }

  export type LinkPageUpdateWithWhereUniqueWithoutWeb3AssetsInput = {
    where: LinkPageWhereUniqueInput
    data: XOR<LinkPageUpdateWithoutWeb3AssetsInput, LinkPageUncheckedUpdateWithoutWeb3AssetsInput>
  }

  export type LinkPageUpdateManyWithWhereWithoutWeb3AssetsInput = {
    where: LinkPageScalarWhereInput
    data: XOR<LinkPageUpdateManyMutationInput, LinkPageUncheckedUpdateManyWithoutWeb3AssetsInput>
  }

  export type AccountCreateWithoutWeb3CryptoAssetsInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
    web3Assets?: Web3AssetCreateNestedManyWithoutAccountsInput
  }

  export type AccountUncheckedCreateWithoutWeb3CryptoAssetsInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    web3Assets?: Web3AssetUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type AccountCreateOrConnectWithoutWeb3CryptoAssetsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutWeb3CryptoAssetsInput, AccountUncheckedCreateWithoutWeb3CryptoAssetsInput>
  }

  export type LinkPageCreateWithoutWeb3CryptoAssetsInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    image?: string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: boolean
    isPublic?: boolean
    isTemplate?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isEditing?: boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutLinkPagesInput
    web3Assets?: Web3AssetCreateNestedManyWithoutLinkPagesInput
  }

  export type LinkPageUncheckedCreateWithoutWeb3CryptoAssetsInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    image?: string | null
    userId: string
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: boolean
    isPublic?: boolean
    isTemplate?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isEditing?: boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
    web3Assets?: Web3AssetUncheckedCreateNestedManyWithoutLinkPagesInput
  }

  export type LinkPageCreateOrConnectWithoutWeb3CryptoAssetsInput = {
    where: LinkPageWhereUniqueInput
    create: XOR<LinkPageCreateWithoutWeb3CryptoAssetsInput, LinkPageUncheckedCreateWithoutWeb3CryptoAssetsInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutWeb3CryptoAssetsInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutWeb3CryptoAssetsInput, AccountUncheckedUpdateWithoutWeb3CryptoAssetsInput>
    create: XOR<AccountCreateWithoutWeb3CryptoAssetsInput, AccountUncheckedCreateWithoutWeb3CryptoAssetsInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutWeb3CryptoAssetsInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutWeb3CryptoAssetsInput, AccountUncheckedUpdateWithoutWeb3CryptoAssetsInput>
  }

  export type AccountUpdateManyWithWhereWithoutWeb3CryptoAssetsInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutWeb3CryptoAssetsInput>
  }

  export type LinkPageUpsertWithWhereUniqueWithoutWeb3CryptoAssetsInput = {
    where: LinkPageWhereUniqueInput
    update: XOR<LinkPageUpdateWithoutWeb3CryptoAssetsInput, LinkPageUncheckedUpdateWithoutWeb3CryptoAssetsInput>
    create: XOR<LinkPageCreateWithoutWeb3CryptoAssetsInput, LinkPageUncheckedCreateWithoutWeb3CryptoAssetsInput>
  }

  export type LinkPageUpdateWithWhereUniqueWithoutWeb3CryptoAssetsInput = {
    where: LinkPageWhereUniqueInput
    data: XOR<LinkPageUpdateWithoutWeb3CryptoAssetsInput, LinkPageUncheckedUpdateWithoutWeb3CryptoAssetsInput>
  }

  export type LinkPageUpdateManyWithWhereWithoutWeb3CryptoAssetsInput = {
    where: LinkPageScalarWhereInput
    data: XOR<LinkPageUpdateManyMutationInput, LinkPageUncheckedUpdateManyWithoutWeb3CryptoAssetsInput>
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkPageCreateManyUserInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    image?: string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: boolean
    isPublic?: boolean
    isTemplate?: boolean
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    isEditing?: boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    web3Assets?: Web3AssetUpdateManyWithoutAccountsNestedInput
    web3CryptoAssets?: Web3CryptoAssetUpdateManyWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    web3Assets?: Web3AssetUncheckedUpdateManyWithoutAccountsNestedInput
    web3CryptoAssets?: Web3CryptoAssetUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkPageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEditing?: BoolFieldUpdateOperationsInput | boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
    web3Assets?: Web3AssetUpdateManyWithoutLinkPagesNestedInput
    web3CryptoAssets?: Web3CryptoAssetUpdateManyWithoutLinkPagesNestedInput
  }

  export type LinkPageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEditing?: BoolFieldUpdateOperationsInput | boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
    web3Assets?: Web3AssetUncheckedUpdateManyWithoutLinkPagesNestedInput
    web3CryptoAssets?: Web3CryptoAssetUncheckedUpdateManyWithoutLinkPagesNestedInput
  }

  export type LinkPageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEditing?: BoolFieldUpdateOperationsInput | boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type Web3AssetUpdateWithoutLinkPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    chain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    decimals?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOf?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    blockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutWeb3AssetsNestedInput
  }

  export type Web3AssetUncheckedUpdateWithoutLinkPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    chain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    decimals?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOf?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    blockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutWeb3AssetsNestedInput
  }

  export type Web3AssetUncheckedUpdateManyWithoutLinkPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    chain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    decimals?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOf?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    blockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Web3CryptoAssetUpdateWithoutLinkPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    balanceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    usdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue?: NullableFloatFieldUpdateOperationsInput | number | null
    usdPrice24hrPercentChange?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue24hrUsdChange?: NullableFloatFieldUpdateOperationsInput | number | null
    possibleSpam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedContract?: BoolFieldUpdateOperationsInput | boolean
    nativeToken?: NullableBoolFieldUpdateOperationsInput | boolean | null
    holders?: NullableIntFieldUpdateOperationsInput | number | null
    chainId?: StringFieldUpdateOperationsInput | string
    blockchain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutWeb3CryptoAssetsNestedInput
  }

  export type Web3CryptoAssetUncheckedUpdateWithoutLinkPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    balanceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    usdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue?: NullableFloatFieldUpdateOperationsInput | number | null
    usdPrice24hrPercentChange?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue24hrUsdChange?: NullableFloatFieldUpdateOperationsInput | number | null
    possibleSpam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedContract?: BoolFieldUpdateOperationsInput | boolean
    nativeToken?: NullableBoolFieldUpdateOperationsInput | boolean | null
    holders?: NullableIntFieldUpdateOperationsInput | number | null
    chainId?: StringFieldUpdateOperationsInput | string
    blockchain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutWeb3CryptoAssetsNestedInput
  }

  export type Web3CryptoAssetUncheckedUpdateManyWithoutLinkPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    balanceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    usdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue?: NullableFloatFieldUpdateOperationsInput | number | null
    usdPrice24hrPercentChange?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue24hrUsdChange?: NullableFloatFieldUpdateOperationsInput | number | null
    possibleSpam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedContract?: BoolFieldUpdateOperationsInput | boolean
    nativeToken?: NullableBoolFieldUpdateOperationsInput | boolean | null
    holders?: NullableIntFieldUpdateOperationsInput | number | null
    chainId?: StringFieldUpdateOperationsInput | string
    blockchain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Web3AssetUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    chain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    decimals?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOf?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    blockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkPages?: LinkPageUpdateManyWithoutWeb3AssetsNestedInput
  }

  export type Web3AssetUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    chain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    decimals?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOf?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    blockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkPages?: LinkPageUncheckedUpdateManyWithoutWeb3AssetsNestedInput
  }

  export type Web3AssetUncheckedUpdateManyWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    chain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    decimals?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    externalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ownerOf?: StringFieldUpdateOperationsInput | string
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    blockNumber?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Web3CryptoAssetUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    balanceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    usdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue?: NullableFloatFieldUpdateOperationsInput | number | null
    usdPrice24hrPercentChange?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue24hrUsdChange?: NullableFloatFieldUpdateOperationsInput | number | null
    possibleSpam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedContract?: BoolFieldUpdateOperationsInput | boolean
    nativeToken?: NullableBoolFieldUpdateOperationsInput | boolean | null
    holders?: NullableIntFieldUpdateOperationsInput | number | null
    chainId?: StringFieldUpdateOperationsInput | string
    blockchain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkPages?: LinkPageUpdateManyWithoutWeb3CryptoAssetsNestedInput
  }

  export type Web3CryptoAssetUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    balanceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    usdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue?: NullableFloatFieldUpdateOperationsInput | number | null
    usdPrice24hrPercentChange?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue24hrUsdChange?: NullableFloatFieldUpdateOperationsInput | number | null
    possibleSpam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedContract?: BoolFieldUpdateOperationsInput | boolean
    nativeToken?: NullableBoolFieldUpdateOperationsInput | boolean | null
    holders?: NullableIntFieldUpdateOperationsInput | number | null
    chainId?: StringFieldUpdateOperationsInput | string
    blockchain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    linkPages?: LinkPageUncheckedUpdateManyWithoutWeb3CryptoAssetsNestedInput
  }

  export type Web3CryptoAssetUncheckedUpdateManyWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
    walletAddress?: StringFieldUpdateOperationsInput | string
    contractAddress?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    balanceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    usdPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue?: NullableFloatFieldUpdateOperationsInput | number | null
    usdPrice24hrPercentChange?: NullableFloatFieldUpdateOperationsInput | number | null
    usdValue24hrUsdChange?: NullableFloatFieldUpdateOperationsInput | number | null
    possibleSpam?: NullableBoolFieldUpdateOperationsInput | boolean | null
    verifiedContract?: BoolFieldUpdateOperationsInput | boolean
    nativeToken?: NullableBoolFieldUpdateOperationsInput | boolean | null
    holders?: NullableIntFieldUpdateOperationsInput | number | null
    chainId?: StringFieldUpdateOperationsInput | string
    blockchain?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    network?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutWeb3AssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    web3CryptoAssets?: Web3CryptoAssetUpdateManyWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateWithoutWeb3AssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    web3CryptoAssets?: Web3CryptoAssetUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutWeb3AssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkPageUpdateWithoutWeb3AssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEditing?: BoolFieldUpdateOperationsInput | boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutLinkPagesNestedInput
    web3CryptoAssets?: Web3CryptoAssetUpdateManyWithoutLinkPagesNestedInput
  }

  export type LinkPageUncheckedUpdateWithoutWeb3AssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEditing?: BoolFieldUpdateOperationsInput | boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
    web3CryptoAssets?: Web3CryptoAssetUncheckedUpdateManyWithoutLinkPagesNestedInput
  }

  export type LinkPageUncheckedUpdateManyWithoutWeb3AssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEditing?: BoolFieldUpdateOperationsInput | boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AccountUpdateWithoutWeb3CryptoAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    web3Assets?: Web3AssetUpdateManyWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateWithoutWeb3CryptoAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    web3Assets?: Web3AssetUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutWeb3CryptoAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: NullableJsonNullValueInput | InputJsonValue
    achievement?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkPageUpdateWithoutWeb3CryptoAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEditing?: BoolFieldUpdateOperationsInput | boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutLinkPagesNestedInput
    web3Assets?: Web3AssetUpdateManyWithoutLinkPagesNestedInput
  }

  export type LinkPageUncheckedUpdateWithoutWeb3CryptoAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEditing?: BoolFieldUpdateOperationsInput | boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
    web3Assets?: Web3AssetUncheckedUpdateManyWithoutLinkPagesNestedInput
  }

  export type LinkPageUncheckedUpdateManyWithoutWeb3CryptoAssetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    template?: NullableJsonNullValueInput | InputJsonValue
    isComplete?: BoolFieldUpdateOperationsInput | boolean
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEditing?: BoolFieldUpdateOperationsInput | boolean
    profile?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LinkPageCountOutputTypeDefaultArgs instead
     */
    export type LinkPageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LinkPageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountCountOutputTypeDefaultArgs instead
     */
    export type AccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Web3AssetCountOutputTypeDefaultArgs instead
     */
    export type Web3AssetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Web3AssetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Web3CryptoAssetCountOutputTypeDefaultArgs instead
     */
    export type Web3CryptoAssetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Web3CryptoAssetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LinkPageDefaultArgs instead
     */
    export type LinkPageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LinkPageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PasswordResetTokenDefaultArgs instead
     */
    export type PasswordResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PasswordResetTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LoginTokenDefaultArgs instead
     */
    export type LoginTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LoginTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TwoFactorTokenDefaultArgs instead
     */
    export type TwoFactorTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TwoFactorTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TwoFactorConfirmationDefaultArgs instead
     */
    export type TwoFactorConfirmationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TwoFactorConfirmationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Web3AssetDefaultArgs instead
     */
    export type Web3AssetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Web3AssetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Web3CryptoAssetDefaultArgs instead
     */
    export type Web3CryptoAssetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Web3CryptoAssetDefaultArgs<ExtArgs>

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