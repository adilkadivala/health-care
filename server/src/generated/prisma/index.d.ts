
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Receptionist
 * 
 */
export type Receptionist = $Result.DefaultSelection<Prisma.$ReceptionistPayload>
/**
 * Model Pharmacist
 * 
 */
export type Pharmacist = $Result.DefaultSelection<Prisma.$PharmacistPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model MedicalRecord
 * 
 */
export type MedicalRecord = $Result.DefaultSelection<Prisma.$MedicalRecordPayload>
/**
 * Model Prescription
 * 
 */
export type Prescription = $Result.DefaultSelection<Prisma.$PrescriptionPayload>
/**
 * Model PrescriptionItem
 * 
 */
export type PrescriptionItem = $Result.DefaultSelection<Prisma.$PrescriptionItemPayload>
/**
 * Model Medication
 * 
 */
export type Medication = $Result.DefaultSelection<Prisma.$MedicationPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model WalkInQueue
 * 
 */
export type WalkInQueue = $Result.DefaultSelection<Prisma.$WalkInQueuePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  PATIENT: 'PATIENT',
  DOCTOR: 'DOCTOR',
  ADMIN: 'ADMIN',
  RECEPTIONIST: 'RECEPTIONIST',
  PHARMACIST: 'PHARMACIST'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AppointmentStatus: {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const PrescriptionStatus: {
  PENDING: 'PENDING',
  DISPENSED: 'DISPENSED',
  CANCELLED: 'CANCELLED'
};

export type PrescriptionStatus = (typeof PrescriptionStatus)[keyof typeof PrescriptionStatus]


export const TransactionStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type PrescriptionStatus = $Enums.PrescriptionStatus

export const PrescriptionStatus: typeof $Enums.PrescriptionStatus

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receptionist`: Exposes CRUD operations for the **Receptionist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receptionists
    * const receptionists = await prisma.receptionist.findMany()
    * ```
    */
  get receptionist(): Prisma.ReceptionistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pharmacist`: Exposes CRUD operations for the **Pharmacist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pharmacists
    * const pharmacists = await prisma.pharmacist.findMany()
    * ```
    */
  get pharmacist(): Prisma.PharmacistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalRecord`: Exposes CRUD operations for the **MedicalRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalRecords
    * const medicalRecords = await prisma.medicalRecord.findMany()
    * ```
    */
  get medicalRecord(): Prisma.MedicalRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescription`: Exposes CRUD operations for the **Prescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prescriptions
    * const prescriptions = await prisma.prescription.findMany()
    * ```
    */
  get prescription(): Prisma.PrescriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescriptionItem`: Exposes CRUD operations for the **PrescriptionItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrescriptionItems
    * const prescriptionItems = await prisma.prescriptionItem.findMany()
    * ```
    */
  get prescriptionItem(): Prisma.PrescriptionItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medication`: Exposes CRUD operations for the **Medication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medications
    * const medications = await prisma.medication.findMany()
    * ```
    */
  get medication(): Prisma.MedicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.walkInQueue`: Exposes CRUD operations for the **WalkInQueue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalkInQueues
    * const walkInQueues = await prisma.walkInQueue.findMany()
    * ```
    */
  get walkInQueue(): Prisma.WalkInQueueDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
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
    User: 'User',
    Patient: 'Patient',
    Doctor: 'Doctor',
    Admin: 'Admin',
    Receptionist: 'Receptionist',
    Pharmacist: 'Pharmacist',
    Appointment: 'Appointment',
    MedicalRecord: 'MedicalRecord',
    Prescription: 'Prescription',
    PrescriptionItem: 'PrescriptionItem',
    Medication: 'Medication',
    Transaction: 'Transaction',
    WalkInQueue: 'WalkInQueue'
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
      modelProps: "user" | "patient" | "doctor" | "admin" | "receptionist" | "pharmacist" | "appointment" | "medicalRecord" | "prescription" | "prescriptionItem" | "medication" | "transaction" | "walkInQueue"
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
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Receptionist: {
        payload: Prisma.$ReceptionistPayload<ExtArgs>
        fields: Prisma.ReceptionistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceptionistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceptionistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceptionistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceptionistPayload>
          }
          findFirst: {
            args: Prisma.ReceptionistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceptionistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceptionistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceptionistPayload>
          }
          findMany: {
            args: Prisma.ReceptionistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceptionistPayload>[]
          }
          create: {
            args: Prisma.ReceptionistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceptionistPayload>
          }
          createMany: {
            args: Prisma.ReceptionistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceptionistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceptionistPayload>[]
          }
          delete: {
            args: Prisma.ReceptionistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceptionistPayload>
          }
          update: {
            args: Prisma.ReceptionistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceptionistPayload>
          }
          deleteMany: {
            args: Prisma.ReceptionistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceptionistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceptionistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceptionistPayload>[]
          }
          upsert: {
            args: Prisma.ReceptionistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceptionistPayload>
          }
          aggregate: {
            args: Prisma.ReceptionistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceptionist>
          }
          groupBy: {
            args: Prisma.ReceptionistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceptionistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceptionistCountArgs<ExtArgs>
            result: $Utils.Optional<ReceptionistCountAggregateOutputType> | number
          }
        }
      }
      Pharmacist: {
        payload: Prisma.$PharmacistPayload<ExtArgs>
        fields: Prisma.PharmacistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PharmacistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PharmacistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacistPayload>
          }
          findFirst: {
            args: Prisma.PharmacistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PharmacistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacistPayload>
          }
          findMany: {
            args: Prisma.PharmacistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacistPayload>[]
          }
          create: {
            args: Prisma.PharmacistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacistPayload>
          }
          createMany: {
            args: Prisma.PharmacistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PharmacistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacistPayload>[]
          }
          delete: {
            args: Prisma.PharmacistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacistPayload>
          }
          update: {
            args: Prisma.PharmacistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacistPayload>
          }
          deleteMany: {
            args: Prisma.PharmacistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PharmacistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PharmacistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacistPayload>[]
          }
          upsert: {
            args: Prisma.PharmacistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacistPayload>
          }
          aggregate: {
            args: Prisma.PharmacistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePharmacist>
          }
          groupBy: {
            args: Prisma.PharmacistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PharmacistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PharmacistCountArgs<ExtArgs>
            result: $Utils.Optional<PharmacistCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      MedicalRecord: {
        payload: Prisma.$MedicalRecordPayload<ExtArgs>
        fields: Prisma.MedicalRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          findFirst: {
            args: Prisma.MedicalRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          findMany: {
            args: Prisma.MedicalRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          create: {
            args: Prisma.MedicalRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          createMany: {
            args: Prisma.MedicalRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          delete: {
            args: Prisma.MedicalRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          update: {
            args: Prisma.MedicalRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          deleteMany: {
            args: Prisma.MedicalRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>[]
          }
          upsert: {
            args: Prisma.MedicalRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalRecordPayload>
          }
          aggregate: {
            args: Prisma.MedicalRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalRecord>
          }
          groupBy: {
            args: Prisma.MedicalRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalRecordCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalRecordCountAggregateOutputType> | number
          }
        }
      }
      Prescription: {
        payload: Prisma.$PrescriptionPayload<ExtArgs>
        fields: Prisma.PrescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findFirst: {
            args: Prisma.PrescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findMany: {
            args: Prisma.PrescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          create: {
            args: Prisma.PrescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          createMany: {
            args: Prisma.PrescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          delete: {
            args: Prisma.PrescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          update: {
            args: Prisma.PrescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrescriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          upsert: {
            args: Prisma.PrescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescription>
          }
          groupBy: {
            args: Prisma.PrescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionCountAggregateOutputType> | number
          }
        }
      }
      PrescriptionItem: {
        payload: Prisma.$PrescriptionItemPayload<ExtArgs>
        fields: Prisma.PrescriptionItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>
          }
          findFirst: {
            args: Prisma.PrescriptionItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>
          }
          findMany: {
            args: Prisma.PrescriptionItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>[]
          }
          create: {
            args: Prisma.PrescriptionItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>
          }
          createMany: {
            args: Prisma.PrescriptionItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrescriptionItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>[]
          }
          delete: {
            args: Prisma.PrescriptionItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>
          }
          update: {
            args: Prisma.PrescriptionItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrescriptionItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>[]
          }
          upsert: {
            args: Prisma.PrescriptionItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionItemPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescriptionItem>
          }
          groupBy: {
            args: Prisma.PrescriptionItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionItemCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionItemCountAggregateOutputType> | number
          }
        }
      }
      Medication: {
        payload: Prisma.$MedicationPayload<ExtArgs>
        fields: Prisma.MedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findFirst: {
            args: Prisma.MedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findMany: {
            args: Prisma.MedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          create: {
            args: Prisma.MedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          createMany: {
            args: Prisma.MedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          delete: {
            args: Prisma.MedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          update: {
            args: Prisma.MedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          deleteMany: {
            args: Prisma.MedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          upsert: {
            args: Prisma.MedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          aggregate: {
            args: Prisma.MedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedication>
          }
          groupBy: {
            args: Prisma.MedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      WalkInQueue: {
        payload: Prisma.$WalkInQueuePayload<ExtArgs>
        fields: Prisma.WalkInQueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalkInQueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkInQueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalkInQueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkInQueuePayload>
          }
          findFirst: {
            args: Prisma.WalkInQueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkInQueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalkInQueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkInQueuePayload>
          }
          findMany: {
            args: Prisma.WalkInQueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkInQueuePayload>[]
          }
          create: {
            args: Prisma.WalkInQueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkInQueuePayload>
          }
          createMany: {
            args: Prisma.WalkInQueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalkInQueueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkInQueuePayload>[]
          }
          delete: {
            args: Prisma.WalkInQueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkInQueuePayload>
          }
          update: {
            args: Prisma.WalkInQueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkInQueuePayload>
          }
          deleteMany: {
            args: Prisma.WalkInQueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalkInQueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalkInQueueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkInQueuePayload>[]
          }
          upsert: {
            args: Prisma.WalkInQueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalkInQueuePayload>
          }
          aggregate: {
            args: Prisma.WalkInQueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalkInQueue>
          }
          groupBy: {
            args: Prisma.WalkInQueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalkInQueueGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalkInQueueCountArgs<ExtArgs>
            result: $Utils.Optional<WalkInQueueCountAggregateOutputType> | number
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
    user?: UserOmit
    patient?: PatientOmit
    doctor?: DoctorOmit
    admin?: AdminOmit
    receptionist?: ReceptionistOmit
    pharmacist?: PharmacistOmit
    appointment?: AppointmentOmit
    medicalRecord?: MedicalRecordOmit
    prescription?: PrescriptionOmit
    prescriptionItem?: PrescriptionItemOmit
    medication?: MedicationOmit
    transaction?: TransactionOmit
    walkInQueue?: WalkInQueueOmit
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
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    appointments: number
    medicalRecords: number
    prescriptions: number
    transactions: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | PatientCountOutputTypeCountAppointmentsArgs
    medicalRecords?: boolean | PatientCountOutputTypeCountMedicalRecordsArgs
    prescriptions?: boolean | PatientCountOutputTypeCountPrescriptionsArgs
    transactions?: boolean | PatientCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountMedicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    appointments: number
    medicalRecords: number
    prescriptions: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | DoctorCountOutputTypeCountAppointmentsArgs
    medicalRecords?: boolean | DoctorCountOutputTypeCountMedicalRecordsArgs
    prescriptions?: boolean | DoctorCountOutputTypeCountPrescriptionsArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountMedicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Count Type ReceptionistCountOutputType
   */

  export type ReceptionistCountOutputType = {
    handledTransactions: number
  }

  export type ReceptionistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    handledTransactions?: boolean | ReceptionistCountOutputTypeCountHandledTransactionsArgs
  }

  // Custom InputTypes
  /**
   * ReceptionistCountOutputType without action
   */
  export type ReceptionistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReceptionistCountOutputType
     */
    select?: ReceptionistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReceptionistCountOutputType without action
   */
  export type ReceptionistCountOutputTypeCountHandledTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type PharmacistCountOutputType
   */

  export type PharmacistCountOutputType = {
    dispensedPrescriptions: number
  }

  export type PharmacistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dispensedPrescriptions?: boolean | PharmacistCountOutputTypeCountDispensedPrescriptionsArgs
  }

  // Custom InputTypes
  /**
   * PharmacistCountOutputType without action
   */
  export type PharmacistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacistCountOutputType
     */
    select?: PharmacistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PharmacistCountOutputType without action
   */
  export type PharmacistCountOutputTypeCountDispensedPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Count Type MedicalRecordCountOutputType
   */

  export type MedicalRecordCountOutputType = {
    prescriptions: number
  }

  export type MedicalRecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptions?: boolean | MedicalRecordCountOutputTypeCountPrescriptionsArgs
  }

  // Custom InputTypes
  /**
   * MedicalRecordCountOutputType without action
   */
  export type MedicalRecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecordCountOutputType
     */
    select?: MedicalRecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicalRecordCountOutputType without action
   */
  export type MedicalRecordCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Count Type PrescriptionCountOutputType
   */

  export type PrescriptionCountOutputType = {
    items: number
  }

  export type PrescriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PrescriptionCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PrescriptionCountOutputType without action
   */
  export type PrescriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionCountOutputType
     */
    select?: PrescriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrescriptionCountOutputType without action
   */
  export type PrescriptionCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionItemWhereInput
  }


  /**
   * Count Type MedicationCountOutputType
   */

  export type MedicationCountOutputType = {
    prescriptionItems: number
  }

  export type MedicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptionItems?: boolean | MedicationCountOutputTypeCountPrescriptionItemsArgs
  }

  // Custom InputTypes
  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationCountOutputType
     */
    select?: MedicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeCountPrescriptionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionItemWhereInput
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
    email: string | null
    password: string | null
    role: $Enums.Role | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    firstName: number
    lastName: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    firstName?: true
    lastName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    firstName?: true
    lastName?: true
    phone?: true
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
    email: string
    password: string
    role: $Enums.Role
    firstName: string
    lastName: string
    phone: string | null
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
    email?: boolean
    password?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patientProfile?: boolean | User$patientProfileArgs<ExtArgs>
    doctorProfile?: boolean | User$doctorProfileArgs<ExtArgs>
    adminProfile?: boolean | User$adminProfileArgs<ExtArgs>
    receptionistProfile?: boolean | User$receptionistProfileArgs<ExtArgs>
    pharmacistProfile?: boolean | User$pharmacistProfileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "firstName" | "lastName" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patientProfile?: boolean | User$patientProfileArgs<ExtArgs>
    doctorProfile?: boolean | User$doctorProfileArgs<ExtArgs>
    adminProfile?: boolean | User$adminProfileArgs<ExtArgs>
    receptionistProfile?: boolean | User$receptionistProfileArgs<ExtArgs>
    pharmacistProfile?: boolean | User$pharmacistProfileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      patientProfile: Prisma.$PatientPayload<ExtArgs> | null
      doctorProfile: Prisma.$DoctorPayload<ExtArgs> | null
      adminProfile: Prisma.$AdminPayload<ExtArgs> | null
      receptionistProfile: Prisma.$ReceptionistPayload<ExtArgs> | null
      pharmacistProfile: Prisma.$PharmacistPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
      firstName: string
      lastName: string
      phone: string | null
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
    patientProfile<T extends User$patientProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$patientProfileArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctorProfile<T extends User$doctorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorProfileArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    adminProfile<T extends User$adminProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$adminProfileArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    receptionistProfile<T extends User$receptionistProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$receptionistProfileArgs<ExtArgs>>): Prisma__ReceptionistClient<$Result.GetResult<Prisma.$ReceptionistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pharmacistProfile<T extends User$pharmacistProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$pharmacistProfileArgs<ExtArgs>>): Prisma__PharmacistClient<$Result.GetResult<Prisma.$PharmacistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.patientProfile
   */
  export type User$patientProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * User.doctorProfile
   */
  export type User$doctorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
  }

  /**
   * User.adminProfile
   */
  export type User$adminProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User.receptionistProfile
   */
  export type User$receptionistProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receptionist
     */
    select?: ReceptionistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receptionist
     */
    omit?: ReceptionistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceptionistInclude<ExtArgs> | null
    where?: ReceptionistWhereInput
  }

  /**
   * User.pharmacistProfile
   */
  export type User$pharmacistProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacist
     */
    select?: PharmacistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacist
     */
    omit?: PharmacistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacistInclude<ExtArgs> | null
    where?: PharmacistWhereInput
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
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    userId: string | null
    dateOfBirth: Date | null
    bloodGroup: string | null
    address: string | null
    medicalHistory: string | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    dateOfBirth: Date | null
    bloodGroup: string | null
    address: string | null
    medicalHistory: string | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    userId: number
    dateOfBirth: number
    bloodGroup: number
    allergies: number
    address: number
    medicalHistory: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    userId?: true
    dateOfBirth?: true
    bloodGroup?: true
    address?: true
    medicalHistory?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    userId?: true
    dateOfBirth?: true
    bloodGroup?: true
    address?: true
    medicalHistory?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    userId?: true
    dateOfBirth?: true
    bloodGroup?: true
    allergies?: true
    address?: true
    medicalHistory?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    userId: string
    dateOfBirth: Date
    bloodGroup: string | null
    allergies: string[]
    address: string | null
    medicalHistory: string | null
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    bloodGroup?: boolean
    allergies?: boolean
    address?: boolean
    medicalHistory?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    medicalRecords?: boolean | Patient$medicalRecordsArgs<ExtArgs>
    prescriptions?: boolean | Patient$prescriptionsArgs<ExtArgs>
    transactions?: boolean | Patient$transactionsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    bloodGroup?: boolean
    allergies?: boolean
    address?: boolean
    medicalHistory?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    bloodGroup?: boolean
    allergies?: boolean
    address?: boolean
    medicalHistory?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    userId?: boolean
    dateOfBirth?: boolean
    bloodGroup?: boolean
    allergies?: boolean
    address?: boolean
    medicalHistory?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "dateOfBirth" | "bloodGroup" | "allergies" | "address" | "medicalHistory", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | Patient$appointmentsArgs<ExtArgs>
    medicalRecords?: boolean | Patient$medicalRecordsArgs<ExtArgs>
    prescriptions?: boolean | Patient$prescriptionsArgs<ExtArgs>
    transactions?: boolean | Patient$transactionsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      medicalRecords: Prisma.$MedicalRecordPayload<ExtArgs>[]
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      dateOfBirth: Date
      bloodGroup: string | null
      allergies: string[]
      address: string | null
      medicalHistory: string | null
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends Patient$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicalRecords<T extends Patient$medicalRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$medicalRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptions<T extends Patient$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Patient$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly userId: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly bloodGroup: FieldRef<"Patient", 'String'>
    readonly allergies: FieldRef<"Patient", 'String[]'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly medicalHistory: FieldRef<"Patient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.appointments
   */
  export type Patient$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Patient.medicalRecords
   */
  export type Patient$medicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    cursor?: MedicalRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * Patient.prescriptions
   */
  export type Patient$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Patient.transactions
   */
  export type Patient$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    userId: string | null
    specialization: string | null
    licenseNumber: string | null
    department: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    specialization: string | null
    licenseNumber: string | null
    department: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    userId: number
    specialization: number
    licenseNumber: number
    department: number
    availability: number
    _all: number
  }


  export type DoctorMinAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    licenseNumber?: true
    department?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    licenseNumber?: true
    department?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    userId?: true
    specialization?: true
    licenseNumber?: true
    department?: true
    availability?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: string
    userId: string
    specialization: string
    licenseNumber: string
    department: string
    availability: JsonValue | null
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    licenseNumber?: boolean
    department?: boolean
    availability?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | Doctor$appointmentsArgs<ExtArgs>
    medicalRecords?: boolean | Doctor$medicalRecordsArgs<ExtArgs>
    prescriptions?: boolean | Doctor$prescriptionsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    licenseNumber?: boolean
    department?: boolean
    availability?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specialization?: boolean
    licenseNumber?: boolean
    department?: boolean
    availability?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    userId?: boolean
    specialization?: boolean
    licenseNumber?: boolean
    department?: boolean
    availability?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "specialization" | "licenseNumber" | "department" | "availability", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    appointments?: boolean | Doctor$appointmentsArgs<ExtArgs>
    medicalRecords?: boolean | Doctor$medicalRecordsArgs<ExtArgs>
    prescriptions?: boolean | Doctor$prescriptionsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      medicalRecords: Prisma.$MedicalRecordPayload<ExtArgs>[]
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      specialization: string
      licenseNumber: string
      department: string
      availability: Prisma.JsonValue | null
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
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
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointments<T extends Doctor$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicalRecords<T extends Doctor$medicalRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$medicalRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptions<T extends Doctor$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'String'>
    readonly userId: FieldRef<"Doctor", 'String'>
    readonly specialization: FieldRef<"Doctor", 'String'>
    readonly licenseNumber: FieldRef<"Doctor", 'String'>
    readonly department: FieldRef<"Doctor", 'String'>
    readonly availability: FieldRef<"Doctor", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.appointments
   */
  export type Doctor$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Doctor.medicalRecords
   */
  export type Doctor$medicalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    cursor?: MedicalRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * Doctor.prescriptions
   */
  export type Doctor$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    accessLevel: number | null
  }

  export type AdminSumAggregateOutputType = {
    accessLevel: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    userId: string | null
    accessLevel: number | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    accessLevel: number | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    userId: number
    accessLevel: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    accessLevel?: true
  }

  export type AdminSumAggregateInputType = {
    accessLevel?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    userId?: true
    accessLevel?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    userId?: true
    accessLevel?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    userId?: true
    accessLevel?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    userId: string
    accessLevel: number
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accessLevel?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accessLevel?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accessLevel?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    userId?: boolean
    accessLevel?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "accessLevel", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      accessLevel: number
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly userId: FieldRef<"Admin", 'String'>
    readonly accessLevel: FieldRef<"Admin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Receptionist
   */

  export type AggregateReceptionist = {
    _count: ReceptionistCountAggregateOutputType | null
    _min: ReceptionistMinAggregateOutputType | null
    _max: ReceptionistMaxAggregateOutputType | null
  }

  export type ReceptionistMinAggregateOutputType = {
    id: string | null
    userId: string | null
    shiftHours: string | null
    deskNumber: string | null
  }

  export type ReceptionistMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    shiftHours: string | null
    deskNumber: string | null
  }

  export type ReceptionistCountAggregateOutputType = {
    id: number
    userId: number
    shiftHours: number
    deskNumber: number
    _all: number
  }


  export type ReceptionistMinAggregateInputType = {
    id?: true
    userId?: true
    shiftHours?: true
    deskNumber?: true
  }

  export type ReceptionistMaxAggregateInputType = {
    id?: true
    userId?: true
    shiftHours?: true
    deskNumber?: true
  }

  export type ReceptionistCountAggregateInputType = {
    id?: true
    userId?: true
    shiftHours?: true
    deskNumber?: true
    _all?: true
  }

  export type ReceptionistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receptionist to aggregate.
     */
    where?: ReceptionistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receptionists to fetch.
     */
    orderBy?: ReceptionistOrderByWithRelationInput | ReceptionistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceptionistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receptionists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receptionists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Receptionists
    **/
    _count?: true | ReceptionistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceptionistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceptionistMaxAggregateInputType
  }

  export type GetReceptionistAggregateType<T extends ReceptionistAggregateArgs> = {
        [P in keyof T & keyof AggregateReceptionist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceptionist[P]>
      : GetScalarType<T[P], AggregateReceptionist[P]>
  }




  export type ReceptionistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceptionistWhereInput
    orderBy?: ReceptionistOrderByWithAggregationInput | ReceptionistOrderByWithAggregationInput[]
    by: ReceptionistScalarFieldEnum[] | ReceptionistScalarFieldEnum
    having?: ReceptionistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceptionistCountAggregateInputType | true
    _min?: ReceptionistMinAggregateInputType
    _max?: ReceptionistMaxAggregateInputType
  }

  export type ReceptionistGroupByOutputType = {
    id: string
    userId: string
    shiftHours: string | null
    deskNumber: string | null
    _count: ReceptionistCountAggregateOutputType | null
    _min: ReceptionistMinAggregateOutputType | null
    _max: ReceptionistMaxAggregateOutputType | null
  }

  type GetReceptionistGroupByPayload<T extends ReceptionistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceptionistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceptionistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceptionistGroupByOutputType[P]>
            : GetScalarType<T[P], ReceptionistGroupByOutputType[P]>
        }
      >
    >


  export type ReceptionistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shiftHours?: boolean
    deskNumber?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    handledTransactions?: boolean | Receptionist$handledTransactionsArgs<ExtArgs>
    _count?: boolean | ReceptionistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receptionist"]>

  export type ReceptionistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shiftHours?: boolean
    deskNumber?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receptionist"]>

  export type ReceptionistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shiftHours?: boolean
    deskNumber?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receptionist"]>

  export type ReceptionistSelectScalar = {
    id?: boolean
    userId?: boolean
    shiftHours?: boolean
    deskNumber?: boolean
  }

  export type ReceptionistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "shiftHours" | "deskNumber", ExtArgs["result"]["receptionist"]>
  export type ReceptionistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    handledTransactions?: boolean | Receptionist$handledTransactionsArgs<ExtArgs>
    _count?: boolean | ReceptionistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReceptionistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReceptionistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReceptionistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Receptionist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      handledTransactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      shiftHours: string | null
      deskNumber: string | null
    }, ExtArgs["result"]["receptionist"]>
    composites: {}
  }

  type ReceptionistGetPayload<S extends boolean | null | undefined | ReceptionistDefaultArgs> = $Result.GetResult<Prisma.$ReceptionistPayload, S>

  type ReceptionistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceptionistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceptionistCountAggregateInputType | true
    }

  export interface ReceptionistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Receptionist'], meta: { name: 'Receptionist' } }
    /**
     * Find zero or one Receptionist that matches the filter.
     * @param {ReceptionistFindUniqueArgs} args - Arguments to find a Receptionist
     * @example
     * // Get one Receptionist
     * const receptionist = await prisma.receptionist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceptionistFindUniqueArgs>(args: SelectSubset<T, ReceptionistFindUniqueArgs<ExtArgs>>): Prisma__ReceptionistClient<$Result.GetResult<Prisma.$ReceptionistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Receptionist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceptionistFindUniqueOrThrowArgs} args - Arguments to find a Receptionist
     * @example
     * // Get one Receptionist
     * const receptionist = await prisma.receptionist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceptionistFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceptionistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceptionistClient<$Result.GetResult<Prisma.$ReceptionistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receptionist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceptionistFindFirstArgs} args - Arguments to find a Receptionist
     * @example
     * // Get one Receptionist
     * const receptionist = await prisma.receptionist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceptionistFindFirstArgs>(args?: SelectSubset<T, ReceptionistFindFirstArgs<ExtArgs>>): Prisma__ReceptionistClient<$Result.GetResult<Prisma.$ReceptionistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Receptionist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceptionistFindFirstOrThrowArgs} args - Arguments to find a Receptionist
     * @example
     * // Get one Receptionist
     * const receptionist = await prisma.receptionist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceptionistFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceptionistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceptionistClient<$Result.GetResult<Prisma.$ReceptionistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Receptionists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceptionistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receptionists
     * const receptionists = await prisma.receptionist.findMany()
     * 
     * // Get first 10 Receptionists
     * const receptionists = await prisma.receptionist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receptionistWithIdOnly = await prisma.receptionist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceptionistFindManyArgs>(args?: SelectSubset<T, ReceptionistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceptionistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Receptionist.
     * @param {ReceptionistCreateArgs} args - Arguments to create a Receptionist.
     * @example
     * // Create one Receptionist
     * const Receptionist = await prisma.receptionist.create({
     *   data: {
     *     // ... data to create a Receptionist
     *   }
     * })
     * 
     */
    create<T extends ReceptionistCreateArgs>(args: SelectSubset<T, ReceptionistCreateArgs<ExtArgs>>): Prisma__ReceptionistClient<$Result.GetResult<Prisma.$ReceptionistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Receptionists.
     * @param {ReceptionistCreateManyArgs} args - Arguments to create many Receptionists.
     * @example
     * // Create many Receptionists
     * const receptionist = await prisma.receptionist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceptionistCreateManyArgs>(args?: SelectSubset<T, ReceptionistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Receptionists and returns the data saved in the database.
     * @param {ReceptionistCreateManyAndReturnArgs} args - Arguments to create many Receptionists.
     * @example
     * // Create many Receptionists
     * const receptionist = await prisma.receptionist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Receptionists and only return the `id`
     * const receptionistWithIdOnly = await prisma.receptionist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceptionistCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceptionistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceptionistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Receptionist.
     * @param {ReceptionistDeleteArgs} args - Arguments to delete one Receptionist.
     * @example
     * // Delete one Receptionist
     * const Receptionist = await prisma.receptionist.delete({
     *   where: {
     *     // ... filter to delete one Receptionist
     *   }
     * })
     * 
     */
    delete<T extends ReceptionistDeleteArgs>(args: SelectSubset<T, ReceptionistDeleteArgs<ExtArgs>>): Prisma__ReceptionistClient<$Result.GetResult<Prisma.$ReceptionistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Receptionist.
     * @param {ReceptionistUpdateArgs} args - Arguments to update one Receptionist.
     * @example
     * // Update one Receptionist
     * const receptionist = await prisma.receptionist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceptionistUpdateArgs>(args: SelectSubset<T, ReceptionistUpdateArgs<ExtArgs>>): Prisma__ReceptionistClient<$Result.GetResult<Prisma.$ReceptionistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Receptionists.
     * @param {ReceptionistDeleteManyArgs} args - Arguments to filter Receptionists to delete.
     * @example
     * // Delete a few Receptionists
     * const { count } = await prisma.receptionist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceptionistDeleteManyArgs>(args?: SelectSubset<T, ReceptionistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receptionists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceptionistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receptionists
     * const receptionist = await prisma.receptionist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceptionistUpdateManyArgs>(args: SelectSubset<T, ReceptionistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receptionists and returns the data updated in the database.
     * @param {ReceptionistUpdateManyAndReturnArgs} args - Arguments to update many Receptionists.
     * @example
     * // Update many Receptionists
     * const receptionist = await prisma.receptionist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Receptionists and only return the `id`
     * const receptionistWithIdOnly = await prisma.receptionist.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReceptionistUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceptionistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceptionistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Receptionist.
     * @param {ReceptionistUpsertArgs} args - Arguments to update or create a Receptionist.
     * @example
     * // Update or create a Receptionist
     * const receptionist = await prisma.receptionist.upsert({
     *   create: {
     *     // ... data to create a Receptionist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receptionist we want to update
     *   }
     * })
     */
    upsert<T extends ReceptionistUpsertArgs>(args: SelectSubset<T, ReceptionistUpsertArgs<ExtArgs>>): Prisma__ReceptionistClient<$Result.GetResult<Prisma.$ReceptionistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Receptionists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceptionistCountArgs} args - Arguments to filter Receptionists to count.
     * @example
     * // Count the number of Receptionists
     * const count = await prisma.receptionist.count({
     *   where: {
     *     // ... the filter for the Receptionists we want to count
     *   }
     * })
    **/
    count<T extends ReceptionistCountArgs>(
      args?: Subset<T, ReceptionistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceptionistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receptionist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceptionistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReceptionistAggregateArgs>(args: Subset<T, ReceptionistAggregateArgs>): Prisma.PrismaPromise<GetReceptionistAggregateType<T>>

    /**
     * Group by Receptionist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceptionistGroupByArgs} args - Group by arguments.
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
      T extends ReceptionistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceptionistGroupByArgs['orderBy'] }
        : { orderBy?: ReceptionistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReceptionistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceptionistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Receptionist model
   */
  readonly fields: ReceptionistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Receptionist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceptionistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    handledTransactions<T extends Receptionist$handledTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Receptionist$handledTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Receptionist model
   */
  interface ReceptionistFieldRefs {
    readonly id: FieldRef<"Receptionist", 'String'>
    readonly userId: FieldRef<"Receptionist", 'String'>
    readonly shiftHours: FieldRef<"Receptionist", 'String'>
    readonly deskNumber: FieldRef<"Receptionist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Receptionist findUnique
   */
  export type ReceptionistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receptionist
     */
    select?: ReceptionistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receptionist
     */
    omit?: ReceptionistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceptionistInclude<ExtArgs> | null
    /**
     * Filter, which Receptionist to fetch.
     */
    where: ReceptionistWhereUniqueInput
  }

  /**
   * Receptionist findUniqueOrThrow
   */
  export type ReceptionistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receptionist
     */
    select?: ReceptionistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receptionist
     */
    omit?: ReceptionistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceptionistInclude<ExtArgs> | null
    /**
     * Filter, which Receptionist to fetch.
     */
    where: ReceptionistWhereUniqueInput
  }

  /**
   * Receptionist findFirst
   */
  export type ReceptionistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receptionist
     */
    select?: ReceptionistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receptionist
     */
    omit?: ReceptionistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceptionistInclude<ExtArgs> | null
    /**
     * Filter, which Receptionist to fetch.
     */
    where?: ReceptionistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receptionists to fetch.
     */
    orderBy?: ReceptionistOrderByWithRelationInput | ReceptionistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receptionists.
     */
    cursor?: ReceptionistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receptionists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receptionists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receptionists.
     */
    distinct?: ReceptionistScalarFieldEnum | ReceptionistScalarFieldEnum[]
  }

  /**
   * Receptionist findFirstOrThrow
   */
  export type ReceptionistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receptionist
     */
    select?: ReceptionistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receptionist
     */
    omit?: ReceptionistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceptionistInclude<ExtArgs> | null
    /**
     * Filter, which Receptionist to fetch.
     */
    where?: ReceptionistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receptionists to fetch.
     */
    orderBy?: ReceptionistOrderByWithRelationInput | ReceptionistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receptionists.
     */
    cursor?: ReceptionistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receptionists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receptionists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receptionists.
     */
    distinct?: ReceptionistScalarFieldEnum | ReceptionistScalarFieldEnum[]
  }

  /**
   * Receptionist findMany
   */
  export type ReceptionistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receptionist
     */
    select?: ReceptionistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receptionist
     */
    omit?: ReceptionistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceptionistInclude<ExtArgs> | null
    /**
     * Filter, which Receptionists to fetch.
     */
    where?: ReceptionistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receptionists to fetch.
     */
    orderBy?: ReceptionistOrderByWithRelationInput | ReceptionistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Receptionists.
     */
    cursor?: ReceptionistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receptionists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receptionists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receptionists.
     */
    distinct?: ReceptionistScalarFieldEnum | ReceptionistScalarFieldEnum[]
  }

  /**
   * Receptionist create
   */
  export type ReceptionistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receptionist
     */
    select?: ReceptionistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receptionist
     */
    omit?: ReceptionistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceptionistInclude<ExtArgs> | null
    /**
     * The data needed to create a Receptionist.
     */
    data: XOR<ReceptionistCreateInput, ReceptionistUncheckedCreateInput>
  }

  /**
   * Receptionist createMany
   */
  export type ReceptionistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Receptionists.
     */
    data: ReceptionistCreateManyInput | ReceptionistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Receptionist createManyAndReturn
   */
  export type ReceptionistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receptionist
     */
    select?: ReceptionistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receptionist
     */
    omit?: ReceptionistOmit<ExtArgs> | null
    /**
     * The data used to create many Receptionists.
     */
    data: ReceptionistCreateManyInput | ReceptionistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceptionistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Receptionist update
   */
  export type ReceptionistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receptionist
     */
    select?: ReceptionistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receptionist
     */
    omit?: ReceptionistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceptionistInclude<ExtArgs> | null
    /**
     * The data needed to update a Receptionist.
     */
    data: XOR<ReceptionistUpdateInput, ReceptionistUncheckedUpdateInput>
    /**
     * Choose, which Receptionist to update.
     */
    where: ReceptionistWhereUniqueInput
  }

  /**
   * Receptionist updateMany
   */
  export type ReceptionistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Receptionists.
     */
    data: XOR<ReceptionistUpdateManyMutationInput, ReceptionistUncheckedUpdateManyInput>
    /**
     * Filter which Receptionists to update
     */
    where?: ReceptionistWhereInput
    /**
     * Limit how many Receptionists to update.
     */
    limit?: number
  }

  /**
   * Receptionist updateManyAndReturn
   */
  export type ReceptionistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receptionist
     */
    select?: ReceptionistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receptionist
     */
    omit?: ReceptionistOmit<ExtArgs> | null
    /**
     * The data used to update Receptionists.
     */
    data: XOR<ReceptionistUpdateManyMutationInput, ReceptionistUncheckedUpdateManyInput>
    /**
     * Filter which Receptionists to update
     */
    where?: ReceptionistWhereInput
    /**
     * Limit how many Receptionists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceptionistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Receptionist upsert
   */
  export type ReceptionistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receptionist
     */
    select?: ReceptionistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receptionist
     */
    omit?: ReceptionistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceptionistInclude<ExtArgs> | null
    /**
     * The filter to search for the Receptionist to update in case it exists.
     */
    where: ReceptionistWhereUniqueInput
    /**
     * In case the Receptionist found by the `where` argument doesn't exist, create a new Receptionist with this data.
     */
    create: XOR<ReceptionistCreateInput, ReceptionistUncheckedCreateInput>
    /**
     * In case the Receptionist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceptionistUpdateInput, ReceptionistUncheckedUpdateInput>
  }

  /**
   * Receptionist delete
   */
  export type ReceptionistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receptionist
     */
    select?: ReceptionistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receptionist
     */
    omit?: ReceptionistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceptionistInclude<ExtArgs> | null
    /**
     * Filter which Receptionist to delete.
     */
    where: ReceptionistWhereUniqueInput
  }

  /**
   * Receptionist deleteMany
   */
  export type ReceptionistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receptionists to delete
     */
    where?: ReceptionistWhereInput
    /**
     * Limit how many Receptionists to delete.
     */
    limit?: number
  }

  /**
   * Receptionist.handledTransactions
   */
  export type Receptionist$handledTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Receptionist without action
   */
  export type ReceptionistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receptionist
     */
    select?: ReceptionistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receptionist
     */
    omit?: ReceptionistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceptionistInclude<ExtArgs> | null
  }


  /**
   * Model Pharmacist
   */

  export type AggregatePharmacist = {
    _count: PharmacistCountAggregateOutputType | null
    _min: PharmacistMinAggregateOutputType | null
    _max: PharmacistMaxAggregateOutputType | null
  }

  export type PharmacistMinAggregateOutputType = {
    id: string | null
    userId: string | null
    licenseNumber: string | null
  }

  export type PharmacistMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    licenseNumber: string | null
  }

  export type PharmacistCountAggregateOutputType = {
    id: number
    userId: number
    licenseNumber: number
    _all: number
  }


  export type PharmacistMinAggregateInputType = {
    id?: true
    userId?: true
    licenseNumber?: true
  }

  export type PharmacistMaxAggregateInputType = {
    id?: true
    userId?: true
    licenseNumber?: true
  }

  export type PharmacistCountAggregateInputType = {
    id?: true
    userId?: true
    licenseNumber?: true
    _all?: true
  }

  export type PharmacistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacist to aggregate.
     */
    where?: PharmacistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacists to fetch.
     */
    orderBy?: PharmacistOrderByWithRelationInput | PharmacistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmacistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pharmacists
    **/
    _count?: true | PharmacistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmacistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmacistMaxAggregateInputType
  }

  export type GetPharmacistAggregateType<T extends PharmacistAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmacist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmacist[P]>
      : GetScalarType<T[P], AggregatePharmacist[P]>
  }




  export type PharmacistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacistWhereInput
    orderBy?: PharmacistOrderByWithAggregationInput | PharmacistOrderByWithAggregationInput[]
    by: PharmacistScalarFieldEnum[] | PharmacistScalarFieldEnum
    having?: PharmacistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmacistCountAggregateInputType | true
    _min?: PharmacistMinAggregateInputType
    _max?: PharmacistMaxAggregateInputType
  }

  export type PharmacistGroupByOutputType = {
    id: string
    userId: string
    licenseNumber: string
    _count: PharmacistCountAggregateOutputType | null
    _min: PharmacistMinAggregateOutputType | null
    _max: PharmacistMaxAggregateOutputType | null
  }

  type GetPharmacistGroupByPayload<T extends PharmacistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PharmacistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmacistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmacistGroupByOutputType[P]>
            : GetScalarType<T[P], PharmacistGroupByOutputType[P]>
        }
      >
    >


  export type PharmacistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    licenseNumber?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dispensedPrescriptions?: boolean | Pharmacist$dispensedPrescriptionsArgs<ExtArgs>
    _count?: boolean | PharmacistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacist"]>

  export type PharmacistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    licenseNumber?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacist"]>

  export type PharmacistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    licenseNumber?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacist"]>

  export type PharmacistSelectScalar = {
    id?: boolean
    userId?: boolean
    licenseNumber?: boolean
  }

  export type PharmacistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "licenseNumber", ExtArgs["result"]["pharmacist"]>
  export type PharmacistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dispensedPrescriptions?: boolean | Pharmacist$dispensedPrescriptionsArgs<ExtArgs>
    _count?: boolean | PharmacistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PharmacistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PharmacistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PharmacistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pharmacist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      dispensedPrescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      licenseNumber: string
    }, ExtArgs["result"]["pharmacist"]>
    composites: {}
  }

  type PharmacistGetPayload<S extends boolean | null | undefined | PharmacistDefaultArgs> = $Result.GetResult<Prisma.$PharmacistPayload, S>

  type PharmacistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PharmacistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PharmacistCountAggregateInputType | true
    }

  export interface PharmacistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pharmacist'], meta: { name: 'Pharmacist' } }
    /**
     * Find zero or one Pharmacist that matches the filter.
     * @param {PharmacistFindUniqueArgs} args - Arguments to find a Pharmacist
     * @example
     * // Get one Pharmacist
     * const pharmacist = await prisma.pharmacist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PharmacistFindUniqueArgs>(args: SelectSubset<T, PharmacistFindUniqueArgs<ExtArgs>>): Prisma__PharmacistClient<$Result.GetResult<Prisma.$PharmacistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pharmacist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PharmacistFindUniqueOrThrowArgs} args - Arguments to find a Pharmacist
     * @example
     * // Get one Pharmacist
     * const pharmacist = await prisma.pharmacist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PharmacistFindUniqueOrThrowArgs>(args: SelectSubset<T, PharmacistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PharmacistClient<$Result.GetResult<Prisma.$PharmacistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacistFindFirstArgs} args - Arguments to find a Pharmacist
     * @example
     * // Get one Pharmacist
     * const pharmacist = await prisma.pharmacist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PharmacistFindFirstArgs>(args?: SelectSubset<T, PharmacistFindFirstArgs<ExtArgs>>): Prisma__PharmacistClient<$Result.GetResult<Prisma.$PharmacistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacistFindFirstOrThrowArgs} args - Arguments to find a Pharmacist
     * @example
     * // Get one Pharmacist
     * const pharmacist = await prisma.pharmacist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PharmacistFindFirstOrThrowArgs>(args?: SelectSubset<T, PharmacistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PharmacistClient<$Result.GetResult<Prisma.$PharmacistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pharmacists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pharmacists
     * const pharmacists = await prisma.pharmacist.findMany()
     * 
     * // Get first 10 Pharmacists
     * const pharmacists = await prisma.pharmacist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pharmacistWithIdOnly = await prisma.pharmacist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PharmacistFindManyArgs>(args?: SelectSubset<T, PharmacistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pharmacist.
     * @param {PharmacistCreateArgs} args - Arguments to create a Pharmacist.
     * @example
     * // Create one Pharmacist
     * const Pharmacist = await prisma.pharmacist.create({
     *   data: {
     *     // ... data to create a Pharmacist
     *   }
     * })
     * 
     */
    create<T extends PharmacistCreateArgs>(args: SelectSubset<T, PharmacistCreateArgs<ExtArgs>>): Prisma__PharmacistClient<$Result.GetResult<Prisma.$PharmacistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pharmacists.
     * @param {PharmacistCreateManyArgs} args - Arguments to create many Pharmacists.
     * @example
     * // Create many Pharmacists
     * const pharmacist = await prisma.pharmacist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PharmacistCreateManyArgs>(args?: SelectSubset<T, PharmacistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pharmacists and returns the data saved in the database.
     * @param {PharmacistCreateManyAndReturnArgs} args - Arguments to create many Pharmacists.
     * @example
     * // Create many Pharmacists
     * const pharmacist = await prisma.pharmacist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pharmacists and only return the `id`
     * const pharmacistWithIdOnly = await prisma.pharmacist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PharmacistCreateManyAndReturnArgs>(args?: SelectSubset<T, PharmacistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pharmacist.
     * @param {PharmacistDeleteArgs} args - Arguments to delete one Pharmacist.
     * @example
     * // Delete one Pharmacist
     * const Pharmacist = await prisma.pharmacist.delete({
     *   where: {
     *     // ... filter to delete one Pharmacist
     *   }
     * })
     * 
     */
    delete<T extends PharmacistDeleteArgs>(args: SelectSubset<T, PharmacistDeleteArgs<ExtArgs>>): Prisma__PharmacistClient<$Result.GetResult<Prisma.$PharmacistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pharmacist.
     * @param {PharmacistUpdateArgs} args - Arguments to update one Pharmacist.
     * @example
     * // Update one Pharmacist
     * const pharmacist = await prisma.pharmacist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PharmacistUpdateArgs>(args: SelectSubset<T, PharmacistUpdateArgs<ExtArgs>>): Prisma__PharmacistClient<$Result.GetResult<Prisma.$PharmacistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pharmacists.
     * @param {PharmacistDeleteManyArgs} args - Arguments to filter Pharmacists to delete.
     * @example
     * // Delete a few Pharmacists
     * const { count } = await prisma.pharmacist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PharmacistDeleteManyArgs>(args?: SelectSubset<T, PharmacistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pharmacists
     * const pharmacist = await prisma.pharmacist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PharmacistUpdateManyArgs>(args: SelectSubset<T, PharmacistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacists and returns the data updated in the database.
     * @param {PharmacistUpdateManyAndReturnArgs} args - Arguments to update many Pharmacists.
     * @example
     * // Update many Pharmacists
     * const pharmacist = await prisma.pharmacist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pharmacists and only return the `id`
     * const pharmacistWithIdOnly = await prisma.pharmacist.updateManyAndReturn({
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
    updateManyAndReturn<T extends PharmacistUpdateManyAndReturnArgs>(args: SelectSubset<T, PharmacistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pharmacist.
     * @param {PharmacistUpsertArgs} args - Arguments to update or create a Pharmacist.
     * @example
     * // Update or create a Pharmacist
     * const pharmacist = await prisma.pharmacist.upsert({
     *   create: {
     *     // ... data to create a Pharmacist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pharmacist we want to update
     *   }
     * })
     */
    upsert<T extends PharmacistUpsertArgs>(args: SelectSubset<T, PharmacistUpsertArgs<ExtArgs>>): Prisma__PharmacistClient<$Result.GetResult<Prisma.$PharmacistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pharmacists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacistCountArgs} args - Arguments to filter Pharmacists to count.
     * @example
     * // Count the number of Pharmacists
     * const count = await prisma.pharmacist.count({
     *   where: {
     *     // ... the filter for the Pharmacists we want to count
     *   }
     * })
    **/
    count<T extends PharmacistCountArgs>(
      args?: Subset<T, PharmacistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmacistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pharmacist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PharmacistAggregateArgs>(args: Subset<T, PharmacistAggregateArgs>): Prisma.PrismaPromise<GetPharmacistAggregateType<T>>

    /**
     * Group by Pharmacist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacistGroupByArgs} args - Group by arguments.
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
      T extends PharmacistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmacistGroupByArgs['orderBy'] }
        : { orderBy?: PharmacistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PharmacistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmacistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pharmacist model
   */
  readonly fields: PharmacistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pharmacist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PharmacistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dispensedPrescriptions<T extends Pharmacist$dispensedPrescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Pharmacist$dispensedPrescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pharmacist model
   */
  interface PharmacistFieldRefs {
    readonly id: FieldRef<"Pharmacist", 'String'>
    readonly userId: FieldRef<"Pharmacist", 'String'>
    readonly licenseNumber: FieldRef<"Pharmacist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pharmacist findUnique
   */
  export type PharmacistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacist
     */
    select?: PharmacistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacist
     */
    omit?: PharmacistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacistInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacist to fetch.
     */
    where: PharmacistWhereUniqueInput
  }

  /**
   * Pharmacist findUniqueOrThrow
   */
  export type PharmacistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacist
     */
    select?: PharmacistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacist
     */
    omit?: PharmacistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacistInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacist to fetch.
     */
    where: PharmacistWhereUniqueInput
  }

  /**
   * Pharmacist findFirst
   */
  export type PharmacistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacist
     */
    select?: PharmacistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacist
     */
    omit?: PharmacistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacistInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacist to fetch.
     */
    where?: PharmacistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacists to fetch.
     */
    orderBy?: PharmacistOrderByWithRelationInput | PharmacistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacists.
     */
    cursor?: PharmacistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacists.
     */
    distinct?: PharmacistScalarFieldEnum | PharmacistScalarFieldEnum[]
  }

  /**
   * Pharmacist findFirstOrThrow
   */
  export type PharmacistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacist
     */
    select?: PharmacistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacist
     */
    omit?: PharmacistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacistInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacist to fetch.
     */
    where?: PharmacistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacists to fetch.
     */
    orderBy?: PharmacistOrderByWithRelationInput | PharmacistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacists.
     */
    cursor?: PharmacistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacists.
     */
    distinct?: PharmacistScalarFieldEnum | PharmacistScalarFieldEnum[]
  }

  /**
   * Pharmacist findMany
   */
  export type PharmacistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacist
     */
    select?: PharmacistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacist
     */
    omit?: PharmacistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacistInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacists to fetch.
     */
    where?: PharmacistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacists to fetch.
     */
    orderBy?: PharmacistOrderByWithRelationInput | PharmacistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pharmacists.
     */
    cursor?: PharmacistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacists.
     */
    distinct?: PharmacistScalarFieldEnum | PharmacistScalarFieldEnum[]
  }

  /**
   * Pharmacist create
   */
  export type PharmacistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacist
     */
    select?: PharmacistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacist
     */
    omit?: PharmacistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacistInclude<ExtArgs> | null
    /**
     * The data needed to create a Pharmacist.
     */
    data: XOR<PharmacistCreateInput, PharmacistUncheckedCreateInput>
  }

  /**
   * Pharmacist createMany
   */
  export type PharmacistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pharmacists.
     */
    data: PharmacistCreateManyInput | PharmacistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pharmacist createManyAndReturn
   */
  export type PharmacistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacist
     */
    select?: PharmacistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacist
     */
    omit?: PharmacistOmit<ExtArgs> | null
    /**
     * The data used to create many Pharmacists.
     */
    data: PharmacistCreateManyInput | PharmacistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pharmacist update
   */
  export type PharmacistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacist
     */
    select?: PharmacistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacist
     */
    omit?: PharmacistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacistInclude<ExtArgs> | null
    /**
     * The data needed to update a Pharmacist.
     */
    data: XOR<PharmacistUpdateInput, PharmacistUncheckedUpdateInput>
    /**
     * Choose, which Pharmacist to update.
     */
    where: PharmacistWhereUniqueInput
  }

  /**
   * Pharmacist updateMany
   */
  export type PharmacistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pharmacists.
     */
    data: XOR<PharmacistUpdateManyMutationInput, PharmacistUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacists to update
     */
    where?: PharmacistWhereInput
    /**
     * Limit how many Pharmacists to update.
     */
    limit?: number
  }

  /**
   * Pharmacist updateManyAndReturn
   */
  export type PharmacistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacist
     */
    select?: PharmacistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacist
     */
    omit?: PharmacistOmit<ExtArgs> | null
    /**
     * The data used to update Pharmacists.
     */
    data: XOR<PharmacistUpdateManyMutationInput, PharmacistUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacists to update
     */
    where?: PharmacistWhereInput
    /**
     * Limit how many Pharmacists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pharmacist upsert
   */
  export type PharmacistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacist
     */
    select?: PharmacistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacist
     */
    omit?: PharmacistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacistInclude<ExtArgs> | null
    /**
     * The filter to search for the Pharmacist to update in case it exists.
     */
    where: PharmacistWhereUniqueInput
    /**
     * In case the Pharmacist found by the `where` argument doesn't exist, create a new Pharmacist with this data.
     */
    create: XOR<PharmacistCreateInput, PharmacistUncheckedCreateInput>
    /**
     * In case the Pharmacist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmacistUpdateInput, PharmacistUncheckedUpdateInput>
  }

  /**
   * Pharmacist delete
   */
  export type PharmacistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacist
     */
    select?: PharmacistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacist
     */
    omit?: PharmacistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacistInclude<ExtArgs> | null
    /**
     * Filter which Pharmacist to delete.
     */
    where: PharmacistWhereUniqueInput
  }

  /**
   * Pharmacist deleteMany
   */
  export type PharmacistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacists to delete
     */
    where?: PharmacistWhereInput
    /**
     * Limit how many Pharmacists to delete.
     */
    limit?: number
  }

  /**
   * Pharmacist.dispensedPrescriptions
   */
  export type Pharmacist$dispensedPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Pharmacist without action
   */
  export type PharmacistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacist
     */
    select?: PharmacistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacist
     */
    omit?: PharmacistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacistInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.AppointmentStatus | null
    reasonForVisit: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    date: Date | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.AppointmentStatus | null
    reasonForVisit: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    date: number
    startTime: number
    endTime: number
    status: number
    reasonForVisit: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    reasonForVisit?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    reasonForVisit?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    date?: true
    startTime?: true
    endTime?: true
    status?: true
    reasonForVisit?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    patientId: string
    doctorId: string
    date: Date
    startTime: Date
    endTime: Date
    status: $Enums.AppointmentStatus
    reasonForVisit: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    reasonForVisit?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    medicalRecord?: boolean | Appointment$medicalRecordArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    reasonForVisit?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    reasonForVisit?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    date?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    reasonForVisit?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "doctorId" | "date" | "startTime" | "endTime" | "status" | "reasonForVisit" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    medicalRecord?: boolean | Appointment$medicalRecordArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
      medicalRecord: Prisma.$MedicalRecordPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      doctorId: string
      date: Date
      startTime: Date
      endTime: Date
      status: $Enums.AppointmentStatus
      reasonForVisit: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicalRecord<T extends Appointment$medicalRecordArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$medicalRecordArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly patientId: FieldRef<"Appointment", 'String'>
    readonly doctorId: FieldRef<"Appointment", 'String'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly startTime: FieldRef<"Appointment", 'DateTime'>
    readonly endTime: FieldRef<"Appointment", 'DateTime'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly reasonForVisit: FieldRef<"Appointment", 'String'>
    readonly notes: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.medicalRecord
   */
  export type Appointment$medicalRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    where?: MedicalRecordWhereInput
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model MedicalRecord
   */

  export type AggregateMedicalRecord = {
    _count: MedicalRecordCountAggregateOutputType | null
    _min: MedicalRecordMinAggregateOutputType | null
    _max: MedicalRecordMaxAggregateOutputType | null
  }

  export type MedicalRecordMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    appointmentId: string | null
    diagnosis: string | null
    treatment: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalRecordMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    appointmentId: string | null
    diagnosis: string | null
    treatment: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalRecordCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    appointmentId: number
    diagnosis: number
    symptoms: number
    treatment: number
    notes: number
    files: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicalRecordMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    appointmentId?: true
    diagnosis?: true
    treatment?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalRecordMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    appointmentId?: true
    diagnosis?: true
    treatment?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalRecordCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    appointmentId?: true
    diagnosis?: true
    symptoms?: true
    treatment?: true
    notes?: true
    files?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicalRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecord to aggregate.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalRecords
    **/
    _count?: true | MedicalRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalRecordMaxAggregateInputType
  }

  export type GetMedicalRecordAggregateType<T extends MedicalRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalRecord[P]>
      : GetScalarType<T[P], AggregateMedicalRecord[P]>
  }




  export type MedicalRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalRecordWhereInput
    orderBy?: MedicalRecordOrderByWithAggregationInput | MedicalRecordOrderByWithAggregationInput[]
    by: MedicalRecordScalarFieldEnum[] | MedicalRecordScalarFieldEnum
    having?: MedicalRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalRecordCountAggregateInputType | true
    _min?: MedicalRecordMinAggregateInputType
    _max?: MedicalRecordMaxAggregateInputType
  }

  export type MedicalRecordGroupByOutputType = {
    id: string
    patientId: string
    doctorId: string
    appointmentId: string | null
    diagnosis: string
    symptoms: string[]
    treatment: string
    notes: string | null
    files: string[]
    createdAt: Date
    updatedAt: Date
    _count: MedicalRecordCountAggregateOutputType | null
    _min: MedicalRecordMinAggregateOutputType | null
    _max: MedicalRecordMaxAggregateOutputType | null
  }

  type GetMedicalRecordGroupByPayload<T extends MedicalRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalRecordGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalRecordGroupByOutputType[P]>
        }
      >
    >


  export type MedicalRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    appointmentId?: boolean
    diagnosis?: boolean
    symptoms?: boolean
    treatment?: boolean
    notes?: boolean
    files?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    appointment?: boolean | MedicalRecord$appointmentArgs<ExtArgs>
    prescriptions?: boolean | MedicalRecord$prescriptionsArgs<ExtArgs>
    _count?: boolean | MedicalRecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    appointmentId?: boolean
    diagnosis?: boolean
    symptoms?: boolean
    treatment?: boolean
    notes?: boolean
    files?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    appointment?: boolean | MedicalRecord$appointmentArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    appointmentId?: boolean
    diagnosis?: boolean
    symptoms?: boolean
    treatment?: boolean
    notes?: boolean
    files?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    appointment?: boolean | MedicalRecord$appointmentArgs<ExtArgs>
  }, ExtArgs["result"]["medicalRecord"]>

  export type MedicalRecordSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    appointmentId?: boolean
    diagnosis?: boolean
    symptoms?: boolean
    treatment?: boolean
    notes?: boolean
    files?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicalRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "doctorId" | "appointmentId" | "diagnosis" | "symptoms" | "treatment" | "notes" | "files" | "createdAt" | "updatedAt", ExtArgs["result"]["medicalRecord"]>
  export type MedicalRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    appointment?: boolean | MedicalRecord$appointmentArgs<ExtArgs>
    prescriptions?: boolean | MedicalRecord$prescriptionsArgs<ExtArgs>
    _count?: boolean | MedicalRecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicalRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    appointment?: boolean | MedicalRecord$appointmentArgs<ExtArgs>
  }
  export type MedicalRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    appointment?: boolean | MedicalRecord$appointmentArgs<ExtArgs>
  }

  export type $MedicalRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalRecord"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs> | null
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      doctorId: string
      appointmentId: string | null
      diagnosis: string
      symptoms: string[]
      treatment: string
      notes: string | null
      files: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicalRecord"]>
    composites: {}
  }

  type MedicalRecordGetPayload<S extends boolean | null | undefined | MedicalRecordDefaultArgs> = $Result.GetResult<Prisma.$MedicalRecordPayload, S>

  type MedicalRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalRecordCountAggregateInputType | true
    }

  export interface MedicalRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalRecord'], meta: { name: 'MedicalRecord' } }
    /**
     * Find zero or one MedicalRecord that matches the filter.
     * @param {MedicalRecordFindUniqueArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalRecordFindUniqueArgs>(args: SelectSubset<T, MedicalRecordFindUniqueArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalRecordFindUniqueOrThrowArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindFirstArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalRecordFindFirstArgs>(args?: SelectSubset<T, MedicalRecordFindFirstArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindFirstOrThrowArgs} args - Arguments to find a MedicalRecord
     * @example
     * // Get one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalRecords
     * const medicalRecords = await prisma.medicalRecord.findMany()
     * 
     * // Get first 10 MedicalRecords
     * const medicalRecords = await prisma.medicalRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalRecordFindManyArgs>(args?: SelectSubset<T, MedicalRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalRecord.
     * @param {MedicalRecordCreateArgs} args - Arguments to create a MedicalRecord.
     * @example
     * // Create one MedicalRecord
     * const MedicalRecord = await prisma.medicalRecord.create({
     *   data: {
     *     // ... data to create a MedicalRecord
     *   }
     * })
     * 
     */
    create<T extends MedicalRecordCreateArgs>(args: SelectSubset<T, MedicalRecordCreateArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalRecords.
     * @param {MedicalRecordCreateManyArgs} args - Arguments to create many MedicalRecords.
     * @example
     * // Create many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalRecordCreateManyArgs>(args?: SelectSubset<T, MedicalRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalRecords and returns the data saved in the database.
     * @param {MedicalRecordCreateManyAndReturnArgs} args - Arguments to create many MedicalRecords.
     * @example
     * // Create many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalRecords and only return the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalRecord.
     * @param {MedicalRecordDeleteArgs} args - Arguments to delete one MedicalRecord.
     * @example
     * // Delete one MedicalRecord
     * const MedicalRecord = await prisma.medicalRecord.delete({
     *   where: {
     *     // ... filter to delete one MedicalRecord
     *   }
     * })
     * 
     */
    delete<T extends MedicalRecordDeleteArgs>(args: SelectSubset<T, MedicalRecordDeleteArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalRecord.
     * @param {MedicalRecordUpdateArgs} args - Arguments to update one MedicalRecord.
     * @example
     * // Update one MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalRecordUpdateArgs>(args: SelectSubset<T, MedicalRecordUpdateArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalRecords.
     * @param {MedicalRecordDeleteManyArgs} args - Arguments to filter MedicalRecords to delete.
     * @example
     * // Delete a few MedicalRecords
     * const { count } = await prisma.medicalRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalRecordDeleteManyArgs>(args?: SelectSubset<T, MedicalRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalRecordUpdateManyArgs>(args: SelectSubset<T, MedicalRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalRecords and returns the data updated in the database.
     * @param {MedicalRecordUpdateManyAndReturnArgs} args - Arguments to update many MedicalRecords.
     * @example
     * // Update many MedicalRecords
     * const medicalRecord = await prisma.medicalRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalRecords and only return the `id`
     * const medicalRecordWithIdOnly = await prisma.medicalRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicalRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalRecord.
     * @param {MedicalRecordUpsertArgs} args - Arguments to update or create a MedicalRecord.
     * @example
     * // Update or create a MedicalRecord
     * const medicalRecord = await prisma.medicalRecord.upsert({
     *   create: {
     *     // ... data to create a MedicalRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalRecord we want to update
     *   }
     * })
     */
    upsert<T extends MedicalRecordUpsertArgs>(args: SelectSubset<T, MedicalRecordUpsertArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordCountArgs} args - Arguments to filter MedicalRecords to count.
     * @example
     * // Count the number of MedicalRecords
     * const count = await prisma.medicalRecord.count({
     *   where: {
     *     // ... the filter for the MedicalRecords we want to count
     *   }
     * })
    **/
    count<T extends MedicalRecordCountArgs>(
      args?: Subset<T, MedicalRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicalRecordAggregateArgs>(args: Subset<T, MedicalRecordAggregateArgs>): Prisma.PrismaPromise<GetMedicalRecordAggregateType<T>>

    /**
     * Group by MedicalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalRecordGroupByArgs} args - Group by arguments.
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
      T extends MedicalRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalRecordGroupByArgs['orderBy'] }
        : { orderBy?: MedicalRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicalRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalRecord model
   */
  readonly fields: MedicalRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointment<T extends MedicalRecord$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, MedicalRecord$appointmentArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prescriptions<T extends MedicalRecord$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, MedicalRecord$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MedicalRecord model
   */
  interface MedicalRecordFieldRefs {
    readonly id: FieldRef<"MedicalRecord", 'String'>
    readonly patientId: FieldRef<"MedicalRecord", 'String'>
    readonly doctorId: FieldRef<"MedicalRecord", 'String'>
    readonly appointmentId: FieldRef<"MedicalRecord", 'String'>
    readonly diagnosis: FieldRef<"MedicalRecord", 'String'>
    readonly symptoms: FieldRef<"MedicalRecord", 'String[]'>
    readonly treatment: FieldRef<"MedicalRecord", 'String'>
    readonly notes: FieldRef<"MedicalRecord", 'String'>
    readonly files: FieldRef<"MedicalRecord", 'String[]'>
    readonly createdAt: FieldRef<"MedicalRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicalRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicalRecord findUnique
   */
  export type MedicalRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord findUniqueOrThrow
   */
  export type MedicalRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord findFirst
   */
  export type MedicalRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord findFirstOrThrow
   */
  export type MedicalRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecord to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord findMany
   */
  export type MedicalRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter, which MedicalRecords to fetch.
     */
    where?: MedicalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalRecords to fetch.
     */
    orderBy?: MedicalRecordOrderByWithRelationInput | MedicalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalRecords.
     */
    cursor?: MedicalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalRecords.
     */
    distinct?: MedicalRecordScalarFieldEnum | MedicalRecordScalarFieldEnum[]
  }

  /**
   * MedicalRecord create
   */
  export type MedicalRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalRecord.
     */
    data: XOR<MedicalRecordCreateInput, MedicalRecordUncheckedCreateInput>
  }

  /**
   * MedicalRecord createMany
   */
  export type MedicalRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalRecords.
     */
    data: MedicalRecordCreateManyInput | MedicalRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalRecord createManyAndReturn
   */
  export type MedicalRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalRecords.
     */
    data: MedicalRecordCreateManyInput | MedicalRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalRecord update
   */
  export type MedicalRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalRecord.
     */
    data: XOR<MedicalRecordUpdateInput, MedicalRecordUncheckedUpdateInput>
    /**
     * Choose, which MedicalRecord to update.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord updateMany
   */
  export type MedicalRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalRecords.
     */
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyInput>
    /**
     * Filter which MedicalRecords to update
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to update.
     */
    limit?: number
  }

  /**
   * MedicalRecord updateManyAndReturn
   */
  export type MedicalRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * The data used to update MedicalRecords.
     */
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyInput>
    /**
     * Filter which MedicalRecords to update
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalRecord upsert
   */
  export type MedicalRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalRecord to update in case it exists.
     */
    where: MedicalRecordWhereUniqueInput
    /**
     * In case the MedicalRecord found by the `where` argument doesn't exist, create a new MedicalRecord with this data.
     */
    create: XOR<MedicalRecordCreateInput, MedicalRecordUncheckedCreateInput>
    /**
     * In case the MedicalRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalRecordUpdateInput, MedicalRecordUncheckedUpdateInput>
  }

  /**
   * MedicalRecord delete
   */
  export type MedicalRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    /**
     * Filter which MedicalRecord to delete.
     */
    where: MedicalRecordWhereUniqueInput
  }

  /**
   * MedicalRecord deleteMany
   */
  export type MedicalRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalRecords to delete
     */
    where?: MedicalRecordWhereInput
    /**
     * Limit how many MedicalRecords to delete.
     */
    limit?: number
  }

  /**
   * MedicalRecord.appointment
   */
  export type MedicalRecord$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
  }

  /**
   * MedicalRecord.prescriptions
   */
  export type MedicalRecord$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * MedicalRecord without action
   */
  export type MedicalRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
  }


  /**
   * Model Prescription
   */

  export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  export type PrescriptionMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    medicalRecordId: string | null
    pharmacistId: string | null
    status: $Enums.PrescriptionStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrescriptionMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    doctorId: string | null
    medicalRecordId: string | null
    pharmacistId: string | null
    status: $Enums.PrescriptionStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrescriptionCountAggregateOutputType = {
    id: number
    patientId: number
    doctorId: number
    medicalRecordId: number
    pharmacistId: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PrescriptionMinAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    medicalRecordId?: true
    pharmacistId?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrescriptionMaxAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    medicalRecordId?: true
    pharmacistId?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrescriptionCountAggregateInputType = {
    id?: true
    patientId?: true
    doctorId?: true
    medicalRecordId?: true
    pharmacistId?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PrescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescription to aggregate.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prescriptions
    **/
    _count?: true | PrescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionMaxAggregateInputType
  }

  export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescription[P]>
      : GetScalarType<T[P], AggregatePrescription[P]>
  }




  export type PrescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithAggregationInput | PrescriptionOrderByWithAggregationInput[]
    by: PrescriptionScalarFieldEnum[] | PrescriptionScalarFieldEnum
    having?: PrescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionCountAggregateInputType | true
    _min?: PrescriptionMinAggregateInputType
    _max?: PrescriptionMaxAggregateInputType
  }

  export type PrescriptionGroupByOutputType = {
    id: string
    patientId: string
    doctorId: string
    medicalRecordId: string | null
    pharmacistId: string | null
    status: $Enums.PrescriptionStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: PrescriptionCountAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  type GetPrescriptionGroupByPayload<T extends PrescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    medicalRecordId?: boolean
    pharmacistId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    medicalRecord?: boolean | Prescription$medicalRecordArgs<ExtArgs>
    pharmacist?: boolean | Prescription$pharmacistArgs<ExtArgs>
    items?: boolean | Prescription$itemsArgs<ExtArgs>
    _count?: boolean | PrescriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    medicalRecordId?: boolean
    pharmacistId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    medicalRecord?: boolean | Prescription$medicalRecordArgs<ExtArgs>
    pharmacist?: boolean | Prescription$pharmacistArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    medicalRecordId?: boolean
    pharmacistId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    medicalRecord?: boolean | Prescription$medicalRecordArgs<ExtArgs>
    pharmacist?: boolean | Prescription$pharmacistArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectScalar = {
    id?: boolean
    patientId?: boolean
    doctorId?: boolean
    medicalRecordId?: boolean
    pharmacistId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PrescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "doctorId" | "medicalRecordId" | "pharmacistId" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["prescription"]>
  export type PrescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    medicalRecord?: boolean | Prescription$medicalRecordArgs<ExtArgs>
    pharmacist?: boolean | Prescription$pharmacistArgs<ExtArgs>
    items?: boolean | Prescription$itemsArgs<ExtArgs>
    _count?: boolean | PrescriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    medicalRecord?: boolean | Prescription$medicalRecordArgs<ExtArgs>
    pharmacist?: boolean | Prescription$pharmacistArgs<ExtArgs>
  }
  export type PrescriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    medicalRecord?: boolean | Prescription$medicalRecordArgs<ExtArgs>
    pharmacist?: boolean | Prescription$pharmacistArgs<ExtArgs>
  }

  export type $PrescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prescription"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
      medicalRecord: Prisma.$MedicalRecordPayload<ExtArgs> | null
      pharmacist: Prisma.$PharmacistPayload<ExtArgs> | null
      items: Prisma.$PrescriptionItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      doctorId: string
      medicalRecordId: string | null
      pharmacistId: string | null
      status: $Enums.PrescriptionStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["prescription"]>
    composites: {}
  }

  type PrescriptionGetPayload<S extends boolean | null | undefined | PrescriptionDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionPayload, S>

  type PrescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionCountAggregateInputType | true
    }

  export interface PrescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prescription'], meta: { name: 'Prescription' } }
    /**
     * Find zero or one Prescription that matches the filter.
     * @param {PrescriptionFindUniqueArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrescriptionFindUniqueArgs>(args: SelectSubset<T, PrescriptionFindUniqueArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrescriptionFindUniqueOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PrescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrescriptionFindFirstArgs>(args?: SelectSubset<T, PrescriptionFindFirstArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PrescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prescriptions
     * const prescriptions = await prisma.prescription.findMany()
     * 
     * // Get first 10 Prescriptions
     * const prescriptions = await prisma.prescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrescriptionFindManyArgs>(args?: SelectSubset<T, PrescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prescription.
     * @param {PrescriptionCreateArgs} args - Arguments to create a Prescription.
     * @example
     * // Create one Prescription
     * const Prescription = await prisma.prescription.create({
     *   data: {
     *     // ... data to create a Prescription
     *   }
     * })
     * 
     */
    create<T extends PrescriptionCreateArgs>(args: SelectSubset<T, PrescriptionCreateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prescriptions.
     * @param {PrescriptionCreateManyArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrescriptionCreateManyArgs>(args?: SelectSubset<T, PrescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prescriptions and returns the data saved in the database.
     * @param {PrescriptionCreateManyAndReturnArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PrescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prescription.
     * @param {PrescriptionDeleteArgs} args - Arguments to delete one Prescription.
     * @example
     * // Delete one Prescription
     * const Prescription = await prisma.prescription.delete({
     *   where: {
     *     // ... filter to delete one Prescription
     *   }
     * })
     * 
     */
    delete<T extends PrescriptionDeleteArgs>(args: SelectSubset<T, PrescriptionDeleteArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prescription.
     * @param {PrescriptionUpdateArgs} args - Arguments to update one Prescription.
     * @example
     * // Update one Prescription
     * const prescription = await prisma.prescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrescriptionUpdateArgs>(args: SelectSubset<T, PrescriptionUpdateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prescriptions.
     * @param {PrescriptionDeleteManyArgs} args - Arguments to filter Prescriptions to delete.
     * @example
     * // Delete a few Prescriptions
     * const { count } = await prisma.prescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrescriptionDeleteManyArgs>(args?: SelectSubset<T, PrescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrescriptionUpdateManyArgs>(args: SelectSubset<T, PrescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions and returns the data updated in the database.
     * @param {PrescriptionUpdateManyAndReturnArgs} args - Arguments to update many Prescriptions.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrescriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PrescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prescription.
     * @param {PrescriptionUpsertArgs} args - Arguments to update or create a Prescription.
     * @example
     * // Update or create a Prescription
     * const prescription = await prisma.prescription.upsert({
     *   create: {
     *     // ... data to create a Prescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prescription we want to update
     *   }
     * })
     */
    upsert<T extends PrescriptionUpsertArgs>(args: SelectSubset<T, PrescriptionUpsertArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionCountArgs} args - Arguments to filter Prescriptions to count.
     * @example
     * // Count the number of Prescriptions
     * const count = await prisma.prescription.count({
     *   where: {
     *     // ... the filter for the Prescriptions we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionCountArgs>(
      args?: Subset<T, PrescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionAggregateArgs>(args: Subset<T, PrescriptionAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionAggregateType<T>>

    /**
     * Group by Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionGroupByArgs} args - Group by arguments.
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
      T extends PrescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prescription model
   */
  readonly fields: PrescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicalRecord<T extends Prescription$medicalRecordArgs<ExtArgs> = {}>(args?: Subset<T, Prescription$medicalRecordArgs<ExtArgs>>): Prisma__MedicalRecordClient<$Result.GetResult<Prisma.$MedicalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pharmacist<T extends Prescription$pharmacistArgs<ExtArgs> = {}>(args?: Subset<T, Prescription$pharmacistArgs<ExtArgs>>): Prisma__PharmacistClient<$Result.GetResult<Prisma.$PharmacistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends Prescription$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Prescription$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Prescription model
   */
  interface PrescriptionFieldRefs {
    readonly id: FieldRef<"Prescription", 'String'>
    readonly patientId: FieldRef<"Prescription", 'String'>
    readonly doctorId: FieldRef<"Prescription", 'String'>
    readonly medicalRecordId: FieldRef<"Prescription", 'String'>
    readonly pharmacistId: FieldRef<"Prescription", 'String'>
    readonly status: FieldRef<"Prescription", 'PrescriptionStatus'>
    readonly notes: FieldRef<"Prescription", 'String'>
    readonly createdAt: FieldRef<"Prescription", 'DateTime'>
    readonly updatedAt: FieldRef<"Prescription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prescription findUnique
   */
  export type PrescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findUniqueOrThrow
   */
  export type PrescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findFirst
   */
  export type PrescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findFirstOrThrow
   */
  export type PrescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findMany
   */
  export type PrescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescriptions to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription create
   */
  export type PrescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prescription.
     */
    data: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
  }

  /**
   * Prescription createMany
   */
  export type PrescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prescription createManyAndReturn
   */
  export type PrescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription update
   */
  export type PrescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prescription.
     */
    data: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
    /**
     * Choose, which Prescription to update.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription updateMany
   */
  export type PrescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
  }

  /**
   * Prescription updateManyAndReturn
   */
  export type PrescriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription upsert
   */
  export type PrescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prescription to update in case it exists.
     */
    where: PrescriptionWhereUniqueInput
    /**
     * In case the Prescription found by the `where` argument doesn't exist, create a new Prescription with this data.
     */
    create: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
    /**
     * In case the Prescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
  }

  /**
   * Prescription delete
   */
  export type PrescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter which Prescription to delete.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription deleteMany
   */
  export type PrescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescriptions to delete
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to delete.
     */
    limit?: number
  }

  /**
   * Prescription.medicalRecord
   */
  export type Prescription$medicalRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalRecord
     */
    select?: MedicalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalRecord
     */
    omit?: MedicalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalRecordInclude<ExtArgs> | null
    where?: MedicalRecordWhereInput
  }

  /**
   * Prescription.pharmacist
   */
  export type Prescription$pharmacistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacist
     */
    select?: PharmacistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacist
     */
    omit?: PharmacistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacistInclude<ExtArgs> | null
    where?: PharmacistWhereInput
  }

  /**
   * Prescription.items
   */
  export type Prescription$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    where?: PrescriptionItemWhereInput
    orderBy?: PrescriptionItemOrderByWithRelationInput | PrescriptionItemOrderByWithRelationInput[]
    cursor?: PrescriptionItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionItemScalarFieldEnum | PrescriptionItemScalarFieldEnum[]
  }

  /**
   * Prescription without action
   */
  export type PrescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
  }


  /**
   * Model PrescriptionItem
   */

  export type AggregatePrescriptionItem = {
    _count: PrescriptionItemCountAggregateOutputType | null
    _avg: PrescriptionItemAvgAggregateOutputType | null
    _sum: PrescriptionItemSumAggregateOutputType | null
    _min: PrescriptionItemMinAggregateOutputType | null
    _max: PrescriptionItemMaxAggregateOutputType | null
  }

  export type PrescriptionItemAvgAggregateOutputType = {
    durationDays: number | null
    quantity: number | null
  }

  export type PrescriptionItemSumAggregateOutputType = {
    durationDays: number | null
    quantity: number | null
  }

  export type PrescriptionItemMinAggregateOutputType = {
    id: string | null
    prescriptionId: string | null
    medicationId: string | null
    dosage: string | null
    frequency: string | null
    durationDays: number | null
    quantity: number | null
  }

  export type PrescriptionItemMaxAggregateOutputType = {
    id: string | null
    prescriptionId: string | null
    medicationId: string | null
    dosage: string | null
    frequency: string | null
    durationDays: number | null
    quantity: number | null
  }

  export type PrescriptionItemCountAggregateOutputType = {
    id: number
    prescriptionId: number
    medicationId: number
    dosage: number
    frequency: number
    durationDays: number
    quantity: number
    _all: number
  }


  export type PrescriptionItemAvgAggregateInputType = {
    durationDays?: true
    quantity?: true
  }

  export type PrescriptionItemSumAggregateInputType = {
    durationDays?: true
    quantity?: true
  }

  export type PrescriptionItemMinAggregateInputType = {
    id?: true
    prescriptionId?: true
    medicationId?: true
    dosage?: true
    frequency?: true
    durationDays?: true
    quantity?: true
  }

  export type PrescriptionItemMaxAggregateInputType = {
    id?: true
    prescriptionId?: true
    medicationId?: true
    dosage?: true
    frequency?: true
    durationDays?: true
    quantity?: true
  }

  export type PrescriptionItemCountAggregateInputType = {
    id?: true
    prescriptionId?: true
    medicationId?: true
    dosage?: true
    frequency?: true
    durationDays?: true
    quantity?: true
    _all?: true
  }

  export type PrescriptionItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrescriptionItem to aggregate.
     */
    where?: PrescriptionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionItems to fetch.
     */
    orderBy?: PrescriptionItemOrderByWithRelationInput | PrescriptionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrescriptionItems
    **/
    _count?: true | PrescriptionItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrescriptionItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrescriptionItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionItemMaxAggregateInputType
  }

  export type GetPrescriptionItemAggregateType<T extends PrescriptionItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescriptionItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescriptionItem[P]>
      : GetScalarType<T[P], AggregatePrescriptionItem[P]>
  }




  export type PrescriptionItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionItemWhereInput
    orderBy?: PrescriptionItemOrderByWithAggregationInput | PrescriptionItemOrderByWithAggregationInput[]
    by: PrescriptionItemScalarFieldEnum[] | PrescriptionItemScalarFieldEnum
    having?: PrescriptionItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionItemCountAggregateInputType | true
    _avg?: PrescriptionItemAvgAggregateInputType
    _sum?: PrescriptionItemSumAggregateInputType
    _min?: PrescriptionItemMinAggregateInputType
    _max?: PrescriptionItemMaxAggregateInputType
  }

  export type PrescriptionItemGroupByOutputType = {
    id: string
    prescriptionId: string
    medicationId: string
    dosage: string
    frequency: string
    durationDays: number
    quantity: number
    _count: PrescriptionItemCountAggregateOutputType | null
    _avg: PrescriptionItemAvgAggregateOutputType | null
    _sum: PrescriptionItemSumAggregateOutputType | null
    _min: PrescriptionItemMinAggregateOutputType | null
    _max: PrescriptionItemMaxAggregateOutputType | null
  }

  type GetPrescriptionItemGroupByPayload<T extends PrescriptionItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionItemGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionItemGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prescriptionId?: boolean
    medicationId?: boolean
    dosage?: boolean
    frequency?: boolean
    durationDays?: boolean
    quantity?: boolean
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescriptionItem"]>

  export type PrescriptionItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prescriptionId?: boolean
    medicationId?: boolean
    dosage?: boolean
    frequency?: boolean
    durationDays?: boolean
    quantity?: boolean
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescriptionItem"]>

  export type PrescriptionItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prescriptionId?: boolean
    medicationId?: boolean
    dosage?: boolean
    frequency?: boolean
    durationDays?: boolean
    quantity?: boolean
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescriptionItem"]>

  export type PrescriptionItemSelectScalar = {
    id?: boolean
    prescriptionId?: boolean
    medicationId?: boolean
    dosage?: boolean
    frequency?: boolean
    durationDays?: boolean
    quantity?: boolean
  }

  export type PrescriptionItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prescriptionId" | "medicationId" | "dosage" | "frequency" | "durationDays" | "quantity", ExtArgs["result"]["prescriptionItem"]>
  export type PrescriptionItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }
  export type PrescriptionItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }
  export type PrescriptionItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }

  export type $PrescriptionItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrescriptionItem"
    objects: {
      prescription: Prisma.$PrescriptionPayload<ExtArgs>
      medication: Prisma.$MedicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prescriptionId: string
      medicationId: string
      dosage: string
      frequency: string
      durationDays: number
      quantity: number
    }, ExtArgs["result"]["prescriptionItem"]>
    composites: {}
  }

  type PrescriptionItemGetPayload<S extends boolean | null | undefined | PrescriptionItemDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionItemPayload, S>

  type PrescriptionItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrescriptionItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionItemCountAggregateInputType | true
    }

  export interface PrescriptionItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrescriptionItem'], meta: { name: 'PrescriptionItem' } }
    /**
     * Find zero or one PrescriptionItem that matches the filter.
     * @param {PrescriptionItemFindUniqueArgs} args - Arguments to find a PrescriptionItem
     * @example
     * // Get one PrescriptionItem
     * const prescriptionItem = await prisma.prescriptionItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrescriptionItemFindUniqueArgs>(args: SelectSubset<T, PrescriptionItemFindUniqueArgs<ExtArgs>>): Prisma__PrescriptionItemClient<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrescriptionItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrescriptionItemFindUniqueOrThrowArgs} args - Arguments to find a PrescriptionItem
     * @example
     * // Get one PrescriptionItem
     * const prescriptionItem = await prisma.prescriptionItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrescriptionItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PrescriptionItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrescriptionItemClient<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrescriptionItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionItemFindFirstArgs} args - Arguments to find a PrescriptionItem
     * @example
     * // Get one PrescriptionItem
     * const prescriptionItem = await prisma.prescriptionItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrescriptionItemFindFirstArgs>(args?: SelectSubset<T, PrescriptionItemFindFirstArgs<ExtArgs>>): Prisma__PrescriptionItemClient<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrescriptionItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionItemFindFirstOrThrowArgs} args - Arguments to find a PrescriptionItem
     * @example
     * // Get one PrescriptionItem
     * const prescriptionItem = await prisma.prescriptionItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrescriptionItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PrescriptionItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrescriptionItemClient<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrescriptionItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrescriptionItems
     * const prescriptionItems = await prisma.prescriptionItem.findMany()
     * 
     * // Get first 10 PrescriptionItems
     * const prescriptionItems = await prisma.prescriptionItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prescriptionItemWithIdOnly = await prisma.prescriptionItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrescriptionItemFindManyArgs>(args?: SelectSubset<T, PrescriptionItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrescriptionItem.
     * @param {PrescriptionItemCreateArgs} args - Arguments to create a PrescriptionItem.
     * @example
     * // Create one PrescriptionItem
     * const PrescriptionItem = await prisma.prescriptionItem.create({
     *   data: {
     *     // ... data to create a PrescriptionItem
     *   }
     * })
     * 
     */
    create<T extends PrescriptionItemCreateArgs>(args: SelectSubset<T, PrescriptionItemCreateArgs<ExtArgs>>): Prisma__PrescriptionItemClient<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrescriptionItems.
     * @param {PrescriptionItemCreateManyArgs} args - Arguments to create many PrescriptionItems.
     * @example
     * // Create many PrescriptionItems
     * const prescriptionItem = await prisma.prescriptionItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrescriptionItemCreateManyArgs>(args?: SelectSubset<T, PrescriptionItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrescriptionItems and returns the data saved in the database.
     * @param {PrescriptionItemCreateManyAndReturnArgs} args - Arguments to create many PrescriptionItems.
     * @example
     * // Create many PrescriptionItems
     * const prescriptionItem = await prisma.prescriptionItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrescriptionItems and only return the `id`
     * const prescriptionItemWithIdOnly = await prisma.prescriptionItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrescriptionItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PrescriptionItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrescriptionItem.
     * @param {PrescriptionItemDeleteArgs} args - Arguments to delete one PrescriptionItem.
     * @example
     * // Delete one PrescriptionItem
     * const PrescriptionItem = await prisma.prescriptionItem.delete({
     *   where: {
     *     // ... filter to delete one PrescriptionItem
     *   }
     * })
     * 
     */
    delete<T extends PrescriptionItemDeleteArgs>(args: SelectSubset<T, PrescriptionItemDeleteArgs<ExtArgs>>): Prisma__PrescriptionItemClient<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrescriptionItem.
     * @param {PrescriptionItemUpdateArgs} args - Arguments to update one PrescriptionItem.
     * @example
     * // Update one PrescriptionItem
     * const prescriptionItem = await prisma.prescriptionItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrescriptionItemUpdateArgs>(args: SelectSubset<T, PrescriptionItemUpdateArgs<ExtArgs>>): Prisma__PrescriptionItemClient<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrescriptionItems.
     * @param {PrescriptionItemDeleteManyArgs} args - Arguments to filter PrescriptionItems to delete.
     * @example
     * // Delete a few PrescriptionItems
     * const { count } = await prisma.prescriptionItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrescriptionItemDeleteManyArgs>(args?: SelectSubset<T, PrescriptionItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrescriptionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrescriptionItems
     * const prescriptionItem = await prisma.prescriptionItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrescriptionItemUpdateManyArgs>(args: SelectSubset<T, PrescriptionItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrescriptionItems and returns the data updated in the database.
     * @param {PrescriptionItemUpdateManyAndReturnArgs} args - Arguments to update many PrescriptionItems.
     * @example
     * // Update many PrescriptionItems
     * const prescriptionItem = await prisma.prescriptionItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrescriptionItems and only return the `id`
     * const prescriptionItemWithIdOnly = await prisma.prescriptionItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends PrescriptionItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PrescriptionItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrescriptionItem.
     * @param {PrescriptionItemUpsertArgs} args - Arguments to update or create a PrescriptionItem.
     * @example
     * // Update or create a PrescriptionItem
     * const prescriptionItem = await prisma.prescriptionItem.upsert({
     *   create: {
     *     // ... data to create a PrescriptionItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrescriptionItem we want to update
     *   }
     * })
     */
    upsert<T extends PrescriptionItemUpsertArgs>(args: SelectSubset<T, PrescriptionItemUpsertArgs<ExtArgs>>): Prisma__PrescriptionItemClient<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrescriptionItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionItemCountArgs} args - Arguments to filter PrescriptionItems to count.
     * @example
     * // Count the number of PrescriptionItems
     * const count = await prisma.prescriptionItem.count({
     *   where: {
     *     // ... the filter for the PrescriptionItems we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionItemCountArgs>(
      args?: Subset<T, PrescriptionItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrescriptionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionItemAggregateArgs>(args: Subset<T, PrescriptionItemAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionItemAggregateType<T>>

    /**
     * Group by PrescriptionItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionItemGroupByArgs} args - Group by arguments.
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
      T extends PrescriptionItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionItemGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrescriptionItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrescriptionItem model
   */
  readonly fields: PrescriptionItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrescriptionItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prescription<T extends PrescriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrescriptionDefaultArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PrescriptionItem model
   */
  interface PrescriptionItemFieldRefs {
    readonly id: FieldRef<"PrescriptionItem", 'String'>
    readonly prescriptionId: FieldRef<"PrescriptionItem", 'String'>
    readonly medicationId: FieldRef<"PrescriptionItem", 'String'>
    readonly dosage: FieldRef<"PrescriptionItem", 'String'>
    readonly frequency: FieldRef<"PrescriptionItem", 'String'>
    readonly durationDays: FieldRef<"PrescriptionItem", 'Int'>
    readonly quantity: FieldRef<"PrescriptionItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PrescriptionItem findUnique
   */
  export type PrescriptionItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionItem to fetch.
     */
    where: PrescriptionItemWhereUniqueInput
  }

  /**
   * PrescriptionItem findUniqueOrThrow
   */
  export type PrescriptionItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionItem to fetch.
     */
    where: PrescriptionItemWhereUniqueInput
  }

  /**
   * PrescriptionItem findFirst
   */
  export type PrescriptionItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionItem to fetch.
     */
    where?: PrescriptionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionItems to fetch.
     */
    orderBy?: PrescriptionItemOrderByWithRelationInput | PrescriptionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrescriptionItems.
     */
    cursor?: PrescriptionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrescriptionItems.
     */
    distinct?: PrescriptionItemScalarFieldEnum | PrescriptionItemScalarFieldEnum[]
  }

  /**
   * PrescriptionItem findFirstOrThrow
   */
  export type PrescriptionItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionItem to fetch.
     */
    where?: PrescriptionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionItems to fetch.
     */
    orderBy?: PrescriptionItemOrderByWithRelationInput | PrescriptionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrescriptionItems.
     */
    cursor?: PrescriptionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrescriptionItems.
     */
    distinct?: PrescriptionItemScalarFieldEnum | PrescriptionItemScalarFieldEnum[]
  }

  /**
   * PrescriptionItem findMany
   */
  export type PrescriptionItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionItems to fetch.
     */
    where?: PrescriptionItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionItems to fetch.
     */
    orderBy?: PrescriptionItemOrderByWithRelationInput | PrescriptionItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrescriptionItems.
     */
    cursor?: PrescriptionItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrescriptionItems.
     */
    distinct?: PrescriptionItemScalarFieldEnum | PrescriptionItemScalarFieldEnum[]
  }

  /**
   * PrescriptionItem create
   */
  export type PrescriptionItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PrescriptionItem.
     */
    data: XOR<PrescriptionItemCreateInput, PrescriptionItemUncheckedCreateInput>
  }

  /**
   * PrescriptionItem createMany
   */
  export type PrescriptionItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrescriptionItems.
     */
    data: PrescriptionItemCreateManyInput | PrescriptionItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrescriptionItem createManyAndReturn
   */
  export type PrescriptionItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * The data used to create many PrescriptionItems.
     */
    data: PrescriptionItemCreateManyInput | PrescriptionItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrescriptionItem update
   */
  export type PrescriptionItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PrescriptionItem.
     */
    data: XOR<PrescriptionItemUpdateInput, PrescriptionItemUncheckedUpdateInput>
    /**
     * Choose, which PrescriptionItem to update.
     */
    where: PrescriptionItemWhereUniqueInput
  }

  /**
   * PrescriptionItem updateMany
   */
  export type PrescriptionItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrescriptionItems.
     */
    data: XOR<PrescriptionItemUpdateManyMutationInput, PrescriptionItemUncheckedUpdateManyInput>
    /**
     * Filter which PrescriptionItems to update
     */
    where?: PrescriptionItemWhereInput
    /**
     * Limit how many PrescriptionItems to update.
     */
    limit?: number
  }

  /**
   * PrescriptionItem updateManyAndReturn
   */
  export type PrescriptionItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * The data used to update PrescriptionItems.
     */
    data: XOR<PrescriptionItemUpdateManyMutationInput, PrescriptionItemUncheckedUpdateManyInput>
    /**
     * Filter which PrescriptionItems to update
     */
    where?: PrescriptionItemWhereInput
    /**
     * Limit how many PrescriptionItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrescriptionItem upsert
   */
  export type PrescriptionItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PrescriptionItem to update in case it exists.
     */
    where: PrescriptionItemWhereUniqueInput
    /**
     * In case the PrescriptionItem found by the `where` argument doesn't exist, create a new PrescriptionItem with this data.
     */
    create: XOR<PrescriptionItemCreateInput, PrescriptionItemUncheckedCreateInput>
    /**
     * In case the PrescriptionItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionItemUpdateInput, PrescriptionItemUncheckedUpdateInput>
  }

  /**
   * PrescriptionItem delete
   */
  export type PrescriptionItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    /**
     * Filter which PrescriptionItem to delete.
     */
    where: PrescriptionItemWhereUniqueInput
  }

  /**
   * PrescriptionItem deleteMany
   */
  export type PrescriptionItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrescriptionItems to delete
     */
    where?: PrescriptionItemWhereInput
    /**
     * Limit how many PrescriptionItems to delete.
     */
    limit?: number
  }

  /**
   * PrescriptionItem without action
   */
  export type PrescriptionItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
  }


  /**
   * Model Medication
   */

  export type AggregateMedication = {
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  export type MedicationAvgAggregateOutputType = {
    stockQuantity: number | null
    unitPrice: number | null
  }

  export type MedicationSumAggregateOutputType = {
    stockQuantity: number | null
    unitPrice: number | null
  }

  export type MedicationMinAggregateOutputType = {
    id: string | null
    name: string | null
    brandName: string | null
    description: string | null
    stockQuantity: number | null
    unitPrice: number | null
    requiresPrescription: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    brandName: string | null
    description: string | null
    stockQuantity: number | null
    unitPrice: number | null
    requiresPrescription: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationCountAggregateOutputType = {
    id: number
    name: number
    brandName: number
    description: number
    stockQuantity: number
    unitPrice: number
    requiresPrescription: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicationAvgAggregateInputType = {
    stockQuantity?: true
    unitPrice?: true
  }

  export type MedicationSumAggregateInputType = {
    stockQuantity?: true
    unitPrice?: true
  }

  export type MedicationMinAggregateInputType = {
    id?: true
    name?: true
    brandName?: true
    description?: true
    stockQuantity?: true
    unitPrice?: true
    requiresPrescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationMaxAggregateInputType = {
    id?: true
    name?: true
    brandName?: true
    description?: true
    stockQuantity?: true
    unitPrice?: true
    requiresPrescription?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationCountAggregateInputType = {
    id?: true
    name?: true
    brandName?: true
    description?: true
    stockQuantity?: true
    unitPrice?: true
    requiresPrescription?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medication to aggregate.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medications
    **/
    _count?: true | MedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationMaxAggregateInputType
  }

  export type GetMedicationAggregateType<T extends MedicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedication[P]>
      : GetScalarType<T[P], AggregateMedication[P]>
  }




  export type MedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithAggregationInput | MedicationOrderByWithAggregationInput[]
    by: MedicationScalarFieldEnum[] | MedicationScalarFieldEnum
    having?: MedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationCountAggregateInputType | true
    _avg?: MedicationAvgAggregateInputType
    _sum?: MedicationSumAggregateInputType
    _min?: MedicationMinAggregateInputType
    _max?: MedicationMaxAggregateInputType
  }

  export type MedicationGroupByOutputType = {
    id: string
    name: string
    brandName: string | null
    description: string | null
    stockQuantity: number
    unitPrice: number
    requiresPrescription: boolean
    createdAt: Date
    updatedAt: Date
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  type GetMedicationGroupByPayload<T extends MedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationGroupByOutputType[P]>
        }
      >
    >


  export type MedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandName?: boolean
    description?: boolean
    stockQuantity?: boolean
    unitPrice?: boolean
    requiresPrescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prescriptionItems?: boolean | Medication$prescriptionItemsArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandName?: boolean
    description?: boolean
    stockQuantity?: boolean
    unitPrice?: boolean
    requiresPrescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brandName?: boolean
    description?: boolean
    stockQuantity?: boolean
    unitPrice?: boolean
    requiresPrescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectScalar = {
    id?: boolean
    name?: boolean
    brandName?: boolean
    description?: boolean
    stockQuantity?: boolean
    unitPrice?: boolean
    requiresPrescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brandName" | "description" | "stockQuantity" | "unitPrice" | "requiresPrescription" | "createdAt" | "updatedAt", ExtArgs["result"]["medication"]>
  export type MedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptionItems?: boolean | Medication$prescriptionItemsArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MedicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medication"
    objects: {
      prescriptionItems: Prisma.$PrescriptionItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      brandName: string | null
      description: string | null
      stockQuantity: number
      unitPrice: number
      requiresPrescription: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medication"]>
    composites: {}
  }

  type MedicationGetPayload<S extends boolean | null | undefined | MedicationDefaultArgs> = $Result.GetResult<Prisma.$MedicationPayload, S>

  type MedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationCountAggregateInputType | true
    }

  export interface MedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medication'], meta: { name: 'Medication' } }
    /**
     * Find zero or one Medication that matches the filter.
     * @param {MedicationFindUniqueArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationFindUniqueArgs>(args: SelectSubset<T, MedicationFindUniqueArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationFindUniqueOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationFindFirstArgs>(args?: SelectSubset<T, MedicationFindFirstArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medications
     * const medications = await prisma.medication.findMany()
     * 
     * // Get first 10 Medications
     * const medications = await prisma.medication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationWithIdOnly = await prisma.medication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationFindManyArgs>(args?: SelectSubset<T, MedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medication.
     * @param {MedicationCreateArgs} args - Arguments to create a Medication.
     * @example
     * // Create one Medication
     * const Medication = await prisma.medication.create({
     *   data: {
     *     // ... data to create a Medication
     *   }
     * })
     * 
     */
    create<T extends MedicationCreateArgs>(args: SelectSubset<T, MedicationCreateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medications.
     * @param {MedicationCreateManyArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationCreateManyArgs>(args?: SelectSubset<T, MedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medications and returns the data saved in the database.
     * @param {MedicationCreateManyAndReturnArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medication.
     * @param {MedicationDeleteArgs} args - Arguments to delete one Medication.
     * @example
     * // Delete one Medication
     * const Medication = await prisma.medication.delete({
     *   where: {
     *     // ... filter to delete one Medication
     *   }
     * })
     * 
     */
    delete<T extends MedicationDeleteArgs>(args: SelectSubset<T, MedicationDeleteArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medication.
     * @param {MedicationUpdateArgs} args - Arguments to update one Medication.
     * @example
     * // Update one Medication
     * const medication = await prisma.medication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationUpdateArgs>(args: SelectSubset<T, MedicationUpdateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medications.
     * @param {MedicationDeleteManyArgs} args - Arguments to filter Medications to delete.
     * @example
     * // Delete a few Medications
     * const { count } = await prisma.medication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationDeleteManyArgs>(args?: SelectSubset<T, MedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationUpdateManyArgs>(args: SelectSubset<T, MedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications and returns the data updated in the database.
     * @param {MedicationUpdateManyAndReturnArgs} args - Arguments to update many Medications.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.updateManyAndReturn({
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
    updateManyAndReturn<T extends MedicationUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medication.
     * @param {MedicationUpsertArgs} args - Arguments to update or create a Medication.
     * @example
     * // Update or create a Medication
     * const medication = await prisma.medication.upsert({
     *   create: {
     *     // ... data to create a Medication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medication we want to update
     *   }
     * })
     */
    upsert<T extends MedicationUpsertArgs>(args: SelectSubset<T, MedicationUpsertArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationCountArgs} args - Arguments to filter Medications to count.
     * @example
     * // Count the number of Medications
     * const count = await prisma.medication.count({
     *   where: {
     *     // ... the filter for the Medications we want to count
     *   }
     * })
    **/
    count<T extends MedicationCountArgs>(
      args?: Subset<T, MedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicationAggregateArgs>(args: Subset<T, MedicationAggregateArgs>): Prisma.PrismaPromise<GetMedicationAggregateType<T>>

    /**
     * Group by Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationGroupByArgs} args - Group by arguments.
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
      T extends MedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationGroupByArgs['orderBy'] }
        : { orderBy?: MedicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medication model
   */
  readonly fields: MedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prescriptionItems<T extends Medication$prescriptionItemsArgs<ExtArgs> = {}>(args?: Subset<T, Medication$prescriptionItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Medication model
   */
  interface MedicationFieldRefs {
    readonly id: FieldRef<"Medication", 'String'>
    readonly name: FieldRef<"Medication", 'String'>
    readonly brandName: FieldRef<"Medication", 'String'>
    readonly description: FieldRef<"Medication", 'String'>
    readonly stockQuantity: FieldRef<"Medication", 'Int'>
    readonly unitPrice: FieldRef<"Medication", 'Float'>
    readonly requiresPrescription: FieldRef<"Medication", 'Boolean'>
    readonly createdAt: FieldRef<"Medication", 'DateTime'>
    readonly updatedAt: FieldRef<"Medication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Medication findUnique
   */
  export type MedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findUniqueOrThrow
   */
  export type MedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findFirst
   */
  export type MedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findFirstOrThrow
   */
  export type MedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findMany
   */
  export type MedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication create
   */
  export type MedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Medication.
     */
    data: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
  }

  /**
   * Medication createMany
   */
  export type MedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medication createManyAndReturn
   */
  export type MedicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medication update
   */
  export type MedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Medication.
     */
    data: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
    /**
     * Choose, which Medication to update.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication updateMany
   */
  export type MedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medication updateManyAndReturn
   */
  export type MedicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medication upsert
   */
  export type MedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Medication to update in case it exists.
     */
    where: MedicationWhereUniqueInput
    /**
     * In case the Medication found by the `where` argument doesn't exist, create a new Medication with this data.
     */
    create: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
    /**
     * In case the Medication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
  }

  /**
   * Medication delete
   */
  export type MedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter which Medication to delete.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication deleteMany
   */
  export type MedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medications to delete
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to delete.
     */
    limit?: number
  }

  /**
   * Medication.prescriptionItems
   */
  export type Medication$prescriptionItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionItem
     */
    select?: PrescriptionItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionItem
     */
    omit?: PrescriptionItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionItemInclude<ExtArgs> | null
    where?: PrescriptionItemWhereInput
    orderBy?: PrescriptionItemOrderByWithRelationInput | PrescriptionItemOrderByWithRelationInput[]
    cursor?: PrescriptionItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionItemScalarFieldEnum | PrescriptionItemScalarFieldEnum[]
  }

  /**
   * Medication without action
   */
  export type MedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    receptionistId: string | null
    amount: number | null
    currency: string | null
    status: $Enums.TransactionStatus | null
    paymentMethod: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    receptionistId: string | null
    amount: number | null
    currency: string | null
    status: $Enums.TransactionStatus | null
    paymentMethod: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    patientId: number
    receptionistId: number
    amount: number
    currency: number
    status: number
    paymentMethod: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    patientId?: true
    receptionistId?: true
    amount?: true
    currency?: true
    status?: true
    paymentMethod?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    patientId?: true
    receptionistId?: true
    amount?: true
    currency?: true
    status?: true
    paymentMethod?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    patientId?: true
    receptionistId?: true
    amount?: true
    currency?: true
    status?: true
    paymentMethod?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    patientId: string
    receptionistId: string | null
    amount: number
    currency: string
    status: $Enums.TransactionStatus
    paymentMethod: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    receptionistId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethod?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    receptionist?: boolean | Transaction$receptionistArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    receptionistId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethod?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    receptionist?: boolean | Transaction$receptionistArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    receptionistId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethod?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    receptionist?: boolean | Transaction$receptionistArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    patientId?: boolean
    receptionistId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    paymentMethod?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "receptionistId" | "amount" | "currency" | "status" | "paymentMethod" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    receptionist?: boolean | Transaction$receptionistArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    receptionist?: boolean | Transaction$receptionistArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    receptionist?: boolean | Transaction$receptionistArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      receptionist: Prisma.$ReceptionistPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      receptionistId: string | null
      amount: number
      currency: string
      status: $Enums.TransactionStatus
      paymentMethod: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receptionist<T extends Transaction$receptionistArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$receptionistArgs<ExtArgs>>): Prisma__ReceptionistClient<$Result.GetResult<Prisma.$ReceptionistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly patientId: FieldRef<"Transaction", 'String'>
    readonly receptionistId: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly currency: FieldRef<"Transaction", 'String'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly paymentMethod: FieldRef<"Transaction", 'String'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.receptionist
   */
  export type Transaction$receptionistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receptionist
     */
    select?: ReceptionistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receptionist
     */
    omit?: ReceptionistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceptionistInclude<ExtArgs> | null
    where?: ReceptionistWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model WalkInQueue
   */

  export type AggregateWalkInQueue = {
    _count: WalkInQueueCountAggregateOutputType | null
    _avg: WalkInQueueAvgAggregateOutputType | null
    _sum: WalkInQueueSumAggregateOutputType | null
    _min: WalkInQueueMinAggregateOutputType | null
    _max: WalkInQueueMaxAggregateOutputType | null
  }

  export type WalkInQueueAvgAggregateOutputType = {
    priority: number | null
  }

  export type WalkInQueueSumAggregateOutputType = {
    priority: number | null
  }

  export type WalkInQueueMinAggregateOutputType = {
    id: string | null
    patientName: string | null
    phoneNumber: string | null
    priority: number | null
    reason: string | null
    assignedTo: string | null
    status: string | null
    checkInTime: Date | null
    checkOutTime: Date | null
  }

  export type WalkInQueueMaxAggregateOutputType = {
    id: string | null
    patientName: string | null
    phoneNumber: string | null
    priority: number | null
    reason: string | null
    assignedTo: string | null
    status: string | null
    checkInTime: Date | null
    checkOutTime: Date | null
  }

  export type WalkInQueueCountAggregateOutputType = {
    id: number
    patientName: number
    phoneNumber: number
    priority: number
    reason: number
    assignedTo: number
    status: number
    checkInTime: number
    checkOutTime: number
    _all: number
  }


  export type WalkInQueueAvgAggregateInputType = {
    priority?: true
  }

  export type WalkInQueueSumAggregateInputType = {
    priority?: true
  }

  export type WalkInQueueMinAggregateInputType = {
    id?: true
    patientName?: true
    phoneNumber?: true
    priority?: true
    reason?: true
    assignedTo?: true
    status?: true
    checkInTime?: true
    checkOutTime?: true
  }

  export type WalkInQueueMaxAggregateInputType = {
    id?: true
    patientName?: true
    phoneNumber?: true
    priority?: true
    reason?: true
    assignedTo?: true
    status?: true
    checkInTime?: true
    checkOutTime?: true
  }

  export type WalkInQueueCountAggregateInputType = {
    id?: true
    patientName?: true
    phoneNumber?: true
    priority?: true
    reason?: true
    assignedTo?: true
    status?: true
    checkInTime?: true
    checkOutTime?: true
    _all?: true
  }

  export type WalkInQueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalkInQueue to aggregate.
     */
    where?: WalkInQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalkInQueues to fetch.
     */
    orderBy?: WalkInQueueOrderByWithRelationInput | WalkInQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalkInQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalkInQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalkInQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalkInQueues
    **/
    _count?: true | WalkInQueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalkInQueueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalkInQueueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalkInQueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalkInQueueMaxAggregateInputType
  }

  export type GetWalkInQueueAggregateType<T extends WalkInQueueAggregateArgs> = {
        [P in keyof T & keyof AggregateWalkInQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalkInQueue[P]>
      : GetScalarType<T[P], AggregateWalkInQueue[P]>
  }




  export type WalkInQueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalkInQueueWhereInput
    orderBy?: WalkInQueueOrderByWithAggregationInput | WalkInQueueOrderByWithAggregationInput[]
    by: WalkInQueueScalarFieldEnum[] | WalkInQueueScalarFieldEnum
    having?: WalkInQueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalkInQueueCountAggregateInputType | true
    _avg?: WalkInQueueAvgAggregateInputType
    _sum?: WalkInQueueSumAggregateInputType
    _min?: WalkInQueueMinAggregateInputType
    _max?: WalkInQueueMaxAggregateInputType
  }

  export type WalkInQueueGroupByOutputType = {
    id: string
    patientName: string
    phoneNumber: string | null
    priority: number
    reason: string
    assignedTo: string | null
    status: string
    checkInTime: Date
    checkOutTime: Date | null
    _count: WalkInQueueCountAggregateOutputType | null
    _avg: WalkInQueueAvgAggregateOutputType | null
    _sum: WalkInQueueSumAggregateOutputType | null
    _min: WalkInQueueMinAggregateOutputType | null
    _max: WalkInQueueMaxAggregateOutputType | null
  }

  type GetWalkInQueueGroupByPayload<T extends WalkInQueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalkInQueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalkInQueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalkInQueueGroupByOutputType[P]>
            : GetScalarType<T[P], WalkInQueueGroupByOutputType[P]>
        }
      >
    >


  export type WalkInQueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientName?: boolean
    phoneNumber?: boolean
    priority?: boolean
    reason?: boolean
    assignedTo?: boolean
    status?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
  }, ExtArgs["result"]["walkInQueue"]>

  export type WalkInQueueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientName?: boolean
    phoneNumber?: boolean
    priority?: boolean
    reason?: boolean
    assignedTo?: boolean
    status?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
  }, ExtArgs["result"]["walkInQueue"]>

  export type WalkInQueueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientName?: boolean
    phoneNumber?: boolean
    priority?: boolean
    reason?: boolean
    assignedTo?: boolean
    status?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
  }, ExtArgs["result"]["walkInQueue"]>

  export type WalkInQueueSelectScalar = {
    id?: boolean
    patientName?: boolean
    phoneNumber?: boolean
    priority?: boolean
    reason?: boolean
    assignedTo?: boolean
    status?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
  }

  export type WalkInQueueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientName" | "phoneNumber" | "priority" | "reason" | "assignedTo" | "status" | "checkInTime" | "checkOutTime", ExtArgs["result"]["walkInQueue"]>

  export type $WalkInQueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalkInQueue"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientName: string
      phoneNumber: string | null
      priority: number
      reason: string
      assignedTo: string | null
      status: string
      checkInTime: Date
      checkOutTime: Date | null
    }, ExtArgs["result"]["walkInQueue"]>
    composites: {}
  }

  type WalkInQueueGetPayload<S extends boolean | null | undefined | WalkInQueueDefaultArgs> = $Result.GetResult<Prisma.$WalkInQueuePayload, S>

  type WalkInQueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalkInQueueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalkInQueueCountAggregateInputType | true
    }

  export interface WalkInQueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalkInQueue'], meta: { name: 'WalkInQueue' } }
    /**
     * Find zero or one WalkInQueue that matches the filter.
     * @param {WalkInQueueFindUniqueArgs} args - Arguments to find a WalkInQueue
     * @example
     * // Get one WalkInQueue
     * const walkInQueue = await prisma.walkInQueue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalkInQueueFindUniqueArgs>(args: SelectSubset<T, WalkInQueueFindUniqueArgs<ExtArgs>>): Prisma__WalkInQueueClient<$Result.GetResult<Prisma.$WalkInQueuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WalkInQueue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalkInQueueFindUniqueOrThrowArgs} args - Arguments to find a WalkInQueue
     * @example
     * // Get one WalkInQueue
     * const walkInQueue = await prisma.walkInQueue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalkInQueueFindUniqueOrThrowArgs>(args: SelectSubset<T, WalkInQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalkInQueueClient<$Result.GetResult<Prisma.$WalkInQueuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalkInQueue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkInQueueFindFirstArgs} args - Arguments to find a WalkInQueue
     * @example
     * // Get one WalkInQueue
     * const walkInQueue = await prisma.walkInQueue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalkInQueueFindFirstArgs>(args?: SelectSubset<T, WalkInQueueFindFirstArgs<ExtArgs>>): Prisma__WalkInQueueClient<$Result.GetResult<Prisma.$WalkInQueuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalkInQueue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkInQueueFindFirstOrThrowArgs} args - Arguments to find a WalkInQueue
     * @example
     * // Get one WalkInQueue
     * const walkInQueue = await prisma.walkInQueue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalkInQueueFindFirstOrThrowArgs>(args?: SelectSubset<T, WalkInQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalkInQueueClient<$Result.GetResult<Prisma.$WalkInQueuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WalkInQueues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkInQueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalkInQueues
     * const walkInQueues = await prisma.walkInQueue.findMany()
     * 
     * // Get first 10 WalkInQueues
     * const walkInQueues = await prisma.walkInQueue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walkInQueueWithIdOnly = await prisma.walkInQueue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalkInQueueFindManyArgs>(args?: SelectSubset<T, WalkInQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalkInQueuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WalkInQueue.
     * @param {WalkInQueueCreateArgs} args - Arguments to create a WalkInQueue.
     * @example
     * // Create one WalkInQueue
     * const WalkInQueue = await prisma.walkInQueue.create({
     *   data: {
     *     // ... data to create a WalkInQueue
     *   }
     * })
     * 
     */
    create<T extends WalkInQueueCreateArgs>(args: SelectSubset<T, WalkInQueueCreateArgs<ExtArgs>>): Prisma__WalkInQueueClient<$Result.GetResult<Prisma.$WalkInQueuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WalkInQueues.
     * @param {WalkInQueueCreateManyArgs} args - Arguments to create many WalkInQueues.
     * @example
     * // Create many WalkInQueues
     * const walkInQueue = await prisma.walkInQueue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalkInQueueCreateManyArgs>(args?: SelectSubset<T, WalkInQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WalkInQueues and returns the data saved in the database.
     * @param {WalkInQueueCreateManyAndReturnArgs} args - Arguments to create many WalkInQueues.
     * @example
     * // Create many WalkInQueues
     * const walkInQueue = await prisma.walkInQueue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WalkInQueues and only return the `id`
     * const walkInQueueWithIdOnly = await prisma.walkInQueue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalkInQueueCreateManyAndReturnArgs>(args?: SelectSubset<T, WalkInQueueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalkInQueuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WalkInQueue.
     * @param {WalkInQueueDeleteArgs} args - Arguments to delete one WalkInQueue.
     * @example
     * // Delete one WalkInQueue
     * const WalkInQueue = await prisma.walkInQueue.delete({
     *   where: {
     *     // ... filter to delete one WalkInQueue
     *   }
     * })
     * 
     */
    delete<T extends WalkInQueueDeleteArgs>(args: SelectSubset<T, WalkInQueueDeleteArgs<ExtArgs>>): Prisma__WalkInQueueClient<$Result.GetResult<Prisma.$WalkInQueuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WalkInQueue.
     * @param {WalkInQueueUpdateArgs} args - Arguments to update one WalkInQueue.
     * @example
     * // Update one WalkInQueue
     * const walkInQueue = await prisma.walkInQueue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalkInQueueUpdateArgs>(args: SelectSubset<T, WalkInQueueUpdateArgs<ExtArgs>>): Prisma__WalkInQueueClient<$Result.GetResult<Prisma.$WalkInQueuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WalkInQueues.
     * @param {WalkInQueueDeleteManyArgs} args - Arguments to filter WalkInQueues to delete.
     * @example
     * // Delete a few WalkInQueues
     * const { count } = await prisma.walkInQueue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalkInQueueDeleteManyArgs>(args?: SelectSubset<T, WalkInQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalkInQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkInQueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalkInQueues
     * const walkInQueue = await prisma.walkInQueue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalkInQueueUpdateManyArgs>(args: SelectSubset<T, WalkInQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalkInQueues and returns the data updated in the database.
     * @param {WalkInQueueUpdateManyAndReturnArgs} args - Arguments to update many WalkInQueues.
     * @example
     * // Update many WalkInQueues
     * const walkInQueue = await prisma.walkInQueue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WalkInQueues and only return the `id`
     * const walkInQueueWithIdOnly = await prisma.walkInQueue.updateManyAndReturn({
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
    updateManyAndReturn<T extends WalkInQueueUpdateManyAndReturnArgs>(args: SelectSubset<T, WalkInQueueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalkInQueuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WalkInQueue.
     * @param {WalkInQueueUpsertArgs} args - Arguments to update or create a WalkInQueue.
     * @example
     * // Update or create a WalkInQueue
     * const walkInQueue = await prisma.walkInQueue.upsert({
     *   create: {
     *     // ... data to create a WalkInQueue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalkInQueue we want to update
     *   }
     * })
     */
    upsert<T extends WalkInQueueUpsertArgs>(args: SelectSubset<T, WalkInQueueUpsertArgs<ExtArgs>>): Prisma__WalkInQueueClient<$Result.GetResult<Prisma.$WalkInQueuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WalkInQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkInQueueCountArgs} args - Arguments to filter WalkInQueues to count.
     * @example
     * // Count the number of WalkInQueues
     * const count = await prisma.walkInQueue.count({
     *   where: {
     *     // ... the filter for the WalkInQueues we want to count
     *   }
     * })
    **/
    count<T extends WalkInQueueCountArgs>(
      args?: Subset<T, WalkInQueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalkInQueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalkInQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkInQueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalkInQueueAggregateArgs>(args: Subset<T, WalkInQueueAggregateArgs>): Prisma.PrismaPromise<GetWalkInQueueAggregateType<T>>

    /**
     * Group by WalkInQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalkInQueueGroupByArgs} args - Group by arguments.
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
      T extends WalkInQueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalkInQueueGroupByArgs['orderBy'] }
        : { orderBy?: WalkInQueueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalkInQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalkInQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalkInQueue model
   */
  readonly fields: WalkInQueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalkInQueue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalkInQueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WalkInQueue model
   */
  interface WalkInQueueFieldRefs {
    readonly id: FieldRef<"WalkInQueue", 'String'>
    readonly patientName: FieldRef<"WalkInQueue", 'String'>
    readonly phoneNumber: FieldRef<"WalkInQueue", 'String'>
    readonly priority: FieldRef<"WalkInQueue", 'Int'>
    readonly reason: FieldRef<"WalkInQueue", 'String'>
    readonly assignedTo: FieldRef<"WalkInQueue", 'String'>
    readonly status: FieldRef<"WalkInQueue", 'String'>
    readonly checkInTime: FieldRef<"WalkInQueue", 'DateTime'>
    readonly checkOutTime: FieldRef<"WalkInQueue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WalkInQueue findUnique
   */
  export type WalkInQueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkInQueue
     */
    select?: WalkInQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkInQueue
     */
    omit?: WalkInQueueOmit<ExtArgs> | null
    /**
     * Filter, which WalkInQueue to fetch.
     */
    where: WalkInQueueWhereUniqueInput
  }

  /**
   * WalkInQueue findUniqueOrThrow
   */
  export type WalkInQueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkInQueue
     */
    select?: WalkInQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkInQueue
     */
    omit?: WalkInQueueOmit<ExtArgs> | null
    /**
     * Filter, which WalkInQueue to fetch.
     */
    where: WalkInQueueWhereUniqueInput
  }

  /**
   * WalkInQueue findFirst
   */
  export type WalkInQueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkInQueue
     */
    select?: WalkInQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkInQueue
     */
    omit?: WalkInQueueOmit<ExtArgs> | null
    /**
     * Filter, which WalkInQueue to fetch.
     */
    where?: WalkInQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalkInQueues to fetch.
     */
    orderBy?: WalkInQueueOrderByWithRelationInput | WalkInQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalkInQueues.
     */
    cursor?: WalkInQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalkInQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalkInQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalkInQueues.
     */
    distinct?: WalkInQueueScalarFieldEnum | WalkInQueueScalarFieldEnum[]
  }

  /**
   * WalkInQueue findFirstOrThrow
   */
  export type WalkInQueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkInQueue
     */
    select?: WalkInQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkInQueue
     */
    omit?: WalkInQueueOmit<ExtArgs> | null
    /**
     * Filter, which WalkInQueue to fetch.
     */
    where?: WalkInQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalkInQueues to fetch.
     */
    orderBy?: WalkInQueueOrderByWithRelationInput | WalkInQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalkInQueues.
     */
    cursor?: WalkInQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalkInQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalkInQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalkInQueues.
     */
    distinct?: WalkInQueueScalarFieldEnum | WalkInQueueScalarFieldEnum[]
  }

  /**
   * WalkInQueue findMany
   */
  export type WalkInQueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkInQueue
     */
    select?: WalkInQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkInQueue
     */
    omit?: WalkInQueueOmit<ExtArgs> | null
    /**
     * Filter, which WalkInQueues to fetch.
     */
    where?: WalkInQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalkInQueues to fetch.
     */
    orderBy?: WalkInQueueOrderByWithRelationInput | WalkInQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalkInQueues.
     */
    cursor?: WalkInQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalkInQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalkInQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalkInQueues.
     */
    distinct?: WalkInQueueScalarFieldEnum | WalkInQueueScalarFieldEnum[]
  }

  /**
   * WalkInQueue create
   */
  export type WalkInQueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkInQueue
     */
    select?: WalkInQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkInQueue
     */
    omit?: WalkInQueueOmit<ExtArgs> | null
    /**
     * The data needed to create a WalkInQueue.
     */
    data: XOR<WalkInQueueCreateInput, WalkInQueueUncheckedCreateInput>
  }

  /**
   * WalkInQueue createMany
   */
  export type WalkInQueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalkInQueues.
     */
    data: WalkInQueueCreateManyInput | WalkInQueueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalkInQueue createManyAndReturn
   */
  export type WalkInQueueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkInQueue
     */
    select?: WalkInQueueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalkInQueue
     */
    omit?: WalkInQueueOmit<ExtArgs> | null
    /**
     * The data used to create many WalkInQueues.
     */
    data: WalkInQueueCreateManyInput | WalkInQueueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalkInQueue update
   */
  export type WalkInQueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkInQueue
     */
    select?: WalkInQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkInQueue
     */
    omit?: WalkInQueueOmit<ExtArgs> | null
    /**
     * The data needed to update a WalkInQueue.
     */
    data: XOR<WalkInQueueUpdateInput, WalkInQueueUncheckedUpdateInput>
    /**
     * Choose, which WalkInQueue to update.
     */
    where: WalkInQueueWhereUniqueInput
  }

  /**
   * WalkInQueue updateMany
   */
  export type WalkInQueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalkInQueues.
     */
    data: XOR<WalkInQueueUpdateManyMutationInput, WalkInQueueUncheckedUpdateManyInput>
    /**
     * Filter which WalkInQueues to update
     */
    where?: WalkInQueueWhereInput
    /**
     * Limit how many WalkInQueues to update.
     */
    limit?: number
  }

  /**
   * WalkInQueue updateManyAndReturn
   */
  export type WalkInQueueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkInQueue
     */
    select?: WalkInQueueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalkInQueue
     */
    omit?: WalkInQueueOmit<ExtArgs> | null
    /**
     * The data used to update WalkInQueues.
     */
    data: XOR<WalkInQueueUpdateManyMutationInput, WalkInQueueUncheckedUpdateManyInput>
    /**
     * Filter which WalkInQueues to update
     */
    where?: WalkInQueueWhereInput
    /**
     * Limit how many WalkInQueues to update.
     */
    limit?: number
  }

  /**
   * WalkInQueue upsert
   */
  export type WalkInQueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkInQueue
     */
    select?: WalkInQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkInQueue
     */
    omit?: WalkInQueueOmit<ExtArgs> | null
    /**
     * The filter to search for the WalkInQueue to update in case it exists.
     */
    where: WalkInQueueWhereUniqueInput
    /**
     * In case the WalkInQueue found by the `where` argument doesn't exist, create a new WalkInQueue with this data.
     */
    create: XOR<WalkInQueueCreateInput, WalkInQueueUncheckedCreateInput>
    /**
     * In case the WalkInQueue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalkInQueueUpdateInput, WalkInQueueUncheckedUpdateInput>
  }

  /**
   * WalkInQueue delete
   */
  export type WalkInQueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkInQueue
     */
    select?: WalkInQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkInQueue
     */
    omit?: WalkInQueueOmit<ExtArgs> | null
    /**
     * Filter which WalkInQueue to delete.
     */
    where: WalkInQueueWhereUniqueInput
  }

  /**
   * WalkInQueue deleteMany
   */
  export type WalkInQueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalkInQueues to delete
     */
    where?: WalkInQueueWhereInput
    /**
     * Limit how many WalkInQueues to delete.
     */
    limit?: number
  }

  /**
   * WalkInQueue without action
   */
  export type WalkInQueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalkInQueue
     */
    select?: WalkInQueueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalkInQueue
     */
    omit?: WalkInQueueOmit<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    role: 'role',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    dateOfBirth: 'dateOfBirth',
    bloodGroup: 'bloodGroup',
    allergies: 'allergies',
    address: 'address',
    medicalHistory: 'medicalHistory'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    specialization: 'specialization',
    licenseNumber: 'licenseNumber',
    department: 'department',
    availability: 'availability'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accessLevel: 'accessLevel'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ReceptionistScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    shiftHours: 'shiftHours',
    deskNumber: 'deskNumber'
  };

  export type ReceptionistScalarFieldEnum = (typeof ReceptionistScalarFieldEnum)[keyof typeof ReceptionistScalarFieldEnum]


  export const PharmacistScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    licenseNumber: 'licenseNumber'
  };

  export type PharmacistScalarFieldEnum = (typeof PharmacistScalarFieldEnum)[keyof typeof PharmacistScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    reasonForVisit: 'reasonForVisit',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const MedicalRecordScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    appointmentId: 'appointmentId',
    diagnosis: 'diagnosis',
    symptoms: 'symptoms',
    treatment: 'treatment',
    notes: 'notes',
    files: 'files',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicalRecordScalarFieldEnum = (typeof MedicalRecordScalarFieldEnum)[keyof typeof MedicalRecordScalarFieldEnum]


  export const PrescriptionScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    doctorId: 'doctorId',
    medicalRecordId: 'medicalRecordId',
    pharmacistId: 'pharmacistId',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PrescriptionScalarFieldEnum = (typeof PrescriptionScalarFieldEnum)[keyof typeof PrescriptionScalarFieldEnum]


  export const PrescriptionItemScalarFieldEnum: {
    id: 'id',
    prescriptionId: 'prescriptionId',
    medicationId: 'medicationId',
    dosage: 'dosage',
    frequency: 'frequency',
    durationDays: 'durationDays',
    quantity: 'quantity'
  };

  export type PrescriptionItemScalarFieldEnum = (typeof PrescriptionItemScalarFieldEnum)[keyof typeof PrescriptionItemScalarFieldEnum]


  export const MedicationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brandName: 'brandName',
    description: 'description',
    stockQuantity: 'stockQuantity',
    unitPrice: 'unitPrice',
    requiresPrescription: 'requiresPrescription',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicationScalarFieldEnum = (typeof MedicationScalarFieldEnum)[keyof typeof MedicationScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    receptionistId: 'receptionistId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    paymentMethod: 'paymentMethod',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const WalkInQueueScalarFieldEnum: {
    id: 'id',
    patientName: 'patientName',
    phoneNumber: 'phoneNumber',
    priority: 'priority',
    reason: 'reason',
    assignedTo: 'assignedTo',
    status: 'status',
    checkInTime: 'checkInTime',
    checkOutTime: 'checkOutTime'
  };

  export type WalkInQueueScalarFieldEnum = (typeof WalkInQueueScalarFieldEnum)[keyof typeof WalkInQueueScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'PrescriptionStatus'
   */
  export type EnumPrescriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrescriptionStatus'>
    


  /**
   * Reference to a field of type 'PrescriptionStatus[]'
   */
  export type ListEnumPrescriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrescriptionStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    patientProfile?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    doctorProfile?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    adminProfile?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    receptionistProfile?: XOR<ReceptionistNullableScalarRelationFilter, ReceptionistWhereInput> | null
    pharmacistProfile?: XOR<PharmacistNullableScalarRelationFilter, PharmacistWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patientProfile?: PatientOrderByWithRelationInput
    doctorProfile?: DoctorOrderByWithRelationInput
    adminProfile?: AdminOrderByWithRelationInput
    receptionistProfile?: ReceptionistOrderByWithRelationInput
    pharmacistProfile?: PharmacistOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    patientProfile?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
    doctorProfile?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    adminProfile?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    receptionistProfile?: XOR<ReceptionistNullableScalarRelationFilter, ReceptionistWhereInput> | null
    pharmacistProfile?: XOR<PharmacistNullableScalarRelationFilter, PharmacistWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    userId?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    bloodGroup?: StringNullableFilter<"Patient"> | string | null
    allergies?: StringNullableListFilter<"Patient">
    address?: StringNullableFilter<"Patient"> | string | null
    medicalHistory?: StringNullableFilter<"Patient"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
    medicalRecords?: MedicalRecordListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    allergies?: SortOrder
    address?: SortOrderInput | SortOrder
    medicalHistory?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
    medicalRecords?: MedicalRecordOrderByRelationAggregateInput
    prescriptions?: PrescriptionOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    dateOfBirth?: DateTimeFilter<"Patient"> | Date | string
    bloodGroup?: StringNullableFilter<"Patient"> | string | null
    allergies?: StringNullableListFilter<"Patient">
    address?: StringNullableFilter<"Patient"> | string | null
    medicalHistory?: StringNullableFilter<"Patient"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
    medicalRecords?: MedicalRecordListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id" | "userId">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    allergies?: SortOrder
    address?: SortOrderInput | SortOrder
    medicalHistory?: SortOrderInput | SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    userId?: StringWithAggregatesFilter<"Patient"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    bloodGroup?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    allergies?: StringNullableListFilter<"Patient">
    address?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    medicalHistory?: StringNullableWithAggregatesFilter<"Patient"> | string | null
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: StringFilter<"Doctor"> | string
    userId?: StringFilter<"Doctor"> | string
    specialization?: StringFilter<"Doctor"> | string
    licenseNumber?: StringFilter<"Doctor"> | string
    department?: StringFilter<"Doctor"> | string
    availability?: JsonNullableFilter<"Doctor">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
    medicalRecords?: MedicalRecordListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    licenseNumber?: SortOrder
    department?: SortOrder
    availability?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    appointments?: AppointmentOrderByRelationAggregateInput
    medicalRecords?: MedicalRecordOrderByRelationAggregateInput
    prescriptions?: PrescriptionOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    licenseNumber?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    specialization?: StringFilter<"Doctor"> | string
    department?: StringFilter<"Doctor"> | string
    availability?: JsonNullableFilter<"Doctor">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    appointments?: AppointmentListRelationFilter
    medicalRecords?: MedicalRecordListRelationFilter
    prescriptions?: PrescriptionListRelationFilter
  }, "id" | "userId" | "licenseNumber">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    licenseNumber?: SortOrder
    department?: SortOrder
    availability?: SortOrderInput | SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doctor"> | string
    userId?: StringWithAggregatesFilter<"Doctor"> | string
    specialization?: StringWithAggregatesFilter<"Doctor"> | string
    licenseNumber?: StringWithAggregatesFilter<"Doctor"> | string
    department?: StringWithAggregatesFilter<"Doctor"> | string
    availability?: JsonNullableWithAggregatesFilter<"Doctor">
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    userId?: StringFilter<"Admin"> | string
    accessLevel?: IntFilter<"Admin"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accessLevel?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    accessLevel?: IntFilter<"Admin"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accessLevel?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    userId?: StringWithAggregatesFilter<"Admin"> | string
    accessLevel?: IntWithAggregatesFilter<"Admin"> | number
  }

  export type ReceptionistWhereInput = {
    AND?: ReceptionistWhereInput | ReceptionistWhereInput[]
    OR?: ReceptionistWhereInput[]
    NOT?: ReceptionistWhereInput | ReceptionistWhereInput[]
    id?: StringFilter<"Receptionist"> | string
    userId?: StringFilter<"Receptionist"> | string
    shiftHours?: StringNullableFilter<"Receptionist"> | string | null
    deskNumber?: StringNullableFilter<"Receptionist"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    handledTransactions?: TransactionListRelationFilter
  }

  export type ReceptionistOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftHours?: SortOrderInput | SortOrder
    deskNumber?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    handledTransactions?: TransactionOrderByRelationAggregateInput
  }

  export type ReceptionistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ReceptionistWhereInput | ReceptionistWhereInput[]
    OR?: ReceptionistWhereInput[]
    NOT?: ReceptionistWhereInput | ReceptionistWhereInput[]
    shiftHours?: StringNullableFilter<"Receptionist"> | string | null
    deskNumber?: StringNullableFilter<"Receptionist"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    handledTransactions?: TransactionListRelationFilter
  }, "id" | "userId">

  export type ReceptionistOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftHours?: SortOrderInput | SortOrder
    deskNumber?: SortOrderInput | SortOrder
    _count?: ReceptionistCountOrderByAggregateInput
    _max?: ReceptionistMaxOrderByAggregateInput
    _min?: ReceptionistMinOrderByAggregateInput
  }

  export type ReceptionistScalarWhereWithAggregatesInput = {
    AND?: ReceptionistScalarWhereWithAggregatesInput | ReceptionistScalarWhereWithAggregatesInput[]
    OR?: ReceptionistScalarWhereWithAggregatesInput[]
    NOT?: ReceptionistScalarWhereWithAggregatesInput | ReceptionistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Receptionist"> | string
    userId?: StringWithAggregatesFilter<"Receptionist"> | string
    shiftHours?: StringNullableWithAggregatesFilter<"Receptionist"> | string | null
    deskNumber?: StringNullableWithAggregatesFilter<"Receptionist"> | string | null
  }

  export type PharmacistWhereInput = {
    AND?: PharmacistWhereInput | PharmacistWhereInput[]
    OR?: PharmacistWhereInput[]
    NOT?: PharmacistWhereInput | PharmacistWhereInput[]
    id?: StringFilter<"Pharmacist"> | string
    userId?: StringFilter<"Pharmacist"> | string
    licenseNumber?: StringFilter<"Pharmacist"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dispensedPrescriptions?: PrescriptionListRelationFilter
  }

  export type PharmacistOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    licenseNumber?: SortOrder
    user?: UserOrderByWithRelationInput
    dispensedPrescriptions?: PrescriptionOrderByRelationAggregateInput
  }

  export type PharmacistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    licenseNumber?: string
    AND?: PharmacistWhereInput | PharmacistWhereInput[]
    OR?: PharmacistWhereInput[]
    NOT?: PharmacistWhereInput | PharmacistWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dispensedPrescriptions?: PrescriptionListRelationFilter
  }, "id" | "userId" | "licenseNumber">

  export type PharmacistOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    licenseNumber?: SortOrder
    _count?: PharmacistCountOrderByAggregateInput
    _max?: PharmacistMaxOrderByAggregateInput
    _min?: PharmacistMinOrderByAggregateInput
  }

  export type PharmacistScalarWhereWithAggregatesInput = {
    AND?: PharmacistScalarWhereWithAggregatesInput | PharmacistScalarWhereWithAggregatesInput[]
    OR?: PharmacistScalarWhereWithAggregatesInput[]
    NOT?: PharmacistScalarWhereWithAggregatesInput | PharmacistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pharmacist"> | string
    userId?: StringWithAggregatesFilter<"Pharmacist"> | string
    licenseNumber?: StringWithAggregatesFilter<"Pharmacist"> | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    reasonForVisit?: StringNullableFilter<"Appointment"> | string | null
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    medicalRecord?: XOR<MedicalRecordNullableScalarRelationFilter, MedicalRecordWhereInput> | null
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    reasonForVisit?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    medicalRecord?: MedicalRecordOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    reasonForVisit?: StringNullableFilter<"Appointment"> | string | null
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    medicalRecord?: XOR<MedicalRecordNullableScalarRelationFilter, MedicalRecordWhereInput> | null
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    reasonForVisit?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    patientId?: StringWithAggregatesFilter<"Appointment"> | string
    doctorId?: StringWithAggregatesFilter<"Appointment"> | string
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    reasonForVisit?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type MedicalRecordWhereInput = {
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    id?: StringFilter<"MedicalRecord"> | string
    patientId?: StringFilter<"MedicalRecord"> | string
    doctorId?: StringFilter<"MedicalRecord"> | string
    appointmentId?: StringNullableFilter<"MedicalRecord"> | string | null
    diagnosis?: StringFilter<"MedicalRecord"> | string
    symptoms?: StringNullableListFilter<"MedicalRecord">
    treatment?: StringFilter<"MedicalRecord"> | string
    notes?: StringNullableFilter<"MedicalRecord"> | string | null
    files?: StringNullableListFilter<"MedicalRecord">
    createdAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
    prescriptions?: PrescriptionListRelationFilter
  }

  export type MedicalRecordOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    diagnosis?: SortOrder
    symptoms?: SortOrder
    treatment?: SortOrder
    notes?: SortOrderInput | SortOrder
    files?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    appointment?: AppointmentOrderByWithRelationInput
    prescriptions?: PrescriptionOrderByRelationAggregateInput
  }

  export type MedicalRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    appointmentId?: string
    AND?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    OR?: MedicalRecordWhereInput[]
    NOT?: MedicalRecordWhereInput | MedicalRecordWhereInput[]
    patientId?: StringFilter<"MedicalRecord"> | string
    doctorId?: StringFilter<"MedicalRecord"> | string
    diagnosis?: StringFilter<"MedicalRecord"> | string
    symptoms?: StringNullableListFilter<"MedicalRecord">
    treatment?: StringFilter<"MedicalRecord"> | string
    notes?: StringNullableFilter<"MedicalRecord"> | string | null
    files?: StringNullableListFilter<"MedicalRecord">
    createdAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    appointment?: XOR<AppointmentNullableScalarRelationFilter, AppointmentWhereInput> | null
    prescriptions?: PrescriptionListRelationFilter
  }, "id" | "appointmentId">

  export type MedicalRecordOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrderInput | SortOrder
    diagnosis?: SortOrder
    symptoms?: SortOrder
    treatment?: SortOrder
    notes?: SortOrderInput | SortOrder
    files?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicalRecordCountOrderByAggregateInput
    _max?: MedicalRecordMaxOrderByAggregateInput
    _min?: MedicalRecordMinOrderByAggregateInput
  }

  export type MedicalRecordScalarWhereWithAggregatesInput = {
    AND?: MedicalRecordScalarWhereWithAggregatesInput | MedicalRecordScalarWhereWithAggregatesInput[]
    OR?: MedicalRecordScalarWhereWithAggregatesInput[]
    NOT?: MedicalRecordScalarWhereWithAggregatesInput | MedicalRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicalRecord"> | string
    patientId?: StringWithAggregatesFilter<"MedicalRecord"> | string
    doctorId?: StringWithAggregatesFilter<"MedicalRecord"> | string
    appointmentId?: StringNullableWithAggregatesFilter<"MedicalRecord"> | string | null
    diagnosis?: StringWithAggregatesFilter<"MedicalRecord"> | string
    symptoms?: StringNullableListFilter<"MedicalRecord">
    treatment?: StringWithAggregatesFilter<"MedicalRecord"> | string
    notes?: StringNullableWithAggregatesFilter<"MedicalRecord"> | string | null
    files?: StringNullableListFilter<"MedicalRecord">
    createdAt?: DateTimeWithAggregatesFilter<"MedicalRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicalRecord"> | Date | string
  }

  export type PrescriptionWhereInput = {
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    id?: StringFilter<"Prescription"> | string
    patientId?: StringFilter<"Prescription"> | string
    doctorId?: StringFilter<"Prescription"> | string
    medicalRecordId?: StringNullableFilter<"Prescription"> | string | null
    pharmacistId?: StringNullableFilter<"Prescription"> | string | null
    status?: EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus
    notes?: StringNullableFilter<"Prescription"> | string | null
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    updatedAt?: DateTimeFilter<"Prescription"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    medicalRecord?: XOR<MedicalRecordNullableScalarRelationFilter, MedicalRecordWhereInput> | null
    pharmacist?: XOR<PharmacistNullableScalarRelationFilter, PharmacistWhereInput> | null
    items?: PrescriptionItemListRelationFilter
  }

  export type PrescriptionOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    medicalRecordId?: SortOrderInput | SortOrder
    pharmacistId?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    medicalRecord?: MedicalRecordOrderByWithRelationInput
    pharmacist?: PharmacistOrderByWithRelationInput
    items?: PrescriptionItemOrderByRelationAggregateInput
  }

  export type PrescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    patientId?: StringFilter<"Prescription"> | string
    doctorId?: StringFilter<"Prescription"> | string
    medicalRecordId?: StringNullableFilter<"Prescription"> | string | null
    pharmacistId?: StringNullableFilter<"Prescription"> | string | null
    status?: EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus
    notes?: StringNullableFilter<"Prescription"> | string | null
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    updatedAt?: DateTimeFilter<"Prescription"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    medicalRecord?: XOR<MedicalRecordNullableScalarRelationFilter, MedicalRecordWhereInput> | null
    pharmacist?: XOR<PharmacistNullableScalarRelationFilter, PharmacistWhereInput> | null
    items?: PrescriptionItemListRelationFilter
  }, "id">

  export type PrescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    medicalRecordId?: SortOrderInput | SortOrder
    pharmacistId?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PrescriptionCountOrderByAggregateInput
    _max?: PrescriptionMaxOrderByAggregateInput
    _min?: PrescriptionMinOrderByAggregateInput
  }

  export type PrescriptionScalarWhereWithAggregatesInput = {
    AND?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    OR?: PrescriptionScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prescription"> | string
    patientId?: StringWithAggregatesFilter<"Prescription"> | string
    doctorId?: StringWithAggregatesFilter<"Prescription"> | string
    medicalRecordId?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    pharmacistId?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    status?: EnumPrescriptionStatusWithAggregatesFilter<"Prescription"> | $Enums.PrescriptionStatus
    notes?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Prescription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Prescription"> | Date | string
  }

  export type PrescriptionItemWhereInput = {
    AND?: PrescriptionItemWhereInput | PrescriptionItemWhereInput[]
    OR?: PrescriptionItemWhereInput[]
    NOT?: PrescriptionItemWhereInput | PrescriptionItemWhereInput[]
    id?: StringFilter<"PrescriptionItem"> | string
    prescriptionId?: StringFilter<"PrescriptionItem"> | string
    medicationId?: StringFilter<"PrescriptionItem"> | string
    dosage?: StringFilter<"PrescriptionItem"> | string
    frequency?: StringFilter<"PrescriptionItem"> | string
    durationDays?: IntFilter<"PrescriptionItem"> | number
    quantity?: IntFilter<"PrescriptionItem"> | number
    prescription?: XOR<PrescriptionScalarRelationFilter, PrescriptionWhereInput>
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
  }

  export type PrescriptionItemOrderByWithRelationInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    medicationId?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    durationDays?: SortOrder
    quantity?: SortOrder
    prescription?: PrescriptionOrderByWithRelationInput
    medication?: MedicationOrderByWithRelationInput
  }

  export type PrescriptionItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrescriptionItemWhereInput | PrescriptionItemWhereInput[]
    OR?: PrescriptionItemWhereInput[]
    NOT?: PrescriptionItemWhereInput | PrescriptionItemWhereInput[]
    prescriptionId?: StringFilter<"PrescriptionItem"> | string
    medicationId?: StringFilter<"PrescriptionItem"> | string
    dosage?: StringFilter<"PrescriptionItem"> | string
    frequency?: StringFilter<"PrescriptionItem"> | string
    durationDays?: IntFilter<"PrescriptionItem"> | number
    quantity?: IntFilter<"PrescriptionItem"> | number
    prescription?: XOR<PrescriptionScalarRelationFilter, PrescriptionWhereInput>
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
  }, "id">

  export type PrescriptionItemOrderByWithAggregationInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    medicationId?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    durationDays?: SortOrder
    quantity?: SortOrder
    _count?: PrescriptionItemCountOrderByAggregateInput
    _avg?: PrescriptionItemAvgOrderByAggregateInput
    _max?: PrescriptionItemMaxOrderByAggregateInput
    _min?: PrescriptionItemMinOrderByAggregateInput
    _sum?: PrescriptionItemSumOrderByAggregateInput
  }

  export type PrescriptionItemScalarWhereWithAggregatesInput = {
    AND?: PrescriptionItemScalarWhereWithAggregatesInput | PrescriptionItemScalarWhereWithAggregatesInput[]
    OR?: PrescriptionItemScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionItemScalarWhereWithAggregatesInput | PrescriptionItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PrescriptionItem"> | string
    prescriptionId?: StringWithAggregatesFilter<"PrescriptionItem"> | string
    medicationId?: StringWithAggregatesFilter<"PrescriptionItem"> | string
    dosage?: StringWithAggregatesFilter<"PrescriptionItem"> | string
    frequency?: StringWithAggregatesFilter<"PrescriptionItem"> | string
    durationDays?: IntWithAggregatesFilter<"PrescriptionItem"> | number
    quantity?: IntWithAggregatesFilter<"PrescriptionItem"> | number
  }

  export type MedicationWhereInput = {
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    id?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    brandName?: StringNullableFilter<"Medication"> | string | null
    description?: StringNullableFilter<"Medication"> | string | null
    stockQuantity?: IntFilter<"Medication"> | number
    unitPrice?: FloatFilter<"Medication"> | number
    requiresPrescription?: BoolFilter<"Medication"> | boolean
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
    prescriptionItems?: PrescriptionItemListRelationFilter
  }

  export type MedicationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brandName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    stockQuantity?: SortOrder
    unitPrice?: SortOrder
    requiresPrescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prescriptionItems?: PrescriptionItemOrderByRelationAggregateInput
  }

  export type MedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    name?: StringFilter<"Medication"> | string
    brandName?: StringNullableFilter<"Medication"> | string | null
    description?: StringNullableFilter<"Medication"> | string | null
    stockQuantity?: IntFilter<"Medication"> | number
    unitPrice?: FloatFilter<"Medication"> | number
    requiresPrescription?: BoolFilter<"Medication"> | boolean
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
    prescriptionItems?: PrescriptionItemListRelationFilter
  }, "id">

  export type MedicationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brandName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    stockQuantity?: SortOrder
    unitPrice?: SortOrder
    requiresPrescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicationCountOrderByAggregateInput
    _avg?: MedicationAvgOrderByAggregateInput
    _max?: MedicationMaxOrderByAggregateInput
    _min?: MedicationMinOrderByAggregateInput
    _sum?: MedicationSumOrderByAggregateInput
  }

  export type MedicationScalarWhereWithAggregatesInput = {
    AND?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    OR?: MedicationScalarWhereWithAggregatesInput[]
    NOT?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medication"> | string
    name?: StringWithAggregatesFilter<"Medication"> | string
    brandName?: StringNullableWithAggregatesFilter<"Medication"> | string | null
    description?: StringNullableWithAggregatesFilter<"Medication"> | string | null
    stockQuantity?: IntWithAggregatesFilter<"Medication"> | number
    unitPrice?: FloatWithAggregatesFilter<"Medication"> | number
    requiresPrescription?: BoolWithAggregatesFilter<"Medication"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    patientId?: StringFilter<"Transaction"> | string
    receptionistId?: StringNullableFilter<"Transaction"> | string | null
    amount?: FloatFilter<"Transaction"> | number
    currency?: StringFilter<"Transaction"> | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    paymentMethod?: StringNullableFilter<"Transaction"> | string | null
    description?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    receptionist?: XOR<ReceptionistNullableScalarRelationFilter, ReceptionistWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    receptionistId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    receptionist?: ReceptionistOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    patientId?: StringFilter<"Transaction"> | string
    receptionistId?: StringNullableFilter<"Transaction"> | string | null
    amount?: FloatFilter<"Transaction"> | number
    currency?: StringFilter<"Transaction"> | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    paymentMethod?: StringNullableFilter<"Transaction"> | string | null
    description?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    receptionist?: XOR<ReceptionistNullableScalarRelationFilter, ReceptionistWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    receptionistId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    patientId?: StringWithAggregatesFilter<"Transaction"> | string
    receptionistId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    currency?: StringWithAggregatesFilter<"Transaction"> | string
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    paymentMethod?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    description?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type WalkInQueueWhereInput = {
    AND?: WalkInQueueWhereInput | WalkInQueueWhereInput[]
    OR?: WalkInQueueWhereInput[]
    NOT?: WalkInQueueWhereInput | WalkInQueueWhereInput[]
    id?: StringFilter<"WalkInQueue"> | string
    patientName?: StringFilter<"WalkInQueue"> | string
    phoneNumber?: StringNullableFilter<"WalkInQueue"> | string | null
    priority?: IntFilter<"WalkInQueue"> | number
    reason?: StringFilter<"WalkInQueue"> | string
    assignedTo?: StringNullableFilter<"WalkInQueue"> | string | null
    status?: StringFilter<"WalkInQueue"> | string
    checkInTime?: DateTimeFilter<"WalkInQueue"> | Date | string
    checkOutTime?: DateTimeNullableFilter<"WalkInQueue"> | Date | string | null
  }

  export type WalkInQueueOrderByWithRelationInput = {
    id?: SortOrder
    patientName?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    priority?: SortOrder
    reason?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    status?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrderInput | SortOrder
  }

  export type WalkInQueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WalkInQueueWhereInput | WalkInQueueWhereInput[]
    OR?: WalkInQueueWhereInput[]
    NOT?: WalkInQueueWhereInput | WalkInQueueWhereInput[]
    patientName?: StringFilter<"WalkInQueue"> | string
    phoneNumber?: StringNullableFilter<"WalkInQueue"> | string | null
    priority?: IntFilter<"WalkInQueue"> | number
    reason?: StringFilter<"WalkInQueue"> | string
    assignedTo?: StringNullableFilter<"WalkInQueue"> | string | null
    status?: StringFilter<"WalkInQueue"> | string
    checkInTime?: DateTimeFilter<"WalkInQueue"> | Date | string
    checkOutTime?: DateTimeNullableFilter<"WalkInQueue"> | Date | string | null
  }, "id">

  export type WalkInQueueOrderByWithAggregationInput = {
    id?: SortOrder
    patientName?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    priority?: SortOrder
    reason?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    status?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrderInput | SortOrder
    _count?: WalkInQueueCountOrderByAggregateInput
    _avg?: WalkInQueueAvgOrderByAggregateInput
    _max?: WalkInQueueMaxOrderByAggregateInput
    _min?: WalkInQueueMinOrderByAggregateInput
    _sum?: WalkInQueueSumOrderByAggregateInput
  }

  export type WalkInQueueScalarWhereWithAggregatesInput = {
    AND?: WalkInQueueScalarWhereWithAggregatesInput | WalkInQueueScalarWhereWithAggregatesInput[]
    OR?: WalkInQueueScalarWhereWithAggregatesInput[]
    NOT?: WalkInQueueScalarWhereWithAggregatesInput | WalkInQueueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WalkInQueue"> | string
    patientName?: StringWithAggregatesFilter<"WalkInQueue"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"WalkInQueue"> | string | null
    priority?: IntWithAggregatesFilter<"WalkInQueue"> | number
    reason?: StringWithAggregatesFilter<"WalkInQueue"> | string
    assignedTo?: StringNullableWithAggregatesFilter<"WalkInQueue"> | string | null
    status?: StringWithAggregatesFilter<"WalkInQueue"> | string
    checkInTime?: DateTimeWithAggregatesFilter<"WalkInQueue"> | Date | string
    checkOutTime?: DateTimeNullableWithAggregatesFilter<"WalkInQueue"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientProfile?: PatientCreateNestedOneWithoutUserInput
    doctorProfile?: DoctorCreateNestedOneWithoutUserInput
    adminProfile?: AdminCreateNestedOneWithoutUserInput
    receptionistProfile?: ReceptionistCreateNestedOneWithoutUserInput
    pharmacistProfile?: PharmacistCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientProfile?: PatientUncheckedCreateNestedOneWithoutUserInput
    doctorProfile?: DoctorUncheckedCreateNestedOneWithoutUserInput
    adminProfile?: AdminUncheckedCreateNestedOneWithoutUserInput
    receptionistProfile?: ReceptionistUncheckedCreateNestedOneWithoutUserInput
    pharmacistProfile?: PharmacistUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientUpdateOneWithoutUserNestedInput
    doctorProfile?: DoctorUpdateOneWithoutUserNestedInput
    adminProfile?: AdminUpdateOneWithoutUserNestedInput
    receptionistProfile?: ReceptionistUpdateOneWithoutUserNestedInput
    pharmacistProfile?: PharmacistUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientUncheckedUpdateOneWithoutUserNestedInput
    doctorProfile?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    adminProfile?: AdminUncheckedUpdateOneWithoutUserNestedInput
    receptionistProfile?: ReceptionistUncheckedUpdateOneWithoutUserNestedInput
    pharmacistProfile?: PharmacistUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    id?: string
    dateOfBirth: Date | string
    bloodGroup?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    address?: string | null
    medicalHistory?: string | null
    user: UserCreateNestedOneWithoutPatientProfileInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    medicalRecords?: MedicalRecordCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
    transactions?: TransactionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    userId: string
    dateOfBirth: Date | string
    bloodGroup?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    address?: string | null
    medicalHistory?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    address?: NullableStringFieldUpdateOperationsInput | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    medicalRecords?: MedicalRecordUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
    transactions?: TransactionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    address?: NullableStringFieldUpdateOperationsInput | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    userId: string
    dateOfBirth: Date | string
    bloodGroup?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    address?: string | null
    medicalHistory?: string | null
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    address?: NullableStringFieldUpdateOperationsInput | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    address?: NullableStringFieldUpdateOperationsInput | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorCreateInput = {
    id?: string
    specialization: string
    licenseNumber: string
    department: string
    availability?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutDoctorProfileInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    medicalRecords?: MedicalRecordCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: string
    userId: string
    specialization: string
    licenseNumber: string
    department: string
    availability?: NullableJsonNullValueInput | InputJsonValue
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    availability?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutDoctorProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    medicalRecords?: MedicalRecordUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    availability?: NullableJsonNullValueInput | InputJsonValue
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: string
    userId: string
    specialization: string
    licenseNumber: string
    department: string
    availability?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DoctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    availability?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    availability?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AdminCreateInput = {
    id?: string
    accessLevel?: number
    user: UserCreateNestedOneWithoutAdminProfileInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    userId: string
    accessLevel?: number
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessLevel?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutAdminProfileNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessLevel?: IntFieldUpdateOperationsInput | number
  }

  export type AdminCreateManyInput = {
    id?: string
    userId: string
    accessLevel?: number
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessLevel?: IntFieldUpdateOperationsInput | number
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessLevel?: IntFieldUpdateOperationsInput | number
  }

  export type ReceptionistCreateInput = {
    id?: string
    shiftHours?: string | null
    deskNumber?: string | null
    user: UserCreateNestedOneWithoutReceptionistProfileInput
    handledTransactions?: TransactionCreateNestedManyWithoutReceptionistInput
  }

  export type ReceptionistUncheckedCreateInput = {
    id?: string
    userId: string
    shiftHours?: string | null
    deskNumber?: string | null
    handledTransactions?: TransactionUncheckedCreateNestedManyWithoutReceptionistInput
  }

  export type ReceptionistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftHours?: NullableStringFieldUpdateOperationsInput | string | null
    deskNumber?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutReceptionistProfileNestedInput
    handledTransactions?: TransactionUpdateManyWithoutReceptionistNestedInput
  }

  export type ReceptionistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shiftHours?: NullableStringFieldUpdateOperationsInput | string | null
    deskNumber?: NullableStringFieldUpdateOperationsInput | string | null
    handledTransactions?: TransactionUncheckedUpdateManyWithoutReceptionistNestedInput
  }

  export type ReceptionistCreateManyInput = {
    id?: string
    userId: string
    shiftHours?: string | null
    deskNumber?: string | null
  }

  export type ReceptionistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftHours?: NullableStringFieldUpdateOperationsInput | string | null
    deskNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReceptionistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shiftHours?: NullableStringFieldUpdateOperationsInput | string | null
    deskNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PharmacistCreateInput = {
    id?: string
    licenseNumber: string
    user: UserCreateNestedOneWithoutPharmacistProfileInput
    dispensedPrescriptions?: PrescriptionCreateNestedManyWithoutPharmacistInput
  }

  export type PharmacistUncheckedCreateInput = {
    id?: string
    userId: string
    licenseNumber: string
    dispensedPrescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPharmacistInput
  }

  export type PharmacistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPharmacistProfileNestedInput
    dispensedPrescriptions?: PrescriptionUpdateManyWithoutPharmacistNestedInput
  }

  export type PharmacistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    dispensedPrescriptions?: PrescriptionUncheckedUpdateManyWithoutPharmacistNestedInput
  }

  export type PharmacistCreateManyInput = {
    id?: string
    userId: string
    licenseNumber: string
  }

  export type PharmacistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PharmacistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    reasonForVisit?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    patientId: string
    doctorId: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    reasonForVisit?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalRecord?: MedicalRecordUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reasonForVisit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reasonForVisit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecord?: MedicalRecordUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: string
    patientId: string
    doctorId: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    reasonForVisit?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reasonForVisit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reasonForVisit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordCreateInput = {
    id?: string
    diagnosis: string
    symptoms?: MedicalRecordCreatesymptomsInput | string[]
    treatment: string
    notes?: string | null
    files?: MedicalRecordCreatefilesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicalRecordsInput
    doctor: DoctorCreateNestedOneWithoutMedicalRecordsInput
    appointment?: AppointmentCreateNestedOneWithoutMedicalRecordInput
    prescriptions?: PrescriptionCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordUncheckedCreateInput = {
    id?: string
    patientId: string
    doctorId: string
    appointmentId?: string | null
    diagnosis: string
    symptoms?: MedicalRecordCreatesymptomsInput | string[]
    treatment: string
    notes?: string | null
    files?: MedicalRecordCreatefilesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalRecordUpdatesymptomsInput | string[]
    treatment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    files?: MedicalRecordUpdatefilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicalRecordsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInput
    appointment?: AppointmentUpdateOneWithoutMedicalRecordNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosis?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalRecordUpdatesymptomsInput | string[]
    treatment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    files?: MedicalRecordUpdatefilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordCreateManyInput = {
    id?: string
    patientId: string
    doctorId: string
    appointmentId?: string | null
    diagnosis: string
    symptoms?: MedicalRecordCreatesymptomsInput | string[]
    treatment: string
    notes?: string | null
    files?: MedicalRecordCreatefilesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalRecordUpdatesymptomsInput | string[]
    treatment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    files?: MedicalRecordUpdatefilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosis?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalRecordUpdatesymptomsInput | string[]
    treatment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    files?: MedicalRecordUpdatefilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionCreateInput = {
    id?: string
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
    doctor: DoctorCreateNestedOneWithoutPrescriptionsInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutPrescriptionsInput
    pharmacist?: PharmacistCreateNestedOneWithoutDispensedPrescriptionsInput
    items?: PrescriptionItemCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateInput = {
    id?: string
    patientId: string
    doctorId: string
    medicalRecordId?: string | null
    pharmacistId?: string | null
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PrescriptionItemUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutPrescriptionsNestedInput
    pharmacist?: PharmacistUpdateOneWithoutDispensedPrescriptionsNestedInput
    items?: PrescriptionItemUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medicalRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacistId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PrescriptionItemUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionCreateManyInput = {
    id?: string
    patientId: string
    doctorId: string
    medicalRecordId?: string | null
    pharmacistId?: string | null
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medicalRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacistId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionItemCreateInput = {
    id?: string
    dosage: string
    frequency: string
    durationDays: number
    quantity: number
    prescription: PrescriptionCreateNestedOneWithoutItemsInput
    medication: MedicationCreateNestedOneWithoutPrescriptionItemsInput
  }

  export type PrescriptionItemUncheckedCreateInput = {
    id?: string
    prescriptionId: string
    medicationId: string
    dosage: string
    frequency: string
    durationDays: number
    quantity: number
  }

  export type PrescriptionItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    prescription?: PrescriptionUpdateOneRequiredWithoutItemsNestedInput
    medication?: MedicationUpdateOneRequiredWithoutPrescriptionItemsNestedInput
  }

  export type PrescriptionItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescriptionId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PrescriptionItemCreateManyInput = {
    id?: string
    prescriptionId: string
    medicationId: string
    dosage: string
    frequency: string
    durationDays: number
    quantity: number
  }

  export type PrescriptionItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PrescriptionItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescriptionId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type MedicationCreateInput = {
    id?: string
    name: string
    brandName?: string | null
    description?: string | null
    stockQuantity?: number
    unitPrice: number
    requiresPrescription?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptionItems?: PrescriptionItemCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateInput = {
    id?: string
    name: string
    brandName?: string | null
    description?: string | null
    stockQuantity?: number
    unitPrice: number
    requiresPrescription?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptionItems?: PrescriptionItemUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    requiresPrescription?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptionItems?: PrescriptionItemUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    requiresPrescription?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptionItems?: PrescriptionItemUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationCreateManyInput = {
    id?: string
    name: string
    brandName?: string | null
    description?: string | null
    stockQuantity?: number
    unitPrice: number
    requiresPrescription?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    requiresPrescription?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    requiresPrescription?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    amount: number
    currency?: string
    status?: $Enums.TransactionStatus
    paymentMethod?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutTransactionsInput
    receptionist?: ReceptionistCreateNestedOneWithoutHandledTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    patientId: string
    receptionistId?: string | null
    amount: number
    currency?: string
    status?: $Enums.TransactionStatus
    paymentMethod?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutTransactionsNestedInput
    receptionist?: ReceptionistUpdateOneWithoutHandledTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    receptionistId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    patientId: string
    receptionistId?: string | null
    amount: number
    currency?: string
    status?: $Enums.TransactionStatus
    paymentMethod?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    receptionistId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalkInQueueCreateInput = {
    id?: string
    patientName: string
    phoneNumber?: string | null
    priority?: number
    reason: string
    assignedTo?: string | null
    status?: string
    checkInTime?: Date | string
    checkOutTime?: Date | string | null
  }

  export type WalkInQueueUncheckedCreateInput = {
    id?: string
    patientName: string
    phoneNumber?: string | null
    priority?: number
    reason: string
    assignedTo?: string | null
    status?: string
    checkInTime?: Date | string
    checkOutTime?: Date | string | null
  }

  export type WalkInQueueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WalkInQueueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WalkInQueueCreateManyInput = {
    id?: string
    patientName: string
    phoneNumber?: string | null
    priority?: number
    reason: string
    assignedTo?: string | null
    status?: string
    checkInTime?: Date | string
    checkOutTime?: Date | string | null
  }

  export type WalkInQueueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WalkInQueueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    priority?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type PatientNullableScalarRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type DoctorNullableScalarRelationFilter = {
    is?: DoctorWhereInput | null
    isNot?: DoctorWhereInput | null
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type ReceptionistNullableScalarRelationFilter = {
    is?: ReceptionistWhereInput | null
    isNot?: ReceptionistWhereInput | null
  }

  export type PharmacistNullableScalarRelationFilter = {
    is?: PharmacistWhereInput | null
    isNot?: PharmacistWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type MedicalRecordListRelationFilter = {
    every?: MedicalRecordWhereInput
    some?: MedicalRecordWhereInput
    none?: MedicalRecordWhereInput
  }

  export type PrescriptionListRelationFilter = {
    every?: PrescriptionWhereInput
    some?: PrescriptionWhereInput
    none?: PrescriptionWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicalRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    bloodGroup?: SortOrder
    allergies?: SortOrder
    address?: SortOrder
    medicalHistory?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    bloodGroup?: SortOrder
    address?: SortOrder
    medicalHistory?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dateOfBirth?: SortOrder
    bloodGroup?: SortOrder
    address?: SortOrder
    medicalHistory?: SortOrder
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    licenseNumber?: SortOrder
    department?: SortOrder
    availability?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    licenseNumber?: SortOrder
    department?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specialization?: SortOrder
    licenseNumber?: SortOrder
    department?: SortOrder
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessLevel?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    accessLevel?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessLevel?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessLevel?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    accessLevel?: SortOrder
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

  export type ReceptionistCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftHours?: SortOrder
    deskNumber?: SortOrder
  }

  export type ReceptionistMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftHours?: SortOrder
    deskNumber?: SortOrder
  }

  export type ReceptionistMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftHours?: SortOrder
    deskNumber?: SortOrder
  }

  export type PharmacistCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    licenseNumber?: SortOrder
  }

  export type PharmacistMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    licenseNumber?: SortOrder
  }

  export type PharmacistMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    licenseNumber?: SortOrder
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type MedicalRecordNullableScalarRelationFilter = {
    is?: MedicalRecordWhereInput | null
    isNot?: MedicalRecordWhereInput | null
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    reasonForVisit?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    reasonForVisit?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    date?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    reasonForVisit?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type AppointmentNullableScalarRelationFilter = {
    is?: AppointmentWhereInput | null
    isNot?: AppointmentWhereInput | null
  }

  export type MedicalRecordCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrder
    diagnosis?: SortOrder
    symptoms?: SortOrder
    treatment?: SortOrder
    notes?: SortOrder
    files?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrder
    diagnosis?: SortOrder
    treatment?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalRecordMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    appointmentId?: SortOrder
    diagnosis?: SortOrder
    treatment?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPrescriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrescriptionStatusFilter<$PrismaModel> | $Enums.PrescriptionStatus
  }

  export type PrescriptionItemListRelationFilter = {
    every?: PrescriptionItemWhereInput
    some?: PrescriptionItemWhereInput
    none?: PrescriptionItemWhereInput
  }

  export type PrescriptionItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    medicalRecordId?: SortOrder
    pharmacistId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    medicalRecordId?: SortOrder
    pharmacistId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    doctorId?: SortOrder
    medicalRecordId?: SortOrder
    pharmacistId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPrescriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrescriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
  }

  export type PrescriptionScalarRelationFilter = {
    is?: PrescriptionWhereInput
    isNot?: PrescriptionWhereInput
  }

  export type MedicationScalarRelationFilter = {
    is?: MedicationWhereInput
    isNot?: MedicationWhereInput
  }

  export type PrescriptionItemCountOrderByAggregateInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    medicationId?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    durationDays?: SortOrder
    quantity?: SortOrder
  }

  export type PrescriptionItemAvgOrderByAggregateInput = {
    durationDays?: SortOrder
    quantity?: SortOrder
  }

  export type PrescriptionItemMaxOrderByAggregateInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    medicationId?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    durationDays?: SortOrder
    quantity?: SortOrder
  }

  export type PrescriptionItemMinOrderByAggregateInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    medicationId?: SortOrder
    dosage?: SortOrder
    frequency?: SortOrder
    durationDays?: SortOrder
    quantity?: SortOrder
  }

  export type PrescriptionItemSumOrderByAggregateInput = {
    durationDays?: SortOrder
    quantity?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MedicationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandName?: SortOrder
    description?: SortOrder
    stockQuantity?: SortOrder
    unitPrice?: SortOrder
    requiresPrescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationAvgOrderByAggregateInput = {
    stockQuantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type MedicationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandName?: SortOrder
    description?: SortOrder
    stockQuantity?: SortOrder
    unitPrice?: SortOrder
    requiresPrescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brandName?: SortOrder
    description?: SortOrder
    stockQuantity?: SortOrder
    unitPrice?: SortOrder
    requiresPrescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationSumOrderByAggregateInput = {
    stockQuantity?: SortOrder
    unitPrice?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    receptionistId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    receptionistId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    receptionistId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
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

  export type WalkInQueueCountOrderByAggregateInput = {
    id?: SortOrder
    patientName?: SortOrder
    phoneNumber?: SortOrder
    priority?: SortOrder
    reason?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
  }

  export type WalkInQueueAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type WalkInQueueMaxOrderByAggregateInput = {
    id?: SortOrder
    patientName?: SortOrder
    phoneNumber?: SortOrder
    priority?: SortOrder
    reason?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
  }

  export type WalkInQueueMinOrderByAggregateInput = {
    id?: SortOrder
    patientName?: SortOrder
    phoneNumber?: SortOrder
    priority?: SortOrder
    reason?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
  }

  export type WalkInQueueSumOrderByAggregateInput = {
    priority?: SortOrder
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

  export type PatientCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type ReceptionistCreateNestedOneWithoutUserInput = {
    create?: XOR<ReceptionistCreateWithoutUserInput, ReceptionistUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReceptionistCreateOrConnectWithoutUserInput
    connect?: ReceptionistWhereUniqueInput
  }

  export type PharmacistCreateNestedOneWithoutUserInput = {
    create?: XOR<PharmacistCreateWithoutUserInput, PharmacistUncheckedCreateWithoutUserInput>
    connectOrCreate?: PharmacistCreateOrConnectWithoutUserInput
    connect?: PharmacistWhereUniqueInput
  }

  export type PatientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type ReceptionistUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ReceptionistCreateWithoutUserInput, ReceptionistUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReceptionistCreateOrConnectWithoutUserInput
    connect?: ReceptionistWhereUniqueInput
  }

  export type PharmacistUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PharmacistCreateWithoutUserInput, PharmacistUncheckedCreateWithoutUserInput>
    connectOrCreate?: PharmacistCreateOrConnectWithoutUserInput
    connect?: PharmacistWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PatientUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type ReceptionistUpdateOneWithoutUserNestedInput = {
    create?: XOR<ReceptionistCreateWithoutUserInput, ReceptionistUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReceptionistCreateOrConnectWithoutUserInput
    upsert?: ReceptionistUpsertWithoutUserInput
    disconnect?: ReceptionistWhereInput | boolean
    delete?: ReceptionistWhereInput | boolean
    connect?: ReceptionistWhereUniqueInput
    update?: XOR<XOR<ReceptionistUpdateToOneWithWhereWithoutUserInput, ReceptionistUpdateWithoutUserInput>, ReceptionistUncheckedUpdateWithoutUserInput>
  }

  export type PharmacistUpdateOneWithoutUserNestedInput = {
    create?: XOR<PharmacistCreateWithoutUserInput, PharmacistUncheckedCreateWithoutUserInput>
    connectOrCreate?: PharmacistCreateOrConnectWithoutUserInput
    upsert?: PharmacistUpsertWithoutUserInput
    disconnect?: PharmacistWhereInput | boolean
    delete?: PharmacistWhereInput | boolean
    connect?: PharmacistWhereUniqueInput
    update?: XOR<XOR<PharmacistUpdateToOneWithWhereWithoutUserInput, PharmacistUpdateWithoutUserInput>, PharmacistUncheckedUpdateWithoutUserInput>
  }

  export type PatientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type ReceptionistUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ReceptionistCreateWithoutUserInput, ReceptionistUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReceptionistCreateOrConnectWithoutUserInput
    upsert?: ReceptionistUpsertWithoutUserInput
    disconnect?: ReceptionistWhereInput | boolean
    delete?: ReceptionistWhereInput | boolean
    connect?: ReceptionistWhereUniqueInput
    update?: XOR<XOR<ReceptionistUpdateToOneWithWhereWithoutUserInput, ReceptionistUpdateWithoutUserInput>, ReceptionistUncheckedUpdateWithoutUserInput>
  }

  export type PharmacistUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PharmacistCreateWithoutUserInput, PharmacistUncheckedCreateWithoutUserInput>
    connectOrCreate?: PharmacistCreateOrConnectWithoutUserInput
    upsert?: PharmacistUpsertWithoutUserInput
    disconnect?: PharmacistWhereInput | boolean
    delete?: PharmacistWhereInput | boolean
    connect?: PharmacistWhereUniqueInput
    update?: XOR<XOR<PharmacistUpdateToOneWithWhereWithoutUserInput, PharmacistUpdateWithoutUserInput>, PharmacistUncheckedUpdateWithoutUserInput>
  }

  export type PatientCreateallergiesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPatientProfileInput = {
    create?: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type MedicalRecordCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput> | MedicalRecordCreateWithoutPatientInput[] | MedicalRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput | MedicalRecordCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalRecordCreateManyPatientInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type PrescriptionCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutPatientInput = {
    create?: XOR<TransactionCreateWithoutPatientInput, TransactionUncheckedCreateWithoutPatientInput> | TransactionCreateWithoutPatientInput[] | TransactionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPatientInput | TransactionCreateOrConnectWithoutPatientInput[]
    createMany?: TransactionCreateManyPatientInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type MedicalRecordUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput> | MedicalRecordCreateWithoutPatientInput[] | MedicalRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput | MedicalRecordCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalRecordCreateManyPatientInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<TransactionCreateWithoutPatientInput, TransactionUncheckedCreateWithoutPatientInput> | TransactionCreateWithoutPatientInput[] | TransactionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPatientInput | TransactionCreateOrConnectWithoutPatientInput[]
    createMany?: TransactionCreateManyPatientInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PatientUpdateallergiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutPatientProfileNestedInput = {
    create?: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientProfileInput
    upsert?: UserUpsertWithoutPatientProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientProfileInput, UserUpdateWithoutPatientProfileInput>, UserUncheckedUpdateWithoutPatientProfileInput>
  }

  export type AppointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type MedicalRecordUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput> | MedicalRecordCreateWithoutPatientInput[] | MedicalRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput | MedicalRecordCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutPatientInput | MedicalRecordUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalRecordCreateManyPatientInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutPatientInput | MedicalRecordUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutPatientInput | MedicalRecordUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type PrescriptionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientInput | PrescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientInput | PrescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientInput | PrescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<TransactionCreateWithoutPatientInput, TransactionUncheckedCreateWithoutPatientInput> | TransactionCreateWithoutPatientInput[] | TransactionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPatientInput | TransactionCreateOrConnectWithoutPatientInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPatientInput | TransactionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: TransactionCreateManyPatientInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPatientInput | TransactionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPatientInput | TransactionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput> | AppointmentCreateWithoutPatientInput[] | AppointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutPatientInput | AppointmentCreateOrConnectWithoutPatientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutPatientInput | AppointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AppointmentCreateManyPatientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutPatientInput | AppointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutPatientInput | AppointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput> | MedicalRecordCreateWithoutPatientInput[] | MedicalRecordUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPatientInput | MedicalRecordCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutPatientInput | MedicalRecordUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalRecordCreateManyPatientInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutPatientInput | MedicalRecordUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutPatientInput | MedicalRecordUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientInput | PrescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientInput | PrescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientInput | PrescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<TransactionCreateWithoutPatientInput, TransactionUncheckedCreateWithoutPatientInput> | TransactionCreateWithoutPatientInput[] | TransactionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPatientInput | TransactionCreateOrConnectWithoutPatientInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPatientInput | TransactionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: TransactionCreateManyPatientInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPatientInput | TransactionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPatientInput | TransactionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDoctorProfileInput = {
    create?: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type MedicalRecordCreateNestedManyWithoutDoctorInput = {
    create?: XOR<MedicalRecordCreateWithoutDoctorInput, MedicalRecordUncheckedCreateWithoutDoctorInput> | MedicalRecordCreateWithoutDoctorInput[] | MedicalRecordUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutDoctorInput | MedicalRecordCreateOrConnectWithoutDoctorInput[]
    createMany?: MedicalRecordCreateManyDoctorInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type PrescriptionCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type MedicalRecordUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<MedicalRecordCreateWithoutDoctorInput, MedicalRecordUncheckedCreateWithoutDoctorInput> | MedicalRecordCreateWithoutDoctorInput[] | MedicalRecordUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutDoctorInput | MedicalRecordCreateOrConnectWithoutDoctorInput[]
    createMany?: MedicalRecordCreateManyDoctorInputEnvelope
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDoctorProfileNestedInput = {
    create?: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorProfileInput
    upsert?: UserUpsertWithoutDoctorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorProfileInput, UserUpdateWithoutDoctorProfileInput>, UserUncheckedUpdateWithoutDoctorProfileInput>
  }

  export type AppointmentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type MedicalRecordUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutDoctorInput, MedicalRecordUncheckedCreateWithoutDoctorInput> | MedicalRecordCreateWithoutDoctorInput[] | MedicalRecordUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutDoctorInput | MedicalRecordCreateOrConnectWithoutDoctorInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutDoctorInput | MedicalRecordUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: MedicalRecordCreateManyDoctorInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutDoctorInput | MedicalRecordUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutDoctorInput | MedicalRecordUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type PrescriptionUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutDoctorInput | PrescriptionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutDoctorInput | PrescriptionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutDoctorInput | PrescriptionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput> | AppointmentCreateWithoutDoctorInput[] | AppointmentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutDoctorInput | AppointmentCreateOrConnectWithoutDoctorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutDoctorInput | AppointmentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: AppointmentCreateManyDoctorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutDoctorInput | AppointmentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutDoctorInput | AppointmentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type MedicalRecordUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutDoctorInput, MedicalRecordUncheckedCreateWithoutDoctorInput> | MedicalRecordCreateWithoutDoctorInput[] | MedicalRecordUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutDoctorInput | MedicalRecordCreateOrConnectWithoutDoctorInput[]
    upsert?: MedicalRecordUpsertWithWhereUniqueWithoutDoctorInput | MedicalRecordUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: MedicalRecordCreateManyDoctorInputEnvelope
    set?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    disconnect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    delete?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    connect?: MedicalRecordWhereUniqueInput | MedicalRecordWhereUniqueInput[]
    update?: MedicalRecordUpdateWithWhereUniqueWithoutDoctorInput | MedicalRecordUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: MedicalRecordUpdateManyWithWhereWithoutDoctorInput | MedicalRecordUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutDoctorInput | PrescriptionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutDoctorInput | PrescriptionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutDoctorInput | PrescriptionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAdminProfileInput = {
    create?: XOR<UserCreateWithoutAdminProfileInput, UserUncheckedCreateWithoutAdminProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminProfileInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAdminProfileNestedInput = {
    create?: XOR<UserCreateWithoutAdminProfileInput, UserUncheckedCreateWithoutAdminProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminProfileInput
    upsert?: UserUpsertWithoutAdminProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminProfileInput, UserUpdateWithoutAdminProfileInput>, UserUncheckedUpdateWithoutAdminProfileInput>
  }

  export type UserCreateNestedOneWithoutReceptionistProfileInput = {
    create?: XOR<UserCreateWithoutReceptionistProfileInput, UserUncheckedCreateWithoutReceptionistProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceptionistProfileInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutReceptionistInput = {
    create?: XOR<TransactionCreateWithoutReceptionistInput, TransactionUncheckedCreateWithoutReceptionistInput> | TransactionCreateWithoutReceptionistInput[] | TransactionUncheckedCreateWithoutReceptionistInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutReceptionistInput | TransactionCreateOrConnectWithoutReceptionistInput[]
    createMany?: TransactionCreateManyReceptionistInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutReceptionistInput = {
    create?: XOR<TransactionCreateWithoutReceptionistInput, TransactionUncheckedCreateWithoutReceptionistInput> | TransactionCreateWithoutReceptionistInput[] | TransactionUncheckedCreateWithoutReceptionistInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutReceptionistInput | TransactionCreateOrConnectWithoutReceptionistInput[]
    createMany?: TransactionCreateManyReceptionistInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutReceptionistProfileNestedInput = {
    create?: XOR<UserCreateWithoutReceptionistProfileInput, UserUncheckedCreateWithoutReceptionistProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceptionistProfileInput
    upsert?: UserUpsertWithoutReceptionistProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceptionistProfileInput, UserUpdateWithoutReceptionistProfileInput>, UserUncheckedUpdateWithoutReceptionistProfileInput>
  }

  export type TransactionUpdateManyWithoutReceptionistNestedInput = {
    create?: XOR<TransactionCreateWithoutReceptionistInput, TransactionUncheckedCreateWithoutReceptionistInput> | TransactionCreateWithoutReceptionistInput[] | TransactionUncheckedCreateWithoutReceptionistInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutReceptionistInput | TransactionCreateOrConnectWithoutReceptionistInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutReceptionistInput | TransactionUpsertWithWhereUniqueWithoutReceptionistInput[]
    createMany?: TransactionCreateManyReceptionistInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutReceptionistInput | TransactionUpdateWithWhereUniqueWithoutReceptionistInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutReceptionistInput | TransactionUpdateManyWithWhereWithoutReceptionistInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutReceptionistNestedInput = {
    create?: XOR<TransactionCreateWithoutReceptionistInput, TransactionUncheckedCreateWithoutReceptionistInput> | TransactionCreateWithoutReceptionistInput[] | TransactionUncheckedCreateWithoutReceptionistInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutReceptionistInput | TransactionCreateOrConnectWithoutReceptionistInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutReceptionistInput | TransactionUpsertWithWhereUniqueWithoutReceptionistInput[]
    createMany?: TransactionCreateManyReceptionistInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutReceptionistInput | TransactionUpdateWithWhereUniqueWithoutReceptionistInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutReceptionistInput | TransactionUpdateManyWithWhereWithoutReceptionistInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPharmacistProfileInput = {
    create?: XOR<UserCreateWithoutPharmacistProfileInput, UserUncheckedCreateWithoutPharmacistProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPharmacistProfileInput
    connect?: UserWhereUniqueInput
  }

  export type PrescriptionCreateNestedManyWithoutPharmacistInput = {
    create?: XOR<PrescriptionCreateWithoutPharmacistInput, PrescriptionUncheckedCreateWithoutPharmacistInput> | PrescriptionCreateWithoutPharmacistInput[] | PrescriptionUncheckedCreateWithoutPharmacistInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPharmacistInput | PrescriptionCreateOrConnectWithoutPharmacistInput[]
    createMany?: PrescriptionCreateManyPharmacistInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutPharmacistInput = {
    create?: XOR<PrescriptionCreateWithoutPharmacistInput, PrescriptionUncheckedCreateWithoutPharmacistInput> | PrescriptionCreateWithoutPharmacistInput[] | PrescriptionUncheckedCreateWithoutPharmacistInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPharmacistInput | PrescriptionCreateOrConnectWithoutPharmacistInput[]
    createMany?: PrescriptionCreateManyPharmacistInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPharmacistProfileNestedInput = {
    create?: XOR<UserCreateWithoutPharmacistProfileInput, UserUncheckedCreateWithoutPharmacistProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPharmacistProfileInput
    upsert?: UserUpsertWithoutPharmacistProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPharmacistProfileInput, UserUpdateWithoutPharmacistProfileInput>, UserUncheckedUpdateWithoutPharmacistProfileInput>
  }

  export type PrescriptionUpdateManyWithoutPharmacistNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPharmacistInput, PrescriptionUncheckedCreateWithoutPharmacistInput> | PrescriptionCreateWithoutPharmacistInput[] | PrescriptionUncheckedCreateWithoutPharmacistInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPharmacistInput | PrescriptionCreateOrConnectWithoutPharmacistInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPharmacistInput | PrescriptionUpsertWithWhereUniqueWithoutPharmacistInput[]
    createMany?: PrescriptionCreateManyPharmacistInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPharmacistInput | PrescriptionUpdateWithWhereUniqueWithoutPharmacistInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPharmacistInput | PrescriptionUpdateManyWithWhereWithoutPharmacistInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutPharmacistNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPharmacistInput, PrescriptionUncheckedCreateWithoutPharmacistInput> | PrescriptionCreateWithoutPharmacistInput[] | PrescriptionUncheckedCreateWithoutPharmacistInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPharmacistInput | PrescriptionCreateOrConnectWithoutPharmacistInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPharmacistInput | PrescriptionUpsertWithWhereUniqueWithoutPharmacistInput[]
    createMany?: PrescriptionCreateManyPharmacistInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPharmacistInput | PrescriptionUpdateWithWhereUniqueWithoutPharmacistInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPharmacistInput | PrescriptionUpdateManyWithWhereWithoutPharmacistInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput
    connect?: DoctorWhereUniqueInput
  }

  export type MedicalRecordCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<MedicalRecordCreateWithoutAppointmentInput, MedicalRecordUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutAppointmentInput
    connect?: MedicalRecordWhereUniqueInput
  }

  export type MedicalRecordUncheckedCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<MedicalRecordCreateWithoutAppointmentInput, MedicalRecordUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutAppointmentInput
    connect?: MedicalRecordWhereUniqueInput
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type PatientUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAppointmentsInput
    upsert?: PatientUpsertWithoutAppointmentsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAppointmentsInput, PatientUpdateWithoutAppointmentsInput>, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAppointmentsInput
    upsert?: DoctorUpsertWithoutAppointmentsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutAppointmentsInput, DoctorUpdateWithoutAppointmentsInput>, DoctorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type MedicalRecordUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutAppointmentInput, MedicalRecordUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutAppointmentInput
    upsert?: MedicalRecordUpsertWithoutAppointmentInput
    disconnect?: MedicalRecordWhereInput | boolean
    delete?: MedicalRecordWhereInput | boolean
    connect?: MedicalRecordWhereUniqueInput
    update?: XOR<XOR<MedicalRecordUpdateToOneWithWhereWithoutAppointmentInput, MedicalRecordUpdateWithoutAppointmentInput>, MedicalRecordUncheckedUpdateWithoutAppointmentInput>
  }

  export type MedicalRecordUncheckedUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutAppointmentInput, MedicalRecordUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutAppointmentInput
    upsert?: MedicalRecordUpsertWithoutAppointmentInput
    disconnect?: MedicalRecordWhereInput | boolean
    delete?: MedicalRecordWhereInput | boolean
    connect?: MedicalRecordWhereUniqueInput
    update?: XOR<XOR<MedicalRecordUpdateToOneWithWhereWithoutAppointmentInput, MedicalRecordUpdateWithoutAppointmentInput>, MedicalRecordUncheckedUpdateWithoutAppointmentInput>
  }

  export type MedicalRecordCreatesymptomsInput = {
    set: string[]
  }

  export type MedicalRecordCreatefilesInput = {
    set: string[]
  }

  export type PatientCreateNestedOneWithoutMedicalRecordsInput = {
    create?: XOR<PatientCreateWithoutMedicalRecordsInput, PatientUncheckedCreateWithoutMedicalRecordsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalRecordsInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutMedicalRecordsInput = {
    create?: XOR<DoctorCreateWithoutMedicalRecordsInput, DoctorUncheckedCreateWithoutMedicalRecordsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutMedicalRecordsInput
    connect?: DoctorWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutMedicalRecordInput = {
    create?: XOR<AppointmentCreateWithoutMedicalRecordInput, AppointmentUncheckedCreateWithoutMedicalRecordInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutMedicalRecordInput
    connect?: AppointmentWhereUniqueInput
  }

  export type PrescriptionCreateNestedManyWithoutMedicalRecordInput = {
    create?: XOR<PrescriptionCreateWithoutMedicalRecordInput, PrescriptionUncheckedCreateWithoutMedicalRecordInput> | PrescriptionCreateWithoutMedicalRecordInput[] | PrescriptionUncheckedCreateWithoutMedicalRecordInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicalRecordInput | PrescriptionCreateOrConnectWithoutMedicalRecordInput[]
    createMany?: PrescriptionCreateManyMedicalRecordInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInput = {
    create?: XOR<PrescriptionCreateWithoutMedicalRecordInput, PrescriptionUncheckedCreateWithoutMedicalRecordInput> | PrescriptionCreateWithoutMedicalRecordInput[] | PrescriptionUncheckedCreateWithoutMedicalRecordInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicalRecordInput | PrescriptionCreateOrConnectWithoutMedicalRecordInput[]
    createMany?: PrescriptionCreateManyMedicalRecordInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type MedicalRecordUpdatesymptomsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MedicalRecordUpdatefilesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PatientUpdateOneRequiredWithoutMedicalRecordsNestedInput = {
    create?: XOR<PatientCreateWithoutMedicalRecordsInput, PatientUncheckedCreateWithoutMedicalRecordsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalRecordsInput
    upsert?: PatientUpsertWithoutMedicalRecordsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutMedicalRecordsInput, PatientUpdateWithoutMedicalRecordsInput>, PatientUncheckedUpdateWithoutMedicalRecordsInput>
  }

  export type DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInput = {
    create?: XOR<DoctorCreateWithoutMedicalRecordsInput, DoctorUncheckedCreateWithoutMedicalRecordsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutMedicalRecordsInput
    upsert?: DoctorUpsertWithoutMedicalRecordsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutMedicalRecordsInput, DoctorUpdateWithoutMedicalRecordsInput>, DoctorUncheckedUpdateWithoutMedicalRecordsInput>
  }

  export type AppointmentUpdateOneWithoutMedicalRecordNestedInput = {
    create?: XOR<AppointmentCreateWithoutMedicalRecordInput, AppointmentUncheckedCreateWithoutMedicalRecordInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutMedicalRecordInput
    upsert?: AppointmentUpsertWithoutMedicalRecordInput
    disconnect?: AppointmentWhereInput | boolean
    delete?: AppointmentWhereInput | boolean
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutMedicalRecordInput, AppointmentUpdateWithoutMedicalRecordInput>, AppointmentUncheckedUpdateWithoutMedicalRecordInput>
  }

  export type PrescriptionUpdateManyWithoutMedicalRecordNestedInput = {
    create?: XOR<PrescriptionCreateWithoutMedicalRecordInput, PrescriptionUncheckedCreateWithoutMedicalRecordInput> | PrescriptionCreateWithoutMedicalRecordInput[] | PrescriptionUncheckedCreateWithoutMedicalRecordInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicalRecordInput | PrescriptionCreateOrConnectWithoutMedicalRecordInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInput | PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInput[]
    createMany?: PrescriptionCreateManyMedicalRecordInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInput | PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutMedicalRecordInput | PrescriptionUpdateManyWithWhereWithoutMedicalRecordInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInput = {
    create?: XOR<PrescriptionCreateWithoutMedicalRecordInput, PrescriptionUncheckedCreateWithoutMedicalRecordInput> | PrescriptionCreateWithoutMedicalRecordInput[] | PrescriptionUncheckedCreateWithoutMedicalRecordInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicalRecordInput | PrescriptionCreateOrConnectWithoutMedicalRecordInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInput | PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInput[]
    createMany?: PrescriptionCreateManyMedicalRecordInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInput | PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutMedicalRecordInput | PrescriptionUpdateManyWithWhereWithoutMedicalRecordInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPrescriptionsInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<DoctorCreateWithoutPrescriptionsInput, DoctorUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutPrescriptionsInput
    connect?: DoctorWhereUniqueInput
  }

  export type MedicalRecordCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<MedicalRecordCreateWithoutPrescriptionsInput, MedicalRecordUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPrescriptionsInput
    connect?: MedicalRecordWhereUniqueInput
  }

  export type PharmacistCreateNestedOneWithoutDispensedPrescriptionsInput = {
    create?: XOR<PharmacistCreateWithoutDispensedPrescriptionsInput, PharmacistUncheckedCreateWithoutDispensedPrescriptionsInput>
    connectOrCreate?: PharmacistCreateOrConnectWithoutDispensedPrescriptionsInput
    connect?: PharmacistWhereUniqueInput
  }

  export type PrescriptionItemCreateNestedManyWithoutPrescriptionInput = {
    create?: XOR<PrescriptionItemCreateWithoutPrescriptionInput, PrescriptionItemUncheckedCreateWithoutPrescriptionInput> | PrescriptionItemCreateWithoutPrescriptionInput[] | PrescriptionItemUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionItemCreateOrConnectWithoutPrescriptionInput | PrescriptionItemCreateOrConnectWithoutPrescriptionInput[]
    createMany?: PrescriptionItemCreateManyPrescriptionInputEnvelope
    connect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
  }

  export type PrescriptionItemUncheckedCreateNestedManyWithoutPrescriptionInput = {
    create?: XOR<PrescriptionItemCreateWithoutPrescriptionInput, PrescriptionItemUncheckedCreateWithoutPrescriptionInput> | PrescriptionItemCreateWithoutPrescriptionInput[] | PrescriptionItemUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionItemCreateOrConnectWithoutPrescriptionInput | PrescriptionItemCreateOrConnectWithoutPrescriptionInput[]
    createMany?: PrescriptionItemCreateManyPrescriptionInputEnvelope
    connect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
  }

  export type EnumPrescriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.PrescriptionStatus
  }

  export type PatientUpdateOneRequiredWithoutPrescriptionsNestedInput = {
    create?: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPrescriptionsInput
    upsert?: PatientUpsertWithoutPrescriptionsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutPrescriptionsInput, PatientUpdateWithoutPrescriptionsInput>, PatientUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput = {
    create?: XOR<DoctorCreateWithoutPrescriptionsInput, DoctorUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutPrescriptionsInput
    upsert?: DoctorUpsertWithoutPrescriptionsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutPrescriptionsInput, DoctorUpdateWithoutPrescriptionsInput>, DoctorUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type MedicalRecordUpdateOneWithoutPrescriptionsNestedInput = {
    create?: XOR<MedicalRecordCreateWithoutPrescriptionsInput, MedicalRecordUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: MedicalRecordCreateOrConnectWithoutPrescriptionsInput
    upsert?: MedicalRecordUpsertWithoutPrescriptionsInput
    disconnect?: MedicalRecordWhereInput | boolean
    delete?: MedicalRecordWhereInput | boolean
    connect?: MedicalRecordWhereUniqueInput
    update?: XOR<XOR<MedicalRecordUpdateToOneWithWhereWithoutPrescriptionsInput, MedicalRecordUpdateWithoutPrescriptionsInput>, MedicalRecordUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type PharmacistUpdateOneWithoutDispensedPrescriptionsNestedInput = {
    create?: XOR<PharmacistCreateWithoutDispensedPrescriptionsInput, PharmacistUncheckedCreateWithoutDispensedPrescriptionsInput>
    connectOrCreate?: PharmacistCreateOrConnectWithoutDispensedPrescriptionsInput
    upsert?: PharmacistUpsertWithoutDispensedPrescriptionsInput
    disconnect?: PharmacistWhereInput | boolean
    delete?: PharmacistWhereInput | boolean
    connect?: PharmacistWhereUniqueInput
    update?: XOR<XOR<PharmacistUpdateToOneWithWhereWithoutDispensedPrescriptionsInput, PharmacistUpdateWithoutDispensedPrescriptionsInput>, PharmacistUncheckedUpdateWithoutDispensedPrescriptionsInput>
  }

  export type PrescriptionItemUpdateManyWithoutPrescriptionNestedInput = {
    create?: XOR<PrescriptionItemCreateWithoutPrescriptionInput, PrescriptionItemUncheckedCreateWithoutPrescriptionInput> | PrescriptionItemCreateWithoutPrescriptionInput[] | PrescriptionItemUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionItemCreateOrConnectWithoutPrescriptionInput | PrescriptionItemCreateOrConnectWithoutPrescriptionInput[]
    upsert?: PrescriptionItemUpsertWithWhereUniqueWithoutPrescriptionInput | PrescriptionItemUpsertWithWhereUniqueWithoutPrescriptionInput[]
    createMany?: PrescriptionItemCreateManyPrescriptionInputEnvelope
    set?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    disconnect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    delete?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    connect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    update?: PrescriptionItemUpdateWithWhereUniqueWithoutPrescriptionInput | PrescriptionItemUpdateWithWhereUniqueWithoutPrescriptionInput[]
    updateMany?: PrescriptionItemUpdateManyWithWhereWithoutPrescriptionInput | PrescriptionItemUpdateManyWithWhereWithoutPrescriptionInput[]
    deleteMany?: PrescriptionItemScalarWhereInput | PrescriptionItemScalarWhereInput[]
  }

  export type PrescriptionItemUncheckedUpdateManyWithoutPrescriptionNestedInput = {
    create?: XOR<PrescriptionItemCreateWithoutPrescriptionInput, PrescriptionItemUncheckedCreateWithoutPrescriptionInput> | PrescriptionItemCreateWithoutPrescriptionInput[] | PrescriptionItemUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionItemCreateOrConnectWithoutPrescriptionInput | PrescriptionItemCreateOrConnectWithoutPrescriptionInput[]
    upsert?: PrescriptionItemUpsertWithWhereUniqueWithoutPrescriptionInput | PrescriptionItemUpsertWithWhereUniqueWithoutPrescriptionInput[]
    createMany?: PrescriptionItemCreateManyPrescriptionInputEnvelope
    set?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    disconnect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    delete?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    connect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    update?: PrescriptionItemUpdateWithWhereUniqueWithoutPrescriptionInput | PrescriptionItemUpdateWithWhereUniqueWithoutPrescriptionInput[]
    updateMany?: PrescriptionItemUpdateManyWithWhereWithoutPrescriptionInput | PrescriptionItemUpdateManyWithWhereWithoutPrescriptionInput[]
    deleteMany?: PrescriptionItemScalarWhereInput | PrescriptionItemScalarWhereInput[]
  }

  export type PrescriptionCreateNestedOneWithoutItemsInput = {
    create?: XOR<PrescriptionCreateWithoutItemsInput, PrescriptionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutItemsInput
    connect?: PrescriptionWhereUniqueInput
  }

  export type MedicationCreateNestedOneWithoutPrescriptionItemsInput = {
    create?: XOR<MedicationCreateWithoutPrescriptionItemsInput, MedicationUncheckedCreateWithoutPrescriptionItemsInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutPrescriptionItemsInput
    connect?: MedicationWhereUniqueInput
  }

  export type PrescriptionUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PrescriptionCreateWithoutItemsInput, PrescriptionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutItemsInput
    upsert?: PrescriptionUpsertWithoutItemsInput
    connect?: PrescriptionWhereUniqueInput
    update?: XOR<XOR<PrescriptionUpdateToOneWithWhereWithoutItemsInput, PrescriptionUpdateWithoutItemsInput>, PrescriptionUncheckedUpdateWithoutItemsInput>
  }

  export type MedicationUpdateOneRequiredWithoutPrescriptionItemsNestedInput = {
    create?: XOR<MedicationCreateWithoutPrescriptionItemsInput, MedicationUncheckedCreateWithoutPrescriptionItemsInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutPrescriptionItemsInput
    upsert?: MedicationUpsertWithoutPrescriptionItemsInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutPrescriptionItemsInput, MedicationUpdateWithoutPrescriptionItemsInput>, MedicationUncheckedUpdateWithoutPrescriptionItemsInput>
  }

  export type PrescriptionItemCreateNestedManyWithoutMedicationInput = {
    create?: XOR<PrescriptionItemCreateWithoutMedicationInput, PrescriptionItemUncheckedCreateWithoutMedicationInput> | PrescriptionItemCreateWithoutMedicationInput[] | PrescriptionItemUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: PrescriptionItemCreateOrConnectWithoutMedicationInput | PrescriptionItemCreateOrConnectWithoutMedicationInput[]
    createMany?: PrescriptionItemCreateManyMedicationInputEnvelope
    connect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
  }

  export type PrescriptionItemUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<PrescriptionItemCreateWithoutMedicationInput, PrescriptionItemUncheckedCreateWithoutMedicationInput> | PrescriptionItemCreateWithoutMedicationInput[] | PrescriptionItemUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: PrescriptionItemCreateOrConnectWithoutMedicationInput | PrescriptionItemCreateOrConnectWithoutMedicationInput[]
    createMany?: PrescriptionItemCreateManyMedicationInputEnvelope
    connect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PrescriptionItemUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<PrescriptionItemCreateWithoutMedicationInput, PrescriptionItemUncheckedCreateWithoutMedicationInput> | PrescriptionItemCreateWithoutMedicationInput[] | PrescriptionItemUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: PrescriptionItemCreateOrConnectWithoutMedicationInput | PrescriptionItemCreateOrConnectWithoutMedicationInput[]
    upsert?: PrescriptionItemUpsertWithWhereUniqueWithoutMedicationInput | PrescriptionItemUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: PrescriptionItemCreateManyMedicationInputEnvelope
    set?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    disconnect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    delete?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    connect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    update?: PrescriptionItemUpdateWithWhereUniqueWithoutMedicationInput | PrescriptionItemUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: PrescriptionItemUpdateManyWithWhereWithoutMedicationInput | PrescriptionItemUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: PrescriptionItemScalarWhereInput | PrescriptionItemScalarWhereInput[]
  }

  export type PrescriptionItemUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<PrescriptionItemCreateWithoutMedicationInput, PrescriptionItemUncheckedCreateWithoutMedicationInput> | PrescriptionItemCreateWithoutMedicationInput[] | PrescriptionItemUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: PrescriptionItemCreateOrConnectWithoutMedicationInput | PrescriptionItemCreateOrConnectWithoutMedicationInput[]
    upsert?: PrescriptionItemUpsertWithWhereUniqueWithoutMedicationInput | PrescriptionItemUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: PrescriptionItemCreateManyMedicationInputEnvelope
    set?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    disconnect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    delete?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    connect?: PrescriptionItemWhereUniqueInput | PrescriptionItemWhereUniqueInput[]
    update?: PrescriptionItemUpdateWithWhereUniqueWithoutMedicationInput | PrescriptionItemUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: PrescriptionItemUpdateManyWithWhereWithoutMedicationInput | PrescriptionItemUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: PrescriptionItemScalarWhereInput | PrescriptionItemScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<PatientCreateWithoutTransactionsInput, PatientUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutTransactionsInput
    connect?: PatientWhereUniqueInput
  }

  export type ReceptionistCreateNestedOneWithoutHandledTransactionsInput = {
    create?: XOR<ReceptionistCreateWithoutHandledTransactionsInput, ReceptionistUncheckedCreateWithoutHandledTransactionsInput>
    connectOrCreate?: ReceptionistCreateOrConnectWithoutHandledTransactionsInput
    connect?: ReceptionistWhereUniqueInput
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type PatientUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<PatientCreateWithoutTransactionsInput, PatientUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutTransactionsInput
    upsert?: PatientUpsertWithoutTransactionsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutTransactionsInput, PatientUpdateWithoutTransactionsInput>, PatientUncheckedUpdateWithoutTransactionsInput>
  }

  export type ReceptionistUpdateOneWithoutHandledTransactionsNestedInput = {
    create?: XOR<ReceptionistCreateWithoutHandledTransactionsInput, ReceptionistUncheckedCreateWithoutHandledTransactionsInput>
    connectOrCreate?: ReceptionistCreateOrConnectWithoutHandledTransactionsInput
    upsert?: ReceptionistUpsertWithoutHandledTransactionsInput
    disconnect?: ReceptionistWhereInput | boolean
    delete?: ReceptionistWhereInput | boolean
    connect?: ReceptionistWhereUniqueInput
    update?: XOR<XOR<ReceptionistUpdateToOneWithWhereWithoutHandledTransactionsInput, ReceptionistUpdateWithoutHandledTransactionsInput>, ReceptionistUncheckedUpdateWithoutHandledTransactionsInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPrescriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrescriptionStatusFilter<$PrismaModel> | $Enums.PrescriptionStatus
  }

  export type NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrescriptionStatus[] | ListEnumPrescriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrescriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
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

  export type PatientCreateWithoutUserInput = {
    id?: string
    dateOfBirth: Date | string
    bloodGroup?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    address?: string | null
    medicalHistory?: string | null
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    medicalRecords?: MedicalRecordCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
    transactions?: TransactionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutUserInput = {
    id?: string
    dateOfBirth: Date | string
    bloodGroup?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    address?: string | null
    medicalHistory?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutUserInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type DoctorCreateWithoutUserInput = {
    id?: string
    specialization: string
    licenseNumber: string
    department: string
    availability?: NullableJsonNullValueInput | InputJsonValue
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    medicalRecords?: MedicalRecordCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutUserInput = {
    id?: string
    specialization: string
    licenseNumber: string
    department: string
    availability?: NullableJsonNullValueInput | InputJsonValue
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutUserInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateWithoutUserInput = {
    id?: string
    accessLevel?: number
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: string
    accessLevel?: number
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type ReceptionistCreateWithoutUserInput = {
    id?: string
    shiftHours?: string | null
    deskNumber?: string | null
    handledTransactions?: TransactionCreateNestedManyWithoutReceptionistInput
  }

  export type ReceptionistUncheckedCreateWithoutUserInput = {
    id?: string
    shiftHours?: string | null
    deskNumber?: string | null
    handledTransactions?: TransactionUncheckedCreateNestedManyWithoutReceptionistInput
  }

  export type ReceptionistCreateOrConnectWithoutUserInput = {
    where: ReceptionistWhereUniqueInput
    create: XOR<ReceptionistCreateWithoutUserInput, ReceptionistUncheckedCreateWithoutUserInput>
  }

  export type PharmacistCreateWithoutUserInput = {
    id?: string
    licenseNumber: string
    dispensedPrescriptions?: PrescriptionCreateNestedManyWithoutPharmacistInput
  }

  export type PharmacistUncheckedCreateWithoutUserInput = {
    id?: string
    licenseNumber: string
    dispensedPrescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPharmacistInput
  }

  export type PharmacistCreateOrConnectWithoutUserInput = {
    where: PharmacistWhereUniqueInput
    create: XOR<PharmacistCreateWithoutUserInput, PharmacistUncheckedCreateWithoutUserInput>
  }

  export type PatientUpsertWithoutUserInput = {
    update: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutUserInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    address?: NullableStringFieldUpdateOperationsInput | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    medicalRecords?: MedicalRecordUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
    transactions?: TransactionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    address?: NullableStringFieldUpdateOperationsInput | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutUserInput = {
    update: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutUserInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    availability?: NullableJsonNullValueInput | InputJsonValue
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    medicalRecords?: MedicalRecordUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    availability?: NullableJsonNullValueInput | InputJsonValue
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessLevel?: IntFieldUpdateOperationsInput | number
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessLevel?: IntFieldUpdateOperationsInput | number
  }

  export type ReceptionistUpsertWithoutUserInput = {
    update: XOR<ReceptionistUpdateWithoutUserInput, ReceptionistUncheckedUpdateWithoutUserInput>
    create: XOR<ReceptionistCreateWithoutUserInput, ReceptionistUncheckedCreateWithoutUserInput>
    where?: ReceptionistWhereInput
  }

  export type ReceptionistUpdateToOneWithWhereWithoutUserInput = {
    where?: ReceptionistWhereInput
    data: XOR<ReceptionistUpdateWithoutUserInput, ReceptionistUncheckedUpdateWithoutUserInput>
  }

  export type ReceptionistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftHours?: NullableStringFieldUpdateOperationsInput | string | null
    deskNumber?: NullableStringFieldUpdateOperationsInput | string | null
    handledTransactions?: TransactionUpdateManyWithoutReceptionistNestedInput
  }

  export type ReceptionistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftHours?: NullableStringFieldUpdateOperationsInput | string | null
    deskNumber?: NullableStringFieldUpdateOperationsInput | string | null
    handledTransactions?: TransactionUncheckedUpdateManyWithoutReceptionistNestedInput
  }

  export type PharmacistUpsertWithoutUserInput = {
    update: XOR<PharmacistUpdateWithoutUserInput, PharmacistUncheckedUpdateWithoutUserInput>
    create: XOR<PharmacistCreateWithoutUserInput, PharmacistUncheckedCreateWithoutUserInput>
    where?: PharmacistWhereInput
  }

  export type PharmacistUpdateToOneWithWhereWithoutUserInput = {
    where?: PharmacistWhereInput
    data: XOR<PharmacistUpdateWithoutUserInput, PharmacistUncheckedUpdateWithoutUserInput>
  }

  export type PharmacistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    dispensedPrescriptions?: PrescriptionUpdateManyWithoutPharmacistNestedInput
  }

  export type PharmacistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    dispensedPrescriptions?: PrescriptionUncheckedUpdateManyWithoutPharmacistNestedInput
  }

  export type UserCreateWithoutPatientProfileInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorProfile?: DoctorCreateNestedOneWithoutUserInput
    adminProfile?: AdminCreateNestedOneWithoutUserInput
    receptionistProfile?: ReceptionistCreateNestedOneWithoutUserInput
    pharmacistProfile?: PharmacistCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPatientProfileInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorProfile?: DoctorUncheckedCreateNestedOneWithoutUserInput
    adminProfile?: AdminUncheckedCreateNestedOneWithoutUserInput
    receptionistProfile?: ReceptionistUncheckedCreateNestedOneWithoutUserInput
    pharmacistProfile?: PharmacistUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPatientProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
  }

  export type AppointmentCreateWithoutPatientInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    reasonForVisit?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPatientInput = {
    id?: string
    doctorId: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    reasonForVisit?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalRecord?: MedicalRecordUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentCreateManyPatientInputEnvelope = {
    data: AppointmentCreateManyPatientInput | AppointmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type MedicalRecordCreateWithoutPatientInput = {
    id?: string
    diagnosis: string
    symptoms?: MedicalRecordCreatesymptomsInput | string[]
    treatment: string
    notes?: string | null
    files?: MedicalRecordCreatefilesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutMedicalRecordsInput
    appointment?: AppointmentCreateNestedOneWithoutMedicalRecordInput
    prescriptions?: PrescriptionCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordUncheckedCreateWithoutPatientInput = {
    id?: string
    doctorId: string
    appointmentId?: string | null
    diagnosis: string
    symptoms?: MedicalRecordCreatesymptomsInput | string[]
    treatment: string
    notes?: string | null
    files?: MedicalRecordCreatefilesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordCreateOrConnectWithoutPatientInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput>
  }

  export type MedicalRecordCreateManyPatientInputEnvelope = {
    data: MedicalRecordCreateManyPatientInput | MedicalRecordCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionCreateWithoutPatientInput = {
    id?: string
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutPrescriptionsInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutPrescriptionsInput
    pharmacist?: PharmacistCreateNestedOneWithoutDispensedPrescriptionsInput
    items?: PrescriptionItemCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutPatientInput = {
    id?: string
    doctorId: string
    medicalRecordId?: string | null
    pharmacistId?: string | null
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PrescriptionItemUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionCreateManyPatientInputEnvelope = {
    data: PrescriptionCreateManyPatientInput | PrescriptionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutPatientInput = {
    id?: string
    amount: number
    currency?: string
    status?: $Enums.TransactionStatus
    paymentMethod?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receptionist?: ReceptionistCreateNestedOneWithoutHandledTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutPatientInput = {
    id?: string
    receptionistId?: string | null
    amount: number
    currency?: string
    status?: $Enums.TransactionStatus
    paymentMethod?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutPatientInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPatientInput, TransactionUncheckedCreateWithoutPatientInput>
  }

  export type TransactionCreateManyPatientInputEnvelope = {
    data: TransactionCreateManyPatientInput | TransactionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPatientProfileInput = {
    update: XOR<UserUpdateWithoutPatientProfileInput, UserUncheckedUpdateWithoutPatientProfileInput>
    create: XOR<UserCreateWithoutPatientProfileInput, UserUncheckedCreateWithoutPatientProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientProfileInput, UserUncheckedUpdateWithoutPatientProfileInput>
  }

  export type UserUpdateWithoutPatientProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorProfile?: DoctorUpdateOneWithoutUserNestedInput
    adminProfile?: AdminUpdateOneWithoutUserNestedInput
    receptionistProfile?: ReceptionistUpdateOneWithoutUserNestedInput
    pharmacistProfile?: PharmacistUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorProfile?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    adminProfile?: AdminUncheckedUpdateOneWithoutUserNestedInput
    receptionistProfile?: ReceptionistUncheckedUpdateOneWithoutUserNestedInput
    pharmacistProfile?: PharmacistUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<AppointmentCreateWithoutPatientInput, AppointmentUncheckedCreateWithoutPatientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutPatientInput, AppointmentUncheckedUpdateWithoutPatientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutPatientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    reasonForVisit?: StringNullableFilter<"Appointment"> | string | null
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type MedicalRecordUpsertWithWhereUniqueWithoutPatientInput = {
    where: MedicalRecordWhereUniqueInput
    update: XOR<MedicalRecordUpdateWithoutPatientInput, MedicalRecordUncheckedUpdateWithoutPatientInput>
    create: XOR<MedicalRecordCreateWithoutPatientInput, MedicalRecordUncheckedCreateWithoutPatientInput>
  }

  export type MedicalRecordUpdateWithWhereUniqueWithoutPatientInput = {
    where: MedicalRecordWhereUniqueInput
    data: XOR<MedicalRecordUpdateWithoutPatientInput, MedicalRecordUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalRecordUpdateManyWithWhereWithoutPatientInput = {
    where: MedicalRecordScalarWhereInput
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyWithoutPatientInput>
  }

  export type MedicalRecordScalarWhereInput = {
    AND?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
    OR?: MedicalRecordScalarWhereInput[]
    NOT?: MedicalRecordScalarWhereInput | MedicalRecordScalarWhereInput[]
    id?: StringFilter<"MedicalRecord"> | string
    patientId?: StringFilter<"MedicalRecord"> | string
    doctorId?: StringFilter<"MedicalRecord"> | string
    appointmentId?: StringNullableFilter<"MedicalRecord"> | string | null
    diagnosis?: StringFilter<"MedicalRecord"> | string
    symptoms?: StringNullableListFilter<"MedicalRecord">
    treatment?: StringFilter<"MedicalRecord"> | string
    notes?: StringNullableFilter<"MedicalRecord"> | string | null
    files?: StringNullableListFilter<"MedicalRecord">
    createdAt?: DateTimeFilter<"MedicalRecord"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalRecord"> | Date | string
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutPatientInput, PrescriptionUncheckedUpdateWithoutPatientInput>
    create: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutPatientInput, PrescriptionUncheckedUpdateWithoutPatientInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutPatientInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutPatientInput>
  }

  export type PrescriptionScalarWhereInput = {
    AND?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    OR?: PrescriptionScalarWhereInput[]
    NOT?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    id?: StringFilter<"Prescription"> | string
    patientId?: StringFilter<"Prescription"> | string
    doctorId?: StringFilter<"Prescription"> | string
    medicalRecordId?: StringNullableFilter<"Prescription"> | string | null
    pharmacistId?: StringNullableFilter<"Prescription"> | string | null
    status?: EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus
    notes?: StringNullableFilter<"Prescription"> | string | null
    createdAt?: DateTimeFilter<"Prescription"> | Date | string
    updatedAt?: DateTimeFilter<"Prescription"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutPatientInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutPatientInput, TransactionUncheckedUpdateWithoutPatientInput>
    create: XOR<TransactionCreateWithoutPatientInput, TransactionUncheckedCreateWithoutPatientInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutPatientInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutPatientInput, TransactionUncheckedUpdateWithoutPatientInput>
  }

  export type TransactionUpdateManyWithWhereWithoutPatientInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutPatientInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    patientId?: StringFilter<"Transaction"> | string
    receptionistId?: StringNullableFilter<"Transaction"> | string | null
    amount?: FloatFilter<"Transaction"> | number
    currency?: StringFilter<"Transaction"> | string
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    paymentMethod?: StringNullableFilter<"Transaction"> | string | null
    description?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type UserCreateWithoutDoctorProfileInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientProfile?: PatientCreateNestedOneWithoutUserInput
    adminProfile?: AdminCreateNestedOneWithoutUserInput
    receptionistProfile?: ReceptionistCreateNestedOneWithoutUserInput
    pharmacistProfile?: PharmacistCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDoctorProfileInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientProfile?: PatientUncheckedCreateNestedOneWithoutUserInput
    adminProfile?: AdminUncheckedCreateNestedOneWithoutUserInput
    receptionistProfile?: ReceptionistUncheckedCreateNestedOneWithoutUserInput
    pharmacistProfile?: PharmacistUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDoctorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
  }

  export type AppointmentCreateWithoutDoctorInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    reasonForVisit?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    reasonForVisit?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalRecord?: MedicalRecordUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentCreateManyDoctorInputEnvelope = {
    data: AppointmentCreateManyDoctorInput | AppointmentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type MedicalRecordCreateWithoutDoctorInput = {
    id?: string
    diagnosis: string
    symptoms?: MedicalRecordCreatesymptomsInput | string[]
    treatment: string
    notes?: string | null
    files?: MedicalRecordCreatefilesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicalRecordsInput
    appointment?: AppointmentCreateNestedOneWithoutMedicalRecordInput
    prescriptions?: PrescriptionCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    appointmentId?: string | null
    diagnosis: string
    symptoms?: MedicalRecordCreatesymptomsInput | string[]
    treatment: string
    notes?: string | null
    files?: MedicalRecordCreatefilesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordCreateOrConnectWithoutDoctorInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutDoctorInput, MedicalRecordUncheckedCreateWithoutDoctorInput>
  }

  export type MedicalRecordCreateManyDoctorInputEnvelope = {
    data: MedicalRecordCreateManyDoctorInput | MedicalRecordCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionCreateWithoutDoctorInput = {
    id?: string
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutPrescriptionsInput
    pharmacist?: PharmacistCreateNestedOneWithoutDispensedPrescriptionsInput
    items?: PrescriptionItemCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    medicalRecordId?: string | null
    pharmacistId?: string | null
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PrescriptionItemUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput>
  }

  export type PrescriptionCreateManyDoctorInputEnvelope = {
    data: PrescriptionCreateManyDoctorInput | PrescriptionCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDoctorProfileInput = {
    update: XOR<UserUpdateWithoutDoctorProfileInput, UserUncheckedUpdateWithoutDoctorProfileInput>
    create: XOR<UserCreateWithoutDoctorProfileInput, UserUncheckedCreateWithoutDoctorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorProfileInput, UserUncheckedUpdateWithoutDoctorProfileInput>
  }

  export type UserUpdateWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientUpdateOneWithoutUserNestedInput
    adminProfile?: AdminUpdateOneWithoutUserNestedInput
    receptionistProfile?: ReceptionistUpdateOneWithoutUserNestedInput
    pharmacistProfile?: PharmacistUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientUncheckedUpdateOneWithoutUserNestedInput
    adminProfile?: AdminUncheckedUpdateOneWithoutUserNestedInput
    receptionistProfile?: ReceptionistUncheckedUpdateOneWithoutUserNestedInput
    pharmacistProfile?: PharmacistUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
    create: XOR<AppointmentCreateWithoutDoctorInput, AppointmentUncheckedCreateWithoutDoctorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutDoctorInput, AppointmentUncheckedUpdateWithoutDoctorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutDoctorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type MedicalRecordUpsertWithWhereUniqueWithoutDoctorInput = {
    where: MedicalRecordWhereUniqueInput
    update: XOR<MedicalRecordUpdateWithoutDoctorInput, MedicalRecordUncheckedUpdateWithoutDoctorInput>
    create: XOR<MedicalRecordCreateWithoutDoctorInput, MedicalRecordUncheckedCreateWithoutDoctorInput>
  }

  export type MedicalRecordUpdateWithWhereUniqueWithoutDoctorInput = {
    where: MedicalRecordWhereUniqueInput
    data: XOR<MedicalRecordUpdateWithoutDoctorInput, MedicalRecordUncheckedUpdateWithoutDoctorInput>
  }

  export type MedicalRecordUpdateManyWithWhereWithoutDoctorInput = {
    where: MedicalRecordScalarWhereInput
    data: XOR<MedicalRecordUpdateManyMutationInput, MedicalRecordUncheckedUpdateManyWithoutDoctorInput>
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutDoctorInput, PrescriptionUncheckedUpdateWithoutDoctorInput>
    create: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutDoctorInput, PrescriptionUncheckedUpdateWithoutDoctorInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutDoctorInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutDoctorInput>
  }

  export type UserCreateWithoutAdminProfileInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientProfile?: PatientCreateNestedOneWithoutUserInput
    doctorProfile?: DoctorCreateNestedOneWithoutUserInput
    receptionistProfile?: ReceptionistCreateNestedOneWithoutUserInput
    pharmacistProfile?: PharmacistCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminProfileInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientProfile?: PatientUncheckedCreateNestedOneWithoutUserInput
    doctorProfile?: DoctorUncheckedCreateNestedOneWithoutUserInput
    receptionistProfile?: ReceptionistUncheckedCreateNestedOneWithoutUserInput
    pharmacistProfile?: PharmacistUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminProfileInput, UserUncheckedCreateWithoutAdminProfileInput>
  }

  export type UserUpsertWithoutAdminProfileInput = {
    update: XOR<UserUpdateWithoutAdminProfileInput, UserUncheckedUpdateWithoutAdminProfileInput>
    create: XOR<UserCreateWithoutAdminProfileInput, UserUncheckedCreateWithoutAdminProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminProfileInput, UserUncheckedUpdateWithoutAdminProfileInput>
  }

  export type UserUpdateWithoutAdminProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientUpdateOneWithoutUserNestedInput
    doctorProfile?: DoctorUpdateOneWithoutUserNestedInput
    receptionistProfile?: ReceptionistUpdateOneWithoutUserNestedInput
    pharmacistProfile?: PharmacistUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientUncheckedUpdateOneWithoutUserNestedInput
    doctorProfile?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    receptionistProfile?: ReceptionistUncheckedUpdateOneWithoutUserNestedInput
    pharmacistProfile?: PharmacistUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutReceptionistProfileInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientProfile?: PatientCreateNestedOneWithoutUserInput
    doctorProfile?: DoctorCreateNestedOneWithoutUserInput
    adminProfile?: AdminCreateNestedOneWithoutUserInput
    pharmacistProfile?: PharmacistCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceptionistProfileInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientProfile?: PatientUncheckedCreateNestedOneWithoutUserInput
    doctorProfile?: DoctorUncheckedCreateNestedOneWithoutUserInput
    adminProfile?: AdminUncheckedCreateNestedOneWithoutUserInput
    pharmacistProfile?: PharmacistUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceptionistProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceptionistProfileInput, UserUncheckedCreateWithoutReceptionistProfileInput>
  }

  export type TransactionCreateWithoutReceptionistInput = {
    id?: string
    amount: number
    currency?: string
    status?: $Enums.TransactionStatus
    paymentMethod?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutReceptionistInput = {
    id?: string
    patientId: string
    amount: number
    currency?: string
    status?: $Enums.TransactionStatus
    paymentMethod?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutReceptionistInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutReceptionistInput, TransactionUncheckedCreateWithoutReceptionistInput>
  }

  export type TransactionCreateManyReceptionistInputEnvelope = {
    data: TransactionCreateManyReceptionistInput | TransactionCreateManyReceptionistInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReceptionistProfileInput = {
    update: XOR<UserUpdateWithoutReceptionistProfileInput, UserUncheckedUpdateWithoutReceptionistProfileInput>
    create: XOR<UserCreateWithoutReceptionistProfileInput, UserUncheckedCreateWithoutReceptionistProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceptionistProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceptionistProfileInput, UserUncheckedUpdateWithoutReceptionistProfileInput>
  }

  export type UserUpdateWithoutReceptionistProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientUpdateOneWithoutUserNestedInput
    doctorProfile?: DoctorUpdateOneWithoutUserNestedInput
    adminProfile?: AdminUpdateOneWithoutUserNestedInput
    pharmacistProfile?: PharmacistUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceptionistProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientUncheckedUpdateOneWithoutUserNestedInput
    doctorProfile?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    adminProfile?: AdminUncheckedUpdateOneWithoutUserNestedInput
    pharmacistProfile?: PharmacistUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutReceptionistInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutReceptionistInput, TransactionUncheckedUpdateWithoutReceptionistInput>
    create: XOR<TransactionCreateWithoutReceptionistInput, TransactionUncheckedCreateWithoutReceptionistInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutReceptionistInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutReceptionistInput, TransactionUncheckedUpdateWithoutReceptionistInput>
  }

  export type TransactionUpdateManyWithWhereWithoutReceptionistInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutReceptionistInput>
  }

  export type UserCreateWithoutPharmacistProfileInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientProfile?: PatientCreateNestedOneWithoutUserInput
    doctorProfile?: DoctorCreateNestedOneWithoutUserInput
    adminProfile?: AdminCreateNestedOneWithoutUserInput
    receptionistProfile?: ReceptionistCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPharmacistProfileInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    firstName: string
    lastName: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patientProfile?: PatientUncheckedCreateNestedOneWithoutUserInput
    doctorProfile?: DoctorUncheckedCreateNestedOneWithoutUserInput
    adminProfile?: AdminUncheckedCreateNestedOneWithoutUserInput
    receptionistProfile?: ReceptionistUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPharmacistProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPharmacistProfileInput, UserUncheckedCreateWithoutPharmacistProfileInput>
  }

  export type PrescriptionCreateWithoutPharmacistInput = {
    id?: string
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
    doctor: DoctorCreateNestedOneWithoutPrescriptionsInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutPrescriptionsInput
    items?: PrescriptionItemCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutPharmacistInput = {
    id?: string
    patientId: string
    doctorId: string
    medicalRecordId?: string | null
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PrescriptionItemUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutPharmacistInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutPharmacistInput, PrescriptionUncheckedCreateWithoutPharmacistInput>
  }

  export type PrescriptionCreateManyPharmacistInputEnvelope = {
    data: PrescriptionCreateManyPharmacistInput | PrescriptionCreateManyPharmacistInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPharmacistProfileInput = {
    update: XOR<UserUpdateWithoutPharmacistProfileInput, UserUncheckedUpdateWithoutPharmacistProfileInput>
    create: XOR<UserCreateWithoutPharmacistProfileInput, UserUncheckedCreateWithoutPharmacistProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPharmacistProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPharmacistProfileInput, UserUncheckedUpdateWithoutPharmacistProfileInput>
  }

  export type UserUpdateWithoutPharmacistProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientUpdateOneWithoutUserNestedInput
    doctorProfile?: DoctorUpdateOneWithoutUserNestedInput
    adminProfile?: AdminUpdateOneWithoutUserNestedInput
    receptionistProfile?: ReceptionistUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPharmacistProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientProfile?: PatientUncheckedUpdateOneWithoutUserNestedInput
    doctorProfile?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    adminProfile?: AdminUncheckedUpdateOneWithoutUserNestedInput
    receptionistProfile?: ReceptionistUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutPharmacistInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutPharmacistInput, PrescriptionUncheckedUpdateWithoutPharmacistInput>
    create: XOR<PrescriptionCreateWithoutPharmacistInput, PrescriptionUncheckedCreateWithoutPharmacistInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutPharmacistInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutPharmacistInput, PrescriptionUncheckedUpdateWithoutPharmacistInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutPharmacistInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutPharmacistInput>
  }

  export type PatientCreateWithoutAppointmentsInput = {
    id?: string
    dateOfBirth: Date | string
    bloodGroup?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    address?: string | null
    medicalHistory?: string | null
    user: UserCreateNestedOneWithoutPatientProfileInput
    medicalRecords?: MedicalRecordCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
    transactions?: TransactionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    userId: string
    dateOfBirth: Date | string
    bloodGroup?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    address?: string | null
    medicalHistory?: string | null
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAppointmentsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
  }

  export type DoctorCreateWithoutAppointmentsInput = {
    id?: string
    specialization: string
    licenseNumber: string
    department: string
    availability?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutDoctorProfileInput
    medicalRecords?: MedicalRecordCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    userId: string
    specialization: string
    licenseNumber: string
    department: string
    availability?: NullableJsonNullValueInput | InputJsonValue
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutAppointmentsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
  }

  export type MedicalRecordCreateWithoutAppointmentInput = {
    id?: string
    diagnosis: string
    symptoms?: MedicalRecordCreatesymptomsInput | string[]
    treatment: string
    notes?: string | null
    files?: MedicalRecordCreatefilesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicalRecordsInput
    doctor: DoctorCreateNestedOneWithoutMedicalRecordsInput
    prescriptions?: PrescriptionCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordUncheckedCreateWithoutAppointmentInput = {
    id?: string
    patientId: string
    doctorId: string
    diagnosis: string
    symptoms?: MedicalRecordCreatesymptomsInput | string[]
    treatment: string
    notes?: string | null
    files?: MedicalRecordCreatefilesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutMedicalRecordInput
  }

  export type MedicalRecordCreateOrConnectWithoutAppointmentInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutAppointmentInput, MedicalRecordUncheckedCreateWithoutAppointmentInput>
  }

  export type PatientUpsertWithoutAppointmentsInput = {
    update: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<PatientCreateWithoutAppointmentsInput, PatientUncheckedCreateWithoutAppointmentsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAppointmentsInput, PatientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type PatientUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    address?: NullableStringFieldUpdateOperationsInput | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    medicalRecords?: MedicalRecordUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
    transactions?: TransactionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    address?: NullableStringFieldUpdateOperationsInput | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutAppointmentsInput = {
    update: XOR<DoctorUpdateWithoutAppointmentsInput, DoctorUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<DoctorCreateWithoutAppointmentsInput, DoctorUncheckedCreateWithoutAppointmentsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutAppointmentsInput, DoctorUncheckedUpdateWithoutAppointmentsInput>
  }

  export type DoctorUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    availability?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutDoctorProfileNestedInput
    medicalRecords?: MedicalRecordUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    availability?: NullableJsonNullValueInput | InputJsonValue
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type MedicalRecordUpsertWithoutAppointmentInput = {
    update: XOR<MedicalRecordUpdateWithoutAppointmentInput, MedicalRecordUncheckedUpdateWithoutAppointmentInput>
    create: XOR<MedicalRecordCreateWithoutAppointmentInput, MedicalRecordUncheckedCreateWithoutAppointmentInput>
    where?: MedicalRecordWhereInput
  }

  export type MedicalRecordUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: MedicalRecordWhereInput
    data: XOR<MedicalRecordUpdateWithoutAppointmentInput, MedicalRecordUncheckedUpdateWithoutAppointmentInput>
  }

  export type MedicalRecordUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalRecordUpdatesymptomsInput | string[]
    treatment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    files?: MedicalRecordUpdatefilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicalRecordsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalRecordUpdatesymptomsInput | string[]
    treatment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    files?: MedicalRecordUpdatefilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInput
  }

  export type PatientCreateWithoutMedicalRecordsInput = {
    id?: string
    dateOfBirth: Date | string
    bloodGroup?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    address?: string | null
    medicalHistory?: string | null
    user: UserCreateNestedOneWithoutPatientProfileInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
    transactions?: TransactionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutMedicalRecordsInput = {
    id?: string
    userId: string
    dateOfBirth: Date | string
    bloodGroup?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    address?: string | null
    medicalHistory?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutMedicalRecordsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutMedicalRecordsInput, PatientUncheckedCreateWithoutMedicalRecordsInput>
  }

  export type DoctorCreateWithoutMedicalRecordsInput = {
    id?: string
    specialization: string
    licenseNumber: string
    department: string
    availability?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutDoctorProfileInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutMedicalRecordsInput = {
    id?: string
    userId: string
    specialization: string
    licenseNumber: string
    department: string
    availability?: NullableJsonNullValueInput | InputJsonValue
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutMedicalRecordsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutMedicalRecordsInput, DoctorUncheckedCreateWithoutMedicalRecordsInput>
  }

  export type AppointmentCreateWithoutMedicalRecordInput = {
    id?: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    reasonForVisit?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAppointmentsInput
    doctor: DoctorCreateNestedOneWithoutAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutMedicalRecordInput = {
    id?: string
    patientId: string
    doctorId: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    reasonForVisit?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutMedicalRecordInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutMedicalRecordInput, AppointmentUncheckedCreateWithoutMedicalRecordInput>
  }

  export type PrescriptionCreateWithoutMedicalRecordInput = {
    id?: string
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
    doctor: DoctorCreateNestedOneWithoutPrescriptionsInput
    pharmacist?: PharmacistCreateNestedOneWithoutDispensedPrescriptionsInput
    items?: PrescriptionItemCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutMedicalRecordInput = {
    id?: string
    patientId: string
    doctorId: string
    pharmacistId?: string | null
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PrescriptionItemUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutMedicalRecordInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutMedicalRecordInput, PrescriptionUncheckedCreateWithoutMedicalRecordInput>
  }

  export type PrescriptionCreateManyMedicalRecordInputEnvelope = {
    data: PrescriptionCreateManyMedicalRecordInput | PrescriptionCreateManyMedicalRecordInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutMedicalRecordsInput = {
    update: XOR<PatientUpdateWithoutMedicalRecordsInput, PatientUncheckedUpdateWithoutMedicalRecordsInput>
    create: XOR<PatientCreateWithoutMedicalRecordsInput, PatientUncheckedCreateWithoutMedicalRecordsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutMedicalRecordsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutMedicalRecordsInput, PatientUncheckedUpdateWithoutMedicalRecordsInput>
  }

  export type PatientUpdateWithoutMedicalRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    address?: NullableStringFieldUpdateOperationsInput | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
    transactions?: TransactionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutMedicalRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    address?: NullableStringFieldUpdateOperationsInput | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutMedicalRecordsInput = {
    update: XOR<DoctorUpdateWithoutMedicalRecordsInput, DoctorUncheckedUpdateWithoutMedicalRecordsInput>
    create: XOR<DoctorCreateWithoutMedicalRecordsInput, DoctorUncheckedCreateWithoutMedicalRecordsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutMedicalRecordsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutMedicalRecordsInput, DoctorUncheckedUpdateWithoutMedicalRecordsInput>
  }

  export type DoctorUpdateWithoutMedicalRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    availability?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutDoctorProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutMedicalRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    availability?: NullableJsonNullValueInput | InputJsonValue
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type AppointmentUpsertWithoutMedicalRecordInput = {
    update: XOR<AppointmentUpdateWithoutMedicalRecordInput, AppointmentUncheckedUpdateWithoutMedicalRecordInput>
    create: XOR<AppointmentCreateWithoutMedicalRecordInput, AppointmentUncheckedCreateWithoutMedicalRecordInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutMedicalRecordInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutMedicalRecordInput, AppointmentUncheckedUpdateWithoutMedicalRecordInput>
  }

  export type AppointmentUpdateWithoutMedicalRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reasonForVisit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutMedicalRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reasonForVisit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutMedicalRecordInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutMedicalRecordInput, PrescriptionUncheckedUpdateWithoutMedicalRecordInput>
    create: XOR<PrescriptionCreateWithoutMedicalRecordInput, PrescriptionUncheckedCreateWithoutMedicalRecordInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutMedicalRecordInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutMedicalRecordInput, PrescriptionUncheckedUpdateWithoutMedicalRecordInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutMedicalRecordInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutMedicalRecordInput>
  }

  export type PatientCreateWithoutPrescriptionsInput = {
    id?: string
    dateOfBirth: Date | string
    bloodGroup?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    address?: string | null
    medicalHistory?: string | null
    user: UserCreateNestedOneWithoutPatientProfileInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    medicalRecords?: MedicalRecordCreateNestedManyWithoutPatientInput
    transactions?: TransactionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutPrescriptionsInput = {
    id?: string
    userId: string
    dateOfBirth: Date | string
    bloodGroup?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    address?: string | null
    medicalHistory?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutPatientInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutPrescriptionsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
  }

  export type DoctorCreateWithoutPrescriptionsInput = {
    id?: string
    specialization: string
    licenseNumber: string
    department: string
    availability?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutDoctorProfileInput
    appointments?: AppointmentCreateNestedManyWithoutDoctorInput
    medicalRecords?: MedicalRecordCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutPrescriptionsInput = {
    id?: string
    userId: string
    specialization: string
    licenseNumber: string
    department: string
    availability?: NullableJsonNullValueInput | InputJsonValue
    appointments?: AppointmentUncheckedCreateNestedManyWithoutDoctorInput
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutPrescriptionsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutPrescriptionsInput, DoctorUncheckedCreateWithoutPrescriptionsInput>
  }

  export type MedicalRecordCreateWithoutPrescriptionsInput = {
    id?: string
    diagnosis: string
    symptoms?: MedicalRecordCreatesymptomsInput | string[]
    treatment: string
    notes?: string | null
    files?: MedicalRecordCreatefilesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicalRecordsInput
    doctor: DoctorCreateNestedOneWithoutMedicalRecordsInput
    appointment?: AppointmentCreateNestedOneWithoutMedicalRecordInput
  }

  export type MedicalRecordUncheckedCreateWithoutPrescriptionsInput = {
    id?: string
    patientId: string
    doctorId: string
    appointmentId?: string | null
    diagnosis: string
    symptoms?: MedicalRecordCreatesymptomsInput | string[]
    treatment: string
    notes?: string | null
    files?: MedicalRecordCreatefilesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalRecordCreateOrConnectWithoutPrescriptionsInput = {
    where: MedicalRecordWhereUniqueInput
    create: XOR<MedicalRecordCreateWithoutPrescriptionsInput, MedicalRecordUncheckedCreateWithoutPrescriptionsInput>
  }

  export type PharmacistCreateWithoutDispensedPrescriptionsInput = {
    id?: string
    licenseNumber: string
    user: UserCreateNestedOneWithoutPharmacistProfileInput
  }

  export type PharmacistUncheckedCreateWithoutDispensedPrescriptionsInput = {
    id?: string
    userId: string
    licenseNumber: string
  }

  export type PharmacistCreateOrConnectWithoutDispensedPrescriptionsInput = {
    where: PharmacistWhereUniqueInput
    create: XOR<PharmacistCreateWithoutDispensedPrescriptionsInput, PharmacistUncheckedCreateWithoutDispensedPrescriptionsInput>
  }

  export type PrescriptionItemCreateWithoutPrescriptionInput = {
    id?: string
    dosage: string
    frequency: string
    durationDays: number
    quantity: number
    medication: MedicationCreateNestedOneWithoutPrescriptionItemsInput
  }

  export type PrescriptionItemUncheckedCreateWithoutPrescriptionInput = {
    id?: string
    medicationId: string
    dosage: string
    frequency: string
    durationDays: number
    quantity: number
  }

  export type PrescriptionItemCreateOrConnectWithoutPrescriptionInput = {
    where: PrescriptionItemWhereUniqueInput
    create: XOR<PrescriptionItemCreateWithoutPrescriptionInput, PrescriptionItemUncheckedCreateWithoutPrescriptionInput>
  }

  export type PrescriptionItemCreateManyPrescriptionInputEnvelope = {
    data: PrescriptionItemCreateManyPrescriptionInput | PrescriptionItemCreateManyPrescriptionInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutPrescriptionsInput = {
    update: XOR<PatientUpdateWithoutPrescriptionsInput, PatientUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutPrescriptionsInput, PatientUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type PatientUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    address?: NullableStringFieldUpdateOperationsInput | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    medicalRecords?: MedicalRecordUpdateManyWithoutPatientNestedInput
    transactions?: TransactionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    address?: NullableStringFieldUpdateOperationsInput | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DoctorUpsertWithoutPrescriptionsInput = {
    update: XOR<DoctorUpdateWithoutPrescriptionsInput, DoctorUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<DoctorCreateWithoutPrescriptionsInput, DoctorUncheckedCreateWithoutPrescriptionsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutPrescriptionsInput, DoctorUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type DoctorUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    availability?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutDoctorProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutDoctorNestedInput
    medicalRecords?: MedicalRecordUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    availability?: NullableJsonNullValueInput | InputJsonValue
    appointments?: AppointmentUncheckedUpdateManyWithoutDoctorNestedInput
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type MedicalRecordUpsertWithoutPrescriptionsInput = {
    update: XOR<MedicalRecordUpdateWithoutPrescriptionsInput, MedicalRecordUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<MedicalRecordCreateWithoutPrescriptionsInput, MedicalRecordUncheckedCreateWithoutPrescriptionsInput>
    where?: MedicalRecordWhereInput
  }

  export type MedicalRecordUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: MedicalRecordWhereInput
    data: XOR<MedicalRecordUpdateWithoutPrescriptionsInput, MedicalRecordUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type MedicalRecordUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalRecordUpdatesymptomsInput | string[]
    treatment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    files?: MedicalRecordUpdatefilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicalRecordsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInput
    appointment?: AppointmentUpdateOneWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosis?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalRecordUpdatesymptomsInput | string[]
    treatment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    files?: MedicalRecordUpdatefilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacistUpsertWithoutDispensedPrescriptionsInput = {
    update: XOR<PharmacistUpdateWithoutDispensedPrescriptionsInput, PharmacistUncheckedUpdateWithoutDispensedPrescriptionsInput>
    create: XOR<PharmacistCreateWithoutDispensedPrescriptionsInput, PharmacistUncheckedCreateWithoutDispensedPrescriptionsInput>
    where?: PharmacistWhereInput
  }

  export type PharmacistUpdateToOneWithWhereWithoutDispensedPrescriptionsInput = {
    where?: PharmacistWhereInput
    data: XOR<PharmacistUpdateWithoutDispensedPrescriptionsInput, PharmacistUncheckedUpdateWithoutDispensedPrescriptionsInput>
  }

  export type PharmacistUpdateWithoutDispensedPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPharmacistProfileNestedInput
  }

  export type PharmacistUncheckedUpdateWithoutDispensedPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionItemUpsertWithWhereUniqueWithoutPrescriptionInput = {
    where: PrescriptionItemWhereUniqueInput
    update: XOR<PrescriptionItemUpdateWithoutPrescriptionInput, PrescriptionItemUncheckedUpdateWithoutPrescriptionInput>
    create: XOR<PrescriptionItemCreateWithoutPrescriptionInput, PrescriptionItemUncheckedCreateWithoutPrescriptionInput>
  }

  export type PrescriptionItemUpdateWithWhereUniqueWithoutPrescriptionInput = {
    where: PrescriptionItemWhereUniqueInput
    data: XOR<PrescriptionItemUpdateWithoutPrescriptionInput, PrescriptionItemUncheckedUpdateWithoutPrescriptionInput>
  }

  export type PrescriptionItemUpdateManyWithWhereWithoutPrescriptionInput = {
    where: PrescriptionItemScalarWhereInput
    data: XOR<PrescriptionItemUpdateManyMutationInput, PrescriptionItemUncheckedUpdateManyWithoutPrescriptionInput>
  }

  export type PrescriptionItemScalarWhereInput = {
    AND?: PrescriptionItemScalarWhereInput | PrescriptionItemScalarWhereInput[]
    OR?: PrescriptionItemScalarWhereInput[]
    NOT?: PrescriptionItemScalarWhereInput | PrescriptionItemScalarWhereInput[]
    id?: StringFilter<"PrescriptionItem"> | string
    prescriptionId?: StringFilter<"PrescriptionItem"> | string
    medicationId?: StringFilter<"PrescriptionItem"> | string
    dosage?: StringFilter<"PrescriptionItem"> | string
    frequency?: StringFilter<"PrescriptionItem"> | string
    durationDays?: IntFilter<"PrescriptionItem"> | number
    quantity?: IntFilter<"PrescriptionItem"> | number
  }

  export type PrescriptionCreateWithoutItemsInput = {
    id?: string
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
    doctor: DoctorCreateNestedOneWithoutPrescriptionsInput
    medicalRecord?: MedicalRecordCreateNestedOneWithoutPrescriptionsInput
    pharmacist?: PharmacistCreateNestedOneWithoutDispensedPrescriptionsInput
  }

  export type PrescriptionUncheckedCreateWithoutItemsInput = {
    id?: string
    patientId: string
    doctorId: string
    medicalRecordId?: string | null
    pharmacistId?: string | null
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionCreateOrConnectWithoutItemsInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutItemsInput, PrescriptionUncheckedCreateWithoutItemsInput>
  }

  export type MedicationCreateWithoutPrescriptionItemsInput = {
    id?: string
    name: string
    brandName?: string | null
    description?: string | null
    stockQuantity?: number
    unitPrice: number
    requiresPrescription?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationUncheckedCreateWithoutPrescriptionItemsInput = {
    id?: string
    name: string
    brandName?: string | null
    description?: string | null
    stockQuantity?: number
    unitPrice: number
    requiresPrescription?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationCreateOrConnectWithoutPrescriptionItemsInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutPrescriptionItemsInput, MedicationUncheckedCreateWithoutPrescriptionItemsInput>
  }

  export type PrescriptionUpsertWithoutItemsInput = {
    update: XOR<PrescriptionUpdateWithoutItemsInput, PrescriptionUncheckedUpdateWithoutItemsInput>
    create: XOR<PrescriptionCreateWithoutItemsInput, PrescriptionUncheckedCreateWithoutItemsInput>
    where?: PrescriptionWhereInput
  }

  export type PrescriptionUpdateToOneWithWhereWithoutItemsInput = {
    where?: PrescriptionWhereInput
    data: XOR<PrescriptionUpdateWithoutItemsInput, PrescriptionUncheckedUpdateWithoutItemsInput>
  }

  export type PrescriptionUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutPrescriptionsNestedInput
    pharmacist?: PharmacistUpdateOneWithoutDispensedPrescriptionsNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medicalRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacistId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUpsertWithoutPrescriptionItemsInput = {
    update: XOR<MedicationUpdateWithoutPrescriptionItemsInput, MedicationUncheckedUpdateWithoutPrescriptionItemsInput>
    create: XOR<MedicationCreateWithoutPrescriptionItemsInput, MedicationUncheckedCreateWithoutPrescriptionItemsInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutPrescriptionItemsInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutPrescriptionItemsInput, MedicationUncheckedUpdateWithoutPrescriptionItemsInput>
  }

  export type MedicationUpdateWithoutPrescriptionItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    requiresPrescription?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUncheckedUpdateWithoutPrescriptionItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brandName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stockQuantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    requiresPrescription?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionItemCreateWithoutMedicationInput = {
    id?: string
    dosage: string
    frequency: string
    durationDays: number
    quantity: number
    prescription: PrescriptionCreateNestedOneWithoutItemsInput
  }

  export type PrescriptionItemUncheckedCreateWithoutMedicationInput = {
    id?: string
    prescriptionId: string
    dosage: string
    frequency: string
    durationDays: number
    quantity: number
  }

  export type PrescriptionItemCreateOrConnectWithoutMedicationInput = {
    where: PrescriptionItemWhereUniqueInput
    create: XOR<PrescriptionItemCreateWithoutMedicationInput, PrescriptionItemUncheckedCreateWithoutMedicationInput>
  }

  export type PrescriptionItemCreateManyMedicationInputEnvelope = {
    data: PrescriptionItemCreateManyMedicationInput | PrescriptionItemCreateManyMedicationInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionItemUpsertWithWhereUniqueWithoutMedicationInput = {
    where: PrescriptionItemWhereUniqueInput
    update: XOR<PrescriptionItemUpdateWithoutMedicationInput, PrescriptionItemUncheckedUpdateWithoutMedicationInput>
    create: XOR<PrescriptionItemCreateWithoutMedicationInput, PrescriptionItemUncheckedCreateWithoutMedicationInput>
  }

  export type PrescriptionItemUpdateWithWhereUniqueWithoutMedicationInput = {
    where: PrescriptionItemWhereUniqueInput
    data: XOR<PrescriptionItemUpdateWithoutMedicationInput, PrescriptionItemUncheckedUpdateWithoutMedicationInput>
  }

  export type PrescriptionItemUpdateManyWithWhereWithoutMedicationInput = {
    where: PrescriptionItemScalarWhereInput
    data: XOR<PrescriptionItemUpdateManyMutationInput, PrescriptionItemUncheckedUpdateManyWithoutMedicationInput>
  }

  export type PatientCreateWithoutTransactionsInput = {
    id?: string
    dateOfBirth: Date | string
    bloodGroup?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    address?: string | null
    medicalHistory?: string | null
    user: UserCreateNestedOneWithoutPatientProfileInput
    appointments?: AppointmentCreateNestedManyWithoutPatientInput
    medicalRecords?: MedicalRecordCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutTransactionsInput = {
    id?: string
    userId: string
    dateOfBirth: Date | string
    bloodGroup?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    address?: string | null
    medicalHistory?: string | null
    appointments?: AppointmentUncheckedCreateNestedManyWithoutPatientInput
    medicalRecords?: MedicalRecordUncheckedCreateNestedManyWithoutPatientInput
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutTransactionsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutTransactionsInput, PatientUncheckedCreateWithoutTransactionsInput>
  }

  export type ReceptionistCreateWithoutHandledTransactionsInput = {
    id?: string
    shiftHours?: string | null
    deskNumber?: string | null
    user: UserCreateNestedOneWithoutReceptionistProfileInput
  }

  export type ReceptionistUncheckedCreateWithoutHandledTransactionsInput = {
    id?: string
    userId: string
    shiftHours?: string | null
    deskNumber?: string | null
  }

  export type ReceptionistCreateOrConnectWithoutHandledTransactionsInput = {
    where: ReceptionistWhereUniqueInput
    create: XOR<ReceptionistCreateWithoutHandledTransactionsInput, ReceptionistUncheckedCreateWithoutHandledTransactionsInput>
  }

  export type PatientUpsertWithoutTransactionsInput = {
    update: XOR<PatientUpdateWithoutTransactionsInput, PatientUncheckedUpdateWithoutTransactionsInput>
    create: XOR<PatientCreateWithoutTransactionsInput, PatientUncheckedCreateWithoutTransactionsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutTransactionsInput, PatientUncheckedUpdateWithoutTransactionsInput>
  }

  export type PatientUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    address?: NullableStringFieldUpdateOperationsInput | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPatientProfileNestedInput
    appointments?: AppointmentUpdateManyWithoutPatientNestedInput
    medicalRecords?: MedicalRecordUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    address?: NullableStringFieldUpdateOperationsInput | string | null
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    appointments?: AppointmentUncheckedUpdateManyWithoutPatientNestedInput
    medicalRecords?: MedicalRecordUncheckedUpdateManyWithoutPatientNestedInput
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type ReceptionistUpsertWithoutHandledTransactionsInput = {
    update: XOR<ReceptionistUpdateWithoutHandledTransactionsInput, ReceptionistUncheckedUpdateWithoutHandledTransactionsInput>
    create: XOR<ReceptionistCreateWithoutHandledTransactionsInput, ReceptionistUncheckedCreateWithoutHandledTransactionsInput>
    where?: ReceptionistWhereInput
  }

  export type ReceptionistUpdateToOneWithWhereWithoutHandledTransactionsInput = {
    where?: ReceptionistWhereInput
    data: XOR<ReceptionistUpdateWithoutHandledTransactionsInput, ReceptionistUncheckedUpdateWithoutHandledTransactionsInput>
  }

  export type ReceptionistUpdateWithoutHandledTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shiftHours?: NullableStringFieldUpdateOperationsInput | string | null
    deskNumber?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutReceptionistProfileNestedInput
  }

  export type ReceptionistUncheckedUpdateWithoutHandledTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shiftHours?: NullableStringFieldUpdateOperationsInput | string | null
    deskNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentCreateManyPatientInput = {
    id?: string
    doctorId: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    reasonForVisit?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalRecordCreateManyPatientInput = {
    id?: string
    doctorId: string
    appointmentId?: string | null
    diagnosis: string
    symptoms?: MedicalRecordCreatesymptomsInput | string[]
    treatment: string
    notes?: string | null
    files?: MedicalRecordCreatefilesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionCreateManyPatientInput = {
    id?: string
    doctorId: string
    medicalRecordId?: string | null
    pharmacistId?: string | null
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyPatientInput = {
    id?: string
    receptionistId?: string | null
    amount: number
    currency?: string
    status?: $Enums.TransactionStatus
    paymentMethod?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reasonForVisit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutAppointmentsNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reasonForVisit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecord?: MedicalRecordUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reasonForVisit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalRecordUpdatesymptomsInput | string[]
    treatment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    files?: MedicalRecordUpdatefilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutMedicalRecordsNestedInput
    appointment?: AppointmentUpdateOneWithoutMedicalRecordNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosis?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalRecordUpdatesymptomsInput | string[]
    treatment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    files?: MedicalRecordUpdatefilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosis?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalRecordUpdatesymptomsInput | string[]
    treatment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    files?: MedicalRecordUpdatefilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutPrescriptionsNestedInput
    pharmacist?: PharmacistUpdateOneWithoutDispensedPrescriptionsNestedInput
    items?: PrescriptionItemUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medicalRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacistId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PrescriptionItemUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medicalRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacistId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receptionist?: ReceptionistUpdateOneWithoutHandledTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    receptionistId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    receptionistId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyDoctorInput = {
    id?: string
    patientId: string
    date: Date | string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.AppointmentStatus
    reasonForVisit?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalRecordCreateManyDoctorInput = {
    id?: string
    patientId: string
    appointmentId?: string | null
    diagnosis: string
    symptoms?: MedicalRecordCreatesymptomsInput | string[]
    treatment: string
    notes?: string | null
    files?: MedicalRecordCreatefilesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionCreateManyDoctorInput = {
    id?: string
    patientId: string
    medicalRecordId?: string | null
    pharmacistId?: string | null
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reasonForVisit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAppointmentsNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reasonForVisit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalRecord?: MedicalRecordUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    reasonForVisit?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalRecordUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    diagnosis?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalRecordUpdatesymptomsInput | string[]
    treatment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    files?: MedicalRecordUpdatefilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicalRecordsNestedInput
    appointment?: AppointmentUpdateOneWithoutMedicalRecordNestedInput
    prescriptions?: PrescriptionUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosis?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalRecordUpdatesymptomsInput | string[]
    treatment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    files?: MedicalRecordUpdatefilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutMedicalRecordNestedInput
  }

  export type MedicalRecordUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    appointmentId?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosis?: StringFieldUpdateOperationsInput | string
    symptoms?: MedicalRecordUpdatesymptomsInput | string[]
    treatment?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    files?: MedicalRecordUpdatefilesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutPrescriptionsNestedInput
    pharmacist?: PharmacistUpdateOneWithoutDispensedPrescriptionsNestedInput
    items?: PrescriptionItemUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medicalRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacistId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PrescriptionItemUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medicalRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacistId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyReceptionistInput = {
    id?: string
    patientId: string
    amount: number
    currency?: string
    status?: $Enums.TransactionStatus
    paymentMethod?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutReceptionistInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutReceptionistInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutReceptionistInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionCreateManyPharmacistInput = {
    id?: string
    patientId: string
    doctorId: string
    medicalRecordId?: string | null
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionUpdateWithoutPharmacistInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput
    medicalRecord?: MedicalRecordUpdateOneWithoutPrescriptionsNestedInput
    items?: PrescriptionItemUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutPharmacistInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medicalRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PrescriptionItemUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateManyWithoutPharmacistInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    medicalRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionCreateManyMedicalRecordInput = {
    id?: string
    patientId: string
    doctorId: string
    pharmacistId?: string | null
    status?: $Enums.PrescriptionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrescriptionUpdateWithoutMedicalRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput
    pharmacist?: PharmacistUpdateOneWithoutDispensedPrescriptionsNestedInput
    items?: PrescriptionItemUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutMedicalRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    pharmacistId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PrescriptionItemUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateManyWithoutMedicalRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    pharmacistId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionItemCreateManyPrescriptionInput = {
    id?: string
    medicationId: string
    dosage: string
    frequency: string
    durationDays: number
    quantity: number
  }

  export type PrescriptionItemUpdateWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    medication?: MedicationUpdateOneRequiredWithoutPrescriptionItemsNestedInput
  }

  export type PrescriptionItemUncheckedUpdateWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PrescriptionItemUncheckedUpdateManyWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PrescriptionItemCreateManyMedicationInput = {
    id?: string
    prescriptionId: string
    dosage: string
    frequency: string
    durationDays: number
    quantity: number
  }

  export type PrescriptionItemUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    prescription?: PrescriptionUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PrescriptionItemUncheckedUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescriptionId?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type PrescriptionItemUncheckedUpdateManyWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescriptionId?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    durationDays?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
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