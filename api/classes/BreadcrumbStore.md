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

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:208](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L208)

## Properties

### activeItem

• `Private` `Optional` **activeItem**: [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype) = `undefined`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:204](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L204)

___

### items

• `Private` **items**: `Map`<`string`, [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)\>

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:202](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L202)

___

### pagePath

• `Private` **pagePath**: `string`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:206](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L206)

## Accessors

### breadcrumbTrail

• `get` **breadcrumbTrail**(): [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)[]

#### Returns

[`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)[]

#### Implementation of

BreadcrumbStoreType.breadcrumbTrail

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:260](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L260)

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

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:246](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L246)

___

### export

▸ **export**(): [`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)[]

#### Returns

[`BreadcrumbItemType`](../modules.md#breadcrumbitemtype)[]

#### Implementation of

BreadcrumbStoreType.export

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:268](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L268)

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

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:235](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L235)

___

### getPagePath

▸ **getPagePath**(): `string`

#### Returns

`string`

#### Implementation of

BreadcrumbStoreType.getPagePath

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:256](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L256)

___

### hasCurrentPageItem

▸ **hasCurrentPageItem**(): `boolean`

#### Returns

`boolean`

#### Implementation of

BreadcrumbStoreType.hasCurrentPageItem

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:272](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L272)

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

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:229](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L229)

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

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:217](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L217)

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

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:213](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L213)

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

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:239](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L239)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:276](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L276)

___

### updateActive

▸ `Private` **updateActive**(): `void`

#### Returns

`void`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:222](https://github.com/guilhermegpessoa/Bodiless-JS/blob/be147f11/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L222)
