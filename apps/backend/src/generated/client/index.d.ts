
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model HealthcheckLog
 * 
 */
export type HealthcheckLog = $Result.DefaultSelection<Prisma.$HealthcheckLogPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model LessonBlock
 * 
 */
export type LessonBlock = $Result.DefaultSelection<Prisma.$LessonBlockPayload>
/**
 * Model LessonProgress
 * 
 */
export type LessonProgress = $Result.DefaultSelection<Prisma.$LessonProgressPayload>
/**
 * Model UserPoint
 * 
 */
export type UserPoint = $Result.DefaultSelection<Prisma.$UserPointPayload>
/**
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model AIPersona
 * 
 */
export type AIPersona = $Result.DefaultSelection<Prisma.$AIPersonaPayload>
/**
 * Model AIChatTransaction
 * 
 */
export type AIChatTransaction = $Result.DefaultSelection<Prisma.$AIChatTransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LessonBlockType: {
  text: 'text',
  image: 'image',
  audio: 'audio',
  video: 'video',
  file: 'file'
};

export type LessonBlockType = (typeof LessonBlockType)[keyof typeof LessonBlockType]


export const ProgressStatus: {
  started: 'started',
  completed: 'completed',
  failed: 'failed'
};

export type ProgressStatus = (typeof ProgressStatus)[keyof typeof ProgressStatus]

}

export type LessonBlockType = $Enums.LessonBlockType

export const LessonBlockType: typeof $Enums.LessonBlockType

export type ProgressStatus = $Enums.ProgressStatus

