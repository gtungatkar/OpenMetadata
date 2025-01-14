# Database

This schema defines the Database entity. A database also referred to as Database Catalog is a collection of tables.

**$id:** [**https://open-metadata.org/schema/entity/data/database.json**](https://open-metadata.org/schema/entity/data/database.json)

Type: `object`

## Properties

* **id**
  * Unique identifier that identifies this database instance.
  * $ref: [../../type/basic.json\#/definitions/uuid](../types/basic.md#types-definitions-in-this-schema)
* **name** `required`
  * Name that identifies the database.
  * $ref: [\#/definitions/databaseName](database.md#types-definitions-in-this-schema)
* **fullyQualifiedName**
  * Name that uniquely identifies a database in the format 'ServiceName.DatabaseName'.
  * Type: `string`
* **description**
  * Description of the database instance.
  * Type: `string`
* **href**
  * Link to the resource corresponding to this entity.
  * $ref: [../../type/basic.json\#/definitions/href](../types/basic.md#types-definitions-in-this-schema)
* **owner**
  * Owner of this database.
  * $ref: [../../type/entityReference.json](../types/entity-reference.md)
* **service** `required`
  * Link to the database cluster/service where this database is hosted in.
  * $ref: [../../type/entityReference.json](../types/entity-reference.md)
* **usageSummary**
  * Latest usage information for this database.
  * $ref: [../../type/usageDetails.json](../types/usage-details.md)
* **tables**
  * References to tables in the database.
  * $ref: [../../type/entityReference.json\#/definitions/entityReferenceList](../types/entity-reference.md#types-definitions-in-this-schema)

## Types definitions in this schema

**databaseName**

* Name that identifies the database.
* Type: `string`
* The value must match this pattern: `^[^.]*$`
* Length: between 1 and 64

