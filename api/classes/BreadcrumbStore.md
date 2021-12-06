[@bodiless/navigation](../README.md) / [Exports](../modules.md) / BreadcrumbStore

# Class: BreadcrumbStore

MobX storage of breadcrumb items.
API:
+ set/delete item.
+ get breadcrumb trail.
+ check if last breadcrumb item exists in the store.

## Implements

- `BreadcrumbStoreType`

## Table of contents

### Constructors

- [constructor](BreadcrumbStore.md#constructor)

### Properties

- [activeItem](BreadcrumbStore.md#activeitem)
- [items](BreadcrumbStore.md#items)
- [pagePath](BreadcrumbStore.md#pagepath)

### Accessors

- [breadcrumbTrail](BreadcrumbStore.md#breadcrumbtrail)

### Methods

- [deleteItem](BreadcrumbStore.md#deleteitem)
- [export](BreadcrumbStore.md#export)
- [getItem](BreadcrumbStore.md#getitem)
- [getPagePath](BreadcrumbStore.md#getpagepath)
- [hasCurrentPageItem](BreadcrumbStore.md#hascurrentpageitem)
- [isActiveItemPathChanged](BreadcrumbStore.md#isactiveitempathchanged)
- [isNewActive](BreadcrumbStore.md#isnewactive)
- [setActiveItem](BreadcrumbStore.md#setactiveitem)
- [setItem](BreadcrumbStore.md#setitem)
- [toString](BreadcrumbStore.md#tostring)
- [updateActive](BreadcrumbStore.md#updateactive)

## Constructors

### constructor

• **new BreadcrumbStore**(`pagePath`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pagePath` | `string` |

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:206](https://github.com/guilhermegpessoa/Bodiless-JS/blob/d44ef467/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L206)

## Properties

### activeItem

• `Private` `Optional` **activeItem**: [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype) = `undefined`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:202](https://github.com/guilhermegpessoa/Bodiless-JS/blob/d44ef467/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L202)

___

### items

• `Private` **items**: `Map`<`string`, [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)\>

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:200](https://github.com/guilhermegpessoa/Bodiless-JS/blob/d44ef467/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L200)

___

### pagePath

• `Private` **pagePath**: `string`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:204](https://github.com/guilhermegpessoa/Bodiless-JS/blob/d44ef467/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L204)

## Accessors

### breadcrumbTrail

• `get` **breadcrumbTrail**(): [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)[]

#### Returns

[`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)[]

#### Implementation of

BreadcrumbStoreType.breadcrumbTrail

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:257](https://github.com/guilhermegpessoa/Bodiless-JS/blob/d44ef467/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L257)

## Methods

### deleteItem

▸ **deleteItem**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `string` \| [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype) |

#### Returns

`boolean`

#### Implementation of

BreadcrumbStoreType.deleteItem

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:243](https://github.com/guilhermegpessoa/Bodiless-JS/blob/d44ef467/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L243)

___

### export

▸ **export**(): [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)[]

#### Returns

[`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)[]

#### Implementation of

BreadcrumbStoreType.export

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:265](https://github.com/guilhermegpessoa/Bodiless-JS/blob/d44ef467/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L265)

___

### getItem

▸ **getItem**(`key`): `undefined` \| [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`undefined` \| [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)

#### Implementation of

BreadcrumbStoreType.getItem

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:232](https://github.com/guilhermegpessoa/Bodiless-JS/blob/d44ef467/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L232)

___

### getPagePath

▸ **getPagePath**(): `string`

#### Returns

`string`

#### Implementation of

BreadcrumbStoreType.getPagePath

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:253](https://github.com/guilhermegpessoa/Bodiless-JS/blob/d44ef467/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L253)

___

### hasCurrentPageItem

▸ **hasCurrentPageItem**(): `boolean`

#### Returns

`boolean`

#### Implementation of

BreadcrumbStoreType.hasCurrentPageItem

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:269](https://github.com/guilhermegpessoa/Bodiless-JS/blob/d44ef467/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L269)

___

### isActiveItemPathChanged

▸ `Private` **isActiveItemPathChanged**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype) |

#### Returns

`boolean`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:226](https://github.com/guilhermegpessoa/Bodiless-JS/blob/d44ef467/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L226)

___

### isNewActive

▸ `Private` **isNewActive**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype) |

#### Returns

`boolean`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:214](https://github.com/guilhermegpessoa/Bodiless-JS/blob/d44ef467/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L214)

___

### setActiveItem

▸ `Private` **setActiveItem**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `undefined` \| [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype) |

#### Returns

`void`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:210](https://github.com/guilhermegpessoa/Bodiless-JS/blob/d44ef467/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L210)

___

### setItem

▸ **setItem**(`item`): [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype) |

#### Returns

[`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)

#### Implementation of

BreadcrumbStoreType.setItem

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:236](https://github.com/guilhermegpessoa/Bodiless-JS/blob/d44ef467/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L236)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:273](https://github.com/guilhermegpessoa/Bodiless-JS/blob/d44ef467/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L273)

___

### updateActive

▸ `Private` **updateActive**(): `void`

#### Returns

`void`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:219](https://github.com/guilhermegpessoa/Bodiless-JS/blob/d44ef467/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L219)
