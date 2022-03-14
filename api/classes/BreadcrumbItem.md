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

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:80](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L80)

## Properties

### \_link

• **\_link**: `BreadcrumbItemLink`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:76](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L76)

___

### \_parent

• `Optional` **\_parent**: [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:72](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L72)

___

### \_store

• **\_store**: `BreadcrumbStoreType`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:78](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L78)

___

### \_title

• **\_title**: `BreadcrumbItemTitle`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:74](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L74)

___

### \_uuid

• **\_uuid**: `string`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:70](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L70)

## Accessors

### link

• `get` **link**(): `BreadcrumbItemLink`

#### Returns

`BreadcrumbItemLink`

#### Implementation of

BreadcrumbItemType.link

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:162](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L162)

___

### parent

• `get` **parent**(): `undefined` \| [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)

#### Returns

`undefined` \| [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)

#### Implementation of

BreadcrumbItemType.parent

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:166](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L166)

___

### title

• `get` **title**(): `BreadcrumbItemTitle`

#### Returns

`BreadcrumbItemTitle`

#### Implementation of

BreadcrumbItemType.title

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:158](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L158)

___

### uuid

• `get` **uuid**(): `string`

#### Returns

`string`

#### Implementation of

BreadcrumbItemType.uuid

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:154](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L154)

## Methods

### getAncestors

▸ **getAncestors**(): [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)[]

#### Returns

[`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)[]

#### Implementation of

BreadcrumbItemType.getAncestors

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:143](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L143)

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

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:108](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L108)

___

### isActive

▸ **isActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

BreadcrumbItemType.isActive

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:94](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L94)

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

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:124](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L124)

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

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:116](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L116)

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

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:129](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L129)

___

### isFirst

▸ **isFirst**(): `boolean`

#### Returns

`boolean`

#### Implementation of

BreadcrumbItemType.isFirst

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:134](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L134)

___

### isLast

▸ **isLast**(): `boolean`

#### Returns

`boolean`

#### Implementation of

BreadcrumbItemType.isLast

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:138](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L138)

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

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:100](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L100)

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

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:174](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L174)

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

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:170](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L170)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:178](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L178)
