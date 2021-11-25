[@bodiless/navigation](../README.md) / [Exports](../modules.md) / BreadcrumbItem

# Class: BreadcrumbItem

Stores breadcrumb item data.

## Implements

- [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)

## Table of contents

### Constructors

- [constructor](BreadcrumbItem.md#constructor)

### Properties

- [\_link](BreadcrumbItem.md#_link)
- [\_parent](BreadcrumbItem.md#_parent)
- [\_store](BreadcrumbItem.md#_store)
- [\_title](BreadcrumbItem.md#_title)
- [\_uuid](BreadcrumbItem.md#_uuid)

### Accessors

- [link](BreadcrumbItem.md#link)
- [parent](BreadcrumbItem.md#parent)
- [title](BreadcrumbItem.md#title)
- [uuid](BreadcrumbItem.md#uuid)

### Methods

- [getAncestors](BreadcrumbItem.md#getancestors)
- [hasPath](BreadcrumbItem.md#haspath)
- [isActive](BreadcrumbItem.md#isactive)
- [isAncestorOf](BreadcrumbItem.md#isancestorof)
- [isDescendantOf](BreadcrumbItem.md#isdescendantof)
- [isEqual](BreadcrumbItem.md#isequal)
- [isFirst](BreadcrumbItem.md#isfirst)
- [isLast](BreadcrumbItem.md#islast)
- [isSubpathOf](BreadcrumbItem.md#issubpathof)
- [setLink](BreadcrumbItem.md#setlink)
- [setTitle](BreadcrumbItem.md#settitle)
- [toString](BreadcrumbItem.md#tostring)

## Constructors

### constructor

• **new BreadcrumbItem**(`__namedParameters`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `BreadcrumbItemSettings` |

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:78](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L78)

## Properties

### \_link

• **\_link**: `BreadcrumbItemLink`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:74](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L74)

___

### \_parent

• `Optional` **\_parent**: [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:70](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L70)

___

### \_store

• **\_store**: `BreadcrumbStoreType`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:76](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L76)

___

### \_title

• **\_title**: `BreadcrumbItemTitle`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:72](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L72)

___

### \_uuid

• **\_uuid**: `string`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:68](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L68)

## Accessors

### link

• `get` **link**(): `BreadcrumbItemLink`

#### Returns

`BreadcrumbItemLink`

#### Implementation of

BreadcrumbItemType.link

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:160](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L160)

___

### parent

• `get` **parent**(): `undefined` \| [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)

#### Returns

`undefined` \| [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)

#### Implementation of

BreadcrumbItemType.parent

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:164](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L164)

___

### title

• `get` **title**(): `BreadcrumbItemTitle`

#### Returns

`BreadcrumbItemTitle`

#### Implementation of

BreadcrumbItemType.title

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:156](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L156)

___

### uuid

• `get` **uuid**(): `string`

#### Returns

`string`

#### Implementation of

BreadcrumbItemType.uuid

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:152](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L152)

## Methods

### getAncestors

▸ **getAncestors**(): [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)[]

#### Returns

[`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)[]

#### Implementation of

BreadcrumbItemType.getAncestors

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:141](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L141)

___

### hasPath

▸ **hasPath**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `string` \| [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype) |

#### Returns

`boolean`

#### Implementation of

BreadcrumbItemType.hasPath

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:106](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L106)

___

### isActive

▸ **isActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

BreadcrumbItemType.isActive

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:92](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L92)

___

### isAncestorOf

▸ **isAncestorOf**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype) |

#### Returns

`boolean`

#### Implementation of

BreadcrumbItemType.isAncestorOf

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:122](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L122)

___

### isDescendantOf

▸ **isDescendantOf**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype) |

#### Returns

`boolean`

#### Implementation of

BreadcrumbItemType.isDescendantOf

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:114](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L114)

___

### isEqual

▸ **isEqual**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `string` \| [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype) |

#### Returns

`boolean`

#### Implementation of

BreadcrumbItemType.isEqual

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:127](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L127)

___

### isFirst

▸ **isFirst**(): `boolean`

#### Returns

`boolean`

#### Implementation of

BreadcrumbItemType.isFirst

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:132](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L132)

___

### isLast

▸ **isLast**(): `boolean`

#### Returns

`boolean`

#### Implementation of

BreadcrumbItemType.isLast

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:136](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L136)

___

### isSubpathOf

▸ **isSubpathOf**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `string` \| [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype) |

#### Returns

`boolean`

#### Implementation of

BreadcrumbItemType.isSubpathOf

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:98](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L98)

___

### setLink

▸ **setLink**(`link`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | `BreadcrumbItemLink` |

#### Returns

`void`

#### Implementation of

BreadcrumbItemType.setLink

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:172](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L172)

___

### setTitle

▸ **setTitle**(`title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `BreadcrumbItemTitle` |

#### Returns

`void`

#### Implementation of

BreadcrumbItemType.setTitle

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:168](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L168)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:176](https://github.com/guilhermegpessoa/Bodiless-JS/blob/5b6d3aaa/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L176)