export const ProgressStatus: typeof $Enums.ProgressStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more HealthcheckLogs
 * const healthcheckLogs = await prisma.healthcheckLog.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more HealthcheckLogs
   * const healthcheckLogs = await prisma.healthcheckLog.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.healthcheckLog`: Exposes CRUD operations for the **HealthcheckLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HealthcheckLogs
    * const healthcheckLogs = await prisma.healthcheckLog.findMany()
    * ```
    */
  get healthcheckLog(): Prisma.HealthcheckLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lessonBlock`: Exposes CRUD operations for the **LessonBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonBlocks
    * const lessonBlocks = await prisma.lessonBlock.findMany()
    * ```
    */
  get lessonBlock(): Prisma.LessonBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lessonProgress`: Exposes CRUD operations for the **LessonProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonProgresses
    * const lessonProgresses = await prisma.lessonProgress.findMany()
    * ```
    */
  get lessonProgress(): Prisma.LessonProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPoint`: Exposes CRUD operations for the **UserPoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPoints
    * const userPoints = await prisma.userPoint.findMany()
    * ```
    */
  get userPoint(): Prisma.UserPointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIPersona`: Exposes CRUD operations for the **AIPersona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIPersonas
    * const aIPersonas = await prisma.aIPersona.findMany()
    * ```
    */
  get aIPersona(): Prisma.AIPersonaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIChatTransaction`: Exposes CRUD operations for the **AIChatTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIChatTransactions
    * const aIChatTransactions = await prisma.aIChatTransaction.findMany()
    * ```
    */
  get aIChatTransaction(): Prisma.AIChatTransactionDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    HealthcheckLog: 'HealthcheckLog',
    Project: 'Project',
    User: 'User',
    Lesson: 'Lesson',
    LessonBlock: 'LessonBlock',
    LessonProgress: 'LessonProgress',
    UserPoint: 'UserPoint',
    Test: 'Test',
    Question: 'Question',
    Answer: 'Answer',
    AIPersona: 'AIPersona',
    AIChatTransaction: 'AIChatTransaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "healthcheckLog" | "project" | "user" | "lesson" | "lessonBlock" | "lessonProgress" | "userPoint" | "test" | "question" | "answer" | "aIPersona" | "aIChatTransaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      HealthcheckLog: {
        payload: Prisma.$HealthcheckLogPayload<ExtArgs>
        fields: Prisma.HealthcheckLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HealthcheckLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthcheckLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HealthcheckLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthcheckLogPayload>
          }
          findFirst: {
            args: Prisma.HealthcheckLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthcheckLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HealthcheckLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthcheckLogPayload>
          }
          findMany: {
            args: Prisma.HealthcheckLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthcheckLogPayload>[]
          }
          create: {
            args: Prisma.HealthcheckLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthcheckLogPayload>
          }
          createMany: {
            args: Prisma.HealthcheckLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HealthcheckLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthcheckLogPayload>[]
          }
          delete: {
            args: Prisma.HealthcheckLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthcheckLogPayload>
          }
          update: {
            args: Prisma.HealthcheckLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthcheckLogPayload>
          }
          deleteMany: {
            args: Prisma.HealthcheckLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HealthcheckLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HealthcheckLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthcheckLogPayload>[]
          }
          upsert: {
            args: Prisma.HealthcheckLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HealthcheckLogPayload>
          }
          aggregate: {
            args: Prisma.HealthcheckLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealthcheckLog>
          }
          groupBy: {
            args: Prisma.HealthcheckLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<HealthcheckLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.HealthcheckLogCountArgs<ExtArgs>
            result: $Utils.Optional<HealthcheckLogCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
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
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      LessonBlock: {
        payload: Prisma.$LessonBlockPayload<ExtArgs>
        fields: Prisma.LessonBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonBlockPayload>
          }
          findFirst: {
            args: Prisma.LessonBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonBlockPayload>
          }
          findMany: {
            args: Prisma.LessonBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonBlockPayload>[]
          }
          create: {
            args: Prisma.LessonBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonBlockPayload>
          }
          createMany: {
            args: Prisma.LessonBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonBlockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonBlockPayload>[]
          }
          delete: {
            args: Prisma.LessonBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonBlockPayload>
          }
          update: {
            args: Prisma.LessonBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonBlockPayload>
          }
          deleteMany: {
            args: Prisma.LessonBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonBlockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonBlockPayload>[]
          }
          upsert: {
            args: Prisma.LessonBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonBlockPayload>
          }
          aggregate: {
            args: Prisma.LessonBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonBlock>
          }
          groupBy: {
            args: Prisma.LessonBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonBlockCountArgs<ExtArgs>
            result: $Utils.Optional<LessonBlockCountAggregateOutputType> | number
          }
        }
      }
      LessonProgress: {
        payload: Prisma.$LessonProgressPayload<ExtArgs>
        fields: Prisma.LessonProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          findFirst: {
            args: Prisma.LessonProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          findMany: {
            args: Prisma.LessonProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>[]
          }
          create: {
            args: Prisma.LessonProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          createMany: {
            args: Prisma.LessonProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>[]
          }
          delete: {
            args: Prisma.LessonProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          update: {
            args: Prisma.LessonProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          deleteMany: {
            args: Prisma.LessonProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>[]
          }
          upsert: {
            args: Prisma.LessonProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          aggregate: {
            args: Prisma.LessonProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonProgress>
          }
          groupBy: {
            args: Prisma.LessonProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonProgressCountArgs<ExtArgs>
            result: $Utils.Optional<LessonProgressCountAggregateOutputType> | number
          }
        }
      }
      UserPoint: {
        payload: Prisma.$UserPointPayload<ExtArgs>
        fields: Prisma.UserPointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          findFirst: {
            args: Prisma.UserPointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          findMany: {
            args: Prisma.UserPointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>[]
          }
          create: {
            args: Prisma.UserPointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          createMany: {
            args: Prisma.UserPointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>[]
          }
          delete: {
            args: Prisma.UserPointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          update: {
            args: Prisma.UserPointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          deleteMany: {
            args: Prisma.UserPointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>[]
          }
          upsert: {
            args: Prisma.UserPointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPointPayload>
          }
          aggregate: {
            args: Prisma.UserPointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPoint>
          }
          groupBy: {
            args: Prisma.UserPointGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPointGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPointCountArgs<ExtArgs>
            result: $Utils.Optional<UserPointCountAggregateOutputType> | number
          }
        }
      }
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      AIPersona: {
        payload: Prisma.$AIPersonaPayload<ExtArgs>
        fields: Prisma.AIPersonaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIPersonaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPersonaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIPersonaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPersonaPayload>
          }
          findFirst: {
            args: Prisma.AIPersonaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPersonaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIPersonaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPersonaPayload>
          }
          findMany: {
            args: Prisma.AIPersonaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPersonaPayload>[]
          }
          create: {
            args: Prisma.AIPersonaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPersonaPayload>
          }
          createMany: {
            args: Prisma.AIPersonaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIPersonaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPersonaPayload>[]
          }
          delete: {
            args: Prisma.AIPersonaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPersonaPayload>
          }
          update: {
            args: Prisma.AIPersonaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPersonaPayload>
          }
          deleteMany: {
            args: Prisma.AIPersonaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIPersonaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIPersonaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPersonaPayload>[]
          }
          upsert: {
            args: Prisma.AIPersonaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPersonaPayload>
          }
          aggregate: {
            args: Prisma.AIPersonaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIPersona>
          }
          groupBy: {
            args: Prisma.AIPersonaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIPersonaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIPersonaCountArgs<ExtArgs>
            result: $Utils.Optional<AIPersonaCountAggregateOutputType> | number
          }
        }
      }
      AIChatTransaction: {
        payload: Prisma.$AIChatTransactionPayload<ExtArgs>
        fields: Prisma.AIChatTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIChatTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIChatTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIChatTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIChatTransactionPayload>
          }
          findFirst: {
            args: Prisma.AIChatTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIChatTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIChatTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIChatTransactionPayload>
          }
          findMany: {
            args: Prisma.AIChatTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIChatTransactionPayload>[]
          }
          create: {
            args: Prisma.AIChatTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIChatTransactionPayload>
          }
          createMany: {
            args: Prisma.AIChatTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIChatTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIChatTransactionPayload>[]
          }
          delete: {
            args: Prisma.AIChatTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIChatTransactionPayload>
          }
          update: {
            args: Prisma.AIChatTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIChatTransactionPayload>
          }
          deleteMany: {
            args: Prisma.AIChatTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIChatTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIChatTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIChatTransactionPayload>[]
          }
          upsert: {
            args: Prisma.AIChatTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIChatTransactionPayload>
          }
          aggregate: {
            args: Prisma.AIChatTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIChatTransaction>
          }
          groupBy: {
            args: Prisma.AIChatTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIChatTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIChatTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<AIChatTransactionCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    healthcheckLog?: HealthcheckLogOmit
    project?: ProjectOmit
    user?: UserOmit
    lesson?: LessonOmit
    lessonBlock?: LessonBlockOmit
    lessonProgress?: LessonProgressOmit
    userPoint?: UserPointOmit
    test?: TestOmit
    question?: QuestionOmit
    answer?: AnswerOmit
    aIPersona?: AIPersonaOmit
    aIChatTransaction?: AIChatTransactionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    users: number
    lessons: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ProjectCountOutputTypeCountUsersArgs
    lessons?: boolean | ProjectCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    progress: number
    points: number
    aiChats: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | UserCountOutputTypeCountProgressArgs
    points?: boolean | UserCountOutputTypeCountPointsArgs
    aiChats?: boolean | UserCountOutputTypeCountAiChatsArgs
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
  export type UserCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPointWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIChatTransactionWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    blocks: number
    progress: number
    tests: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocks?: boolean | LessonCountOutputTypeCountBlocksArgs
    progress?: boolean | LessonCountOutputTypeCountProgressArgs
    tests?: boolean | LessonCountOutputTypeCountTestsArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonBlockWhereInput
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonProgressWhereInput
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountTestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
  }


  /**
   * Count Type TestCountOutputType
   */

  export type TestCountOutputType = {
    questions: number
  }

  export type TestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | TestCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCountOutputType
     */
    select?: TestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model HealthcheckLog
   */

  export type AggregateHealthcheckLog = {
    _count: HealthcheckLogCountAggregateOutputType | null
    _min: HealthcheckLogMinAggregateOutputType | null
    _max: HealthcheckLogMaxAggregateOutputType | null
  }

  export type HealthcheckLogMinAggregateOutputType = {
    id: string | null
    message: string | null
    createdAt: Date | null
  }

  export type HealthcheckLogMaxAggregateOutputType = {
    id: string | null
    message: string | null
    createdAt: Date | null
  }

  export type HealthcheckLogCountAggregateOutputType = {
    id: number
    message: number
    createdAt: number
    _all: number
  }


  export type HealthcheckLogMinAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
  }

  export type HealthcheckLogMaxAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
  }

  export type HealthcheckLogCountAggregateInputType = {
    id?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type HealthcheckLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthcheckLog to aggregate.
     */
    where?: HealthcheckLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthcheckLogs to fetch.
     */
    orderBy?: HealthcheckLogOrderByWithRelationInput | HealthcheckLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HealthcheckLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthcheckLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthcheckLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HealthcheckLogs
    **/
    _count?: true | HealthcheckLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HealthcheckLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HealthcheckLogMaxAggregateInputType
  }

  export type GetHealthcheckLogAggregateType<T extends HealthcheckLogAggregateArgs> = {
        [P in keyof T & keyof AggregateHealthcheckLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealthcheckLog[P]>
      : GetScalarType<T[P], AggregateHealthcheckLog[P]>
  }




  export type HealthcheckLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HealthcheckLogWhereInput
    orderBy?: HealthcheckLogOrderByWithAggregationInput | HealthcheckLogOrderByWithAggregationInput[]
    by: HealthcheckLogScalarFieldEnum[] | HealthcheckLogScalarFieldEnum
    having?: HealthcheckLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HealthcheckLogCountAggregateInputType | true
    _min?: HealthcheckLogMinAggregateInputType
    _max?: HealthcheckLogMaxAggregateInputType
  }

  export type HealthcheckLogGroupByOutputType = {
    id: string
    message: string
    createdAt: Date
    _count: HealthcheckLogCountAggregateOutputType | null
    _min: HealthcheckLogMinAggregateOutputType | null
    _max: HealthcheckLogMaxAggregateOutputType | null
  }

  type GetHealthcheckLogGroupByPayload<T extends HealthcheckLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HealthcheckLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HealthcheckLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HealthcheckLogGroupByOutputType[P]>
            : GetScalarType<T[P], HealthcheckLogGroupByOutputType[P]>
        }
      >
    >


  export type HealthcheckLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["healthcheckLog"]>

  export type HealthcheckLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["healthcheckLog"]>

  export type HealthcheckLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["healthcheckLog"]>

  export type HealthcheckLogSelectScalar = {
    id?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type HealthcheckLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "createdAt", ExtArgs["result"]["healthcheckLog"]>

  export type $HealthcheckLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HealthcheckLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["healthcheckLog"]>
    composites: {}
  }

  type HealthcheckLogGetPayload<S extends boolean | null | undefined | HealthcheckLogDefaultArgs> = $Result.GetResult<Prisma.$HealthcheckLogPayload, S>

  type HealthcheckLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HealthcheckLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HealthcheckLogCountAggregateInputType | true
    }

  export interface HealthcheckLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HealthcheckLog'], meta: { name: 'HealthcheckLog' } }
    /**
     * Find zero or one HealthcheckLog that matches the filter.
     * @param {HealthcheckLogFindUniqueArgs} args - Arguments to find a HealthcheckLog
     * @example
     * // Get one HealthcheckLog
     * const healthcheckLog = await prisma.healthcheckLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HealthcheckLogFindUniqueArgs>(args: SelectSubset<T, HealthcheckLogFindUniqueArgs<ExtArgs>>): Prisma__HealthcheckLogClient<$Result.GetResult<Prisma.$HealthcheckLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HealthcheckLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HealthcheckLogFindUniqueOrThrowArgs} args - Arguments to find a HealthcheckLog
     * @example
     * // Get one HealthcheckLog
     * const healthcheckLog = await prisma.healthcheckLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HealthcheckLogFindUniqueOrThrowArgs>(args: SelectSubset<T, HealthcheckLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HealthcheckLogClient<$Result.GetResult<Prisma.$HealthcheckLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealthcheckLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthcheckLogFindFirstArgs} args - Arguments to find a HealthcheckLog
     * @example
     * // Get one HealthcheckLog
     * const healthcheckLog = await prisma.healthcheckLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HealthcheckLogFindFirstArgs>(args?: SelectSubset<T, HealthcheckLogFindFirstArgs<ExtArgs>>): Prisma__HealthcheckLogClient<$Result.GetResult<Prisma.$HealthcheckLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HealthcheckLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthcheckLogFindFirstOrThrowArgs} args - Arguments to find a HealthcheckLog
     * @example
     * // Get one HealthcheckLog
     * const healthcheckLog = await prisma.healthcheckLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HealthcheckLogFindFirstOrThrowArgs>(args?: SelectSubset<T, HealthcheckLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__HealthcheckLogClient<$Result.GetResult<Prisma.$HealthcheckLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HealthcheckLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthcheckLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HealthcheckLogs
     * const healthcheckLogs = await prisma.healthcheckLog.findMany()
     * 
     * // Get first 10 HealthcheckLogs
     * const healthcheckLogs = await prisma.healthcheckLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const healthcheckLogWithIdOnly = await prisma.healthcheckLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HealthcheckLogFindManyArgs>(args?: SelectSubset<T, HealthcheckLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthcheckLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HealthcheckLog.
     * @param {HealthcheckLogCreateArgs} args - Arguments to create a HealthcheckLog.
     * @example
     * // Create one HealthcheckLog
     * const HealthcheckLog = await prisma.healthcheckLog.create({
     *   data: {
     *     // ... data to create a HealthcheckLog
     *   }
     * })
     * 
     */
    create<T extends HealthcheckLogCreateArgs>(args: SelectSubset<T, HealthcheckLogCreateArgs<ExtArgs>>): Prisma__HealthcheckLogClient<$Result.GetResult<Prisma.$HealthcheckLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HealthcheckLogs.
     * @param {HealthcheckLogCreateManyArgs} args - Arguments to create many HealthcheckLogs.
     * @example
     * // Create many HealthcheckLogs
     * const healthcheckLog = await prisma.healthcheckLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HealthcheckLogCreateManyArgs>(args?: SelectSubset<T, HealthcheckLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HealthcheckLogs and returns the data saved in the database.
     * @param {HealthcheckLogCreateManyAndReturnArgs} args - Arguments to create many HealthcheckLogs.
     * @example
     * // Create many HealthcheckLogs
     * const healthcheckLog = await prisma.healthcheckLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HealthcheckLogs and only return the `id`
     * const healthcheckLogWithIdOnly = await prisma.healthcheckLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HealthcheckLogCreateManyAndReturnArgs>(args?: SelectSubset<T, HealthcheckLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthcheckLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HealthcheckLog.
     * @param {HealthcheckLogDeleteArgs} args - Arguments to delete one HealthcheckLog.
     * @example
     * // Delete one HealthcheckLog
     * const HealthcheckLog = await prisma.healthcheckLog.delete({
     *   where: {
     *     // ... filter to delete one HealthcheckLog
     *   }
     * })
     * 
     */
    delete<T extends HealthcheckLogDeleteArgs>(args: SelectSubset<T, HealthcheckLogDeleteArgs<ExtArgs>>): Prisma__HealthcheckLogClient<$Result.GetResult<Prisma.$HealthcheckLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HealthcheckLog.
     * @param {HealthcheckLogUpdateArgs} args - Arguments to update one HealthcheckLog.
     * @example
     * // Update one HealthcheckLog
     * const healthcheckLog = await prisma.healthcheckLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HealthcheckLogUpdateArgs>(args: SelectSubset<T, HealthcheckLogUpdateArgs<ExtArgs>>): Prisma__HealthcheckLogClient<$Result.GetResult<Prisma.$HealthcheckLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HealthcheckLogs.
     * @param {HealthcheckLogDeleteManyArgs} args - Arguments to filter HealthcheckLogs to delete.
     * @example
     * // Delete a few HealthcheckLogs
     * const { count } = await prisma.healthcheckLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HealthcheckLogDeleteManyArgs>(args?: SelectSubset<T, HealthcheckLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthcheckLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthcheckLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HealthcheckLogs
     * const healthcheckLog = await prisma.healthcheckLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HealthcheckLogUpdateManyArgs>(args: SelectSubset<T, HealthcheckLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HealthcheckLogs and returns the data updated in the database.
     * @param {HealthcheckLogUpdateManyAndReturnArgs} args - Arguments to update many HealthcheckLogs.
     * @example
     * // Update many HealthcheckLogs
     * const healthcheckLog = await prisma.healthcheckLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HealthcheckLogs and only return the `id`
     * const healthcheckLogWithIdOnly = await prisma.healthcheckLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends HealthcheckLogUpdateManyAndReturnArgs>(args: SelectSubset<T, HealthcheckLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HealthcheckLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HealthcheckLog.
     * @param {HealthcheckLogUpsertArgs} args - Arguments to update or create a HealthcheckLog.
     * @example
     * // Update or create a HealthcheckLog
     * const healthcheckLog = await prisma.healthcheckLog.upsert({
     *   create: {
     *     // ... data to create a HealthcheckLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HealthcheckLog we want to update
     *   }
     * })
     */
    upsert<T extends HealthcheckLogUpsertArgs>(args: SelectSubset<T, HealthcheckLogUpsertArgs<ExtArgs>>): Prisma__HealthcheckLogClient<$Result.GetResult<Prisma.$HealthcheckLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HealthcheckLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthcheckLogCountArgs} args - Arguments to filter HealthcheckLogs to count.
     * @example
     * // Count the number of HealthcheckLogs
     * const count = await prisma.healthcheckLog.count({
     *   where: {
     *     // ... the filter for the HealthcheckLogs we want to count
     *   }
     * })
    **/
    count<T extends HealthcheckLogCountArgs>(
      args?: Subset<T, HealthcheckLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HealthcheckLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HealthcheckLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthcheckLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HealthcheckLogAggregateArgs>(args: Subset<T, HealthcheckLogAggregateArgs>): Prisma.PrismaPromise<GetHealthcheckLogAggregateType<T>>

    /**
     * Group by HealthcheckLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HealthcheckLogGroupByArgs} args - Group by arguments.
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
      T extends HealthcheckLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HealthcheckLogGroupByArgs['orderBy'] }
        : { orderBy?: HealthcheckLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HealthcheckLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealthcheckLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HealthcheckLog model
   */
  readonly fields: HealthcheckLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HealthcheckLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HealthcheckLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HealthcheckLog model
   */
  interface HealthcheckLogFieldRefs {
    readonly id: FieldRef<"HealthcheckLog", 'String'>
    readonly message: FieldRef<"HealthcheckLog", 'String'>
    readonly createdAt: FieldRef<"HealthcheckLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HealthcheckLog findUnique
   */
  export type HealthcheckLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthcheckLog
     */
    select?: HealthcheckLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthcheckLog
     */
    omit?: HealthcheckLogOmit<ExtArgs> | null
    /**
     * Filter, which HealthcheckLog to fetch.
     */
    where: HealthcheckLogWhereUniqueInput
  }

  /**
   * HealthcheckLog findUniqueOrThrow
   */
  export type HealthcheckLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthcheckLog
     */
    select?: HealthcheckLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthcheckLog
     */
    omit?: HealthcheckLogOmit<ExtArgs> | null
    /**
     * Filter, which HealthcheckLog to fetch.
     */
    where: HealthcheckLogWhereUniqueInput
  }

  /**
   * HealthcheckLog findFirst
   */
  export type HealthcheckLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthcheckLog
     */
    select?: HealthcheckLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthcheckLog
     */
    omit?: HealthcheckLogOmit<ExtArgs> | null
    /**
     * Filter, which HealthcheckLog to fetch.
     */
    where?: HealthcheckLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthcheckLogs to fetch.
     */
    orderBy?: HealthcheckLogOrderByWithRelationInput | HealthcheckLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthcheckLogs.
     */
    cursor?: HealthcheckLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthcheckLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthcheckLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthcheckLogs.
     */
    distinct?: HealthcheckLogScalarFieldEnum | HealthcheckLogScalarFieldEnum[]
  }

  /**
   * HealthcheckLog findFirstOrThrow
   */
  export type HealthcheckLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthcheckLog
     */
    select?: HealthcheckLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthcheckLog
     */
    omit?: HealthcheckLogOmit<ExtArgs> | null
    /**
     * Filter, which HealthcheckLog to fetch.
     */
    where?: HealthcheckLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthcheckLogs to fetch.
     */
    orderBy?: HealthcheckLogOrderByWithRelationInput | HealthcheckLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HealthcheckLogs.
     */
    cursor?: HealthcheckLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthcheckLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthcheckLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HealthcheckLogs.
     */
    distinct?: HealthcheckLogScalarFieldEnum | HealthcheckLogScalarFieldEnum[]
  }

  /**
   * HealthcheckLog findMany
   */
  export type HealthcheckLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthcheckLog
     */
    select?: HealthcheckLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthcheckLog
     */
    omit?: HealthcheckLogOmit<ExtArgs> | null
    /**
     * Filter, which HealthcheckLogs to fetch.
     */
    where?: HealthcheckLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HealthcheckLogs to fetch.
     */
    orderBy?: HealthcheckLogOrderByWithRelationInput | HealthcheckLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HealthcheckLogs.
     */
    cursor?: HealthcheckLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HealthcheckLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HealthcheckLogs.
     */
    skip?: number
    distinct?: HealthcheckLogScalarFieldEnum | HealthcheckLogScalarFieldEnum[]
  }

  /**
   * HealthcheckLog create
   */
  export type HealthcheckLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthcheckLog
     */
    select?: HealthcheckLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthcheckLog
     */
    omit?: HealthcheckLogOmit<ExtArgs> | null
    /**
     * The data needed to create a HealthcheckLog.
     */
    data: XOR<HealthcheckLogCreateInput, HealthcheckLogUncheckedCreateInput>
  }

  /**
   * HealthcheckLog createMany
   */
  export type HealthcheckLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HealthcheckLogs.
     */
    data: HealthcheckLogCreateManyInput | HealthcheckLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HealthcheckLog createManyAndReturn
   */
  export type HealthcheckLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthcheckLog
     */
    select?: HealthcheckLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HealthcheckLog
     */
    omit?: HealthcheckLogOmit<ExtArgs> | null
    /**
     * The data used to create many HealthcheckLogs.
     */
    data: HealthcheckLogCreateManyInput | HealthcheckLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HealthcheckLog update
   */
  export type HealthcheckLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthcheckLog
     */
    select?: HealthcheckLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthcheckLog
     */
    omit?: HealthcheckLogOmit<ExtArgs> | null
    /**
     * The data needed to update a HealthcheckLog.
     */
    data: XOR<HealthcheckLogUpdateInput, HealthcheckLogUncheckedUpdateInput>
    /**
     * Choose, which HealthcheckLog to update.
     */
    where: HealthcheckLogWhereUniqueInput
  }

  /**
   * HealthcheckLog updateMany
   */
  export type HealthcheckLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HealthcheckLogs.
     */
    data: XOR<HealthcheckLogUpdateManyMutationInput, HealthcheckLogUncheckedUpdateManyInput>
    /**
     * Filter which HealthcheckLogs to update
     */
    where?: HealthcheckLogWhereInput
    /**
     * Limit how many HealthcheckLogs to update.
     */
    limit?: number
  }

  /**
   * HealthcheckLog updateManyAndReturn
   */
  export type HealthcheckLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthcheckLog
     */
    select?: HealthcheckLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HealthcheckLog
     */
    omit?: HealthcheckLogOmit<ExtArgs> | null
    /**
     * The data used to update HealthcheckLogs.
     */
    data: XOR<HealthcheckLogUpdateManyMutationInput, HealthcheckLogUncheckedUpdateManyInput>
    /**
     * Filter which HealthcheckLogs to update
     */
    where?: HealthcheckLogWhereInput
    /**
     * Limit how many HealthcheckLogs to update.
     */
    limit?: number
  }

  /**
   * HealthcheckLog upsert
   */
  export type HealthcheckLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthcheckLog
     */
    select?: HealthcheckLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthcheckLog
     */
    omit?: HealthcheckLogOmit<ExtArgs> | null
    /**
     * The filter to search for the HealthcheckLog to update in case it exists.
     */
    where: HealthcheckLogWhereUniqueInput
    /**
     * In case the HealthcheckLog found by the `where` argument doesn't exist, create a new HealthcheckLog with this data.
     */
    create: XOR<HealthcheckLogCreateInput, HealthcheckLogUncheckedCreateInput>
    /**
     * In case the HealthcheckLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HealthcheckLogUpdateInput, HealthcheckLogUncheckedUpdateInput>
  }

  /**
   * HealthcheckLog delete
   */
  export type HealthcheckLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthcheckLog
     */
    select?: HealthcheckLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthcheckLog
     */
    omit?: HealthcheckLogOmit<ExtArgs> | null
    /**
     * Filter which HealthcheckLog to delete.
     */
    where: HealthcheckLogWhereUniqueInput
  }

  /**
   * HealthcheckLog deleteMany
   */
  export type HealthcheckLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HealthcheckLogs to delete
     */
    where?: HealthcheckLogWhereInput
    /**
     * Limit how many HealthcheckLogs to delete.
     */
    limit?: number
  }

  /**
   * HealthcheckLog without action
   */
  export type HealthcheckLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HealthcheckLog
     */
    select?: HealthcheckLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HealthcheckLog
     */
    omit?: HealthcheckLogOmit<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    code: number
    title: number
    description: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    code?: true
    title?: true
    description?: true
    isActive?: true
    createdAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    code?: true
    title?: true
    description?: true
    isActive?: true
    createdAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    code?: true
    title?: true
    description?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    code: string
    title: string
    description: string | null
    isActive: boolean
    createdAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    users?: boolean | Project$usersArgs<ExtArgs>
    lessons?: boolean | Project$lessonsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "title" | "description" | "isActive" | "createdAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Project$usersArgs<ExtArgs>
    lessons?: boolean | Project$lessonsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      lessons: Prisma.$LessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      title: string
      description: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Project$usersArgs<ExtArgs> = {}>(args?: Subset<T, Project$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lessons<T extends Project$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Project$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly code: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly isActive: FieldRef<"Project", 'Boolean'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.users
   */
  export type Project$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Project.lessons
   */
  export type Project$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    currentStreak: number | null
    maxStreak: number | null
  }

  export type UserSumAggregateOutputType = {
    currentStreak: number | null
    maxStreak: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    telegramId: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    lastActivityAt: Date | null
    currentStreak: number | null
    maxStreak: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    telegramId: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    lastActivityAt: Date | null
    currentStreak: number | null
    maxStreak: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    projectId: number
    telegramId: number
    name: number
    role: number
    createdAt: number
    lastActivityAt: number
    currentStreak: number
    maxStreak: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    currentStreak?: true
    maxStreak?: true
  }

  export type UserSumAggregateInputType = {
    currentStreak?: true
    maxStreak?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    projectId?: true
    telegramId?: true
    name?: true
    role?: true
    createdAt?: true
    lastActivityAt?: true
    currentStreak?: true
    maxStreak?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    projectId?: true
    telegramId?: true
    name?: true
    role?: true
    createdAt?: true
    lastActivityAt?: true
    currentStreak?: true
    maxStreak?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    projectId?: true
    telegramId?: true
    name?: true
    role?: true
    createdAt?: true
    lastActivityAt?: true
    currentStreak?: true
    maxStreak?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    projectId: string | null
    telegramId: string
    name: string | null
    role: string
    createdAt: Date
    lastActivityAt: Date | null
    currentStreak: number
    maxStreak: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    projectId?: boolean
    telegramId?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    lastActivityAt?: boolean
    currentStreak?: boolean
    maxStreak?: boolean
    project?: boolean | User$projectArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    points?: boolean | User$pointsArgs<ExtArgs>
    aiChats?: boolean | User$aiChatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    telegramId?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    lastActivityAt?: boolean
    currentStreak?: boolean
    maxStreak?: boolean
    project?: boolean | User$projectArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    telegramId?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    lastActivityAt?: boolean
    currentStreak?: boolean
    maxStreak?: boolean
    project?: boolean | User$projectArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    projectId?: boolean
    telegramId?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    lastActivityAt?: boolean
    currentStreak?: boolean
    maxStreak?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "telegramId" | "name" | "role" | "createdAt" | "lastActivityAt" | "currentStreak" | "maxStreak", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | User$projectArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    points?: boolean | User$pointsArgs<ExtArgs>
    aiChats?: boolean | User$aiChatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | User$projectArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | User$projectArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs> | null
      progress: Prisma.$LessonProgressPayload<ExtArgs>[]
      points: Prisma.$UserPointPayload<ExtArgs>[]
      aiChats: Prisma.$AIChatTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string | null
      telegramId: string
      name: string | null
      role: string
      createdAt: Date
      lastActivityAt: Date | null
      currentStreak: number
      maxStreak: number
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
    project<T extends User$projectArgs<ExtArgs> = {}>(args?: Subset<T, User$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    progress<T extends User$progressArgs<ExtArgs> = {}>(args?: Subset<T, User$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    points<T extends User$pointsArgs<ExtArgs> = {}>(args?: Subset<T, User$pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiChats<T extends User$aiChatsArgs<ExtArgs> = {}>(args?: Subset<T, User$aiChatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIChatTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly projectId: FieldRef<"User", 'String'>
    readonly telegramId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly lastActivityAt: FieldRef<"User", 'DateTime'>
    readonly currentStreak: FieldRef<"User", 'Int'>
    readonly maxStreak: FieldRef<"User", 'Int'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.project
   */
  export type User$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * User.progress
   */
  export type User$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    where?: LessonProgressWhereInput
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    cursor?: LessonProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * User.points
   */
  export type User$pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPoint
     */
    omit?: UserPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    where?: UserPointWhereInput
    orderBy?: UserPointOrderByWithRelationInput | UserPointOrderByWithRelationInput[]
    cursor?: UserPointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPointScalarFieldEnum | UserPointScalarFieldEnum[]
  }

  /**
   * User.aiChats
   */
  export type User$aiChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIChatTransaction
     */
    select?: AIChatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIChatTransaction
     */
    omit?: AIChatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIChatTransactionInclude<ExtArgs> | null
    where?: AIChatTransactionWhereInput
    orderBy?: AIChatTransactionOrderByWithRelationInput | AIChatTransactionOrderByWithRelationInput[]
    cursor?: AIChatTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIChatTransactionScalarFieldEnum | AIChatTransactionScalarFieldEnum[]
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
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    order: number | null
  }

  export type LessonSumAggregateOutputType = {
    order: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    code: string | null
    title: string | null
    description: string | null
    order: number | null
    isPublished: boolean | null
    aiPrompt: string | null
    videoUrl: string | null
    createdAt: Date | null
  }

  export type LessonMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    code: string | null
    title: string | null
    description: string | null
    order: number | null
    isPublished: boolean | null
    aiPrompt: string | null
    videoUrl: string | null
    createdAt: Date | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    projectId: number
    code: number
    title: number
    description: number
    order: number
    isPublished: number
    aiPrompt: number
    videoUrl: number
    createdAt: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    order?: true
  }

  export type LessonSumAggregateInputType = {
    order?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    projectId?: true
    code?: true
    title?: true
    description?: true
    order?: true
    isPublished?: true
    aiPrompt?: true
    videoUrl?: true
    createdAt?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    projectId?: true
    code?: true
    title?: true
    description?: true
    order?: true
    isPublished?: true
    aiPrompt?: true
    videoUrl?: true
    createdAt?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    projectId?: true
    code?: true
    title?: true
    description?: true
    order?: true
    isPublished?: true
    aiPrompt?: true
    videoUrl?: true
    createdAt?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: string
    projectId: string | null
    code: string
    title: string
    description: string | null
    order: number
    isPublished: boolean
    aiPrompt: string | null
    videoUrl: string | null
    createdAt: Date
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    isPublished?: boolean
    aiPrompt?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    project?: boolean | Lesson$projectArgs<ExtArgs>
    blocks?: boolean | Lesson$blocksArgs<ExtArgs>
    progress?: boolean | Lesson$progressArgs<ExtArgs>
    tests?: boolean | Lesson$testsArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    isPublished?: boolean
    aiPrompt?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    project?: boolean | Lesson$projectArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    isPublished?: boolean
    aiPrompt?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    project?: boolean | Lesson$projectArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectScalar = {
    id?: boolean
    projectId?: boolean
    code?: boolean
    title?: boolean
    description?: boolean
    order?: boolean
    isPublished?: boolean
    aiPrompt?: boolean
    videoUrl?: boolean
    createdAt?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "code" | "title" | "description" | "order" | "isPublished" | "aiPrompt" | "videoUrl" | "createdAt", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Lesson$projectArgs<ExtArgs>
    blocks?: boolean | Lesson$blocksArgs<ExtArgs>
    progress?: boolean | Lesson$progressArgs<ExtArgs>
    tests?: boolean | Lesson$testsArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Lesson$projectArgs<ExtArgs>
  }
  export type LessonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Lesson$projectArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs> | null
      blocks: Prisma.$LessonBlockPayload<ExtArgs>[]
      progress: Prisma.$LessonProgressPayload<ExtArgs>[]
      tests: Prisma.$TestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string | null
      code: string
      title: string
      description: string | null
      order: number
      isPublished: boolean
      aiPrompt: string | null
      videoUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {LessonUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.updateManyAndReturn({
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
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
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
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends Lesson$projectArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    blocks<T extends Lesson$blocksArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$blocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progress<T extends Lesson$progressArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tests<T extends Lesson$testsArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$testsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'String'>
    readonly projectId: FieldRef<"Lesson", 'String'>
    readonly code: FieldRef<"Lesson", 'String'>
    readonly title: FieldRef<"Lesson", 'String'>
    readonly description: FieldRef<"Lesson", 'String'>
    readonly order: FieldRef<"Lesson", 'Int'>
    readonly isPublished: FieldRef<"Lesson", 'Boolean'>
    readonly aiPrompt: FieldRef<"Lesson", 'String'>
    readonly videoUrl: FieldRef<"Lesson", 'String'>
    readonly createdAt: FieldRef<"Lesson", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson updateManyAndReturn
   */
  export type LessonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson.project
   */
  export type Lesson$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * Lesson.blocks
   */
  export type Lesson$blocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonBlock
     */
    select?: LessonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonBlock
     */
    omit?: LessonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonBlockInclude<ExtArgs> | null
    where?: LessonBlockWhereInput
    orderBy?: LessonBlockOrderByWithRelationInput | LessonBlockOrderByWithRelationInput[]
    cursor?: LessonBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonBlockScalarFieldEnum | LessonBlockScalarFieldEnum[]
  }

  /**
   * Lesson.progress
   */
  export type Lesson$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    where?: LessonProgressWhereInput
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    cursor?: LessonProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * Lesson.tests
   */
  export type Lesson$testsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    cursor?: TestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model LessonBlock
   */

  export type AggregateLessonBlock = {
    _count: LessonBlockCountAggregateOutputType | null
    _avg: LessonBlockAvgAggregateOutputType | null
    _sum: LessonBlockSumAggregateOutputType | null
    _min: LessonBlockMinAggregateOutputType | null
    _max: LessonBlockMaxAggregateOutputType | null
  }

  export type LessonBlockAvgAggregateOutputType = {
    order: number | null
  }

  export type LessonBlockSumAggregateOutputType = {
    order: number | null
  }

  export type LessonBlockMinAggregateOutputType = {
    id: string | null
    lessonId: string | null
    type: $Enums.LessonBlockType | null
    order: number | null
    textContent: string | null
    mediaUrl: string | null
    telegramFileId: string | null
    mimeType: string | null
    caption: string | null
    createdAt: Date | null
  }

  export type LessonBlockMaxAggregateOutputType = {
    id: string | null
    lessonId: string | null
    type: $Enums.LessonBlockType | null
    order: number | null
    textContent: string | null
    mediaUrl: string | null
    telegramFileId: string | null
    mimeType: string | null
    caption: string | null
    createdAt: Date | null
  }

  export type LessonBlockCountAggregateOutputType = {
    id: number
    lessonId: number
    type: number
    order: number
    textContent: number
    mediaUrl: number
    telegramFileId: number
    mimeType: number
    caption: number
    createdAt: number
    _all: number
  }


  export type LessonBlockAvgAggregateInputType = {
    order?: true
  }

  export type LessonBlockSumAggregateInputType = {
    order?: true
  }

  export type LessonBlockMinAggregateInputType = {
    id?: true
    lessonId?: true
    type?: true
    order?: true
    textContent?: true
    mediaUrl?: true
    telegramFileId?: true
    mimeType?: true
    caption?: true
    createdAt?: true
  }

  export type LessonBlockMaxAggregateInputType = {
    id?: true
    lessonId?: true
    type?: true
    order?: true
    textContent?: true
    mediaUrl?: true
    telegramFileId?: true
    mimeType?: true
    caption?: true
    createdAt?: true
  }

  export type LessonBlockCountAggregateInputType = {
    id?: true
    lessonId?: true
    type?: true
    order?: true
    textContent?: true
    mediaUrl?: true
    telegramFileId?: true
    mimeType?: true
    caption?: true
    createdAt?: true
    _all?: true
  }

  export type LessonBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonBlock to aggregate.
     */
    where?: LessonBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonBlocks to fetch.
     */
    orderBy?: LessonBlockOrderByWithRelationInput | LessonBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonBlocks
    **/
    _count?: true | LessonBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonBlockMaxAggregateInputType
  }

  export type GetLessonBlockAggregateType<T extends LessonBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonBlock[P]>
      : GetScalarType<T[P], AggregateLessonBlock[P]>
  }




  export type LessonBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonBlockWhereInput
    orderBy?: LessonBlockOrderByWithAggregationInput | LessonBlockOrderByWithAggregationInput[]
    by: LessonBlockScalarFieldEnum[] | LessonBlockScalarFieldEnum
    having?: LessonBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonBlockCountAggregateInputType | true
    _avg?: LessonBlockAvgAggregateInputType
    _sum?: LessonBlockSumAggregateInputType
    _min?: LessonBlockMinAggregateInputType
    _max?: LessonBlockMaxAggregateInputType
  }

  export type LessonBlockGroupByOutputType = {
    id: string
    lessonId: string
    type: $Enums.LessonBlockType
    order: number
    textContent: string | null
    mediaUrl: string | null
    telegramFileId: string | null
    mimeType: string | null
    caption: string | null
    createdAt: Date
    _count: LessonBlockCountAggregateOutputType | null
    _avg: LessonBlockAvgAggregateOutputType | null
    _sum: LessonBlockSumAggregateOutputType | null
    _min: LessonBlockMinAggregateOutputType | null
    _max: LessonBlockMaxAggregateOutputType | null
  }

  type GetLessonBlockGroupByPayload<T extends LessonBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonBlockGroupByOutputType[P]>
            : GetScalarType<T[P], LessonBlockGroupByOutputType[P]>
        }
      >
    >


  export type LessonBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    type?: boolean
    order?: boolean
    textContent?: boolean
    mediaUrl?: boolean
    telegramFileId?: boolean
    mimeType?: boolean
    caption?: boolean
    createdAt?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonBlock"]>

  export type LessonBlockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    type?: boolean
    order?: boolean
    textContent?: boolean
    mediaUrl?: boolean
    telegramFileId?: boolean
    mimeType?: boolean
    caption?: boolean
    createdAt?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonBlock"]>

  export type LessonBlockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    type?: boolean
    order?: boolean
    textContent?: boolean
    mediaUrl?: boolean
    telegramFileId?: boolean
    mimeType?: boolean
    caption?: boolean
    createdAt?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonBlock"]>

  export type LessonBlockSelectScalar = {
    id?: boolean
    lessonId?: boolean
    type?: boolean
    order?: boolean
    textContent?: boolean
    mediaUrl?: boolean
    telegramFileId?: boolean
    mimeType?: boolean
    caption?: boolean
    createdAt?: boolean
  }

  export type LessonBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lessonId" | "type" | "order" | "textContent" | "mediaUrl" | "telegramFileId" | "mimeType" | "caption" | "createdAt", ExtArgs["result"]["lessonBlock"]>
  export type LessonBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonBlockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonBlockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $LessonBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonBlock"
    objects: {
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lessonId: string
      type: $Enums.LessonBlockType
      order: number
      textContent: string | null
      mediaUrl: string | null
      telegramFileId: string | null
      mimeType: string | null
      caption: string | null
      createdAt: Date
    }, ExtArgs["result"]["lessonBlock"]>
    composites: {}
  }

  type LessonBlockGetPayload<S extends boolean | null | undefined | LessonBlockDefaultArgs> = $Result.GetResult<Prisma.$LessonBlockPayload, S>

  type LessonBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonBlockCountAggregateInputType | true
    }

  export interface LessonBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonBlock'], meta: { name: 'LessonBlock' } }
    /**
     * Find zero or one LessonBlock that matches the filter.
     * @param {LessonBlockFindUniqueArgs} args - Arguments to find a LessonBlock
     * @example
     * // Get one LessonBlock
     * const lessonBlock = await prisma.lessonBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonBlockFindUniqueArgs>(args: SelectSubset<T, LessonBlockFindUniqueArgs<ExtArgs>>): Prisma__LessonBlockClient<$Result.GetResult<Prisma.$LessonBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LessonBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonBlockFindUniqueOrThrowArgs} args - Arguments to find a LessonBlock
     * @example
     * // Get one LessonBlock
     * const lessonBlock = await prisma.lessonBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonBlockClient<$Result.GetResult<Prisma.$LessonBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonBlockFindFirstArgs} args - Arguments to find a LessonBlock
     * @example
     * // Get one LessonBlock
     * const lessonBlock = await prisma.lessonBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonBlockFindFirstArgs>(args?: SelectSubset<T, LessonBlockFindFirstArgs<ExtArgs>>): Prisma__LessonBlockClient<$Result.GetResult<Prisma.$LessonBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonBlockFindFirstOrThrowArgs} args - Arguments to find a LessonBlock
     * @example
     * // Get one LessonBlock
     * const lessonBlock = await prisma.lessonBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonBlockClient<$Result.GetResult<Prisma.$LessonBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LessonBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonBlocks
     * const lessonBlocks = await prisma.lessonBlock.findMany()
     * 
     * // Get first 10 LessonBlocks
     * const lessonBlocks = await prisma.lessonBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonBlockWithIdOnly = await prisma.lessonBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonBlockFindManyArgs>(args?: SelectSubset<T, LessonBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LessonBlock.
     * @param {LessonBlockCreateArgs} args - Arguments to create a LessonBlock.
     * @example
     * // Create one LessonBlock
     * const LessonBlock = await prisma.lessonBlock.create({
     *   data: {
     *     // ... data to create a LessonBlock
     *   }
     * })
     * 
     */
    create<T extends LessonBlockCreateArgs>(args: SelectSubset<T, LessonBlockCreateArgs<ExtArgs>>): Prisma__LessonBlockClient<$Result.GetResult<Prisma.$LessonBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LessonBlocks.
     * @param {LessonBlockCreateManyArgs} args - Arguments to create many LessonBlocks.
     * @example
     * // Create many LessonBlocks
     * const lessonBlock = await prisma.lessonBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonBlockCreateManyArgs>(args?: SelectSubset<T, LessonBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonBlocks and returns the data saved in the database.
     * @param {LessonBlockCreateManyAndReturnArgs} args - Arguments to create many LessonBlocks.
     * @example
     * // Create many LessonBlocks
     * const lessonBlock = await prisma.lessonBlock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonBlocks and only return the `id`
     * const lessonBlockWithIdOnly = await prisma.lessonBlock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonBlockCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonBlockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonBlockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LessonBlock.
     * @param {LessonBlockDeleteArgs} args - Arguments to delete one LessonBlock.
     * @example
     * // Delete one LessonBlock
     * const LessonBlock = await prisma.lessonBlock.delete({
     *   where: {
     *     // ... filter to delete one LessonBlock
     *   }
     * })
     * 
     */
    delete<T extends LessonBlockDeleteArgs>(args: SelectSubset<T, LessonBlockDeleteArgs<ExtArgs>>): Prisma__LessonBlockClient<$Result.GetResult<Prisma.$LessonBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LessonBlock.
     * @param {LessonBlockUpdateArgs} args - Arguments to update one LessonBlock.
     * @example
     * // Update one LessonBlock
     * const lessonBlock = await prisma.lessonBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonBlockUpdateArgs>(args: SelectSubset<T, LessonBlockUpdateArgs<ExtArgs>>): Prisma__LessonBlockClient<$Result.GetResult<Prisma.$LessonBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LessonBlocks.
     * @param {LessonBlockDeleteManyArgs} args - Arguments to filter LessonBlocks to delete.
     * @example
     * // Delete a few LessonBlocks
     * const { count } = await prisma.lessonBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonBlockDeleteManyArgs>(args?: SelectSubset<T, LessonBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonBlocks
     * const lessonBlock = await prisma.lessonBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonBlockUpdateManyArgs>(args: SelectSubset<T, LessonBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonBlocks and returns the data updated in the database.
     * @param {LessonBlockUpdateManyAndReturnArgs} args - Arguments to update many LessonBlocks.
     * @example
     * // Update many LessonBlocks
     * const lessonBlock = await prisma.lessonBlock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LessonBlocks and only return the `id`
     * const lessonBlockWithIdOnly = await prisma.lessonBlock.updateManyAndReturn({
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
    updateManyAndReturn<T extends LessonBlockUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonBlockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonBlockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LessonBlock.
     * @param {LessonBlockUpsertArgs} args - Arguments to update or create a LessonBlock.
     * @example
     * // Update or create a LessonBlock
     * const lessonBlock = await prisma.lessonBlock.upsert({
     *   create: {
     *     // ... data to create a LessonBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonBlock we want to update
     *   }
     * })
     */
    upsert<T extends LessonBlockUpsertArgs>(args: SelectSubset<T, LessonBlockUpsertArgs<ExtArgs>>): Prisma__LessonBlockClient<$Result.GetResult<Prisma.$LessonBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LessonBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonBlockCountArgs} args - Arguments to filter LessonBlocks to count.
     * @example
     * // Count the number of LessonBlocks
     * const count = await prisma.lessonBlock.count({
     *   where: {
     *     // ... the filter for the LessonBlocks we want to count
     *   }
     * })
    **/
    count<T extends LessonBlockCountArgs>(
      args?: Subset<T, LessonBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonBlockAggregateArgs>(args: Subset<T, LessonBlockAggregateArgs>): Prisma.PrismaPromise<GetLessonBlockAggregateType<T>>

    /**
     * Group by LessonBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonBlockGroupByArgs} args - Group by arguments.
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
      T extends LessonBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonBlockGroupByArgs['orderBy'] }
        : { orderBy?: LessonBlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonBlock model
   */
  readonly fields: LessonBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LessonBlock model
   */
  interface LessonBlockFieldRefs {
    readonly id: FieldRef<"LessonBlock", 'String'>
    readonly lessonId: FieldRef<"LessonBlock", 'String'>
    readonly type: FieldRef<"LessonBlock", 'LessonBlockType'>
    readonly order: FieldRef<"LessonBlock", 'Int'>
    readonly textContent: FieldRef<"LessonBlock", 'String'>
    readonly mediaUrl: FieldRef<"LessonBlock", 'String'>
    readonly telegramFileId: FieldRef<"LessonBlock", 'String'>
    readonly mimeType: FieldRef<"LessonBlock", 'String'>
    readonly caption: FieldRef<"LessonBlock", 'String'>
    readonly createdAt: FieldRef<"LessonBlock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LessonBlock findUnique
   */
  export type LessonBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonBlock
     */
    select?: LessonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonBlock
     */
    omit?: LessonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonBlockInclude<ExtArgs> | null
    /**
     * Filter, which LessonBlock to fetch.
     */
    where: LessonBlockWhereUniqueInput
  }

  /**
   * LessonBlock findUniqueOrThrow
   */
  export type LessonBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonBlock
     */
    select?: LessonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonBlock
     */
    omit?: LessonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonBlockInclude<ExtArgs> | null
    /**
     * Filter, which LessonBlock to fetch.
     */
    where: LessonBlockWhereUniqueInput
  }

  /**
   * LessonBlock findFirst
   */
  export type LessonBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonBlock
     */
    select?: LessonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonBlock
     */
    omit?: LessonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonBlockInclude<ExtArgs> | null
    /**
     * Filter, which LessonBlock to fetch.
     */
    where?: LessonBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonBlocks to fetch.
     */
    orderBy?: LessonBlockOrderByWithRelationInput | LessonBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonBlocks.
     */
    cursor?: LessonBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonBlocks.
     */
    distinct?: LessonBlockScalarFieldEnum | LessonBlockScalarFieldEnum[]
  }

  /**
   * LessonBlock findFirstOrThrow
   */
  export type LessonBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonBlock
     */
    select?: LessonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonBlock
     */
    omit?: LessonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonBlockInclude<ExtArgs> | null
    /**
     * Filter, which LessonBlock to fetch.
     */
    where?: LessonBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonBlocks to fetch.
     */
    orderBy?: LessonBlockOrderByWithRelationInput | LessonBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonBlocks.
     */
    cursor?: LessonBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonBlocks.
     */
    distinct?: LessonBlockScalarFieldEnum | LessonBlockScalarFieldEnum[]
  }

  /**
   * LessonBlock findMany
   */
  export type LessonBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonBlock
     */
    select?: LessonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonBlock
     */
    omit?: LessonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonBlockInclude<ExtArgs> | null
    /**
     * Filter, which LessonBlocks to fetch.
     */
    where?: LessonBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonBlocks to fetch.
     */
    orderBy?: LessonBlockOrderByWithRelationInput | LessonBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonBlocks.
     */
    cursor?: LessonBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonBlocks.
     */
    skip?: number
    distinct?: LessonBlockScalarFieldEnum | LessonBlockScalarFieldEnum[]
  }

  /**
   * LessonBlock create
   */
  export type LessonBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonBlock
     */
    select?: LessonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonBlock
     */
    omit?: LessonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonBlock.
     */
    data: XOR<LessonBlockCreateInput, LessonBlockUncheckedCreateInput>
  }

  /**
   * LessonBlock createMany
   */
  export type LessonBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonBlocks.
     */
    data: LessonBlockCreateManyInput | LessonBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonBlock createManyAndReturn
   */
  export type LessonBlockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonBlock
     */
    select?: LessonBlockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonBlock
     */
    omit?: LessonBlockOmit<ExtArgs> | null
    /**
     * The data used to create many LessonBlocks.
     */
    data: LessonBlockCreateManyInput | LessonBlockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonBlockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonBlock update
   */
  export type LessonBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonBlock
     */
    select?: LessonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonBlock
     */
    omit?: LessonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonBlock.
     */
    data: XOR<LessonBlockUpdateInput, LessonBlockUncheckedUpdateInput>
    /**
     * Choose, which LessonBlock to update.
     */
    where: LessonBlockWhereUniqueInput
  }

  /**
   * LessonBlock updateMany
   */
  export type LessonBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonBlocks.
     */
    data: XOR<LessonBlockUpdateManyMutationInput, LessonBlockUncheckedUpdateManyInput>
    /**
     * Filter which LessonBlocks to update
     */
    where?: LessonBlockWhereInput
    /**
     * Limit how many LessonBlocks to update.
     */
    limit?: number
  }

  /**
   * LessonBlock updateManyAndReturn
   */
  export type LessonBlockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonBlock
     */
    select?: LessonBlockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonBlock
     */
    omit?: LessonBlockOmit<ExtArgs> | null
    /**
     * The data used to update LessonBlocks.
     */
    data: XOR<LessonBlockUpdateManyMutationInput, LessonBlockUncheckedUpdateManyInput>
    /**
     * Filter which LessonBlocks to update
     */
    where?: LessonBlockWhereInput
    /**
     * Limit how many LessonBlocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonBlockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonBlock upsert
   */
  export type LessonBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonBlock
     */
    select?: LessonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonBlock
     */
    omit?: LessonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonBlock to update in case it exists.
     */
    where: LessonBlockWhereUniqueInput
    /**
     * In case the LessonBlock found by the `where` argument doesn't exist, create a new LessonBlock with this data.
     */
    create: XOR<LessonBlockCreateInput, LessonBlockUncheckedCreateInput>
    /**
     * In case the LessonBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonBlockUpdateInput, LessonBlockUncheckedUpdateInput>
  }

  /**
   * LessonBlock delete
   */
  export type LessonBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonBlock
     */
    select?: LessonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonBlock
     */
    omit?: LessonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonBlockInclude<ExtArgs> | null
    /**
     * Filter which LessonBlock to delete.
     */
    where: LessonBlockWhereUniqueInput
  }

  /**
   * LessonBlock deleteMany
   */
  export type LessonBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonBlocks to delete
     */
    where?: LessonBlockWhereInput
    /**
     * Limit how many LessonBlocks to delete.
     */
    limit?: number
  }

  /**
   * LessonBlock without action
   */
  export type LessonBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonBlock
     */
    select?: LessonBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonBlock
     */
    omit?: LessonBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonBlockInclude<ExtArgs> | null
  }


  /**
   * Model LessonProgress
   */

  export type AggregateLessonProgress = {
    _count: LessonProgressCountAggregateOutputType | null
    _avg: LessonProgressAvgAggregateOutputType | null
    _sum: LessonProgressSumAggregateOutputType | null
    _min: LessonProgressMinAggregateOutputType | null
    _max: LessonProgressMaxAggregateOutputType | null
  }

  export type LessonProgressAvgAggregateOutputType = {
    score: number | null
  }

  export type LessonProgressSumAggregateOutputType = {
    score: number | null
  }

  export type LessonProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    lessonId: string | null
    status: $Enums.ProgressStatus | null
    score: number | null
    startedAt: Date | null
    updatedAt: Date | null
  }

  export type LessonProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    lessonId: string | null
    status: $Enums.ProgressStatus | null
    score: number | null
    startedAt: Date | null
    updatedAt: Date | null
  }

  export type LessonProgressCountAggregateOutputType = {
    id: number
    userId: number
    lessonId: number
    status: number
    score: number
    startedAt: number
    updatedAt: number
    _all: number
  }


  export type LessonProgressAvgAggregateInputType = {
    score?: true
  }

  export type LessonProgressSumAggregateInputType = {
    score?: true
  }

  export type LessonProgressMinAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    status?: true
    score?: true
    startedAt?: true
    updatedAt?: true
  }

  export type LessonProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    status?: true
    score?: true
    startedAt?: true
    updatedAt?: true
  }

  export type LessonProgressCountAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    status?: true
    score?: true
    startedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LessonProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonProgress to aggregate.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonProgresses
    **/
    _count?: true | LessonProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonProgressMaxAggregateInputType
  }

  export type GetLessonProgressAggregateType<T extends LessonProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonProgress[P]>
      : GetScalarType<T[P], AggregateLessonProgress[P]>
  }




  export type LessonProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonProgressWhereInput
    orderBy?: LessonProgressOrderByWithAggregationInput | LessonProgressOrderByWithAggregationInput[]
    by: LessonProgressScalarFieldEnum[] | LessonProgressScalarFieldEnum
    having?: LessonProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonProgressCountAggregateInputType | true
    _avg?: LessonProgressAvgAggregateInputType
    _sum?: LessonProgressSumAggregateInputType
    _min?: LessonProgressMinAggregateInputType
    _max?: LessonProgressMaxAggregateInputType
  }

  export type LessonProgressGroupByOutputType = {
    id: string
    userId: string
    lessonId: string
    status: $Enums.ProgressStatus
    score: number | null
    startedAt: Date
    updatedAt: Date
    _count: LessonProgressCountAggregateOutputType | null
    _avg: LessonProgressAvgAggregateOutputType | null
    _sum: LessonProgressSumAggregateOutputType | null
    _min: LessonProgressMinAggregateOutputType | null
    _max: LessonProgressMaxAggregateOutputType | null
  }

  type GetLessonProgressGroupByPayload<T extends LessonProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonProgressGroupByOutputType[P]>
            : GetScalarType<T[P], LessonProgressGroupByOutputType[P]>
        }
      >
    >


  export type LessonProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    status?: boolean
    score?: boolean
    startedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonProgress"]>

  export type LessonProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    status?: boolean
    score?: boolean
    startedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonProgress"]>

  export type LessonProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    status?: boolean
    score?: boolean
    startedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonProgress"]>

  export type LessonProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    status?: boolean
    score?: boolean
    startedAt?: boolean
    updatedAt?: boolean
  }

  export type LessonProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "lessonId" | "status" | "score" | "startedAt" | "updatedAt", ExtArgs["result"]["lessonProgress"]>
  export type LessonProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $LessonProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      lessonId: string
      status: $Enums.ProgressStatus
      score: number | null
      startedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lessonProgress"]>
    composites: {}
  }

  type LessonProgressGetPayload<S extends boolean | null | undefined | LessonProgressDefaultArgs> = $Result.GetResult<Prisma.$LessonProgressPayload, S>

  type LessonProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonProgressCountAggregateInputType | true
    }

  export interface LessonProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonProgress'], meta: { name: 'LessonProgress' } }
    /**
     * Find zero or one LessonProgress that matches the filter.
     * @param {LessonProgressFindUniqueArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonProgressFindUniqueArgs>(args: SelectSubset<T, LessonProgressFindUniqueArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LessonProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonProgressFindUniqueOrThrowArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressFindFirstArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonProgressFindFirstArgs>(args?: SelectSubset<T, LessonProgressFindFirstArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressFindFirstOrThrowArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LessonProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonProgresses
     * const lessonProgresses = await prisma.lessonProgress.findMany()
     * 
     * // Get first 10 LessonProgresses
     * const lessonProgresses = await prisma.lessonProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonProgressWithIdOnly = await prisma.lessonProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonProgressFindManyArgs>(args?: SelectSubset<T, LessonProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LessonProgress.
     * @param {LessonProgressCreateArgs} args - Arguments to create a LessonProgress.
     * @example
     * // Create one LessonProgress
     * const LessonProgress = await prisma.lessonProgress.create({
     *   data: {
     *     // ... data to create a LessonProgress
     *   }
     * })
     * 
     */
    create<T extends LessonProgressCreateArgs>(args: SelectSubset<T, LessonProgressCreateArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LessonProgresses.
     * @param {LessonProgressCreateManyArgs} args - Arguments to create many LessonProgresses.
     * @example
     * // Create many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonProgressCreateManyArgs>(args?: SelectSubset<T, LessonProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonProgresses and returns the data saved in the database.
     * @param {LessonProgressCreateManyAndReturnArgs} args - Arguments to create many LessonProgresses.
     * @example
     * // Create many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonProgresses and only return the `id`
     * const lessonProgressWithIdOnly = await prisma.lessonProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LessonProgress.
     * @param {LessonProgressDeleteArgs} args - Arguments to delete one LessonProgress.
     * @example
     * // Delete one LessonProgress
     * const LessonProgress = await prisma.lessonProgress.delete({
     *   where: {
     *     // ... filter to delete one LessonProgress
     *   }
     * })
     * 
     */
    delete<T extends LessonProgressDeleteArgs>(args: SelectSubset<T, LessonProgressDeleteArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LessonProgress.
     * @param {LessonProgressUpdateArgs} args - Arguments to update one LessonProgress.
     * @example
     * // Update one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonProgressUpdateArgs>(args: SelectSubset<T, LessonProgressUpdateArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LessonProgresses.
     * @param {LessonProgressDeleteManyArgs} args - Arguments to filter LessonProgresses to delete.
     * @example
     * // Delete a few LessonProgresses
     * const { count } = await prisma.lessonProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonProgressDeleteManyArgs>(args?: SelectSubset<T, LessonProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonProgressUpdateManyArgs>(args: SelectSubset<T, LessonProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonProgresses and returns the data updated in the database.
     * @param {LessonProgressUpdateManyAndReturnArgs} args - Arguments to update many LessonProgresses.
     * @example
     * // Update many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LessonProgresses and only return the `id`
     * const lessonProgressWithIdOnly = await prisma.lessonProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends LessonProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LessonProgress.
     * @param {LessonProgressUpsertArgs} args - Arguments to update or create a LessonProgress.
     * @example
     * // Update or create a LessonProgress
     * const lessonProgress = await prisma.lessonProgress.upsert({
     *   create: {
     *     // ... data to create a LessonProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonProgress we want to update
     *   }
     * })
     */
    upsert<T extends LessonProgressUpsertArgs>(args: SelectSubset<T, LessonProgressUpsertArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressCountArgs} args - Arguments to filter LessonProgresses to count.
     * @example
     * // Count the number of LessonProgresses
     * const count = await prisma.lessonProgress.count({
     *   where: {
     *     // ... the filter for the LessonProgresses we want to count
     *   }
     * })
    **/
    count<T extends LessonProgressCountArgs>(
      args?: Subset<T, LessonProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonProgressAggregateArgs>(args: Subset<T, LessonProgressAggregateArgs>): Prisma.PrismaPromise<GetLessonProgressAggregateType<T>>

    /**
     * Group by LessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressGroupByArgs} args - Group by arguments.
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
      T extends LessonProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonProgressGroupByArgs['orderBy'] }
        : { orderBy?: LessonProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonProgress model
   */
  readonly fields: LessonProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LessonProgress model
   */
  interface LessonProgressFieldRefs {
    readonly id: FieldRef<"LessonProgress", 'String'>
    readonly userId: FieldRef<"LessonProgress", 'String'>
    readonly lessonId: FieldRef<"LessonProgress", 'String'>
    readonly status: FieldRef<"LessonProgress", 'ProgressStatus'>
    readonly score: FieldRef<"LessonProgress", 'Int'>
    readonly startedAt: FieldRef<"LessonProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"LessonProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LessonProgress findUnique
   */
  export type LessonProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress findUniqueOrThrow
   */
  export type LessonProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress findFirst
   */
  export type LessonProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonProgresses.
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonProgresses.
     */
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * LessonProgress findFirstOrThrow
   */
  export type LessonProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonProgresses.
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonProgresses.
     */
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * LessonProgress findMany
   */
  export type LessonProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgresses to fetch.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonProgresses.
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * LessonProgress create
   */
  export type LessonProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonProgress.
     */
    data: XOR<LessonProgressCreateInput, LessonProgressUncheckedCreateInput>
  }

  /**
   * LessonProgress createMany
   */
  export type LessonProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonProgresses.
     */
    data: LessonProgressCreateManyInput | LessonProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonProgress createManyAndReturn
   */
  export type LessonProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * The data used to create many LessonProgresses.
     */
    data: LessonProgressCreateManyInput | LessonProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonProgress update
   */
  export type LessonProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonProgress.
     */
    data: XOR<LessonProgressUpdateInput, LessonProgressUncheckedUpdateInput>
    /**
     * Choose, which LessonProgress to update.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress updateMany
   */
  export type LessonProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonProgresses.
     */
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyInput>
    /**
     * Filter which LessonProgresses to update
     */
    where?: LessonProgressWhereInput
    /**
     * Limit how many LessonProgresses to update.
     */
    limit?: number
  }

  /**
   * LessonProgress updateManyAndReturn
   */
  export type LessonProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * The data used to update LessonProgresses.
     */
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyInput>
    /**
     * Filter which LessonProgresses to update
     */
    where?: LessonProgressWhereInput
    /**
     * Limit how many LessonProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonProgress upsert
   */
  export type LessonProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonProgress to update in case it exists.
     */
    where: LessonProgressWhereUniqueInput
    /**
     * In case the LessonProgress found by the `where` argument doesn't exist, create a new LessonProgress with this data.
     */
    create: XOR<LessonProgressCreateInput, LessonProgressUncheckedCreateInput>
    /**
     * In case the LessonProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonProgressUpdateInput, LessonProgressUncheckedUpdateInput>
  }

  /**
   * LessonProgress delete
   */
  export type LessonProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter which LessonProgress to delete.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress deleteMany
   */
  export type LessonProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonProgresses to delete
     */
    where?: LessonProgressWhereInput
    /**
     * Limit how many LessonProgresses to delete.
     */
    limit?: number
  }

  /**
   * LessonProgress without action
   */
  export type LessonProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
  }


  /**
   * Model UserPoint
   */

  export type AggregateUserPoint = {
    _count: UserPointCountAggregateOutputType | null
    _avg: UserPointAvgAggregateOutputType | null
    _sum: UserPointSumAggregateOutputType | null
    _min: UserPointMinAggregateOutputType | null
    _max: UserPointMaxAggregateOutputType | null
  }

  export type UserPointAvgAggregateOutputType = {
    amount: number | null
  }

  export type UserPointSumAggregateOutputType = {
    amount: number | null
  }

  export type UserPointMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    reason: string | null
    sourceId: string | null
    createdAt: Date | null
  }

  export type UserPointMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    reason: string | null
    sourceId: string | null
    createdAt: Date | null
  }

  export type UserPointCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    reason: number
    sourceId: number
    createdAt: number
    _all: number
  }


  export type UserPointAvgAggregateInputType = {
    amount?: true
  }

  export type UserPointSumAggregateInputType = {
    amount?: true
  }

  export type UserPointMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    reason?: true
    sourceId?: true
    createdAt?: true
  }

  export type UserPointMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    reason?: true
    sourceId?: true
    createdAt?: true
  }

  export type UserPointCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    reason?: true
    sourceId?: true
    createdAt?: true
    _all?: true
  }

  export type UserPointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPoint to aggregate.
     */
    where?: UserPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPoints to fetch.
     */
    orderBy?: UserPointOrderByWithRelationInput | UserPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPoints
    **/
    _count?: true | UserPointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPointMaxAggregateInputType
  }

  export type GetUserPointAggregateType<T extends UserPointAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPoint[P]>
      : GetScalarType<T[P], AggregateUserPoint[P]>
  }




  export type UserPointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPointWhereInput
    orderBy?: UserPointOrderByWithAggregationInput | UserPointOrderByWithAggregationInput[]
    by: UserPointScalarFieldEnum[] | UserPointScalarFieldEnum
    having?: UserPointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPointCountAggregateInputType | true
    _avg?: UserPointAvgAggregateInputType
    _sum?: UserPointSumAggregateInputType
    _min?: UserPointMinAggregateInputType
    _max?: UserPointMaxAggregateInputType
  }

  export type UserPointGroupByOutputType = {
    id: string
    userId: string
    amount: number
    reason: string
    sourceId: string | null
    createdAt: Date
    _count: UserPointCountAggregateOutputType | null
    _avg: UserPointAvgAggregateOutputType | null
    _sum: UserPointSumAggregateOutputType | null
    _min: UserPointMinAggregateOutputType | null
    _max: UserPointMaxAggregateOutputType | null
  }

  type GetUserPointGroupByPayload<T extends UserPointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPointGroupByOutputType[P]>
            : GetScalarType<T[P], UserPointGroupByOutputType[P]>
        }
      >
    >


  export type UserPointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    reason?: boolean
    sourceId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPoint"]>

  export type UserPointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    reason?: boolean
    sourceId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPoint"]>

  export type UserPointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    reason?: boolean
    sourceId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPoint"]>

  export type UserPointSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    reason?: boolean
    sourceId?: boolean
    createdAt?: boolean
  }

  export type UserPointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "reason" | "sourceId" | "createdAt", ExtArgs["result"]["userPoint"]>
  export type UserPointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPoint"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      reason: string
      sourceId: string | null
      createdAt: Date
    }, ExtArgs["result"]["userPoint"]>
    composites: {}
  }

  type UserPointGetPayload<S extends boolean | null | undefined | UserPointDefaultArgs> = $Result.GetResult<Prisma.$UserPointPayload, S>

  type UserPointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPointCountAggregateInputType | true
    }

  export interface UserPointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPoint'], meta: { name: 'UserPoint' } }
    /**
     * Find zero or one UserPoint that matches the filter.
     * @param {UserPointFindUniqueArgs} args - Arguments to find a UserPoint
     * @example
     * // Get one UserPoint
     * const userPoint = await prisma.userPoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPointFindUniqueArgs>(args: SelectSubset<T, UserPointFindUniqueArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPointFindUniqueOrThrowArgs} args - Arguments to find a UserPoint
     * @example
     * // Get one UserPoint
     * const userPoint = await prisma.userPoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPointFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointFindFirstArgs} args - Arguments to find a UserPoint
     * @example
     * // Get one UserPoint
     * const userPoint = await prisma.userPoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPointFindFirstArgs>(args?: SelectSubset<T, UserPointFindFirstArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointFindFirstOrThrowArgs} args - Arguments to find a UserPoint
     * @example
     * // Get one UserPoint
     * const userPoint = await prisma.userPoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPointFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPointFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPoints
     * const userPoints = await prisma.userPoint.findMany()
     * 
     * // Get first 10 UserPoints
     * const userPoints = await prisma.userPoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPointWithIdOnly = await prisma.userPoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPointFindManyArgs>(args?: SelectSubset<T, UserPointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPoint.
     * @param {UserPointCreateArgs} args - Arguments to create a UserPoint.
     * @example
     * // Create one UserPoint
     * const UserPoint = await prisma.userPoint.create({
     *   data: {
     *     // ... data to create a UserPoint
     *   }
     * })
     * 
     */
    create<T extends UserPointCreateArgs>(args: SelectSubset<T, UserPointCreateArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPoints.
     * @param {UserPointCreateManyArgs} args - Arguments to create many UserPoints.
     * @example
     * // Create many UserPoints
     * const userPoint = await prisma.userPoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPointCreateManyArgs>(args?: SelectSubset<T, UserPointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPoints and returns the data saved in the database.
     * @param {UserPointCreateManyAndReturnArgs} args - Arguments to create many UserPoints.
     * @example
     * // Create many UserPoints
     * const userPoint = await prisma.userPoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPoints and only return the `id`
     * const userPointWithIdOnly = await prisma.userPoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPointCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPoint.
     * @param {UserPointDeleteArgs} args - Arguments to delete one UserPoint.
     * @example
     * // Delete one UserPoint
     * const UserPoint = await prisma.userPoint.delete({
     *   where: {
     *     // ... filter to delete one UserPoint
     *   }
     * })
     * 
     */
    delete<T extends UserPointDeleteArgs>(args: SelectSubset<T, UserPointDeleteArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPoint.
     * @param {UserPointUpdateArgs} args - Arguments to update one UserPoint.
     * @example
     * // Update one UserPoint
     * const userPoint = await prisma.userPoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPointUpdateArgs>(args: SelectSubset<T, UserPointUpdateArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPoints.
     * @param {UserPointDeleteManyArgs} args - Arguments to filter UserPoints to delete.
     * @example
     * // Delete a few UserPoints
     * const { count } = await prisma.userPoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPointDeleteManyArgs>(args?: SelectSubset<T, UserPointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPoints
     * const userPoint = await prisma.userPoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPointUpdateManyArgs>(args: SelectSubset<T, UserPointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPoints and returns the data updated in the database.
     * @param {UserPointUpdateManyAndReturnArgs} args - Arguments to update many UserPoints.
     * @example
     * // Update many UserPoints
     * const userPoint = await prisma.userPoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPoints and only return the `id`
     * const userPointWithIdOnly = await prisma.userPoint.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserPointUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPoint.
     * @param {UserPointUpsertArgs} args - Arguments to update or create a UserPoint.
     * @example
     * // Update or create a UserPoint
     * const userPoint = await prisma.userPoint.upsert({
     *   create: {
     *     // ... data to create a UserPoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPoint we want to update
     *   }
     * })
     */
    upsert<T extends UserPointUpsertArgs>(args: SelectSubset<T, UserPointUpsertArgs<ExtArgs>>): Prisma__UserPointClient<$Result.GetResult<Prisma.$UserPointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointCountArgs} args - Arguments to filter UserPoints to count.
     * @example
     * // Count the number of UserPoints
     * const count = await prisma.userPoint.count({
     *   where: {
     *     // ... the filter for the UserPoints we want to count
     *   }
     * })
    **/
    count<T extends UserPointCountArgs>(
      args?: Subset<T, UserPointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPointAggregateArgs>(args: Subset<T, UserPointAggregateArgs>): Prisma.PrismaPromise<GetUserPointAggregateType<T>>

    /**
     * Group by UserPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointGroupByArgs} args - Group by arguments.
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
      T extends UserPointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPointGroupByArgs['orderBy'] }
        : { orderBy?: UserPointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPoint model
   */
  readonly fields: UserPointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserPoint model
   */
  interface UserPointFieldRefs {
    readonly id: FieldRef<"UserPoint", 'String'>
    readonly userId: FieldRef<"UserPoint", 'String'>
    readonly amount: FieldRef<"UserPoint", 'Int'>
    readonly reason: FieldRef<"UserPoint", 'String'>
    readonly sourceId: FieldRef<"UserPoint", 'String'>
    readonly createdAt: FieldRef<"UserPoint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPoint findUnique
   */
  export type UserPointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPoint
     */
    omit?: UserPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter, which UserPoint to fetch.
     */
    where: UserPointWhereUniqueInput
  }

  /**
   * UserPoint findUniqueOrThrow
   */
  export type UserPointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPoint
     */
    omit?: UserPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter, which UserPoint to fetch.
     */
    where: UserPointWhereUniqueInput
  }

  /**
   * UserPoint findFirst
   */
  export type UserPointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPoint
     */
    omit?: UserPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter, which UserPoint to fetch.
     */
    where?: UserPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPoints to fetch.
     */
    orderBy?: UserPointOrderByWithRelationInput | UserPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPoints.
     */
    cursor?: UserPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPoints.
     */
    distinct?: UserPointScalarFieldEnum | UserPointScalarFieldEnum[]
  }

  /**
   * UserPoint findFirstOrThrow
   */
  export type UserPointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPoint
     */
    omit?: UserPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter, which UserPoint to fetch.
     */
    where?: UserPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPoints to fetch.
     */
    orderBy?: UserPointOrderByWithRelationInput | UserPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPoints.
     */
    cursor?: UserPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPoints.
     */
    distinct?: UserPointScalarFieldEnum | UserPointScalarFieldEnum[]
  }

  /**
   * UserPoint findMany
   */
  export type UserPointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPoint
     */
    omit?: UserPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter, which UserPoints to fetch.
     */
    where?: UserPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPoints to fetch.
     */
    orderBy?: UserPointOrderByWithRelationInput | UserPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPoints.
     */
    cursor?: UserPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPoints.
     */
    skip?: number
    distinct?: UserPointScalarFieldEnum | UserPointScalarFieldEnum[]
  }

  /**
   * UserPoint create
   */
  export type UserPointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPoint
     */
    omit?: UserPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPoint.
     */
    data: XOR<UserPointCreateInput, UserPointUncheckedCreateInput>
  }

  /**
   * UserPoint createMany
   */
  export type UserPointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPoints.
     */
    data: UserPointCreateManyInput | UserPointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPoint createManyAndReturn
   */
  export type UserPointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPoint
     */
    omit?: UserPointOmit<ExtArgs> | null
    /**
     * The data used to create many UserPoints.
     */
    data: UserPointCreateManyInput | UserPointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPoint update
   */
  export type UserPointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPoint
     */
    omit?: UserPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPoint.
     */
    data: XOR<UserPointUpdateInput, UserPointUncheckedUpdateInput>
    /**
     * Choose, which UserPoint to update.
     */
    where: UserPointWhereUniqueInput
  }

  /**
   * UserPoint updateMany
   */
  export type UserPointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPoints.
     */
    data: XOR<UserPointUpdateManyMutationInput, UserPointUncheckedUpdateManyInput>
    /**
     * Filter which UserPoints to update
     */
    where?: UserPointWhereInput
    /**
     * Limit how many UserPoints to update.
     */
    limit?: number
  }

  /**
   * UserPoint updateManyAndReturn
   */
  export type UserPointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPoint
     */
    omit?: UserPointOmit<ExtArgs> | null
    /**
     * The data used to update UserPoints.
     */
    data: XOR<UserPointUpdateManyMutationInput, UserPointUncheckedUpdateManyInput>
    /**
     * Filter which UserPoints to update
     */
    where?: UserPointWhereInput
    /**
     * Limit how many UserPoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPoint upsert
   */
  export type UserPointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPoint
     */
    omit?: UserPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPoint to update in case it exists.
     */
    where: UserPointWhereUniqueInput
    /**
     * In case the UserPoint found by the `where` argument doesn't exist, create a new UserPoint with this data.
     */
    create: XOR<UserPointCreateInput, UserPointUncheckedCreateInput>
    /**
     * In case the UserPoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPointUpdateInput, UserPointUncheckedUpdateInput>
  }

  /**
   * UserPoint delete
   */
  export type UserPointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPoint
     */
    omit?: UserPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
    /**
     * Filter which UserPoint to delete.
     */
    where: UserPointWhereUniqueInput
  }

  /**
   * UserPoint deleteMany
   */
  export type UserPointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPoints to delete
     */
    where?: UserPointWhereInput
    /**
     * Limit how many UserPoints to delete.
     */
    limit?: number
  }

  /**
   * UserPoint without action
   */
  export type UserPointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoint
     */
    select?: UserPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPoint
     */
    omit?: UserPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPointInclude<ExtArgs> | null
  }


  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    passingScore: number | null
  }

  export type TestSumAggregateOutputType = {
    passingScore: number | null
  }

  export type TestMinAggregateOutputType = {
    id: string | null
    lessonId: string | null
    title: string | null
    description: string | null
    passingScore: number | null
    createdAt: Date | null
  }

  export type TestMaxAggregateOutputType = {
    id: string | null
    lessonId: string | null
    title: string | null
    description: string | null
    passingScore: number | null
    createdAt: Date | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    lessonId: number
    title: number
    description: number
    passingScore: number
    createdAt: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    passingScore?: true
  }

  export type TestSumAggregateInputType = {
    passingScore?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    lessonId?: true
    title?: true
    description?: true
    passingScore?: true
    createdAt?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    lessonId?: true
    title?: true
    description?: true
    passingScore?: true
    createdAt?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    lessonId?: true
    title?: true
    description?: true
    passingScore?: true
    createdAt?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id: string
    lessonId: string
    title: string
    description: string | null
    passingScore: number
    createdAt: Date
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    title?: boolean
    description?: boolean
    passingScore?: boolean
    createdAt?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
    questions?: boolean | Test$questionsArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    title?: boolean
    description?: boolean
    passingScore?: boolean
    createdAt?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lessonId?: boolean
    title?: boolean
    description?: boolean
    passingScore?: boolean
    createdAt?: boolean
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectScalar = {
    id?: boolean
    lessonId?: boolean
    title?: boolean
    description?: boolean
    passingScore?: boolean
    createdAt?: boolean
  }

  export type TestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lessonId" | "title" | "description" | "passingScore" | "createdAt", ExtArgs["result"]["test"]>
  export type TestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
    questions?: boolean | Test$questionsArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type TestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $TestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {
      lesson: Prisma.$LessonPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lessonId: string
      title: string
      description: string | null
      passingScore: number
      createdAt: Date
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestFindUniqueArgs>(args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(args: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestFindFirstArgs>(args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestFindManyArgs>(args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends TestCreateArgs>(args: SelectSubset<T, TestCreateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tests.
     * @param {TestCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCreateManyArgs>(args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {TestCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends TestDeleteArgs>(args: SelectSubset<T, TestDeleteArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestUpdateArgs>(args: SelectSubset<T, TestUpdateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDeleteManyArgs>(args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestUpdateManyArgs>(args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests and returns the data updated in the database.
     * @param {TestUpdateManyAndReturnArgs} args - Arguments to update many Tests.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.updateManyAndReturn({
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
    updateManyAndReturn<T extends TestUpdateManyAndReturnArgs>(args: SelectSubset<T, TestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends TestUpsertArgs>(args: SelectSubset<T, TestUpsertArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
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
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Test$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Test$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Test model
   */
  interface TestFieldRefs {
    readonly id: FieldRef<"Test", 'String'>
    readonly lessonId: FieldRef<"Test", 'String'>
    readonly title: FieldRef<"Test", 'String'>
    readonly description: FieldRef<"Test", 'String'>
    readonly passingScore: FieldRef<"Test", 'Int'>
    readonly createdAt: FieldRef<"Test", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }

  /**
   * Test createMany
   */
  export type TestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test createManyAndReturn
   */
  export type TestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test updateManyAndReturn
   */
  export type TestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }

  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to delete.
     */
    limit?: number
  }

  /**
   * Test.questions
   */
  export type Test$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    order: number | null
    points: number | null
  }

  export type QuestionSumAggregateOutputType = {
    order: number | null
    points: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    testId: string | null
    text: string | null
    order: number | null
    points: number | null
    createdAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    testId: string | null
    text: string | null
    order: number | null
    points: number | null
    createdAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    testId: number
    text: number
    order: number
    points: number
    createdAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    order?: true
    points?: true
  }

  export type QuestionSumAggregateInputType = {
    order?: true
    points?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    testId?: true
    text?: true
    order?: true
    points?: true
    createdAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    testId?: true
    text?: true
    order?: true
    points?: true
    createdAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    testId?: true
    text?: true
    order?: true
    points?: true
    createdAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    testId: string
    text: string
    order: number
    points: number
    createdAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    text?: boolean
    order?: boolean
    points?: boolean
    createdAt?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    text?: boolean
    order?: boolean
    points?: boolean
    createdAt?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    text?: boolean
    order?: boolean
    points?: boolean
    createdAt?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    testId?: boolean
    text?: boolean
    order?: boolean
    points?: boolean
    createdAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "testId" | "text" | "order" | "points" | "createdAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      test: Prisma.$TestPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      testId: string
      text: string
      order: number
      points: number
      createdAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test<T extends TestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestDefaultArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly testId: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly order: FieldRef<"Question", 'Int'>
    readonly points: FieldRef<"Question", 'Int'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    text: string | null
    isCorrect: boolean | null
    createdAt: Date | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    text: string | null
    isCorrect: boolean | null
    createdAt: Date | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    questionId: number
    text: number
    isCorrect: number
    createdAt: number
    _all: number
  }


  export type AnswerMinAggregateInputType = {
    id?: true
    questionId?: true
    text?: true
    isCorrect?: true
    createdAt?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    questionId?: true
    text?: true
    isCorrect?: true
    createdAt?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    questionId?: true
    text?: true
    isCorrect?: true
    createdAt?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: string
    questionId: string
    text: string
    isCorrect: boolean
    createdAt: Date
    _count: AnswerCountAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    text?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    text?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    text?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    questionId?: boolean
    text?: boolean
    isCorrect?: boolean
    createdAt?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "text" | "isCorrect" | "createdAt", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      text: string
      isCorrect: boolean
      createdAt: Date
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'String'>
    readonly questionId: FieldRef<"Answer", 'String'>
    readonly text: FieldRef<"Answer", 'String'>
    readonly isCorrect: FieldRef<"Answer", 'Boolean'>
    readonly createdAt: FieldRef<"Answer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model AIPersona
   */

  export type AggregateAIPersona = {
    _count: AIPersonaCountAggregateOutputType | null
    _min: AIPersonaMinAggregateOutputType | null
    _max: AIPersonaMaxAggregateOutputType | null
  }

  export type AIPersonaMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    prompt: string | null
    provider: string | null
    model: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIPersonaMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    name: string | null
    prompt: string | null
    provider: string | null
    model: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIPersonaCountAggregateOutputType = {
    id: number
    projectId: number
    name: number
    prompt: number
    provider: number
    model: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AIPersonaMinAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    prompt?: true
    provider?: true
    model?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIPersonaMaxAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    prompt?: true
    provider?: true
    model?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIPersonaCountAggregateInputType = {
    id?: true
    projectId?: true
    name?: true
    prompt?: true
    provider?: true
    model?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AIPersonaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIPersona to aggregate.
     */
    where?: AIPersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIPersonas to fetch.
     */
    orderBy?: AIPersonaOrderByWithRelationInput | AIPersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIPersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIPersonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIPersonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIPersonas
    **/
    _count?: true | AIPersonaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIPersonaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIPersonaMaxAggregateInputType
  }

  export type GetAIPersonaAggregateType<T extends AIPersonaAggregateArgs> = {
        [P in keyof T & keyof AggregateAIPersona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIPersona[P]>
      : GetScalarType<T[P], AggregateAIPersona[P]>
  }




  export type AIPersonaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIPersonaWhereInput
    orderBy?: AIPersonaOrderByWithAggregationInput | AIPersonaOrderByWithAggregationInput[]
    by: AIPersonaScalarFieldEnum[] | AIPersonaScalarFieldEnum
    having?: AIPersonaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIPersonaCountAggregateInputType | true
    _min?: AIPersonaMinAggregateInputType
    _max?: AIPersonaMaxAggregateInputType
  }

  export type AIPersonaGroupByOutputType = {
    id: string
    projectId: string
    name: string
    prompt: string
    provider: string
    model: string
    createdAt: Date
    updatedAt: Date
    _count: AIPersonaCountAggregateOutputType | null
    _min: AIPersonaMinAggregateOutputType | null
    _max: AIPersonaMaxAggregateOutputType | null
  }

  type GetAIPersonaGroupByPayload<T extends AIPersonaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIPersonaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIPersonaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIPersonaGroupByOutputType[P]>
            : GetScalarType<T[P], AIPersonaGroupByOutputType[P]>
        }
      >
    >


  export type AIPersonaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    prompt?: boolean
    provider?: boolean
    model?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aIPersona"]>

  export type AIPersonaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    prompt?: boolean
    provider?: boolean
    model?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aIPersona"]>

  export type AIPersonaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    name?: boolean
    prompt?: boolean
    provider?: boolean
    model?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aIPersona"]>

  export type AIPersonaSelectScalar = {
    id?: boolean
    projectId?: boolean
    name?: boolean
    prompt?: boolean
    provider?: boolean
    model?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AIPersonaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "name" | "prompt" | "provider" | "model" | "createdAt" | "updatedAt", ExtArgs["result"]["aIPersona"]>

  export type $AIPersonaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIPersona"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      name: string
      prompt: string
      provider: string
      model: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aIPersona"]>
    composites: {}
  }

  type AIPersonaGetPayload<S extends boolean | null | undefined | AIPersonaDefaultArgs> = $Result.GetResult<Prisma.$AIPersonaPayload, S>

  type AIPersonaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIPersonaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIPersonaCountAggregateInputType | true
    }

  export interface AIPersonaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIPersona'], meta: { name: 'AIPersona' } }
    /**
     * Find zero or one AIPersona that matches the filter.
     * @param {AIPersonaFindUniqueArgs} args - Arguments to find a AIPersona
     * @example
     * // Get one AIPersona
     * const aIPersona = await prisma.aIPersona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIPersonaFindUniqueArgs>(args: SelectSubset<T, AIPersonaFindUniqueArgs<ExtArgs>>): Prisma__AIPersonaClient<$Result.GetResult<Prisma.$AIPersonaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIPersona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIPersonaFindUniqueOrThrowArgs} args - Arguments to find a AIPersona
     * @example
     * // Get one AIPersona
     * const aIPersona = await prisma.aIPersona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIPersonaFindUniqueOrThrowArgs>(args: SelectSubset<T, AIPersonaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIPersonaClient<$Result.GetResult<Prisma.$AIPersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIPersona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPersonaFindFirstArgs} args - Arguments to find a AIPersona
     * @example
     * // Get one AIPersona
     * const aIPersona = await prisma.aIPersona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIPersonaFindFirstArgs>(args?: SelectSubset<T, AIPersonaFindFirstArgs<ExtArgs>>): Prisma__AIPersonaClient<$Result.GetResult<Prisma.$AIPersonaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIPersona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPersonaFindFirstOrThrowArgs} args - Arguments to find a AIPersona
     * @example
     * // Get one AIPersona
     * const aIPersona = await prisma.aIPersona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIPersonaFindFirstOrThrowArgs>(args?: SelectSubset<T, AIPersonaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIPersonaClient<$Result.GetResult<Prisma.$AIPersonaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIPersonas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPersonaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIPersonas
     * const aIPersonas = await prisma.aIPersona.findMany()
     * 
     * // Get first 10 AIPersonas
     * const aIPersonas = await prisma.aIPersona.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIPersonaWithIdOnly = await prisma.aIPersona.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIPersonaFindManyArgs>(args?: SelectSubset<T, AIPersonaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIPersonaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIPersona.
     * @param {AIPersonaCreateArgs} args - Arguments to create a AIPersona.
     * @example
     * // Create one AIPersona
     * const AIPersona = await prisma.aIPersona.create({
     *   data: {
     *     // ... data to create a AIPersona
     *   }
     * })
     * 
     */
    create<T extends AIPersonaCreateArgs>(args: SelectSubset<T, AIPersonaCreateArgs<ExtArgs>>): Prisma__AIPersonaClient<$Result.GetResult<Prisma.$AIPersonaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIPersonas.
     * @param {AIPersonaCreateManyArgs} args - Arguments to create many AIPersonas.
     * @example
     * // Create many AIPersonas
     * const aIPersona = await prisma.aIPersona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIPersonaCreateManyArgs>(args?: SelectSubset<T, AIPersonaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIPersonas and returns the data saved in the database.
     * @param {AIPersonaCreateManyAndReturnArgs} args - Arguments to create many AIPersonas.
     * @example
     * // Create many AIPersonas
     * const aIPersona = await prisma.aIPersona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIPersonas and only return the `id`
     * const aIPersonaWithIdOnly = await prisma.aIPersona.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIPersonaCreateManyAndReturnArgs>(args?: SelectSubset<T, AIPersonaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIPersonaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIPersona.
     * @param {AIPersonaDeleteArgs} args - Arguments to delete one AIPersona.
     * @example
     * // Delete one AIPersona
     * const AIPersona = await prisma.aIPersona.delete({
     *   where: {
     *     // ... filter to delete one AIPersona
     *   }
     * })
     * 
     */
    delete<T extends AIPersonaDeleteArgs>(args: SelectSubset<T, AIPersonaDeleteArgs<ExtArgs>>): Prisma__AIPersonaClient<$Result.GetResult<Prisma.$AIPersonaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIPersona.
     * @param {AIPersonaUpdateArgs} args - Arguments to update one AIPersona.
     * @example
     * // Update one AIPersona
     * const aIPersona = await prisma.aIPersona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIPersonaUpdateArgs>(args: SelectSubset<T, AIPersonaUpdateArgs<ExtArgs>>): Prisma__AIPersonaClient<$Result.GetResult<Prisma.$AIPersonaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIPersonas.
     * @param {AIPersonaDeleteManyArgs} args - Arguments to filter AIPersonas to delete.
     * @example
     * // Delete a few AIPersonas
     * const { count } = await prisma.aIPersona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIPersonaDeleteManyArgs>(args?: SelectSubset<T, AIPersonaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIPersonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPersonaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIPersonas
     * const aIPersona = await prisma.aIPersona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIPersonaUpdateManyArgs>(args: SelectSubset<T, AIPersonaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIPersonas and returns the data updated in the database.
     * @param {AIPersonaUpdateManyAndReturnArgs} args - Arguments to update many AIPersonas.
     * @example
     * // Update many AIPersonas
     * const aIPersona = await prisma.aIPersona.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIPersonas and only return the `id`
     * const aIPersonaWithIdOnly = await prisma.aIPersona.updateManyAndReturn({
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
    updateManyAndReturn<T extends AIPersonaUpdateManyAndReturnArgs>(args: SelectSubset<T, AIPersonaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIPersonaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIPersona.
     * @param {AIPersonaUpsertArgs} args - Arguments to update or create a AIPersona.
     * @example
     * // Update or create a AIPersona
     * const aIPersona = await prisma.aIPersona.upsert({
     *   create: {
     *     // ... data to create a AIPersona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIPersona we want to update
     *   }
     * })
     */
    upsert<T extends AIPersonaUpsertArgs>(args: SelectSubset<T, AIPersonaUpsertArgs<ExtArgs>>): Prisma__AIPersonaClient<$Result.GetResult<Prisma.$AIPersonaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIPersonas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPersonaCountArgs} args - Arguments to filter AIPersonas to count.
     * @example
     * // Count the number of AIPersonas
     * const count = await prisma.aIPersona.count({
     *   where: {
     *     // ... the filter for the AIPersonas we want to count
     *   }
     * })
    **/
    count<T extends AIPersonaCountArgs>(
      args?: Subset<T, AIPersonaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIPersonaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIPersona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPersonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AIPersonaAggregateArgs>(args: Subset<T, AIPersonaAggregateArgs>): Prisma.PrismaPromise<GetAIPersonaAggregateType<T>>

    /**
     * Group by AIPersona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPersonaGroupByArgs} args - Group by arguments.
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
      T extends AIPersonaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIPersonaGroupByArgs['orderBy'] }
        : { orderBy?: AIPersonaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AIPersonaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIPersonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIPersona model
   */
  readonly fields: AIPersonaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIPersona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIPersonaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AIPersona model
   */
  interface AIPersonaFieldRefs {
    readonly id: FieldRef<"AIPersona", 'String'>
    readonly projectId: FieldRef<"AIPersona", 'String'>
    readonly name: FieldRef<"AIPersona", 'String'>
    readonly prompt: FieldRef<"AIPersona", 'String'>
    readonly provider: FieldRef<"AIPersona", 'String'>
    readonly model: FieldRef<"AIPersona", 'String'>
    readonly createdAt: FieldRef<"AIPersona", 'DateTime'>
    readonly updatedAt: FieldRef<"AIPersona", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIPersona findUnique
   */
  export type AIPersonaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPersona
     */
    select?: AIPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPersona
     */
    omit?: AIPersonaOmit<ExtArgs> | null
    /**
     * Filter, which AIPersona to fetch.
     */
    where: AIPersonaWhereUniqueInput
  }

  /**
   * AIPersona findUniqueOrThrow
   */
  export type AIPersonaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPersona
     */
    select?: AIPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPersona
     */
    omit?: AIPersonaOmit<ExtArgs> | null
    /**
     * Filter, which AIPersona to fetch.
     */
    where: AIPersonaWhereUniqueInput
  }

  /**
   * AIPersona findFirst
   */
  export type AIPersonaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPersona
     */
    select?: AIPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPersona
     */
    omit?: AIPersonaOmit<ExtArgs> | null
    /**
     * Filter, which AIPersona to fetch.
     */
    where?: AIPersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIPersonas to fetch.
     */
    orderBy?: AIPersonaOrderByWithRelationInput | AIPersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIPersonas.
     */
    cursor?: AIPersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIPersonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIPersonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIPersonas.
     */
    distinct?: AIPersonaScalarFieldEnum | AIPersonaScalarFieldEnum[]
  }

  /**
   * AIPersona findFirstOrThrow
   */
  export type AIPersonaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPersona
     */
    select?: AIPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPersona
     */
    omit?: AIPersonaOmit<ExtArgs> | null
    /**
     * Filter, which AIPersona to fetch.
     */
    where?: AIPersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIPersonas to fetch.
     */
    orderBy?: AIPersonaOrderByWithRelationInput | AIPersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIPersonas.
     */
    cursor?: AIPersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIPersonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIPersonas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIPersonas.
     */
    distinct?: AIPersonaScalarFieldEnum | AIPersonaScalarFieldEnum[]
  }

  /**
   * AIPersona findMany
   */
  export type AIPersonaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPersona
     */
    select?: AIPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPersona
     */
    omit?: AIPersonaOmit<ExtArgs> | null
    /**
     * Filter, which AIPersonas to fetch.
     */
    where?: AIPersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIPersonas to fetch.
     */
    orderBy?: AIPersonaOrderByWithRelationInput | AIPersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIPersonas.
     */
    cursor?: AIPersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIPersonas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIPersonas.
     */
    skip?: number
    distinct?: AIPersonaScalarFieldEnum | AIPersonaScalarFieldEnum[]
  }

  /**
   * AIPersona create
   */
  export type AIPersonaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPersona
     */
    select?: AIPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPersona
     */
    omit?: AIPersonaOmit<ExtArgs> | null
    /**
     * The data needed to create a AIPersona.
     */
    data: XOR<AIPersonaCreateInput, AIPersonaUncheckedCreateInput>
  }

  /**
   * AIPersona createMany
   */
  export type AIPersonaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIPersonas.
     */
    data: AIPersonaCreateManyInput | AIPersonaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIPersona createManyAndReturn
   */
  export type AIPersonaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPersona
     */
    select?: AIPersonaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIPersona
     */
    omit?: AIPersonaOmit<ExtArgs> | null
    /**
     * The data used to create many AIPersonas.
     */
    data: AIPersonaCreateManyInput | AIPersonaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIPersona update
   */
  export type AIPersonaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPersona
     */
    select?: AIPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPersona
     */
    omit?: AIPersonaOmit<ExtArgs> | null
    /**
     * The data needed to update a AIPersona.
     */
    data: XOR<AIPersonaUpdateInput, AIPersonaUncheckedUpdateInput>
    /**
     * Choose, which AIPersona to update.
     */
    where: AIPersonaWhereUniqueInput
  }

  /**
   * AIPersona updateMany
   */
  export type AIPersonaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIPersonas.
     */
    data: XOR<AIPersonaUpdateManyMutationInput, AIPersonaUncheckedUpdateManyInput>
    /**
     * Filter which AIPersonas to update
     */
    where?: AIPersonaWhereInput
    /**
     * Limit how many AIPersonas to update.
     */
    limit?: number
  }

  /**
   * AIPersona updateManyAndReturn
   */
  export type AIPersonaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPersona
     */
    select?: AIPersonaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIPersona
     */
    omit?: AIPersonaOmit<ExtArgs> | null
    /**
     * The data used to update AIPersonas.
     */
    data: XOR<AIPersonaUpdateManyMutationInput, AIPersonaUncheckedUpdateManyInput>
    /**
     * Filter which AIPersonas to update
     */
    where?: AIPersonaWhereInput
    /**
     * Limit how many AIPersonas to update.
     */
    limit?: number
  }

  /**
   * AIPersona upsert
   */
  export type AIPersonaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPersona
     */
    select?: AIPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPersona
     */
    omit?: AIPersonaOmit<ExtArgs> | null
    /**
     * The filter to search for the AIPersona to update in case it exists.
     */
    where: AIPersonaWhereUniqueInput
    /**
     * In case the AIPersona found by the `where` argument doesn't exist, create a new AIPersona with this data.
     */
    create: XOR<AIPersonaCreateInput, AIPersonaUncheckedCreateInput>
    /**
     * In case the AIPersona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIPersonaUpdateInput, AIPersonaUncheckedUpdateInput>
  }

  /**
   * AIPersona delete
   */
  export type AIPersonaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPersona
     */
    select?: AIPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPersona
     */
    omit?: AIPersonaOmit<ExtArgs> | null
    /**
     * Filter which AIPersona to delete.
     */
    where: AIPersonaWhereUniqueInput
  }

  /**
   * AIPersona deleteMany
   */
  export type AIPersonaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIPersonas to delete
     */
    where?: AIPersonaWhereInput
    /**
     * Limit how many AIPersonas to delete.
     */
    limit?: number
  }

  /**
   * AIPersona without action
   */
  export type AIPersonaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPersona
     */
    select?: AIPersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPersona
     */
    omit?: AIPersonaOmit<ExtArgs> | null
  }


  /**
   * Model AIChatTransaction
   */

  export type AggregateAIChatTransaction = {
    _count: AIChatTransactionCountAggregateOutputType | null
    _avg: AIChatTransactionAvgAggregateOutputType | null
    _sum: AIChatTransactionSumAggregateOutputType | null
    _min: AIChatTransactionMinAggregateOutputType | null
    _max: AIChatTransactionMaxAggregateOutputType | null
  }

  export type AIChatTransactionAvgAggregateOutputType = {
    promptTokens: number | null
    completionTokens: number | null
    totalTokens: number | null
    costEstimate: number | null
  }

  export type AIChatTransactionSumAggregateOutputType = {
    promptTokens: number | null
    completionTokens: number | null
    totalTokens: number | null
    costEstimate: number | null
  }

  export type AIChatTransactionMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    promptTokens: number | null
    completionTokens: number | null
    totalTokens: number | null
    costEstimate: number | null
    model: string | null
    createdAt: Date | null
  }

  export type AIChatTransactionMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    promptTokens: number | null
    completionTokens: number | null
    totalTokens: number | null
    costEstimate: number | null
    model: string | null
    createdAt: Date | null
  }

  export type AIChatTransactionCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    promptTokens: number
    completionTokens: number
    totalTokens: number
    costEstimate: number
    model: number
    createdAt: number
    _all: number
  }


  export type AIChatTransactionAvgAggregateInputType = {
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    costEstimate?: true
  }

  export type AIChatTransactionSumAggregateInputType = {
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    costEstimate?: true
  }

  export type AIChatTransactionMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    costEstimate?: true
    model?: true
    createdAt?: true
  }

  export type AIChatTransactionMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    costEstimate?: true
    model?: true
    createdAt?: true
  }

  export type AIChatTransactionCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    costEstimate?: true
    model?: true
    createdAt?: true
    _all?: true
  }

  export type AIChatTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIChatTransaction to aggregate.
     */
    where?: AIChatTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIChatTransactions to fetch.
     */
    orderBy?: AIChatTransactionOrderByWithRelationInput | AIChatTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIChatTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIChatTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIChatTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIChatTransactions
    **/
    _count?: true | AIChatTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIChatTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIChatTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIChatTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIChatTransactionMaxAggregateInputType
  }

  export type GetAIChatTransactionAggregateType<T extends AIChatTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateAIChatTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIChatTransaction[P]>
      : GetScalarType<T[P], AggregateAIChatTransaction[P]>
  }




  export type AIChatTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIChatTransactionWhereInput
    orderBy?: AIChatTransactionOrderByWithAggregationInput | AIChatTransactionOrderByWithAggregationInput[]
    by: AIChatTransactionScalarFieldEnum[] | AIChatTransactionScalarFieldEnum
    having?: AIChatTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIChatTransactionCountAggregateInputType | true
    _avg?: AIChatTransactionAvgAggregateInputType
    _sum?: AIChatTransactionSumAggregateInputType
    _min?: AIChatTransactionMinAggregateInputType
    _max?: AIChatTransactionMaxAggregateInputType
  }

  export type AIChatTransactionGroupByOutputType = {
    id: string
    projectId: string
    userId: string | null
    promptTokens: number
    completionTokens: number
    totalTokens: number
    costEstimate: number | null
    model: string
    createdAt: Date
    _count: AIChatTransactionCountAggregateOutputType | null
    _avg: AIChatTransactionAvgAggregateOutputType | null
    _sum: AIChatTransactionSumAggregateOutputType | null
    _min: AIChatTransactionMinAggregateOutputType | null
    _max: AIChatTransactionMaxAggregateOutputType | null
  }

  type GetAIChatTransactionGroupByPayload<T extends AIChatTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIChatTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIChatTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIChatTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], AIChatTransactionGroupByOutputType[P]>
        }
      >
    >


  export type AIChatTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    totalTokens?: boolean
    costEstimate?: boolean
    model?: boolean
    createdAt?: boolean
    user?: boolean | AIChatTransaction$userArgs<ExtArgs>
  }, ExtArgs["result"]["aIChatTransaction"]>

  export type AIChatTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    totalTokens?: boolean
    costEstimate?: boolean
    model?: boolean
    createdAt?: boolean
    user?: boolean | AIChatTransaction$userArgs<ExtArgs>
  }, ExtArgs["result"]["aIChatTransaction"]>

  export type AIChatTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    totalTokens?: boolean
    costEstimate?: boolean
    model?: boolean
    createdAt?: boolean
    user?: boolean | AIChatTransaction$userArgs<ExtArgs>
  }, ExtArgs["result"]["aIChatTransaction"]>

  export type AIChatTransactionSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    totalTokens?: boolean
    costEstimate?: boolean
    model?: boolean
    createdAt?: boolean
  }

  export type AIChatTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "userId" | "promptTokens" | "completionTokens" | "totalTokens" | "costEstimate" | "model" | "createdAt", ExtArgs["result"]["aIChatTransaction"]>
  export type AIChatTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AIChatTransaction$userArgs<ExtArgs>
  }
  export type AIChatTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AIChatTransaction$userArgs<ExtArgs>
  }
  export type AIChatTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AIChatTransaction$userArgs<ExtArgs>
  }

  export type $AIChatTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIChatTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      userId: string | null
      promptTokens: number
      completionTokens: number
      totalTokens: number
      costEstimate: number | null
      model: string
      createdAt: Date
    }, ExtArgs["result"]["aIChatTransaction"]>
    composites: {}
  }

  type AIChatTransactionGetPayload<S extends boolean | null | undefined | AIChatTransactionDefaultArgs> = $Result.GetResult<Prisma.$AIChatTransactionPayload, S>

  type AIChatTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIChatTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIChatTransactionCountAggregateInputType | true
    }

  export interface AIChatTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIChatTransaction'], meta: { name: 'AIChatTransaction' } }
    /**
     * Find zero or one AIChatTransaction that matches the filter.
     * @param {AIChatTransactionFindUniqueArgs} args - Arguments to find a AIChatTransaction
     * @example
     * // Get one AIChatTransaction
     * const aIChatTransaction = await prisma.aIChatTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIChatTransactionFindUniqueArgs>(args: SelectSubset<T, AIChatTransactionFindUniqueArgs<ExtArgs>>): Prisma__AIChatTransactionClient<$Result.GetResult<Prisma.$AIChatTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIChatTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIChatTransactionFindUniqueOrThrowArgs} args - Arguments to find a AIChatTransaction
     * @example
     * // Get one AIChatTransaction
     * const aIChatTransaction = await prisma.aIChatTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIChatTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, AIChatTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIChatTransactionClient<$Result.GetResult<Prisma.$AIChatTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIChatTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIChatTransactionFindFirstArgs} args - Arguments to find a AIChatTransaction
     * @example
     * // Get one AIChatTransaction
     * const aIChatTransaction = await prisma.aIChatTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIChatTransactionFindFirstArgs>(args?: SelectSubset<T, AIChatTransactionFindFirstArgs<ExtArgs>>): Prisma__AIChatTransactionClient<$Result.GetResult<Prisma.$AIChatTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIChatTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIChatTransactionFindFirstOrThrowArgs} args - Arguments to find a AIChatTransaction
     * @example
     * // Get one AIChatTransaction
     * const aIChatTransaction = await prisma.aIChatTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIChatTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, AIChatTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIChatTransactionClient<$Result.GetResult<Prisma.$AIChatTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIChatTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIChatTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIChatTransactions
     * const aIChatTransactions = await prisma.aIChatTransaction.findMany()
     * 
     * // Get first 10 AIChatTransactions
     * const aIChatTransactions = await prisma.aIChatTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIChatTransactionWithIdOnly = await prisma.aIChatTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIChatTransactionFindManyArgs>(args?: SelectSubset<T, AIChatTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIChatTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIChatTransaction.
     * @param {AIChatTransactionCreateArgs} args - Arguments to create a AIChatTransaction.
     * @example
     * // Create one AIChatTransaction
     * const AIChatTransaction = await prisma.aIChatTransaction.create({
     *   data: {
     *     // ... data to create a AIChatTransaction
     *   }
     * })
     * 
     */
    create<T extends AIChatTransactionCreateArgs>(args: SelectSubset<T, AIChatTransactionCreateArgs<ExtArgs>>): Prisma__AIChatTransactionClient<$Result.GetResult<Prisma.$AIChatTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIChatTransactions.
     * @param {AIChatTransactionCreateManyArgs} args - Arguments to create many AIChatTransactions.
     * @example
     * // Create many AIChatTransactions
     * const aIChatTransaction = await prisma.aIChatTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIChatTransactionCreateManyArgs>(args?: SelectSubset<T, AIChatTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIChatTransactions and returns the data saved in the database.
     * @param {AIChatTransactionCreateManyAndReturnArgs} args - Arguments to create many AIChatTransactions.
     * @example
     * // Create many AIChatTransactions
     * const aIChatTransaction = await prisma.aIChatTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIChatTransactions and only return the `id`
     * const aIChatTransactionWithIdOnly = await prisma.aIChatTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIChatTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, AIChatTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIChatTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIChatTransaction.
     * @param {AIChatTransactionDeleteArgs} args - Arguments to delete one AIChatTransaction.
     * @example
     * // Delete one AIChatTransaction
     * const AIChatTransaction = await prisma.aIChatTransaction.delete({
     *   where: {
     *     // ... filter to delete one AIChatTransaction
     *   }
     * })
     * 
     */
    delete<T extends AIChatTransactionDeleteArgs>(args: SelectSubset<T, AIChatTransactionDeleteArgs<ExtArgs>>): Prisma__AIChatTransactionClient<$Result.GetResult<Prisma.$AIChatTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIChatTransaction.
     * @param {AIChatTransactionUpdateArgs} args - Arguments to update one AIChatTransaction.
     * @example
     * // Update one AIChatTransaction
     * const aIChatTransaction = await prisma.aIChatTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIChatTransactionUpdateArgs>(args: SelectSubset<T, AIChatTransactionUpdateArgs<ExtArgs>>): Prisma__AIChatTransactionClient<$Result.GetResult<Prisma.$AIChatTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIChatTransactions.
     * @param {AIChatTransactionDeleteManyArgs} args - Arguments to filter AIChatTransactions to delete.
     * @example
     * // Delete a few AIChatTransactions
     * const { count } = await prisma.aIChatTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIChatTransactionDeleteManyArgs>(args?: SelectSubset<T, AIChatTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIChatTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIChatTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIChatTransactions
     * const aIChatTransaction = await prisma.aIChatTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIChatTransactionUpdateManyArgs>(args: SelectSubset<T, AIChatTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIChatTransactions and returns the data updated in the database.
     * @param {AIChatTransactionUpdateManyAndReturnArgs} args - Arguments to update many AIChatTransactions.
     * @example
     * // Update many AIChatTransactions
     * const aIChatTransaction = await prisma.aIChatTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIChatTransactions and only return the `id`
     * const aIChatTransactionWithIdOnly = await prisma.aIChatTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends AIChatTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, AIChatTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIChatTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIChatTransaction.
     * @param {AIChatTransactionUpsertArgs} args - Arguments to update or create a AIChatTransaction.
     * @example
     * // Update or create a AIChatTransaction
     * const aIChatTransaction = await prisma.aIChatTransaction.upsert({
     *   create: {
     *     // ... data to create a AIChatTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIChatTransaction we want to update
     *   }
     * })
     */
    upsert<T extends AIChatTransactionUpsertArgs>(args: SelectSubset<T, AIChatTransactionUpsertArgs<ExtArgs>>): Prisma__AIChatTransactionClient<$Result.GetResult<Prisma.$AIChatTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIChatTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIChatTransactionCountArgs} args - Arguments to filter AIChatTransactions to count.
     * @example
     * // Count the number of AIChatTransactions
     * const count = await prisma.aIChatTransaction.count({
     *   where: {
     *     // ... the filter for the AIChatTransactions we want to count
     *   }
     * })
    **/
    count<T extends AIChatTransactionCountArgs>(
      args?: Subset<T, AIChatTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIChatTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIChatTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIChatTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AIChatTransactionAggregateArgs>(args: Subset<T, AIChatTransactionAggregateArgs>): Prisma.PrismaPromise<GetAIChatTransactionAggregateType<T>>

    /**
     * Group by AIChatTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIChatTransactionGroupByArgs} args - Group by arguments.
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
      T extends AIChatTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIChatTransactionGroupByArgs['orderBy'] }
        : { orderBy?: AIChatTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AIChatTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIChatTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIChatTransaction model
   */
  readonly fields: AIChatTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIChatTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIChatTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AIChatTransaction$userArgs<ExtArgs> = {}>(args?: Subset<T, AIChatTransaction$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AIChatTransaction model
   */
  interface AIChatTransactionFieldRefs {
    readonly id: FieldRef<"AIChatTransaction", 'String'>
    readonly projectId: FieldRef<"AIChatTransaction", 'String'>
    readonly userId: FieldRef<"AIChatTransaction", 'String'>
    readonly promptTokens: FieldRef<"AIChatTransaction", 'Int'>
    readonly completionTokens: FieldRef<"AIChatTransaction", 'Int'>
    readonly totalTokens: FieldRef<"AIChatTransaction", 'Int'>
    readonly costEstimate: FieldRef<"AIChatTransaction", 'Float'>
    readonly model: FieldRef<"AIChatTransaction", 'String'>
    readonly createdAt: FieldRef<"AIChatTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIChatTransaction findUnique
   */
  export type AIChatTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIChatTransaction
     */
    select?: AIChatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIChatTransaction
     */
    omit?: AIChatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIChatTransactionInclude<ExtArgs> | null
    /**
     * Filter, which AIChatTransaction to fetch.
     */
    where: AIChatTransactionWhereUniqueInput
  }

  /**
   * AIChatTransaction findUniqueOrThrow
   */
  export type AIChatTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIChatTransaction
     */
    select?: AIChatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIChatTransaction
     */
    omit?: AIChatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIChatTransactionInclude<ExtArgs> | null
    /**
     * Filter, which AIChatTransaction to fetch.
     */
    where: AIChatTransactionWhereUniqueInput
  }

  /**
   * AIChatTransaction findFirst
   */
  export type AIChatTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIChatTransaction
     */
    select?: AIChatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIChatTransaction
     */
    omit?: AIChatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIChatTransactionInclude<ExtArgs> | null
    /**
     * Filter, which AIChatTransaction to fetch.
     */
    where?: AIChatTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIChatTransactions to fetch.
     */
    orderBy?: AIChatTransactionOrderByWithRelationInput | AIChatTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIChatTransactions.
     */
    cursor?: AIChatTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIChatTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIChatTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIChatTransactions.
     */
    distinct?: AIChatTransactionScalarFieldEnum | AIChatTransactionScalarFieldEnum[]
  }

  /**
   * AIChatTransaction findFirstOrThrow
   */
  export type AIChatTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIChatTransaction
     */
    select?: AIChatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIChatTransaction
     */
    omit?: AIChatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIChatTransactionInclude<ExtArgs> | null
    /**
     * Filter, which AIChatTransaction to fetch.
     */
    where?: AIChatTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIChatTransactions to fetch.
     */
    orderBy?: AIChatTransactionOrderByWithRelationInput | AIChatTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIChatTransactions.
     */
    cursor?: AIChatTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIChatTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIChatTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIChatTransactions.
     */
    distinct?: AIChatTransactionScalarFieldEnum | AIChatTransactionScalarFieldEnum[]
  }

  /**
   * AIChatTransaction findMany
   */
  export type AIChatTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIChatTransaction
     */
    select?: AIChatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIChatTransaction
     */
    omit?: AIChatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIChatTransactionInclude<ExtArgs> | null
    /**
     * Filter, which AIChatTransactions to fetch.
     */
    where?: AIChatTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIChatTransactions to fetch.
     */
    orderBy?: AIChatTransactionOrderByWithRelationInput | AIChatTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIChatTransactions.
     */
    cursor?: AIChatTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIChatTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIChatTransactions.
     */
    skip?: number
    distinct?: AIChatTransactionScalarFieldEnum | AIChatTransactionScalarFieldEnum[]
  }

  /**
   * AIChatTransaction create
   */
  export type AIChatTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIChatTransaction
     */
    select?: AIChatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIChatTransaction
     */
    omit?: AIChatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIChatTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a AIChatTransaction.
     */
    data: XOR<AIChatTransactionCreateInput, AIChatTransactionUncheckedCreateInput>
  }

  /**
   * AIChatTransaction createMany
   */
  export type AIChatTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIChatTransactions.
     */
    data: AIChatTransactionCreateManyInput | AIChatTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIChatTransaction createManyAndReturn
   */
  export type AIChatTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIChatTransaction
     */
    select?: AIChatTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIChatTransaction
     */
    omit?: AIChatTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many AIChatTransactions.
     */
    data: AIChatTransactionCreateManyInput | AIChatTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIChatTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIChatTransaction update
   */
  export type AIChatTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIChatTransaction
     */
    select?: AIChatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIChatTransaction
     */
    omit?: AIChatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIChatTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a AIChatTransaction.
     */
    data: XOR<AIChatTransactionUpdateInput, AIChatTransactionUncheckedUpdateInput>
    /**
     * Choose, which AIChatTransaction to update.
     */
    where: AIChatTransactionWhereUniqueInput
  }

  /**
   * AIChatTransaction updateMany
   */
  export type AIChatTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIChatTransactions.
     */
    data: XOR<AIChatTransactionUpdateManyMutationInput, AIChatTransactionUncheckedUpdateManyInput>
    /**
     * Filter which AIChatTransactions to update
     */
    where?: AIChatTransactionWhereInput
    /**
     * Limit how many AIChatTransactions to update.
     */
    limit?: number
  }

  /**
   * AIChatTransaction updateManyAndReturn
   */
  export type AIChatTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIChatTransaction
     */
    select?: AIChatTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIChatTransaction
     */
    omit?: AIChatTransactionOmit<ExtArgs> | null
    /**
     * The data used to update AIChatTransactions.
     */
    data: XOR<AIChatTransactionUpdateManyMutationInput, AIChatTransactionUncheckedUpdateManyInput>
    /**
     * Filter which AIChatTransactions to update
     */
    where?: AIChatTransactionWhereInput
    /**
     * Limit how many AIChatTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIChatTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIChatTransaction upsert
   */
  export type AIChatTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIChatTransaction
     */
    select?: AIChatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIChatTransaction
     */
    omit?: AIChatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIChatTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the AIChatTransaction to update in case it exists.
     */
    where: AIChatTransactionWhereUniqueInput
    /**
     * In case the AIChatTransaction found by the `where` argument doesn't exist, create a new AIChatTransaction with this data.
     */
    create: XOR<AIChatTransactionCreateInput, AIChatTransactionUncheckedCreateInput>
    /**
     * In case the AIChatTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIChatTransactionUpdateInput, AIChatTransactionUncheckedUpdateInput>
  }

  /**
   * AIChatTransaction delete
   */
  export type AIChatTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIChatTransaction
     */
    select?: AIChatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIChatTransaction
     */
    omit?: AIChatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIChatTransactionInclude<ExtArgs> | null
    /**
     * Filter which AIChatTransaction to delete.
     */
    where: AIChatTransactionWhereUniqueInput
  }

  /**
   * AIChatTransaction deleteMany
   */
  export type AIChatTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIChatTransactions to delete
     */
    where?: AIChatTransactionWhereInput
    /**
     * Limit how many AIChatTransactions to delete.
     */
    limit?: number
  }

  /**
   * AIChatTransaction.user
   */
  export type AIChatTransaction$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * AIChatTransaction without action
   */
  export type AIChatTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIChatTransaction
     */
    select?: AIChatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIChatTransaction
     */
    omit?: AIChatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIChatTransactionInclude<ExtArgs> | null
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


  export const HealthcheckLogScalarFieldEnum: {
    id: 'id',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type HealthcheckLogScalarFieldEnum = (typeof HealthcheckLogScalarFieldEnum)[keyof typeof HealthcheckLogScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    telegramId: 'telegramId',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    lastActivityAt: 'lastActivityAt',
    currentStreak: 'currentStreak',
    maxStreak: 'maxStreak'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    code: 'code',
    title: 'title',
    description: 'description',
    order: 'order',
    isPublished: 'isPublished',
    aiPrompt: 'aiPrompt',
    videoUrl: 'videoUrl',
    createdAt: 'createdAt'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const LessonBlockScalarFieldEnum: {
    id: 'id',
    lessonId: 'lessonId',
    type: 'type',
    order: 'order',
    textContent: 'textContent',
    mediaUrl: 'mediaUrl',
    telegramFileId: 'telegramFileId',
    mimeType: 'mimeType',
    caption: 'caption',
    createdAt: 'createdAt'
  };

  export type LessonBlockScalarFieldEnum = (typeof LessonBlockScalarFieldEnum)[keyof typeof LessonBlockScalarFieldEnum]


  export const LessonProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    lessonId: 'lessonId',
    status: 'status',
    score: 'score',
    startedAt: 'startedAt',
    updatedAt: 'updatedAt'
  };

  export type LessonProgressScalarFieldEnum = (typeof LessonProgressScalarFieldEnum)[keyof typeof LessonProgressScalarFieldEnum]


  export const UserPointScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    reason: 'reason',
    sourceId: 'sourceId',
    createdAt: 'createdAt'
  };

  export type UserPointScalarFieldEnum = (typeof UserPointScalarFieldEnum)[keyof typeof UserPointScalarFieldEnum]


  export const TestScalarFieldEnum: {
    id: 'id',
    lessonId: 'lessonId',
    title: 'title',
    description: 'description',
    passingScore: 'passingScore',
    createdAt: 'createdAt'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    testId: 'testId',
    text: 'text',
    order: 'order',
    points: 'points',
    createdAt: 'createdAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    text: 'text',
    isCorrect: 'isCorrect',
    createdAt: 'createdAt'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const AIPersonaScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    name: 'name',
    prompt: 'prompt',
    provider: 'provider',
    model: 'model',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AIPersonaScalarFieldEnum = (typeof AIPersonaScalarFieldEnum)[keyof typeof AIPersonaScalarFieldEnum]


  export const AIChatTransactionScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    promptTokens: 'promptTokens',
    completionTokens: 'completionTokens',
    totalTokens: 'totalTokens',
    costEstimate: 'costEstimate',
    model: 'model',
    createdAt: 'createdAt'
  };

  export type AIChatTransactionScalarFieldEnum = (typeof AIChatTransactionScalarFieldEnum)[keyof typeof AIChatTransactionScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'LessonBlockType'
   */
  export type EnumLessonBlockTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LessonBlockType'>
    


  /**
   * Reference to a field of type 'LessonBlockType[]'
   */
  export type ListEnumLessonBlockTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LessonBlockType[]'>
    


  /**
   * Reference to a field of type 'ProgressStatus'
   */
  export type EnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus'>
    


  /**
   * Reference to a field of type 'ProgressStatus[]'
   */
  export type ListEnumProgressStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgressStatus[]'>
    


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


  export type HealthcheckLogWhereInput = {
    AND?: HealthcheckLogWhereInput | HealthcheckLogWhereInput[]
    OR?: HealthcheckLogWhereInput[]
    NOT?: HealthcheckLogWhereInput | HealthcheckLogWhereInput[]
    id?: StringFilter<"HealthcheckLog"> | string
    message?: StringFilter<"HealthcheckLog"> | string
    createdAt?: DateTimeFilter<"HealthcheckLog"> | Date | string
  }

  export type HealthcheckLogOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type HealthcheckLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HealthcheckLogWhereInput | HealthcheckLogWhereInput[]
    OR?: HealthcheckLogWhereInput[]
    NOT?: HealthcheckLogWhereInput | HealthcheckLogWhereInput[]
    message?: StringFilter<"HealthcheckLog"> | string
    createdAt?: DateTimeFilter<"HealthcheckLog"> | Date | string
  }, "id">

  export type HealthcheckLogOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: HealthcheckLogCountOrderByAggregateInput
    _max?: HealthcheckLogMaxOrderByAggregateInput
    _min?: HealthcheckLogMinOrderByAggregateInput
  }

  export type HealthcheckLogScalarWhereWithAggregatesInput = {
    AND?: HealthcheckLogScalarWhereWithAggregatesInput | HealthcheckLogScalarWhereWithAggregatesInput[]
    OR?: HealthcheckLogScalarWhereWithAggregatesInput[]
    NOT?: HealthcheckLogScalarWhereWithAggregatesInput | HealthcheckLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HealthcheckLog"> | string
    message?: StringWithAggregatesFilter<"HealthcheckLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HealthcheckLog"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    code?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    isActive?: BoolFilter<"Project"> | boolean
    createdAt?: DateTimeFilter<"Project"> | Date | string
    users?: UserListRelationFilter
    lessons?: LessonListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    lessons?: LessonOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    isActive?: BoolFilter<"Project"> | boolean
    createdAt?: DateTimeFilter<"Project"> | Date | string
    users?: UserListRelationFilter
    lessons?: LessonListRelationFilter
  }, "id" | "code">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    code?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    isActive?: BoolWithAggregatesFilter<"Project"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    projectId?: StringNullableFilter<"User"> | string | null
    telegramId?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastActivityAt?: DateTimeNullableFilter<"User"> | Date | string | null
    currentStreak?: IntFilter<"User"> | number
    maxStreak?: IntFilter<"User"> | number
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    progress?: LessonProgressListRelationFilter
    points?: UserPointListRelationFilter
    aiChats?: AIChatTransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrderInput | SortOrder
    telegramId?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
    project?: ProjectOrderByWithRelationInput
    progress?: LessonProgressOrderByRelationAggregateInput
    points?: UserPointOrderByRelationAggregateInput
    aiChats?: AIChatTransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    telegramId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    projectId?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastActivityAt?: DateTimeNullableFilter<"User"> | Date | string | null
    currentStreak?: IntFilter<"User"> | number
    maxStreak?: IntFilter<"User"> | number
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    progress?: LessonProgressListRelationFilter
    points?: UserPointListRelationFilter
    aiChats?: AIChatTransactionListRelationFilter
  }, "id" | "telegramId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrderInput | SortOrder
    telegramId?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastActivityAt?: SortOrderInput | SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    projectId?: StringNullableWithAggregatesFilter<"User"> | string | null
    telegramId?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastActivityAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    currentStreak?: IntWithAggregatesFilter<"User"> | number
    maxStreak?: IntWithAggregatesFilter<"User"> | number
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: StringFilter<"Lesson"> | string
    projectId?: StringNullableFilter<"Lesson"> | string | null
    code?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    description?: StringNullableFilter<"Lesson"> | string | null
    order?: IntFilter<"Lesson"> | number
    isPublished?: BoolFilter<"Lesson"> | boolean
    aiPrompt?: StringNullableFilter<"Lesson"> | string | null
    videoUrl?: StringNullableFilter<"Lesson"> | string | null
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    blocks?: LessonBlockListRelationFilter
    progress?: LessonProgressListRelationFilter
    tests?: TestListRelationFilter
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrderInput | SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrder
    isPublished?: SortOrder
    aiPrompt?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    blocks?: LessonBlockOrderByRelationAggregateInput
    progress?: LessonProgressOrderByRelationAggregateInput
    tests?: TestOrderByRelationAggregateInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    projectId?: StringNullableFilter<"Lesson"> | string | null
    code?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    description?: StringNullableFilter<"Lesson"> | string | null
    order?: IntFilter<"Lesson"> | number
    isPublished?: BoolFilter<"Lesson"> | boolean
    aiPrompt?: StringNullableFilter<"Lesson"> | string | null
    videoUrl?: StringNullableFilter<"Lesson"> | string | null
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    blocks?: LessonBlockListRelationFilter
    progress?: LessonProgressListRelationFilter
    tests?: TestListRelationFilter
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrderInput | SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrder
    isPublished?: SortOrder
    aiPrompt?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lesson"> | string
    projectId?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    code?: StringWithAggregatesFilter<"Lesson"> | string
    title?: StringWithAggregatesFilter<"Lesson"> | string
    description?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    order?: IntWithAggregatesFilter<"Lesson"> | number
    isPublished?: BoolWithAggregatesFilter<"Lesson"> | boolean
    aiPrompt?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    videoUrl?: StringNullableWithAggregatesFilter<"Lesson"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
  }

  export type LessonBlockWhereInput = {
    AND?: LessonBlockWhereInput | LessonBlockWhereInput[]
    OR?: LessonBlockWhereInput[]
    NOT?: LessonBlockWhereInput | LessonBlockWhereInput[]
    id?: StringFilter<"LessonBlock"> | string
    lessonId?: StringFilter<"LessonBlock"> | string
    type?: EnumLessonBlockTypeFilter<"LessonBlock"> | $Enums.LessonBlockType
    order?: IntFilter<"LessonBlock"> | number
    textContent?: StringNullableFilter<"LessonBlock"> | string | null
    mediaUrl?: StringNullableFilter<"LessonBlock"> | string | null
    telegramFileId?: StringNullableFilter<"LessonBlock"> | string | null
    mimeType?: StringNullableFilter<"LessonBlock"> | string | null
    caption?: StringNullableFilter<"LessonBlock"> | string | null
    createdAt?: DateTimeFilter<"LessonBlock"> | Date | string
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }

  export type LessonBlockOrderByWithRelationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    type?: SortOrder
    order?: SortOrder
    textContent?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    telegramFileId?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lesson?: LessonOrderByWithRelationInput
  }

  export type LessonBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lessonId_order?: LessonBlockLessonIdOrderCompoundUniqueInput
    AND?: LessonBlockWhereInput | LessonBlockWhereInput[]
    OR?: LessonBlockWhereInput[]
    NOT?: LessonBlockWhereInput | LessonBlockWhereInput[]
    lessonId?: StringFilter<"LessonBlock"> | string
    type?: EnumLessonBlockTypeFilter<"LessonBlock"> | $Enums.LessonBlockType
    order?: IntFilter<"LessonBlock"> | number
    textContent?: StringNullableFilter<"LessonBlock"> | string | null
    mediaUrl?: StringNullableFilter<"LessonBlock"> | string | null
    telegramFileId?: StringNullableFilter<"LessonBlock"> | string | null
    mimeType?: StringNullableFilter<"LessonBlock"> | string | null
    caption?: StringNullableFilter<"LessonBlock"> | string | null
    createdAt?: DateTimeFilter<"LessonBlock"> | Date | string
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }, "id" | "lessonId_order">

  export type LessonBlockOrderByWithAggregationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    type?: SortOrder
    order?: SortOrder
    textContent?: SortOrderInput | SortOrder
    mediaUrl?: SortOrderInput | SortOrder
    telegramFileId?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LessonBlockCountOrderByAggregateInput
    _avg?: LessonBlockAvgOrderByAggregateInput
    _max?: LessonBlockMaxOrderByAggregateInput
    _min?: LessonBlockMinOrderByAggregateInput
    _sum?: LessonBlockSumOrderByAggregateInput
  }

  export type LessonBlockScalarWhereWithAggregatesInput = {
    AND?: LessonBlockScalarWhereWithAggregatesInput | LessonBlockScalarWhereWithAggregatesInput[]
    OR?: LessonBlockScalarWhereWithAggregatesInput[]
    NOT?: LessonBlockScalarWhereWithAggregatesInput | LessonBlockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LessonBlock"> | string
    lessonId?: StringWithAggregatesFilter<"LessonBlock"> | string
    type?: EnumLessonBlockTypeWithAggregatesFilter<"LessonBlock"> | $Enums.LessonBlockType
    order?: IntWithAggregatesFilter<"LessonBlock"> | number
    textContent?: StringNullableWithAggregatesFilter<"LessonBlock"> | string | null
    mediaUrl?: StringNullableWithAggregatesFilter<"LessonBlock"> | string | null
    telegramFileId?: StringNullableWithAggregatesFilter<"LessonBlock"> | string | null
    mimeType?: StringNullableWithAggregatesFilter<"LessonBlock"> | string | null
    caption?: StringNullableWithAggregatesFilter<"LessonBlock"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LessonBlock"> | Date | string
  }

  export type LessonProgressWhereInput = {
    AND?: LessonProgressWhereInput | LessonProgressWhereInput[]
    OR?: LessonProgressWhereInput[]
    NOT?: LessonProgressWhereInput | LessonProgressWhereInput[]
    id?: StringFilter<"LessonProgress"> | string
    userId?: StringFilter<"LessonProgress"> | string
    lessonId?: StringFilter<"LessonProgress"> | string
    status?: EnumProgressStatusFilter<"LessonProgress"> | $Enums.ProgressStatus
    score?: IntNullableFilter<"LessonProgress"> | number | null
    startedAt?: DateTimeFilter<"LessonProgress"> | Date | string
    updatedAt?: DateTimeFilter<"LessonProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }

  export type LessonProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    status?: SortOrder
    score?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
  }

  export type LessonProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_lessonId?: LessonProgressUserIdLessonIdCompoundUniqueInput
    AND?: LessonProgressWhereInput | LessonProgressWhereInput[]
    OR?: LessonProgressWhereInput[]
    NOT?: LessonProgressWhereInput | LessonProgressWhereInput[]
    userId?: StringFilter<"LessonProgress"> | string
    lessonId?: StringFilter<"LessonProgress"> | string
    status?: EnumProgressStatusFilter<"LessonProgress"> | $Enums.ProgressStatus
    score?: IntNullableFilter<"LessonProgress"> | number | null
    startedAt?: DateTimeFilter<"LessonProgress"> | Date | string
    updatedAt?: DateTimeFilter<"LessonProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }, "id" | "userId_lessonId">

  export type LessonProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    status?: SortOrder
    score?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LessonProgressCountOrderByAggregateInput
    _avg?: LessonProgressAvgOrderByAggregateInput
    _max?: LessonProgressMaxOrderByAggregateInput
    _min?: LessonProgressMinOrderByAggregateInput
    _sum?: LessonProgressSumOrderByAggregateInput
  }

  export type LessonProgressScalarWhereWithAggregatesInput = {
    AND?: LessonProgressScalarWhereWithAggregatesInput | LessonProgressScalarWhereWithAggregatesInput[]
    OR?: LessonProgressScalarWhereWithAggregatesInput[]
    NOT?: LessonProgressScalarWhereWithAggregatesInput | LessonProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LessonProgress"> | string
    userId?: StringWithAggregatesFilter<"LessonProgress"> | string
    lessonId?: StringWithAggregatesFilter<"LessonProgress"> | string
    status?: EnumProgressStatusWithAggregatesFilter<"LessonProgress"> | $Enums.ProgressStatus
    score?: IntNullableWithAggregatesFilter<"LessonProgress"> | number | null
    startedAt?: DateTimeWithAggregatesFilter<"LessonProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LessonProgress"> | Date | string
  }

  export type UserPointWhereInput = {
    AND?: UserPointWhereInput | UserPointWhereInput[]
    OR?: UserPointWhereInput[]
    NOT?: UserPointWhereInput | UserPointWhereInput[]
    id?: StringFilter<"UserPoint"> | string
    userId?: StringFilter<"UserPoint"> | string
    amount?: IntFilter<"UserPoint"> | number
    reason?: StringFilter<"UserPoint"> | string
    sourceId?: StringNullableFilter<"UserPoint"> | string | null
    createdAt?: DateTimeFilter<"UserPoint"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPointOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserPointWhereInput | UserPointWhereInput[]
    OR?: UserPointWhereInput[]
    NOT?: UserPointWhereInput | UserPointWhereInput[]
    userId?: StringFilter<"UserPoint"> | string
    amount?: IntFilter<"UserPoint"> | number
    reason?: StringFilter<"UserPoint"> | string
    sourceId?: StringNullableFilter<"UserPoint"> | string | null
    createdAt?: DateTimeFilter<"UserPoint"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserPointOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserPointCountOrderByAggregateInput
    _avg?: UserPointAvgOrderByAggregateInput
    _max?: UserPointMaxOrderByAggregateInput
    _min?: UserPointMinOrderByAggregateInput
    _sum?: UserPointSumOrderByAggregateInput
  }

  export type UserPointScalarWhereWithAggregatesInput = {
    AND?: UserPointScalarWhereWithAggregatesInput | UserPointScalarWhereWithAggregatesInput[]
    OR?: UserPointScalarWhereWithAggregatesInput[]
    NOT?: UserPointScalarWhereWithAggregatesInput | UserPointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPoint"> | string
    userId?: StringWithAggregatesFilter<"UserPoint"> | string
    amount?: IntWithAggregatesFilter<"UserPoint"> | number
    reason?: StringWithAggregatesFilter<"UserPoint"> | string
    sourceId?: StringNullableWithAggregatesFilter<"UserPoint"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserPoint"> | Date | string
  }

  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    id?: StringFilter<"Test"> | string
    lessonId?: StringFilter<"Test"> | string
    title?: StringFilter<"Test"> | string
    description?: StringNullableFilter<"Test"> | string | null
    passingScore?: IntFilter<"Test"> | number
    createdAt?: DateTimeFilter<"Test"> | Date | string
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
    questions?: QuestionListRelationFilter
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    passingScore?: SortOrder
    createdAt?: SortOrder
    lesson?: LessonOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    lessonId?: StringFilter<"Test"> | string
    title?: StringFilter<"Test"> | string
    description?: StringNullableFilter<"Test"> | string | null
    passingScore?: IntFilter<"Test"> | number
    createdAt?: DateTimeFilter<"Test"> | Date | string
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
    questions?: QuestionListRelationFilter
  }, "id">

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    passingScore?: SortOrder
    createdAt?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _avg?: TestAvgOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
    _sum?: TestSumOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Test"> | string
    lessonId?: StringWithAggregatesFilter<"Test"> | string
    title?: StringWithAggregatesFilter<"Test"> | string
    description?: StringNullableWithAggregatesFilter<"Test"> | string | null
    passingScore?: IntWithAggregatesFilter<"Test"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    testId?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    points?: IntFilter<"Question"> | number
    createdAt?: DateTimeFilter<"Question"> | Date | string
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
    answers?: AnswerListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    testId?: SortOrder
    text?: SortOrder
    order?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    test?: TestOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    testId?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    points?: IntFilter<"Question"> | number
    createdAt?: DateTimeFilter<"Question"> | Date | string
    test?: XOR<TestScalarRelationFilter, TestWhereInput>
    answers?: AnswerListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    testId?: SortOrder
    text?: SortOrder
    order?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    testId?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    order?: IntWithAggregatesFilter<"Question"> | number
    points?: IntWithAggregatesFilter<"Question"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    text?: StringFilter<"Answer"> | string
    isCorrect?: BoolFilter<"Answer"> | boolean
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    question?: QuestionOrderByWithRelationInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    questionId?: StringFilter<"Answer"> | string
    text?: StringFilter<"Answer"> | string
    isCorrect?: BoolFilter<"Answer"> | boolean
    createdAt?: DateTimeFilter<"Answer"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Answer"> | string
    questionId?: StringWithAggregatesFilter<"Answer"> | string
    text?: StringWithAggregatesFilter<"Answer"> | string
    isCorrect?: BoolWithAggregatesFilter<"Answer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Answer"> | Date | string
  }

  export type AIPersonaWhereInput = {
    AND?: AIPersonaWhereInput | AIPersonaWhereInput[]
    OR?: AIPersonaWhereInput[]
    NOT?: AIPersonaWhereInput | AIPersonaWhereInput[]
    id?: StringFilter<"AIPersona"> | string
    projectId?: StringFilter<"AIPersona"> | string
    name?: StringFilter<"AIPersona"> | string
    prompt?: StringFilter<"AIPersona"> | string
    provider?: StringFilter<"AIPersona"> | string
    model?: StringFilter<"AIPersona"> | string
    createdAt?: DateTimeFilter<"AIPersona"> | Date | string
    updatedAt?: DateTimeFilter<"AIPersona"> | Date | string
  }

  export type AIPersonaOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    prompt?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIPersonaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: AIPersonaWhereInput | AIPersonaWhereInput[]
    OR?: AIPersonaWhereInput[]
    NOT?: AIPersonaWhereInput | AIPersonaWhereInput[]
    name?: StringFilter<"AIPersona"> | string
    prompt?: StringFilter<"AIPersona"> | string
    provider?: StringFilter<"AIPersona"> | string
    model?: StringFilter<"AIPersona"> | string
    createdAt?: DateTimeFilter<"AIPersona"> | Date | string
    updatedAt?: DateTimeFilter<"AIPersona"> | Date | string
  }, "id" | "projectId">

  export type AIPersonaOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    prompt?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AIPersonaCountOrderByAggregateInput
    _max?: AIPersonaMaxOrderByAggregateInput
    _min?: AIPersonaMinOrderByAggregateInput
  }

  export type AIPersonaScalarWhereWithAggregatesInput = {
    AND?: AIPersonaScalarWhereWithAggregatesInput | AIPersonaScalarWhereWithAggregatesInput[]
    OR?: AIPersonaScalarWhereWithAggregatesInput[]
    NOT?: AIPersonaScalarWhereWithAggregatesInput | AIPersonaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIPersona"> | string
    projectId?: StringWithAggregatesFilter<"AIPersona"> | string
    name?: StringWithAggregatesFilter<"AIPersona"> | string
    prompt?: StringWithAggregatesFilter<"AIPersona"> | string
    provider?: StringWithAggregatesFilter<"AIPersona"> | string
    model?: StringWithAggregatesFilter<"AIPersona"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AIPersona"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AIPersona"> | Date | string
  }

  export type AIChatTransactionWhereInput = {
    AND?: AIChatTransactionWhereInput | AIChatTransactionWhereInput[]
    OR?: AIChatTransactionWhereInput[]
    NOT?: AIChatTransactionWhereInput | AIChatTransactionWhereInput[]
    id?: StringFilter<"AIChatTransaction"> | string
    projectId?: StringFilter<"AIChatTransaction"> | string
    userId?: StringNullableFilter<"AIChatTransaction"> | string | null
    promptTokens?: IntFilter<"AIChatTransaction"> | number
    completionTokens?: IntFilter<"AIChatTransaction"> | number
    totalTokens?: IntFilter<"AIChatTransaction"> | number
    costEstimate?: FloatNullableFilter<"AIChatTransaction"> | number | null
    model?: StringFilter<"AIChatTransaction"> | string
    createdAt?: DateTimeFilter<"AIChatTransaction"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AIChatTransactionOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrderInput | SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    costEstimate?: SortOrderInput | SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AIChatTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIChatTransactionWhereInput | AIChatTransactionWhereInput[]
    OR?: AIChatTransactionWhereInput[]
    NOT?: AIChatTransactionWhereInput | AIChatTransactionWhereInput[]
    projectId?: StringFilter<"AIChatTransaction"> | string
    userId?: StringNullableFilter<"AIChatTransaction"> | string | null
    promptTokens?: IntFilter<"AIChatTransaction"> | number
    completionTokens?: IntFilter<"AIChatTransaction"> | number
    totalTokens?: IntFilter<"AIChatTransaction"> | number
    costEstimate?: FloatNullableFilter<"AIChatTransaction"> | number | null
    model?: StringFilter<"AIChatTransaction"> | string
    createdAt?: DateTimeFilter<"AIChatTransaction"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AIChatTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrderInput | SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    costEstimate?: SortOrderInput | SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    _count?: AIChatTransactionCountOrderByAggregateInput
    _avg?: AIChatTransactionAvgOrderByAggregateInput
    _max?: AIChatTransactionMaxOrderByAggregateInput
    _min?: AIChatTransactionMinOrderByAggregateInput
    _sum?: AIChatTransactionSumOrderByAggregateInput
  }

  export type AIChatTransactionScalarWhereWithAggregatesInput = {
    AND?: AIChatTransactionScalarWhereWithAggregatesInput | AIChatTransactionScalarWhereWithAggregatesInput[]
    OR?: AIChatTransactionScalarWhereWithAggregatesInput[]
    NOT?: AIChatTransactionScalarWhereWithAggregatesInput | AIChatTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIChatTransaction"> | string
    projectId?: StringWithAggregatesFilter<"AIChatTransaction"> | string
    userId?: StringNullableWithAggregatesFilter<"AIChatTransaction"> | string | null
    promptTokens?: IntWithAggregatesFilter<"AIChatTransaction"> | number
    completionTokens?: IntWithAggregatesFilter<"AIChatTransaction"> | number
    totalTokens?: IntWithAggregatesFilter<"AIChatTransaction"> | number
    costEstimate?: FloatNullableWithAggregatesFilter<"AIChatTransaction"> | number | null
    model?: StringWithAggregatesFilter<"AIChatTransaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AIChatTransaction"> | Date | string
  }

  export type HealthcheckLogCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
  }

  export type HealthcheckLogUncheckedCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
  }

  export type HealthcheckLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthcheckLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthcheckLogCreateManyInput = {
    id?: string
    message: string
    createdAt?: Date | string
  }

  export type HealthcheckLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HealthcheckLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    code: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutProjectInput
    lessons?: LessonCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    code: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutProjectInput
    lessons?: LessonUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutProjectNestedInput
    lessons?: LessonUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutProjectNestedInput
    lessons?: LessonUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    code: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    telegramId: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    lastActivityAt?: Date | string | null
    currentStreak?: number
    maxStreak?: number
    project?: ProjectCreateNestedOneWithoutUsersInput
    progress?: LessonProgressCreateNestedManyWithoutUserInput
    points?: UserPointCreateNestedManyWithoutUserInput
    aiChats?: AIChatTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    projectId?: string | null
    telegramId: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    lastActivityAt?: Date | string | null
    currentStreak?: number
    maxStreak?: number
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    points?: UserPointUncheckedCreateNestedManyWithoutUserInput
    aiChats?: AIChatTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneWithoutUsersNestedInput
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
    points?: UserPointUpdateManyWithoutUserNestedInput
    aiChats?: AIChatTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    points?: UserPointUncheckedUpdateManyWithoutUserNestedInput
    aiChats?: AIChatTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    projectId?: string | null
    telegramId: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    lastActivityAt?: Date | string | null
    currentStreak?: number
    maxStreak?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
  }

  export type LessonCreateInput = {
    id?: string
    code: string
    title: string
    description?: string | null
    order: number
    isPublished?: boolean
    aiPrompt?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    project?: ProjectCreateNestedOneWithoutLessonsInput
    blocks?: LessonBlockCreateNestedManyWithoutLessonInput
    progress?: LessonProgressCreateNestedManyWithoutLessonInput
    tests?: TestCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateInput = {
    id?: string
    projectId?: string | null
    code: string
    title: string
    description?: string | null
    order: number
    isPublished?: boolean
    aiPrompt?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    blocks?: LessonBlockUncheckedCreateNestedManyWithoutLessonInput
    progress?: LessonProgressUncheckedCreateNestedManyWithoutLessonInput
    tests?: TestUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutLessonsNestedInput
    blocks?: LessonBlockUpdateManyWithoutLessonNestedInput
    progress?: LessonProgressUpdateManyWithoutLessonNestedInput
    tests?: TestUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: LessonBlockUncheckedUpdateManyWithoutLessonNestedInput
    progress?: LessonProgressUncheckedUpdateManyWithoutLessonNestedInput
    tests?: TestUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    id?: string
    projectId?: string | null
    code: string
    title: string
    description?: string | null
    order: number
    isPublished?: boolean
    aiPrompt?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
  }

  export type LessonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonBlockCreateInput = {
    id?: string
    type: $Enums.LessonBlockType
    order: number
    textContent?: string | null
    mediaUrl?: string | null
    telegramFileId?: string | null
    mimeType?: string | null
    caption?: string | null
    createdAt?: Date | string
    lesson: LessonCreateNestedOneWithoutBlocksInput
  }

  export type LessonBlockUncheckedCreateInput = {
    id?: string
    lessonId: string
    type: $Enums.LessonBlockType
    order: number
    textContent?: string | null
    mediaUrl?: string | null
    telegramFileId?: string | null
    mimeType?: string | null
    caption?: string | null
    createdAt?: Date | string
  }

  export type LessonBlockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLessonBlockTypeFieldUpdateOperationsInput | $Enums.LessonBlockType
    order?: IntFieldUpdateOperationsInput | number
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramFileId?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutBlocksNestedInput
  }

  export type LessonBlockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    type?: EnumLessonBlockTypeFieldUpdateOperationsInput | $Enums.LessonBlockType
    order?: IntFieldUpdateOperationsInput | number
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramFileId?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonBlockCreateManyInput = {
    id?: string
    lessonId: string
    type: $Enums.LessonBlockType
    order: number
    textContent?: string | null
    mediaUrl?: string | null
    telegramFileId?: string | null
    mimeType?: string | null
    caption?: string | null
    createdAt?: Date | string
  }

  export type LessonBlockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLessonBlockTypeFieldUpdateOperationsInput | $Enums.LessonBlockType
    order?: IntFieldUpdateOperationsInput | number
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramFileId?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonBlockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    type?: EnumLessonBlockTypeFieldUpdateOperationsInput | $Enums.LessonBlockType
    order?: IntFieldUpdateOperationsInput | number
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramFileId?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressCreateInput = {
    id?: string
    status?: $Enums.ProgressStatus
    score?: number | null
    startedAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressInput
    lesson: LessonCreateNestedOneWithoutProgressInput
  }

  export type LessonProgressUncheckedCreateInput = {
    id?: string
    userId: string
    lessonId: string
    status?: $Enums.ProgressStatus
    score?: number | null
    startedAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
    lesson?: LessonUpdateOneRequiredWithoutProgressNestedInput
  }

  export type LessonProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressCreateManyInput = {
    id?: string
    userId: string
    lessonId: string
    status?: $Enums.ProgressStatus
    score?: number | null
    startedAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPointCreateInput = {
    id?: string
    amount: number
    reason: string
    sourceId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPointsInput
  }

  export type UserPointUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    reason: string
    sourceId?: string | null
    createdAt?: Date | string
  }

  export type UserPointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPointsNestedInput
  }

  export type UserPointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPointCreateManyInput = {
    id?: string
    userId: string
    amount: number
    reason: string
    sourceId?: string | null
    createdAt?: Date | string
  }

  export type UserPointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCreateInput = {
    id?: string
    title: string
    description?: string | null
    passingScore?: number
    createdAt?: Date | string
    lesson: LessonCreateNestedOneWithoutTestsInput
    questions?: QuestionCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    passingScore?: number
    createdAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutTestsNestedInput
    questions?: QuestionUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestCreateManyInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    passingScore?: number
    createdAt?: Date | string
  }

  export type TestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    text: string
    order: number
    points?: number
    createdAt?: Date | string
    test: TestCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    testId: string
    text: string
    order: number
    points?: number
    createdAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    testId: string
    text: string
    order: number
    points?: number
    createdAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateInput = {
    id?: string
    text: string
    isCorrect?: boolean
    createdAt?: Date | string
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: string
    questionId: string
    text: string
    isCorrect?: boolean
    createdAt?: Date | string
  }

  export type AnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyInput = {
    id?: string
    questionId: string
    text: string
    isCorrect?: boolean
    createdAt?: Date | string
  }

  export type AnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIPersonaCreateInput = {
    id?: string
    projectId: string
    name: string
    prompt: string
    provider?: string
    model?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIPersonaUncheckedCreateInput = {
    id?: string
    projectId: string
    name: string
    prompt: string
    provider?: string
    model?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIPersonaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIPersonaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIPersonaCreateManyInput = {
    id?: string
    projectId: string
    name: string
    prompt: string
    provider?: string
    model?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIPersonaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIPersonaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIChatTransactionCreateInput = {
    id?: string
    projectId: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    costEstimate?: number | null
    model: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAiChatsInput
  }

  export type AIChatTransactionUncheckedCreateInput = {
    id?: string
    projectId: string
    userId?: string | null
    promptTokens: number
    completionTokens: number
    totalTokens: number
    costEstimate?: number | null
    model: string
    createdAt?: Date | string
  }

  export type AIChatTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableFloatFieldUpdateOperationsInput | number | null
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAiChatsNestedInput
  }

  export type AIChatTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableFloatFieldUpdateOperationsInput | number | null
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIChatTransactionCreateManyInput = {
    id?: string
    projectId: string
    userId?: string | null
    promptTokens: number
    completionTokens: number
    totalTokens: number
    costEstimate?: number | null
    model: string
    createdAt?: Date | string
  }

  export type AIChatTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableFloatFieldUpdateOperationsInput | number | null
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIChatTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableFloatFieldUpdateOperationsInput | number | null
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type HealthcheckLogCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type HealthcheckLogMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type HealthcheckLogMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type LessonProgressListRelationFilter = {
    every?: LessonProgressWhereInput
    some?: LessonProgressWhereInput
    none?: LessonProgressWhereInput
  }

  export type UserPointListRelationFilter = {
    every?: UserPointWhereInput
    some?: UserPointWhereInput
    none?: UserPointWhereInput
  }

  export type AIChatTransactionListRelationFilter = {
    every?: AIChatTransactionWhereInput
    some?: AIChatTransactionWhereInput
    none?: AIChatTransactionWhereInput
  }

  export type LessonProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIChatTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    telegramId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastActivityAt?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    currentStreak?: SortOrder
    maxStreak?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    telegramId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastActivityAt?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    telegramId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastActivityAt?: SortOrder
    currentStreak?: SortOrder
    maxStreak?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    currentStreak?: SortOrder
    maxStreak?: SortOrder
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

  export type LessonBlockListRelationFilter = {
    every?: LessonBlockWhereInput
    some?: LessonBlockWhereInput
    none?: LessonBlockWhereInput
  }

  export type TestListRelationFilter = {
    every?: TestWhereInput
    some?: TestWhereInput
    none?: TestWhereInput
  }

  export type LessonBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    isPublished?: SortOrder
    aiPrompt?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    isPublished?: SortOrder
    aiPrompt?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    code?: SortOrder
    title?: SortOrder
    description?: SortOrder
    order?: SortOrder
    isPublished?: SortOrder
    aiPrompt?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumLessonBlockTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LessonBlockType | EnumLessonBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LessonBlockType[] | ListEnumLessonBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LessonBlockType[] | ListEnumLessonBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLessonBlockTypeFilter<$PrismaModel> | $Enums.LessonBlockType
  }

  export type LessonScalarRelationFilter = {
    is?: LessonWhereInput
    isNot?: LessonWhereInput
  }

  export type LessonBlockLessonIdOrderCompoundUniqueInput = {
    lessonId: string
    order: number
  }

  export type LessonBlockCountOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    type?: SortOrder
    order?: SortOrder
    textContent?: SortOrder
    mediaUrl?: SortOrder
    telegramFileId?: SortOrder
    mimeType?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
  }

  export type LessonBlockAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LessonBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    type?: SortOrder
    order?: SortOrder
    textContent?: SortOrder
    mediaUrl?: SortOrder
    telegramFileId?: SortOrder
    mimeType?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
  }

  export type LessonBlockMinOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    type?: SortOrder
    order?: SortOrder
    textContent?: SortOrder
    mediaUrl?: SortOrder
    telegramFileId?: SortOrder
    mimeType?: SortOrder
    caption?: SortOrder
    createdAt?: SortOrder
  }

  export type LessonBlockSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumLessonBlockTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LessonBlockType | EnumLessonBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LessonBlockType[] | ListEnumLessonBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LessonBlockType[] | ListEnumLessonBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLessonBlockTypeWithAggregatesFilter<$PrismaModel> | $Enums.LessonBlockType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLessonBlockTypeFilter<$PrismaModel>
    _max?: NestedEnumLessonBlockTypeFilter<$PrismaModel>
  }

  export type EnumProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusFilter<$PrismaModel> | $Enums.ProgressStatus
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LessonProgressUserIdLessonIdCompoundUniqueInput = {
    userId: string
    lessonId: string
  }

  export type LessonProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    status?: SortOrder
    score?: SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonProgressAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type LessonProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    status?: SortOrder
    score?: SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    status?: SortOrder
    score?: SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonProgressSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type EnumProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumProgressStatusFilter<$PrismaModel>
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

  export type UserPointCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserPointAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UserPointMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserPointMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserPointSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    passingScore?: SortOrder
    createdAt?: SortOrder
  }

  export type TestAvgOrderByAggregateInput = {
    passingScore?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    passingScore?: SortOrder
    createdAt?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    passingScore?: SortOrder
    createdAt?: SortOrder
  }

  export type TestSumOrderByAggregateInput = {
    passingScore?: SortOrder
  }

  export type TestScalarRelationFilter = {
    is?: TestWhereInput
    isNot?: TestWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    text?: SortOrder
    order?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    order?: SortOrder
    points?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    text?: SortOrder
    order?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    text?: SortOrder
    order?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    order?: SortOrder
    points?: SortOrder
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
  }

  export type AIPersonaCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    prompt?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIPersonaMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    prompt?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIPersonaMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    name?: SortOrder
    prompt?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AIChatTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    costEstimate?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
  }

  export type AIChatTransactionAvgOrderByAggregateInput = {
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    costEstimate?: SortOrder
  }

  export type AIChatTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    costEstimate?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
  }

  export type AIChatTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    costEstimate?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
  }

  export type AIChatTransactionSumOrderByAggregateInput = {
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    costEstimate?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserCreateNestedManyWithoutProjectInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput> | UserCreateWithoutProjectInput[] | UserUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput | UserCreateOrConnectWithoutProjectInput[]
    createMany?: UserCreateManyProjectInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LessonCreateNestedManyWithoutProjectInput = {
    create?: XOR<LessonCreateWithoutProjectInput, LessonUncheckedCreateWithoutProjectInput> | LessonCreateWithoutProjectInput[] | LessonUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutProjectInput | LessonCreateOrConnectWithoutProjectInput[]
    createMany?: LessonCreateManyProjectInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput> | UserCreateWithoutProjectInput[] | UserUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput | UserCreateOrConnectWithoutProjectInput[]
    createMany?: UserCreateManyProjectInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<LessonCreateWithoutProjectInput, LessonUncheckedCreateWithoutProjectInput> | LessonCreateWithoutProjectInput[] | LessonUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutProjectInput | LessonCreateOrConnectWithoutProjectInput[]
    createMany?: LessonCreateManyProjectInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput> | UserCreateWithoutProjectInput[] | UserUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput | UserCreateOrConnectWithoutProjectInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProjectInput | UserUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UserCreateManyProjectInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProjectInput | UserUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProjectInput | UserUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LessonUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LessonCreateWithoutProjectInput, LessonUncheckedCreateWithoutProjectInput> | LessonCreateWithoutProjectInput[] | LessonUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutProjectInput | LessonCreateOrConnectWithoutProjectInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutProjectInput | LessonUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LessonCreateManyProjectInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutProjectInput | LessonUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutProjectInput | LessonUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput> | UserCreateWithoutProjectInput[] | UserUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput | UserCreateOrConnectWithoutProjectInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProjectInput | UserUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UserCreateManyProjectInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProjectInput | UserUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProjectInput | UserUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<LessonCreateWithoutProjectInput, LessonUncheckedCreateWithoutProjectInput> | LessonCreateWithoutProjectInput[] | LessonUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutProjectInput | LessonCreateOrConnectWithoutProjectInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutProjectInput | LessonUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: LessonCreateManyProjectInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutProjectInput | LessonUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutProjectInput | LessonUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutUsersInput = {
    create?: XOR<ProjectCreateWithoutUsersInput, ProjectUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUsersInput
    connect?: ProjectWhereUniqueInput
  }

  export type LessonProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput> | LessonProgressCreateWithoutUserInput[] | LessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutUserInput | LessonProgressCreateOrConnectWithoutUserInput[]
    createMany?: LessonProgressCreateManyUserInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type UserPointCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPointCreateWithoutUserInput, UserPointUncheckedCreateWithoutUserInput> | UserPointCreateWithoutUserInput[] | UserPointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPointCreateOrConnectWithoutUserInput | UserPointCreateOrConnectWithoutUserInput[]
    createMany?: UserPointCreateManyUserInputEnvelope
    connect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
  }

  export type AIChatTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<AIChatTransactionCreateWithoutUserInput, AIChatTransactionUncheckedCreateWithoutUserInput> | AIChatTransactionCreateWithoutUserInput[] | AIChatTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIChatTransactionCreateOrConnectWithoutUserInput | AIChatTransactionCreateOrConnectWithoutUserInput[]
    createMany?: AIChatTransactionCreateManyUserInputEnvelope
    connect?: AIChatTransactionWhereUniqueInput | AIChatTransactionWhereUniqueInput[]
  }

  export type LessonProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput> | LessonProgressCreateWithoutUserInput[] | LessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutUserInput | LessonProgressCreateOrConnectWithoutUserInput[]
    createMany?: LessonProgressCreateManyUserInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type UserPointUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPointCreateWithoutUserInput, UserPointUncheckedCreateWithoutUserInput> | UserPointCreateWithoutUserInput[] | UserPointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPointCreateOrConnectWithoutUserInput | UserPointCreateOrConnectWithoutUserInput[]
    createMany?: UserPointCreateManyUserInputEnvelope
    connect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
  }

  export type AIChatTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AIChatTransactionCreateWithoutUserInput, AIChatTransactionUncheckedCreateWithoutUserInput> | AIChatTransactionCreateWithoutUserInput[] | AIChatTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIChatTransactionCreateOrConnectWithoutUserInput | AIChatTransactionCreateOrConnectWithoutUserInput[]
    createMany?: AIChatTransactionCreateManyUserInputEnvelope
    connect?: AIChatTransactionWhereUniqueInput | AIChatTransactionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneWithoutUsersNestedInput = {
    create?: XOR<ProjectCreateWithoutUsersInput, ProjectUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUsersInput
    upsert?: ProjectUpsertWithoutUsersInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutUsersInput, ProjectUpdateWithoutUsersInput>, ProjectUncheckedUpdateWithoutUsersInput>
  }

  export type LessonProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput> | LessonProgressCreateWithoutUserInput[] | LessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutUserInput | LessonProgressCreateOrConnectWithoutUserInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutUserInput | LessonProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LessonProgressCreateManyUserInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutUserInput | LessonProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutUserInput | LessonProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type UserPointUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPointCreateWithoutUserInput, UserPointUncheckedCreateWithoutUserInput> | UserPointCreateWithoutUserInput[] | UserPointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPointCreateOrConnectWithoutUserInput | UserPointCreateOrConnectWithoutUserInput[]
    upsert?: UserPointUpsertWithWhereUniqueWithoutUserInput | UserPointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPointCreateManyUserInputEnvelope
    set?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    disconnect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    delete?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    connect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    update?: UserPointUpdateWithWhereUniqueWithoutUserInput | UserPointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPointUpdateManyWithWhereWithoutUserInput | UserPointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPointScalarWhereInput | UserPointScalarWhereInput[]
  }

  export type AIChatTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<AIChatTransactionCreateWithoutUserInput, AIChatTransactionUncheckedCreateWithoutUserInput> | AIChatTransactionCreateWithoutUserInput[] | AIChatTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIChatTransactionCreateOrConnectWithoutUserInput | AIChatTransactionCreateOrConnectWithoutUserInput[]
    upsert?: AIChatTransactionUpsertWithWhereUniqueWithoutUserInput | AIChatTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AIChatTransactionCreateManyUserInputEnvelope
    set?: AIChatTransactionWhereUniqueInput | AIChatTransactionWhereUniqueInput[]
    disconnect?: AIChatTransactionWhereUniqueInput | AIChatTransactionWhereUniqueInput[]
    delete?: AIChatTransactionWhereUniqueInput | AIChatTransactionWhereUniqueInput[]
    connect?: AIChatTransactionWhereUniqueInput | AIChatTransactionWhereUniqueInput[]
    update?: AIChatTransactionUpdateWithWhereUniqueWithoutUserInput | AIChatTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AIChatTransactionUpdateManyWithWhereWithoutUserInput | AIChatTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AIChatTransactionScalarWhereInput | AIChatTransactionScalarWhereInput[]
  }

  export type LessonProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput> | LessonProgressCreateWithoutUserInput[] | LessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutUserInput | LessonProgressCreateOrConnectWithoutUserInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutUserInput | LessonProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LessonProgressCreateManyUserInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutUserInput | LessonProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutUserInput | LessonProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type UserPointUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPointCreateWithoutUserInput, UserPointUncheckedCreateWithoutUserInput> | UserPointCreateWithoutUserInput[] | UserPointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPointCreateOrConnectWithoutUserInput | UserPointCreateOrConnectWithoutUserInput[]
    upsert?: UserPointUpsertWithWhereUniqueWithoutUserInput | UserPointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPointCreateManyUserInputEnvelope
    set?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    disconnect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    delete?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    connect?: UserPointWhereUniqueInput | UserPointWhereUniqueInput[]
    update?: UserPointUpdateWithWhereUniqueWithoutUserInput | UserPointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPointUpdateManyWithWhereWithoutUserInput | UserPointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPointScalarWhereInput | UserPointScalarWhereInput[]
  }

  export type AIChatTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AIChatTransactionCreateWithoutUserInput, AIChatTransactionUncheckedCreateWithoutUserInput> | AIChatTransactionCreateWithoutUserInput[] | AIChatTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIChatTransactionCreateOrConnectWithoutUserInput | AIChatTransactionCreateOrConnectWithoutUserInput[]
    upsert?: AIChatTransactionUpsertWithWhereUniqueWithoutUserInput | AIChatTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AIChatTransactionCreateManyUserInputEnvelope
    set?: AIChatTransactionWhereUniqueInput | AIChatTransactionWhereUniqueInput[]
    disconnect?: AIChatTransactionWhereUniqueInput | AIChatTransactionWhereUniqueInput[]
    delete?: AIChatTransactionWhereUniqueInput | AIChatTransactionWhereUniqueInput[]
    connect?: AIChatTransactionWhereUniqueInput | AIChatTransactionWhereUniqueInput[]
    update?: AIChatTransactionUpdateWithWhereUniqueWithoutUserInput | AIChatTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AIChatTransactionUpdateManyWithWhereWithoutUserInput | AIChatTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AIChatTransactionScalarWhereInput | AIChatTransactionScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutLessonsInput = {
    create?: XOR<ProjectCreateWithoutLessonsInput, ProjectUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLessonsInput
    connect?: ProjectWhereUniqueInput
  }

  export type LessonBlockCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonBlockCreateWithoutLessonInput, LessonBlockUncheckedCreateWithoutLessonInput> | LessonBlockCreateWithoutLessonInput[] | LessonBlockUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonBlockCreateOrConnectWithoutLessonInput | LessonBlockCreateOrConnectWithoutLessonInput[]
    createMany?: LessonBlockCreateManyLessonInputEnvelope
    connect?: LessonBlockWhereUniqueInput | LessonBlockWhereUniqueInput[]
  }

  export type LessonProgressCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput> | LessonProgressCreateWithoutLessonInput[] | LessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutLessonInput | LessonProgressCreateOrConnectWithoutLessonInput[]
    createMany?: LessonProgressCreateManyLessonInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type TestCreateNestedManyWithoutLessonInput = {
    create?: XOR<TestCreateWithoutLessonInput, TestUncheckedCreateWithoutLessonInput> | TestCreateWithoutLessonInput[] | TestUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: TestCreateOrConnectWithoutLessonInput | TestCreateOrConnectWithoutLessonInput[]
    createMany?: TestCreateManyLessonInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type LessonBlockUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonBlockCreateWithoutLessonInput, LessonBlockUncheckedCreateWithoutLessonInput> | LessonBlockCreateWithoutLessonInput[] | LessonBlockUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonBlockCreateOrConnectWithoutLessonInput | LessonBlockCreateOrConnectWithoutLessonInput[]
    createMany?: LessonBlockCreateManyLessonInputEnvelope
    connect?: LessonBlockWhereUniqueInput | LessonBlockWhereUniqueInput[]
  }

  export type LessonProgressUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput> | LessonProgressCreateWithoutLessonInput[] | LessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutLessonInput | LessonProgressCreateOrConnectWithoutLessonInput[]
    createMany?: LessonProgressCreateManyLessonInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type TestUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<TestCreateWithoutLessonInput, TestUncheckedCreateWithoutLessonInput> | TestCreateWithoutLessonInput[] | TestUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: TestCreateOrConnectWithoutLessonInput | TestCreateOrConnectWithoutLessonInput[]
    createMany?: TestCreateManyLessonInputEnvelope
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
  }

  export type ProjectUpdateOneWithoutLessonsNestedInput = {
    create?: XOR<ProjectCreateWithoutLessonsInput, ProjectUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutLessonsInput
    upsert?: ProjectUpsertWithoutLessonsInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutLessonsInput, ProjectUpdateWithoutLessonsInput>, ProjectUncheckedUpdateWithoutLessonsInput>
  }

  export type LessonBlockUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonBlockCreateWithoutLessonInput, LessonBlockUncheckedCreateWithoutLessonInput> | LessonBlockCreateWithoutLessonInput[] | LessonBlockUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonBlockCreateOrConnectWithoutLessonInput | LessonBlockCreateOrConnectWithoutLessonInput[]
    upsert?: LessonBlockUpsertWithWhereUniqueWithoutLessonInput | LessonBlockUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonBlockCreateManyLessonInputEnvelope
    set?: LessonBlockWhereUniqueInput | LessonBlockWhereUniqueInput[]
    disconnect?: LessonBlockWhereUniqueInput | LessonBlockWhereUniqueInput[]
    delete?: LessonBlockWhereUniqueInput | LessonBlockWhereUniqueInput[]
    connect?: LessonBlockWhereUniqueInput | LessonBlockWhereUniqueInput[]
    update?: LessonBlockUpdateWithWhereUniqueWithoutLessonInput | LessonBlockUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonBlockUpdateManyWithWhereWithoutLessonInput | LessonBlockUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonBlockScalarWhereInput | LessonBlockScalarWhereInput[]
  }

  export type LessonProgressUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput> | LessonProgressCreateWithoutLessonInput[] | LessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutLessonInput | LessonProgressCreateOrConnectWithoutLessonInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutLessonInput | LessonProgressUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonProgressCreateManyLessonInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutLessonInput | LessonProgressUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutLessonInput | LessonProgressUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type TestUpdateManyWithoutLessonNestedInput = {
    create?: XOR<TestCreateWithoutLessonInput, TestUncheckedCreateWithoutLessonInput> | TestCreateWithoutLessonInput[] | TestUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: TestCreateOrConnectWithoutLessonInput | TestCreateOrConnectWithoutLessonInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutLessonInput | TestUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: TestCreateManyLessonInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutLessonInput | TestUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: TestUpdateManyWithWhereWithoutLessonInput | TestUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type LessonBlockUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonBlockCreateWithoutLessonInput, LessonBlockUncheckedCreateWithoutLessonInput> | LessonBlockCreateWithoutLessonInput[] | LessonBlockUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonBlockCreateOrConnectWithoutLessonInput | LessonBlockCreateOrConnectWithoutLessonInput[]
    upsert?: LessonBlockUpsertWithWhereUniqueWithoutLessonInput | LessonBlockUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonBlockCreateManyLessonInputEnvelope
    set?: LessonBlockWhereUniqueInput | LessonBlockWhereUniqueInput[]
    disconnect?: LessonBlockWhereUniqueInput | LessonBlockWhereUniqueInput[]
    delete?: LessonBlockWhereUniqueInput | LessonBlockWhereUniqueInput[]
    connect?: LessonBlockWhereUniqueInput | LessonBlockWhereUniqueInput[]
    update?: LessonBlockUpdateWithWhereUniqueWithoutLessonInput | LessonBlockUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonBlockUpdateManyWithWhereWithoutLessonInput | LessonBlockUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonBlockScalarWhereInput | LessonBlockScalarWhereInput[]
  }

  export type LessonProgressUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput> | LessonProgressCreateWithoutLessonInput[] | LessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutLessonInput | LessonProgressCreateOrConnectWithoutLessonInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutLessonInput | LessonProgressUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonProgressCreateManyLessonInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutLessonInput | LessonProgressUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutLessonInput | LessonProgressUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type TestUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<TestCreateWithoutLessonInput, TestUncheckedCreateWithoutLessonInput> | TestCreateWithoutLessonInput[] | TestUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: TestCreateOrConnectWithoutLessonInput | TestCreateOrConnectWithoutLessonInput[]
    upsert?: TestUpsertWithWhereUniqueWithoutLessonInput | TestUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: TestCreateManyLessonInputEnvelope
    set?: TestWhereUniqueInput | TestWhereUniqueInput[]
    disconnect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    delete?: TestWhereUniqueInput | TestWhereUniqueInput[]
    connect?: TestWhereUniqueInput | TestWhereUniqueInput[]
    update?: TestUpdateWithWhereUniqueWithoutLessonInput | TestUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: TestUpdateManyWithWhereWithoutLessonInput | TestUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: TestScalarWhereInput | TestScalarWhereInput[]
  }

  export type LessonCreateNestedOneWithoutBlocksInput = {
    create?: XOR<LessonCreateWithoutBlocksInput, LessonUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: LessonCreateOrConnectWithoutBlocksInput
    connect?: LessonWhereUniqueInput
  }

  export type EnumLessonBlockTypeFieldUpdateOperationsInput = {
    set?: $Enums.LessonBlockType
  }

  export type LessonUpdateOneRequiredWithoutBlocksNestedInput = {
    create?: XOR<LessonCreateWithoutBlocksInput, LessonUncheckedCreateWithoutBlocksInput>
    connectOrCreate?: LessonCreateOrConnectWithoutBlocksInput
    upsert?: LessonUpsertWithoutBlocksInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutBlocksInput, LessonUpdateWithoutBlocksInput>, LessonUncheckedUpdateWithoutBlocksInput>
  }

  export type UserCreateNestedOneWithoutProgressInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    connect?: UserWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutProgressInput = {
    create?: XOR<LessonCreateWithoutProgressInput, LessonUncheckedCreateWithoutProgressInput>
    connectOrCreate?: LessonCreateOrConnectWithoutProgressInput
    connect?: LessonWhereUniqueInput
  }

  export type EnumProgressStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProgressStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    upsert?: UserUpsertWithoutProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressInput, UserUpdateWithoutProgressInput>, UserUncheckedUpdateWithoutProgressInput>
  }

  export type LessonUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<LessonCreateWithoutProgressInput, LessonUncheckedCreateWithoutProgressInput>
    connectOrCreate?: LessonCreateOrConnectWithoutProgressInput
    upsert?: LessonUpsertWithoutProgressInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutProgressInput, LessonUpdateWithoutProgressInput>, LessonUncheckedUpdateWithoutProgressInput>
  }

  export type UserCreateNestedOneWithoutPointsInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPointsNestedInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    upsert?: UserUpsertWithoutPointsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPointsInput, UserUpdateWithoutPointsInput>, UserUncheckedUpdateWithoutPointsInput>
  }

  export type LessonCreateNestedOneWithoutTestsInput = {
    create?: XOR<LessonCreateWithoutTestsInput, LessonUncheckedCreateWithoutTestsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutTestsInput
    connect?: LessonWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutTestInput = {
    create?: XOR<QuestionCreateWithoutTestInput, QuestionUncheckedCreateWithoutTestInput> | QuestionCreateWithoutTestInput[] | QuestionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTestInput | QuestionCreateOrConnectWithoutTestInput[]
    createMany?: QuestionCreateManyTestInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<QuestionCreateWithoutTestInput, QuestionUncheckedCreateWithoutTestInput> | QuestionCreateWithoutTestInput[] | QuestionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTestInput | QuestionCreateOrConnectWithoutTestInput[]
    createMany?: QuestionCreateManyTestInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type LessonUpdateOneRequiredWithoutTestsNestedInput = {
    create?: XOR<LessonCreateWithoutTestsInput, LessonUncheckedCreateWithoutTestsInput>
    connectOrCreate?: LessonCreateOrConnectWithoutTestsInput
    upsert?: LessonUpsertWithoutTestsInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutTestsInput, LessonUpdateWithoutTestsInput>, LessonUncheckedUpdateWithoutTestsInput>
  }

  export type QuestionUpdateManyWithoutTestNestedInput = {
    create?: XOR<QuestionCreateWithoutTestInput, QuestionUncheckedCreateWithoutTestInput> | QuestionCreateWithoutTestInput[] | QuestionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTestInput | QuestionCreateOrConnectWithoutTestInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTestInput | QuestionUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: QuestionCreateManyTestInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTestInput | QuestionUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTestInput | QuestionUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<QuestionCreateWithoutTestInput, QuestionUncheckedCreateWithoutTestInput> | QuestionCreateWithoutTestInput[] | QuestionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTestInput | QuestionCreateOrConnectWithoutTestInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTestInput | QuestionUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: QuestionCreateManyTestInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTestInput | QuestionUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTestInput | QuestionUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type TestCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<TestCreateWithoutQuestionsInput, TestUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TestCreateOrConnectWithoutQuestionsInput
    connect?: TestWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type TestUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<TestCreateWithoutQuestionsInput, TestUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TestCreateOrConnectWithoutQuestionsInput
    upsert?: TestUpsertWithoutQuestionsInput
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutQuestionsInput, TestUpdateWithoutQuestionsInput>, TestUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type UserCreateNestedOneWithoutAiChatsInput = {
    create?: XOR<UserCreateWithoutAiChatsInput, UserUncheckedCreateWithoutAiChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiChatsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutAiChatsNestedInput = {
    create?: XOR<UserCreateWithoutAiChatsInput, UserUncheckedCreateWithoutAiChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiChatsInput
    upsert?: UserUpsertWithoutAiChatsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiChatsInput, UserUpdateWithoutAiChatsInput>, UserUncheckedUpdateWithoutAiChatsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumLessonBlockTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LessonBlockType | EnumLessonBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LessonBlockType[] | ListEnumLessonBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LessonBlockType[] | ListEnumLessonBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLessonBlockTypeFilter<$PrismaModel> | $Enums.LessonBlockType
  }

  export type NestedEnumLessonBlockTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LessonBlockType | EnumLessonBlockTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LessonBlockType[] | ListEnumLessonBlockTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LessonBlockType[] | ListEnumLessonBlockTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLessonBlockTypeWithAggregatesFilter<$PrismaModel> | $Enums.LessonBlockType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLessonBlockTypeFilter<$PrismaModel>
    _max?: NestedEnumLessonBlockTypeFilter<$PrismaModel>
  }

  export type NestedEnumProgressStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusFilter<$PrismaModel> | $Enums.ProgressStatus
  }

  export type NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgressStatus | EnumProgressStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProgressStatus[] | ListEnumProgressStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProgressStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgressStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgressStatusFilter<$PrismaModel>
    _max?: NestedEnumProgressStatusFilter<$PrismaModel>
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

  export type UserCreateWithoutProjectInput = {
    id?: string
    telegramId: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    lastActivityAt?: Date | string | null
    currentStreak?: number
    maxStreak?: number
    progress?: LessonProgressCreateNestedManyWithoutUserInput
    points?: UserPointCreateNestedManyWithoutUserInput
    aiChats?: AIChatTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectInput = {
    id?: string
    telegramId: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    lastActivityAt?: Date | string | null
    currentStreak?: number
    maxStreak?: number
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    points?: UserPointUncheckedCreateNestedManyWithoutUserInput
    aiChats?: AIChatTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
  }

  export type UserCreateManyProjectInputEnvelope = {
    data: UserCreateManyProjectInput | UserCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type LessonCreateWithoutProjectInput = {
    id?: string
    code: string
    title: string
    description?: string | null
    order: number
    isPublished?: boolean
    aiPrompt?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    blocks?: LessonBlockCreateNestedManyWithoutLessonInput
    progress?: LessonProgressCreateNestedManyWithoutLessonInput
    tests?: TestCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutProjectInput = {
    id?: string
    code: string
    title: string
    description?: string | null
    order: number
    isPublished?: boolean
    aiPrompt?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    blocks?: LessonBlockUncheckedCreateNestedManyWithoutLessonInput
    progress?: LessonProgressUncheckedCreateNestedManyWithoutLessonInput
    tests?: TestUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutProjectInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutProjectInput, LessonUncheckedCreateWithoutProjectInput>
  }

  export type LessonCreateManyProjectInputEnvelope = {
    data: LessonCreateManyProjectInput | LessonCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutProjectInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
  }

  export type UserUpdateWithWhereUniqueWithoutProjectInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateManyWithWhereWithoutProjectInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutProjectInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    projectId?: StringNullableFilter<"User"> | string | null
    telegramId?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastActivityAt?: DateTimeNullableFilter<"User"> | Date | string | null
    currentStreak?: IntFilter<"User"> | number
    maxStreak?: IntFilter<"User"> | number
  }

  export type LessonUpsertWithWhereUniqueWithoutProjectInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutProjectInput, LessonUncheckedUpdateWithoutProjectInput>
    create: XOR<LessonCreateWithoutProjectInput, LessonUncheckedCreateWithoutProjectInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutProjectInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutProjectInput, LessonUncheckedUpdateWithoutProjectInput>
  }

  export type LessonUpdateManyWithWhereWithoutProjectInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutProjectInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: StringFilter<"Lesson"> | string
    projectId?: StringNullableFilter<"Lesson"> | string | null
    code?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    description?: StringNullableFilter<"Lesson"> | string | null
    order?: IntFilter<"Lesson"> | number
    isPublished?: BoolFilter<"Lesson"> | boolean
    aiPrompt?: StringNullableFilter<"Lesson"> | string | null
    videoUrl?: StringNullableFilter<"Lesson"> | string | null
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
  }

  export type ProjectCreateWithoutUsersInput = {
    id?: string
    code: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUsersInput = {
    id?: string
    code: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUsersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUsersInput, ProjectUncheckedCreateWithoutUsersInput>
  }

  export type LessonProgressCreateWithoutUserInput = {
    id?: string
    status?: $Enums.ProgressStatus
    score?: number | null
    startedAt?: Date | string
    updatedAt?: Date | string
    lesson: LessonCreateNestedOneWithoutProgressInput
  }

  export type LessonProgressUncheckedCreateWithoutUserInput = {
    id?: string
    lessonId: string
    status?: $Enums.ProgressStatus
    score?: number | null
    startedAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonProgressCreateOrConnectWithoutUserInput = {
    where: LessonProgressWhereUniqueInput
    create: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput>
  }

  export type LessonProgressCreateManyUserInputEnvelope = {
    data: LessonProgressCreateManyUserInput | LessonProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPointCreateWithoutUserInput = {
    id?: string
    amount: number
    reason: string
    sourceId?: string | null
    createdAt?: Date | string
  }

  export type UserPointUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    reason: string
    sourceId?: string | null
    createdAt?: Date | string
  }

  export type UserPointCreateOrConnectWithoutUserInput = {
    where: UserPointWhereUniqueInput
    create: XOR<UserPointCreateWithoutUserInput, UserPointUncheckedCreateWithoutUserInput>
  }

  export type UserPointCreateManyUserInputEnvelope = {
    data: UserPointCreateManyUserInput | UserPointCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AIChatTransactionCreateWithoutUserInput = {
    id?: string
    projectId: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    costEstimate?: number | null
    model: string
    createdAt?: Date | string
  }

  export type AIChatTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    projectId: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    costEstimate?: number | null
    model: string
    createdAt?: Date | string
  }

  export type AIChatTransactionCreateOrConnectWithoutUserInput = {
    where: AIChatTransactionWhereUniqueInput
    create: XOR<AIChatTransactionCreateWithoutUserInput, AIChatTransactionUncheckedCreateWithoutUserInput>
  }

  export type AIChatTransactionCreateManyUserInputEnvelope = {
    data: AIChatTransactionCreateManyUserInput | AIChatTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutUsersInput = {
    update: XOR<ProjectUpdateWithoutUsersInput, ProjectUncheckedUpdateWithoutUsersInput>
    create: XOR<ProjectCreateWithoutUsersInput, ProjectUncheckedCreateWithoutUsersInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutUsersInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutUsersInput, ProjectUncheckedUpdateWithoutUsersInput>
  }

  export type ProjectUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type LessonProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: LessonProgressWhereUniqueInput
    update: XOR<LessonProgressUpdateWithoutUserInput, LessonProgressUncheckedUpdateWithoutUserInput>
    create: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput>
  }

  export type LessonProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: LessonProgressWhereUniqueInput
    data: XOR<LessonProgressUpdateWithoutUserInput, LessonProgressUncheckedUpdateWithoutUserInput>
  }

  export type LessonProgressUpdateManyWithWhereWithoutUserInput = {
    where: LessonProgressScalarWhereInput
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type LessonProgressScalarWhereInput = {
    AND?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
    OR?: LessonProgressScalarWhereInput[]
    NOT?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
    id?: StringFilter<"LessonProgress"> | string
    userId?: StringFilter<"LessonProgress"> | string
    lessonId?: StringFilter<"LessonProgress"> | string
    status?: EnumProgressStatusFilter<"LessonProgress"> | $Enums.ProgressStatus
    score?: IntNullableFilter<"LessonProgress"> | number | null
    startedAt?: DateTimeFilter<"LessonProgress"> | Date | string
    updatedAt?: DateTimeFilter<"LessonProgress"> | Date | string
  }

  export type UserPointUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPointWhereUniqueInput
    update: XOR<UserPointUpdateWithoutUserInput, UserPointUncheckedUpdateWithoutUserInput>
    create: XOR<UserPointCreateWithoutUserInput, UserPointUncheckedCreateWithoutUserInput>
  }

  export type UserPointUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPointWhereUniqueInput
    data: XOR<UserPointUpdateWithoutUserInput, UserPointUncheckedUpdateWithoutUserInput>
  }

  export type UserPointUpdateManyWithWhereWithoutUserInput = {
    where: UserPointScalarWhereInput
    data: XOR<UserPointUpdateManyMutationInput, UserPointUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPointScalarWhereInput = {
    AND?: UserPointScalarWhereInput | UserPointScalarWhereInput[]
    OR?: UserPointScalarWhereInput[]
    NOT?: UserPointScalarWhereInput | UserPointScalarWhereInput[]
    id?: StringFilter<"UserPoint"> | string
    userId?: StringFilter<"UserPoint"> | string
    amount?: IntFilter<"UserPoint"> | number
    reason?: StringFilter<"UserPoint"> | string
    sourceId?: StringNullableFilter<"UserPoint"> | string | null
    createdAt?: DateTimeFilter<"UserPoint"> | Date | string
  }

  export type AIChatTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: AIChatTransactionWhereUniqueInput
    update: XOR<AIChatTransactionUpdateWithoutUserInput, AIChatTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<AIChatTransactionCreateWithoutUserInput, AIChatTransactionUncheckedCreateWithoutUserInput>
  }

  export type AIChatTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: AIChatTransactionWhereUniqueInput
    data: XOR<AIChatTransactionUpdateWithoutUserInput, AIChatTransactionUncheckedUpdateWithoutUserInput>
  }

  export type AIChatTransactionUpdateManyWithWhereWithoutUserInput = {
    where: AIChatTransactionScalarWhereInput
    data: XOR<AIChatTransactionUpdateManyMutationInput, AIChatTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type AIChatTransactionScalarWhereInput = {
    AND?: AIChatTransactionScalarWhereInput | AIChatTransactionScalarWhereInput[]
    OR?: AIChatTransactionScalarWhereInput[]
    NOT?: AIChatTransactionScalarWhereInput | AIChatTransactionScalarWhereInput[]
    id?: StringFilter<"AIChatTransaction"> | string
    projectId?: StringFilter<"AIChatTransaction"> | string
    userId?: StringNullableFilter<"AIChatTransaction"> | string | null
    promptTokens?: IntFilter<"AIChatTransaction"> | number
    completionTokens?: IntFilter<"AIChatTransaction"> | number
    totalTokens?: IntFilter<"AIChatTransaction"> | number
    costEstimate?: FloatNullableFilter<"AIChatTransaction"> | number | null
    model?: StringFilter<"AIChatTransaction"> | string
    createdAt?: DateTimeFilter<"AIChatTransaction"> | Date | string
  }

  export type ProjectCreateWithoutLessonsInput = {
    id?: string
    code: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutLessonsInput = {
    id?: string
    code: string
    title: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutLessonsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutLessonsInput, ProjectUncheckedCreateWithoutLessonsInput>
  }

  export type LessonBlockCreateWithoutLessonInput = {
    id?: string
    type: $Enums.LessonBlockType
    order: number
    textContent?: string | null
    mediaUrl?: string | null
    telegramFileId?: string | null
    mimeType?: string | null
    caption?: string | null
    createdAt?: Date | string
  }

  export type LessonBlockUncheckedCreateWithoutLessonInput = {
    id?: string
    type: $Enums.LessonBlockType
    order: number
    textContent?: string | null
    mediaUrl?: string | null
    telegramFileId?: string | null
    mimeType?: string | null
    caption?: string | null
    createdAt?: Date | string
  }

  export type LessonBlockCreateOrConnectWithoutLessonInput = {
    where: LessonBlockWhereUniqueInput
    create: XOR<LessonBlockCreateWithoutLessonInput, LessonBlockUncheckedCreateWithoutLessonInput>
  }

  export type LessonBlockCreateManyLessonInputEnvelope = {
    data: LessonBlockCreateManyLessonInput | LessonBlockCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type LessonProgressCreateWithoutLessonInput = {
    id?: string
    status?: $Enums.ProgressStatus
    score?: number | null
    startedAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressInput
  }

  export type LessonProgressUncheckedCreateWithoutLessonInput = {
    id?: string
    userId: string
    status?: $Enums.ProgressStatus
    score?: number | null
    startedAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonProgressCreateOrConnectWithoutLessonInput = {
    where: LessonProgressWhereUniqueInput
    create: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput>
  }

  export type LessonProgressCreateManyLessonInputEnvelope = {
    data: LessonProgressCreateManyLessonInput | LessonProgressCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type TestCreateWithoutLessonInput = {
    id?: string
    title: string
    description?: string | null
    passingScore?: number
    createdAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutLessonInput = {
    id?: string
    title: string
    description?: string | null
    passingScore?: number
    createdAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutLessonInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutLessonInput, TestUncheckedCreateWithoutLessonInput>
  }

  export type TestCreateManyLessonInputEnvelope = {
    data: TestCreateManyLessonInput | TestCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutLessonsInput = {
    update: XOR<ProjectUpdateWithoutLessonsInput, ProjectUncheckedUpdateWithoutLessonsInput>
    create: XOR<ProjectCreateWithoutLessonsInput, ProjectUncheckedCreateWithoutLessonsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutLessonsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutLessonsInput, ProjectUncheckedUpdateWithoutLessonsInput>
  }

  export type ProjectUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type LessonBlockUpsertWithWhereUniqueWithoutLessonInput = {
    where: LessonBlockWhereUniqueInput
    update: XOR<LessonBlockUpdateWithoutLessonInput, LessonBlockUncheckedUpdateWithoutLessonInput>
    create: XOR<LessonBlockCreateWithoutLessonInput, LessonBlockUncheckedCreateWithoutLessonInput>
  }

  export type LessonBlockUpdateWithWhereUniqueWithoutLessonInput = {
    where: LessonBlockWhereUniqueInput
    data: XOR<LessonBlockUpdateWithoutLessonInput, LessonBlockUncheckedUpdateWithoutLessonInput>
  }

  export type LessonBlockUpdateManyWithWhereWithoutLessonInput = {
    where: LessonBlockScalarWhereInput
    data: XOR<LessonBlockUpdateManyMutationInput, LessonBlockUncheckedUpdateManyWithoutLessonInput>
  }

  export type LessonBlockScalarWhereInput = {
    AND?: LessonBlockScalarWhereInput | LessonBlockScalarWhereInput[]
    OR?: LessonBlockScalarWhereInput[]
    NOT?: LessonBlockScalarWhereInput | LessonBlockScalarWhereInput[]
    id?: StringFilter<"LessonBlock"> | string
    lessonId?: StringFilter<"LessonBlock"> | string
    type?: EnumLessonBlockTypeFilter<"LessonBlock"> | $Enums.LessonBlockType
    order?: IntFilter<"LessonBlock"> | number
    textContent?: StringNullableFilter<"LessonBlock"> | string | null
    mediaUrl?: StringNullableFilter<"LessonBlock"> | string | null
    telegramFileId?: StringNullableFilter<"LessonBlock"> | string | null
    mimeType?: StringNullableFilter<"LessonBlock"> | string | null
    caption?: StringNullableFilter<"LessonBlock"> | string | null
    createdAt?: DateTimeFilter<"LessonBlock"> | Date | string
  }

  export type LessonProgressUpsertWithWhereUniqueWithoutLessonInput = {
    where: LessonProgressWhereUniqueInput
    update: XOR<LessonProgressUpdateWithoutLessonInput, LessonProgressUncheckedUpdateWithoutLessonInput>
    create: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput>
  }

  export type LessonProgressUpdateWithWhereUniqueWithoutLessonInput = {
    where: LessonProgressWhereUniqueInput
    data: XOR<LessonProgressUpdateWithoutLessonInput, LessonProgressUncheckedUpdateWithoutLessonInput>
  }

  export type LessonProgressUpdateManyWithWhereWithoutLessonInput = {
    where: LessonProgressScalarWhereInput
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyWithoutLessonInput>
  }

  export type TestUpsertWithWhereUniqueWithoutLessonInput = {
    where: TestWhereUniqueInput
    update: XOR<TestUpdateWithoutLessonInput, TestUncheckedUpdateWithoutLessonInput>
    create: XOR<TestCreateWithoutLessonInput, TestUncheckedCreateWithoutLessonInput>
  }

  export type TestUpdateWithWhereUniqueWithoutLessonInput = {
    where: TestWhereUniqueInput
    data: XOR<TestUpdateWithoutLessonInput, TestUncheckedUpdateWithoutLessonInput>
  }

  export type TestUpdateManyWithWhereWithoutLessonInput = {
    where: TestScalarWhereInput
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyWithoutLessonInput>
  }

  export type TestScalarWhereInput = {
    AND?: TestScalarWhereInput | TestScalarWhereInput[]
    OR?: TestScalarWhereInput[]
    NOT?: TestScalarWhereInput | TestScalarWhereInput[]
    id?: StringFilter<"Test"> | string
    lessonId?: StringFilter<"Test"> | string
    title?: StringFilter<"Test"> | string
    description?: StringNullableFilter<"Test"> | string | null
    passingScore?: IntFilter<"Test"> | number
    createdAt?: DateTimeFilter<"Test"> | Date | string
  }

  export type LessonCreateWithoutBlocksInput = {
    id?: string
    code: string
    title: string
    description?: string | null
    order: number
    isPublished?: boolean
    aiPrompt?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    project?: ProjectCreateNestedOneWithoutLessonsInput
    progress?: LessonProgressCreateNestedManyWithoutLessonInput
    tests?: TestCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutBlocksInput = {
    id?: string
    projectId?: string | null
    code: string
    title: string
    description?: string | null
    order: number
    isPublished?: boolean
    aiPrompt?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    progress?: LessonProgressUncheckedCreateNestedManyWithoutLessonInput
    tests?: TestUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutBlocksInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutBlocksInput, LessonUncheckedCreateWithoutBlocksInput>
  }

  export type LessonUpsertWithoutBlocksInput = {
    update: XOR<LessonUpdateWithoutBlocksInput, LessonUncheckedUpdateWithoutBlocksInput>
    create: XOR<LessonCreateWithoutBlocksInput, LessonUncheckedCreateWithoutBlocksInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutBlocksInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutBlocksInput, LessonUncheckedUpdateWithoutBlocksInput>
  }

  export type LessonUpdateWithoutBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutLessonsNestedInput
    progress?: LessonProgressUpdateManyWithoutLessonNestedInput
    tests?: TestUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutBlocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: LessonProgressUncheckedUpdateManyWithoutLessonNestedInput
    tests?: TestUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type UserCreateWithoutProgressInput = {
    id?: string
    telegramId: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    lastActivityAt?: Date | string | null
    currentStreak?: number
    maxStreak?: number
    project?: ProjectCreateNestedOneWithoutUsersInput
    points?: UserPointCreateNestedManyWithoutUserInput
    aiChats?: AIChatTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressInput = {
    id?: string
    projectId?: string | null
    telegramId: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    lastActivityAt?: Date | string | null
    currentStreak?: number
    maxStreak?: number
    points?: UserPointUncheckedCreateNestedManyWithoutUserInput
    aiChats?: AIChatTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
  }

  export type LessonCreateWithoutProgressInput = {
    id?: string
    code: string
    title: string
    description?: string | null
    order: number
    isPublished?: boolean
    aiPrompt?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    project?: ProjectCreateNestedOneWithoutLessonsInput
    blocks?: LessonBlockCreateNestedManyWithoutLessonInput
    tests?: TestCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutProgressInput = {
    id?: string
    projectId?: string | null
    code: string
    title: string
    description?: string | null
    order: number
    isPublished?: boolean
    aiPrompt?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    blocks?: LessonBlockUncheckedCreateNestedManyWithoutLessonInput
    tests?: TestUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutProgressInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutProgressInput, LessonUncheckedCreateWithoutProgressInput>
  }

  export type UserUpsertWithoutProgressInput = {
    update: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
  }

  export type UserUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneWithoutUsersNestedInput
    points?: UserPointUpdateManyWithoutUserNestedInput
    aiChats?: AIChatTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    points?: UserPointUncheckedUpdateManyWithoutUserNestedInput
    aiChats?: AIChatTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LessonUpsertWithoutProgressInput = {
    update: XOR<LessonUpdateWithoutProgressInput, LessonUncheckedUpdateWithoutProgressInput>
    create: XOR<LessonCreateWithoutProgressInput, LessonUncheckedCreateWithoutProgressInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutProgressInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutProgressInput, LessonUncheckedUpdateWithoutProgressInput>
  }

  export type LessonUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutLessonsNestedInput
    blocks?: LessonBlockUpdateManyWithoutLessonNestedInput
    tests?: TestUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: LessonBlockUncheckedUpdateManyWithoutLessonNestedInput
    tests?: TestUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type UserCreateWithoutPointsInput = {
    id?: string
    telegramId: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    lastActivityAt?: Date | string | null
    currentStreak?: number
    maxStreak?: number
    project?: ProjectCreateNestedOneWithoutUsersInput
    progress?: LessonProgressCreateNestedManyWithoutUserInput
    aiChats?: AIChatTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPointsInput = {
    id?: string
    projectId?: string | null
    telegramId: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    lastActivityAt?: Date | string | null
    currentStreak?: number
    maxStreak?: number
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    aiChats?: AIChatTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
  }

  export type UserUpsertWithoutPointsInput = {
    update: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
  }

  export type UserUpdateWithoutPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneWithoutUsersNestedInput
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
    aiChats?: AIChatTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    aiChats?: AIChatTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LessonCreateWithoutTestsInput = {
    id?: string
    code: string
    title: string
    description?: string | null
    order: number
    isPublished?: boolean
    aiPrompt?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    project?: ProjectCreateNestedOneWithoutLessonsInput
    blocks?: LessonBlockCreateNestedManyWithoutLessonInput
    progress?: LessonProgressCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutTestsInput = {
    id?: string
    projectId?: string | null
    code: string
    title: string
    description?: string | null
    order: number
    isPublished?: boolean
    aiPrompt?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    blocks?: LessonBlockUncheckedCreateNestedManyWithoutLessonInput
    progress?: LessonProgressUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutTestsInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutTestsInput, LessonUncheckedCreateWithoutTestsInput>
  }

  export type QuestionCreateWithoutTestInput = {
    id?: string
    text: string
    order: number
    points?: number
    createdAt?: Date | string
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutTestInput = {
    id?: string
    text: string
    order: number
    points?: number
    createdAt?: Date | string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutTestInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTestInput, QuestionUncheckedCreateWithoutTestInput>
  }

  export type QuestionCreateManyTestInputEnvelope = {
    data: QuestionCreateManyTestInput | QuestionCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type LessonUpsertWithoutTestsInput = {
    update: XOR<LessonUpdateWithoutTestsInput, LessonUncheckedUpdateWithoutTestsInput>
    create: XOR<LessonCreateWithoutTestsInput, LessonUncheckedCreateWithoutTestsInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutTestsInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutTestsInput, LessonUncheckedUpdateWithoutTestsInput>
  }

  export type LessonUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutLessonsNestedInput
    blocks?: LessonBlockUpdateManyWithoutLessonNestedInput
    progress?: LessonProgressUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: LessonBlockUncheckedUpdateManyWithoutLessonNestedInput
    progress?: LessonProgressUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutTestInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutTestInput, QuestionUncheckedUpdateWithoutTestInput>
    create: XOR<QuestionCreateWithoutTestInput, QuestionUncheckedCreateWithoutTestInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutTestInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutTestInput, QuestionUncheckedUpdateWithoutTestInput>
  }

  export type QuestionUpdateManyWithWhereWithoutTestInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutTestInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    testId?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    points?: IntFilter<"Question"> | number
    createdAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type TestCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    passingScore?: number
    createdAt?: Date | string
    lesson: LessonCreateNestedOneWithoutTestsInput
  }

  export type TestUncheckedCreateWithoutQuestionsInput = {
    id?: string
    lessonId: string
    title: string
    description?: string | null
    passingScore?: number
    createdAt?: Date | string
  }

  export type TestCreateOrConnectWithoutQuestionsInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutQuestionsInput, TestUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    id?: string
    text: string
    isCorrect?: boolean
    createdAt?: Date | string
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    text: string
    isCorrect?: boolean
    createdAt?: Date | string
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type TestUpsertWithoutQuestionsInput = {
    update: XOR<TestUpdateWithoutQuestionsInput, TestUncheckedUpdateWithoutQuestionsInput>
    create: XOR<TestCreateWithoutQuestionsInput, TestUncheckedCreateWithoutQuestionsInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutQuestionsInput, TestUncheckedUpdateWithoutQuestionsInput>
  }

  export type TestUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutTestsNestedInput
  }

  export type TestUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: StringFilter<"Answer"> | string
    questionId?: StringFilter<"Answer"> | string
    text?: StringFilter<"Answer"> | string
    isCorrect?: BoolFilter<"Answer"> | boolean
    createdAt?: DateTimeFilter<"Answer"> | Date | string
  }

  export type QuestionCreateWithoutAnswersInput = {
    id?: string
    text: string
    order: number
    points?: number
    createdAt?: Date | string
    test: TestCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    testId: string
    text: string
    order: number
    points?: number
    createdAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAiChatsInput = {
    id?: string
    telegramId: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    lastActivityAt?: Date | string | null
    currentStreak?: number
    maxStreak?: number
    project?: ProjectCreateNestedOneWithoutUsersInput
    progress?: LessonProgressCreateNestedManyWithoutUserInput
    points?: UserPointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAiChatsInput = {
    id?: string
    projectId?: string | null
    telegramId: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    lastActivityAt?: Date | string | null
    currentStreak?: number
    maxStreak?: number
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    points?: UserPointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAiChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiChatsInput, UserUncheckedCreateWithoutAiChatsInput>
  }

  export type UserUpsertWithoutAiChatsInput = {
    update: XOR<UserUpdateWithoutAiChatsInput, UserUncheckedUpdateWithoutAiChatsInput>
    create: XOR<UserCreateWithoutAiChatsInput, UserUncheckedCreateWithoutAiChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiChatsInput, UserUncheckedUpdateWithoutAiChatsInput>
  }

  export type UserUpdateWithoutAiChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneWithoutUsersNestedInput
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
    points?: UserPointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAiChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    points?: UserPointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyProjectInput = {
    id?: string
    telegramId: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    lastActivityAt?: Date | string | null
    currentStreak?: number
    maxStreak?: number
  }

  export type LessonCreateManyProjectInput = {
    id?: string
    code: string
    title: string
    description?: string | null
    order: number
    isPublished?: boolean
    aiPrompt?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
    points?: UserPointUpdateManyWithoutUserNestedInput
    aiChats?: AIChatTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    points?: UserPointUncheckedUpdateManyWithoutUserNestedInput
    aiChats?: AIChatTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentStreak?: IntFieldUpdateOperationsInput | number
    maxStreak?: IntFieldUpdateOperationsInput | number
  }

  export type LessonUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: LessonBlockUpdateManyWithoutLessonNestedInput
    progress?: LessonProgressUpdateManyWithoutLessonNestedInput
    tests?: TestUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blocks?: LessonBlockUncheckedUpdateManyWithoutLessonNestedInput
    progress?: LessonProgressUncheckedUpdateManyWithoutLessonNestedInput
    tests?: TestUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressCreateManyUserInput = {
    id?: string
    lessonId: string
    status?: $Enums.ProgressStatus
    score?: number | null
    startedAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPointCreateManyUserInput = {
    id?: string
    amount: number
    reason: string
    sourceId?: string | null
    createdAt?: Date | string
  }

  export type AIChatTransactionCreateManyUserInput = {
    id?: string
    projectId: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    costEstimate?: number | null
    model: string
    createdAt?: Date | string
  }

  export type LessonProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutProgressNestedInput
  }

  export type LessonProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPointUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPointUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPointUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIChatTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableFloatFieldUpdateOperationsInput | number | null
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIChatTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableFloatFieldUpdateOperationsInput | number | null
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIChatTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    costEstimate?: NullableFloatFieldUpdateOperationsInput | number | null
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonBlockCreateManyLessonInput = {
    id?: string
    type: $Enums.LessonBlockType
    order: number
    textContent?: string | null
    mediaUrl?: string | null
    telegramFileId?: string | null
    mimeType?: string | null
    caption?: string | null
    createdAt?: Date | string
  }

  export type LessonProgressCreateManyLessonInput = {
    id?: string
    userId: string
    status?: $Enums.ProgressStatus
    score?: number | null
    startedAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCreateManyLessonInput = {
    id?: string
    title: string
    description?: string | null
    passingScore?: number
    createdAt?: Date | string
  }

  export type LessonBlockUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLessonBlockTypeFieldUpdateOperationsInput | $Enums.LessonBlockType
    order?: IntFieldUpdateOperationsInput | number
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramFileId?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonBlockUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLessonBlockTypeFieldUpdateOperationsInput | $Enums.LessonBlockType
    order?: IntFieldUpdateOperationsInput | number
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramFileId?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonBlockUncheckedUpdateManyWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLessonBlockTypeFieldUpdateOperationsInput | $Enums.LessonBlockType
    order?: IntFieldUpdateOperationsInput | number
    textContent?: NullableStringFieldUpdateOperationsInput | string | null
    mediaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramFileId?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
  }

  export type LessonProgressUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUncheckedUpdateManyWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumProgressStatusFieldUpdateOperationsInput | $Enums.ProgressStatus
    score?: NullableIntFieldUpdateOperationsInput | number | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateManyWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    passingScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyTestInput = {
    id?: string
    text: string
    order: number
    points?: number
    createdAt?: Date | string
  }

  export type QuestionUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerCreateManyQuestionInput = {
    id?: string
    text: string
    isCorrect?: boolean
    createdAt?: Date | string
  }

  export type AnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
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