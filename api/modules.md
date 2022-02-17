[@bodiless/navigation](README.md) / Exports

# @bodiless/navigation

## Table of contents

### Classes

- [BreadcrumbItem](classes/BreadcrumbItem.md)
- [BreadcrumbStore](classes/BreadcrumbStore.md)

### Type aliases

- [BreadcrumbItemType](modules.md#breadcrumbitemtype)
- [BreadcrumbSettings](modules.md#breadcrumbsettings)
- [BreadcrumbsComponents](modules.md#breadcrumbscomponents)
- [BurgerMenuComponents](modules.md#burgermenucomponents)
- [BurgerMenuProps](modules.md#burgermenuprops)
- [CleanBreadcrumbsProps](modules.md#cleanbreadcrumbsprops)
- [TogglerComponents](modules.md#togglercomponents)

### Variables

- [BreadcrumbStoreProvider](modules.md#breadcrumbstoreprovider)
- [BreadcrumbsClean](modules.md#breadcrumbsclean)
- [BurgerMenuClean](modules.md#burgermenuclean)
- [BurgerMenuDefaultToggler](modules.md#burgermenudefaulttoggler)
- [asAccessibleBreadcrumbs](modules.md#asaccessiblebreadcrumbs)
- [asAccessibleMenu](modules.md#asaccessiblemenu)
- [asAccessibleSubMenu](modules.md#asaccessiblesubmenu)
- [asBreadcrumbSource](modules.md#asbreadcrumbsource)
- [asSlideLeft](modules.md#asslideleft)
- [asStylableBreadcrumbs](modules.md#asstylablebreadcrumbs)
- [withAccessibleMenuAttr](modules.md#withaccessiblemenuattr)
- [withAccessibleMenuInteractions](modules.md#withaccessiblemenuinteractions)
- [withAccessibleSubMenuAttr](modules.md#withaccessiblesubmenuattr)
- [withBreadcrumbFinalTrail](modules.md#withbreadcrumbfinaltrail)
- [withBreadcrumbStartingTrail](modules.md#withbreadcrumbstartingtrail)
- [withBreadcrumbStore](modules.md#withbreadcrumbstore)
- [withBurgerMenuProvider](modules.md#withburgermenuprovider)
- [withBurgerMenuWrapper](modules.md#withburgermenuwrapper)
- [withDefaultMenuTitleEditors](modules.md#withdefaultmenutitleeditors)
- [withoutBreadcrumbFinalTrail](modules.md#withoutbreadcrumbfinaltrail)
- [withoutBreadcrumbStartingTrail](modules.md#withoutbreadcrumbstartingtrail)

### Functions

- [BurgerMenuTogglerClean](modules.md#burgermenutogglerclean)
- [asAccessibleMenuTitle](modules.md#asaccessiblemenutitle)
- [asBodilessMenu](modules.md#asbodilessmenu)
- [asBreadcrumb](modules.md#asbreadcrumb)
- [asBreadcrumbs](modules.md#asbreadcrumbs)
- [asBurgerMenu](modules.md#asburgermenu)
- [asMenuTitle](modules.md#asmenutitle)
- [asTopNav](modules.md#astopnav)
- [isMenuContextActive](modules.md#ismenucontextactive)
- [isMenuContextNotActive](modules.md#ismenucontextnotactive)
- [useBreadcrumbContext](modules.md#usebreadcrumbcontext)
- [useBreadcrumbStore](modules.md#usebreadcrumbstore)
- [useBurgerMenuContext](modules.md#useburgermenucontext)
- [useIsActiveTrail](modules.md#useisactivetrail)
- [useIsBreadcrumbItemCurrentPage](modules.md#useisbreadcrumbitemcurrentpage)
- [useIsBurgerMenuHidden](modules.md#useisburgermenuhidden)
- [useIsBurgerMenuVisible](modules.md#useisburgermenuvisible)
- [useIsBurgerTransitionCompleted](modules.md#useisburgertransitioncompleted)
- [useIsHoverEnabled](modules.md#useishoverenabled)
- [useIsLastBreadcrumbItemRenderedAsALink](modules.md#useislastbreadcrumbitemrenderedasalink)
- [useIsMenuOpen](modules.md#useismenuopen)
- [useIsSubmenuExpanded](modules.md#useissubmenuexpanded)
- [useMenuContext](modules.md#usemenucontext)
- [useSubmenuContext](modules.md#usesubmenucontext)
- [withBreadcrumbItemToken](modules.md#withbreadcrumbitemtoken)
- [withBreadcrumbs](modules.md#withbreadcrumbs)
- [withCardsSubMenu](modules.md#withcardssubmenu)
- [withColumnSubMenu](modules.md#withcolumnsubmenu)
- [withEditableFinalTrail](modules.md#witheditablefinaltrail)
- [withEditableStartingTrail](modules.md#witheditablestartingtrail)
- [withListSubMenu](modules.md#withlistsubmenu)
- [withMenuDesign](modules.md#withmenudesign)
- [withMenuTitleEditors](modules.md#withmenutitleeditors)
- [withOverviewLink](modules.md#withoverviewlink)

## Type aliases

### BreadcrumbItemType

Ƭ **BreadcrumbItemType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `link` | `BreadcrumbItemLink` |
| `parent` | [`BreadcrumbItemType`](modules.md#breadcrumbitemtype) \| `undefined` |
| `title` | `BreadcrumbItemTitle` |
| `uuid` | `string` |
| `getAncestors` | () => [`BreadcrumbItemType`](modules.md#breadcrumbitemtype)[] |
| `hasPath` | (`item`: `string` \| [`BreadcrumbItemType`](modules.md#breadcrumbitemtype)) => `boolean` |
| `isActive` | () => `boolean` |
| `isAncestorOf` | (`item`: [`BreadcrumbItemType`](modules.md#breadcrumbitemtype)) => `boolean` |
| `isDescendantOf` | (`item`: [`BreadcrumbItemType`](modules.md#breadcrumbitemtype)) => `boolean` |
| `isEqual` | (`item`: `string` \| [`BreadcrumbItemType`](modules.md#breadcrumbitemtype)) => `boolean` |
| `isFirst` | () => `boolean` |
| `isLast` | () => `boolean` |
| `isSubpathOf` | (`item`: `string` \| [`BreadcrumbItemType`](modules.md#breadcrumbitemtype)) => `boolean` |
| `setLink` | (`link`: `BreadcrumbItemLink`) => `void` |
| `setTitle` | (`title`: `BreadcrumbItemTitle`) => `void` |

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts:35](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStore.ts#L35)

___

### BreadcrumbSettings

Ƭ **BreadcrumbSettings**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `linkNodeKey` | `string` |
| `titleNodeKey` | `string` |

#### Defined in

[bodiless-navigation/src/Breadcrumbs/asBreadcrumb.tsx:52](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/asBreadcrumb.tsx#L52)

___

### BreadcrumbsComponents

Ƭ **BreadcrumbsComponents**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FinalTrail` | `ComponentType`<`any`\> |
| `Item` | `ComponentType`<`HTMLProps`<`HTMLLIElement`\> & { `isCurrentPage`: `boolean` ; `position`: `number`  }\> |
| `NavWrapper` | `ComponentType`<`HTMLProps`<`HTMLDivElement`\>\> |
| `Separator` | `ComponentType`<`HTMLProps`<`HTMLSpanElement`\>\> |
| `StartingTrail` | `ComponentType`<`any`\> |
| `Title` | `ComponentType`<`any`\> |
| `Wrapper` | `ComponentType`<`HTMLProps`<`HTMLUListElement`\>\> |

#### Defined in

[bodiless-navigation/src/Breadcrumbs/types.tsx:21](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/types.tsx#L21)

___

### BurgerMenuComponents

Ƭ **BurgerMenuComponents**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Header` | `ComponentType`<`any`\> |
| `Menu` | `ComponentType`<`any`\> |
| `Nav` | `ComponentType`<`any`\> |
| `Overlay` | `ComponentType`<`any`\> |
| `Wrapper` | `ComponentType`<`any`\> |

#### Defined in

[bodiless-navigation/src/BurgerMenu/BurgerMenuClean.tsx:20](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/BurgerMenu/BurgerMenuClean.tsx#L20)

___

### BurgerMenuProps

Ƭ **BurgerMenuProps**: `DesignableProps`<[`BurgerMenuComponents`](modules.md#burgermenucomponents)\>

#### Defined in

[bodiless-navigation/src/BurgerMenu/BurgerMenuClean.tsx:28](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/BurgerMenu/BurgerMenuClean.tsx#L28)

___

### CleanBreadcrumbsProps

Ƭ **CleanBreadcrumbsProps**: `Omit`<`BreadcrumbsProps`, ``"itemsReducer"``\>

#### Defined in

[bodiless-navigation/src/Breadcrumbs/types.tsx:84](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/types.tsx#L84)

___

### TogglerComponents

Ƭ **TogglerComponents**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Button` | `ComponentType`<`any`\> |
| `Wrapper` | `ComponentType`<`any`\> |

#### Defined in

[bodiless-navigation/src/BurgerMenu/BurgerMenuToggler.tsx:25](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/BurgerMenu/BurgerMenuToggler.tsx#L25)

## Variables

### BreadcrumbStoreProvider

• **BreadcrumbStoreProvider**: `ComponentType`<`any`\>

Component that adds react context provider containing store to its children.

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStoreProvider.tsx:26](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStoreProvider.tsx#L26)

___

### BreadcrumbsClean

• **BreadcrumbsClean**: `ComponentWithMeta`<`PP`<[`CleanBreadcrumbsProps`](modules.md#cleanbreadcrumbsprops), `DesignableProps`<[`BreadcrumbsComponents`](modules.md#breadcrumbscomponents)\>, `DesignableComponentsProps`<[`BreadcrumbsComponents`](modules.md#breadcrumbscomponents)\>\>\>

Clean component that renders breadcrumbs.

**`see`** BreadcrumbsComponents for a list of design components.

#### Defined in

[bodiless-navigation/src/Breadcrumbs/Breadcrumbs.tsx:129](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/Breadcrumbs.tsx#L129)

___

### BurgerMenuClean

• **BurgerMenuClean**: `ComponentWithMeta`<`PP`<`BurgerMenuBaseProps`, `DesignableProps`<[`BurgerMenuComponents`](modules.md#burgermenucomponents)\>, `DesignableComponentsProps`<[`BurgerMenuComponents`](modules.md#burgermenucomponents)\>\>\>

#### Defined in

[bodiless-navigation/src/BurgerMenu/BurgerMenuClean.tsx:58](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/BurgerMenu/BurgerMenuClean.tsx#L58)

___

### BurgerMenuDefaultToggler

• **BurgerMenuDefaultToggler**: `ComponentWithMeta`<`PP`<`Omit`<`TogglerProps` & `DesignableProps`<[`TogglerComponents`](modules.md#togglercomponents)\>, ``"components"``\> & `Partial`<`DesignableComponentsProps`<[`TogglerComponents`](modules.md#togglercomponents)\>\> & { `onClick?`: () => `any`  }, {}, {}\>\>

Default Burger Menu Toggler button. Toggles button icon based on the
burger menu state ('close' | 'menu'). Has an onClick handler that toggles
BurgerMenuContext 'isVisible' prop.

For this button to work both burger menu and toggler button should be inside BurgerMenuContext.

**`returns`** Burger Menu default toggler component.

#### Defined in

[bodiless-navigation/src/BurgerMenu/BurgerMenuToggler.tsx:106](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/BurgerMenu/BurgerMenuToggler.tsx#L106)

___

### asAccessibleBreadcrumbs

• **asAccessibleBreadcrumbs**: `Token`<{}, `Partial`<[`CleanBreadcrumbsProps`](modules.md#cleanbreadcrumbsprops)\>, {}\>

Hoc to make breadcrumbs accessible

#### Defined in

[bodiless-navigation/src/Breadcrumbs/Breadcrumb.token.tsx:57](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/Breadcrumb.token.tsx#L57)

___

### asAccessibleMenu

• **asAccessibleMenu**: `Token`<{}, {}, {}\>

Token that makes menu accessible.
Wraps menu in Nav tag and adds keyboard interactions.

#### Defined in

[bodiless-navigation/src/Menu/asAccessibleMenu.tsx:239](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/asAccessibleMenu.tsx#L239)

___

### asAccessibleSubMenu

• **asAccessibleSubMenu**: `Token`<{}, {} & `object`, {}\>

Token that makes Sub Menu accessible.
It adds Sub Menu indicator to the main menu items that have submenus
and accessibility attributes to the submenu items.

#### Defined in

[bodiless-navigation/src/Menu/asAccessibleMenu.tsx:269](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/asAccessibleMenu.tsx#L269)

___

### asBreadcrumbSource

• **asBreadcrumbSource**: `Token`

Use this HOC to wrap a menu so that it can serve a source of data for breadcrumbs
and menu trails. It creates a hidden version of the menu which is rendered only during
SSR, to ensure the breadcrumb data is pre-generated.

You should wrap the whole menu in this HOC. You must also wrap the menu's items in
`asBreadcrumb`, and the all must be rendered within a BreadcrumbStoreContext

**`param`**
The component providing the menu data structure.

**`returns`**
A version of the component which renders a hidden version of itself during SSR.

**`see`** asHiddenBreadcrumbSource

**`see`** asBreadcrumb

#### Defined in

[bodiless-navigation/src/Breadcrumbs/asBreadcrumb.tsx:137](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/asBreadcrumb.tsx#L137)

___

### asSlideLeft

• **asSlideLeft**: `Token`<{}, {}, {}\>

A Token that adds styles and transitions needed for a slide-in animation for the Burger menu.

**`returns`** Token that applies required styles for slide-in animation.

#### Defined in

[bodiless-navigation/src/BurgerMenu/BurgerMenu.token.tsx:80](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/BurgerMenu/BurgerMenu.token.tsx#L80)

___

### asStylableBreadcrumbs

• **asStylableBreadcrumbs**: `Token`<{}, {}, {}\>

Makes all Breadcrumb design components stylable.

#### Defined in

[bodiless-navigation/src/Breadcrumbs/Breadcrumb.token.tsx:32](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/Breadcrumb.token.tsx#L32)

___

### withAccessibleMenuAttr

• **withAccessibleMenuAttr**: `Token`<{}, {}, {}\>

Token that adds an accessibility attributes to the menu

#### Defined in

[bodiless-navigation/src/Menu/asAccessibleMenu.tsx:207](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/asAccessibleMenu.tsx#L207)

___

### withAccessibleMenuInteractions

• **withAccessibleMenuInteractions**: `Token`<{}, {}, {}\>

Token that wraps menu in the Nav tag and adds an ability
to toggle submenus with a keyboard.

#### Defined in

[bodiless-navigation/src/Menu/asAccessibleMenu.tsx:228](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/asAccessibleMenu.tsx#L228)

___

### withAccessibleSubMenuAttr

• **withAccessibleSubMenuAttr**: `Token`<{}, {}, {}\>

Token that adds an accessibility attributes to the Sub Menu.

#### Defined in

[bodiless-navigation/src/Menu/asAccessibleMenu.tsx:258](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/asAccessibleMenu.tsx#L258)

___

### withBreadcrumbFinalTrail

• **withBreadcrumbFinalTrail**: `Injector`<`Partial`<`Pick`<`BreadcrumbsProps`, ``"hasFinalTrail"``\>\>, {}\>

HOC that enables rendering of final trail for a breadcrumb based component.

**`param`** a breadcrumb based component

#### Defined in

[bodiless-navigation/src/Breadcrumbs/Breadcrumbs.tsx:151](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/Breadcrumbs.tsx#L151)

___

### withBreadcrumbStartingTrail

• **withBreadcrumbStartingTrail**: `Injector`<`Partial`<`Pick`<`BreadcrumbsProps`, ``"hasStartingTrail"``\>\>, {}\>

HOC that enables rendering of starting trail for a breadcrumb based component.

**`param`** a breadcrumb based component

#### Defined in

[bodiless-navigation/src/Breadcrumbs/Breadcrumbs.tsx:135](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/Breadcrumbs.tsx#L135)

___

### withBreadcrumbStore

• **withBreadcrumbStore**: `Token`

Copyright © 2020 Johnson & Johnson

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

#### Defined in

[bodiless-navigation/src/Breadcrumbs/withBreadcrumbs.tsx:26](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/withBreadcrumbs.tsx#L26)

___

### withBurgerMenuProvider

• `Private` **withBurgerMenuProvider**: `Token`

#### Defined in

[bodiless-navigation/src/BurgerMenu/BurgerMenuContext.tsx:54](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/BurgerMenu/BurgerMenuContext.tsx#L54)

___

### withBurgerMenuWrapper

• **withBurgerMenuWrapper**: `Token`

HOC that wraps the supplied Component in the burger menu chrome.

**`param`** Component to be wrapped in the burger menu chrome.

**`returns`** Original component wrapped in the burger menu chrome with 'Menu' design key.

#### Defined in

[bodiless-navigation/src/BurgerMenu/asBurgerMenu.tsx:98](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/BurgerMenu/asBurgerMenu.tsx#L98)

___

### withDefaultMenuTitleEditors

• **withDefaultMenuTitleEditors**: `Token`<{}, {}, {}\>

Token that adds a default Editors to the menu Title and Link.
Transforms Link into Editable Bodiless Link Toggle and Title to Editable.

#### Defined in

[bodiless-navigation/src/Menu/MenuTitles.tsx:72](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/MenuTitles.tsx#L72)

___

### withoutBreadcrumbFinalTrail

• **withoutBreadcrumbFinalTrail**: `Injector`<`Partial`<`Pick`<`BreadcrumbsProps`, ``"hasFinalTrail"``\>\>, {}\>

HOC that disables rendering of final trail for a breadcrumb based component.

**`param`** a breadcrumb based component

#### Defined in

[bodiless-navigation/src/Breadcrumbs/Breadcrumbs.tsx:159](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/Breadcrumbs.tsx#L159)

___

### withoutBreadcrumbStartingTrail

• **withoutBreadcrumbStartingTrail**: `Injector`<`Partial`<`Pick`<`BreadcrumbsProps`, ``"hasStartingTrail"``\>\>, {}\>

HOC that disables rendering of starting trail for a breadcrumb based component.

**`param`** a breadcrumb based component

#### Defined in

[bodiless-navigation/src/Breadcrumbs/Breadcrumbs.tsx:143](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/Breadcrumbs.tsx#L143)

## Functions

### BurgerMenuTogglerClean

▸ `Const` **BurgerMenuTogglerClean**(`props`): `Element`

Clean Unstyled version of Burger Menu Toggler button.
Has an onClick handler that toggles BurgerMenuContext 'isVisible' prop.

For this button to work both burger menu and toggler button should be inside BurgerMenuContext.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Omit`<`TogglerProps` & `DesignableProps`<[`TogglerComponents`](modules.md#togglercomponents)\>, ``"components"``\> & `Partial`<`DesignableComponentsProps`<[`TogglerComponents`](modules.md#togglercomponents)\>\> & { `onClick?`: () => `any`  } |

#### Returns

`Element`

Burger Menu default toggler component.

#### Defined in

[bodiless-navigation/src/BurgerMenu/BurgerMenuToggler.tsx:92](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/BurgerMenu/BurgerMenuToggler.tsx#L92)

___

### asAccessibleMenuTitle

▸ `Const` **asAccessibleMenuTitle**(`isSubmenuIndicator?`): (`Component`: `string` \| `ComponentType`<`any`\>) => (`__namedParameters`: `any`) => `Element`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `isSubmenuIndicator` | `boolean` | `false` |

#### Returns

`fn`

▸ (`Component`): (`__namedParameters`: `any`) => `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `Component` | `string` \| `ComponentType`<`any`\> |

##### Returns

`fn`

▸ (`__namedParameters`): `Element`

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `any` |

##### Returns

`Element`

#### Defined in

[bodiless-navigation/src/Menu/asAccessibleMenu.tsx:85](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/asAccessibleMenu.tsx#L85)

___

### asBodilessMenu

▸ `Const` **asBodilessMenu**<`P`\>(`nodeKeys?`, `defaultData?`, `useOverrides?`): `Token`<`unknown`, `Omit`<`ListBaseProps`, ``"components"``\> & `Partial`<`WithNodeProps`\> & `DesignableProps`<`ListComponents`\> & `WithNodeProps`, {}\>

Bodiless HOC generator which creates the basic structure of the Bodiless Menu.

This serves as a base for various views on the Menu data, including
a site's main menu, a burger menu and breadcrumbs.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeKeys?` | `WithNodeKeyProps` | Location where the menu state data should be stored. |
| `defaultData?` | `ListData` | Default menu data. |
| `useOverrides` | `UseListOverrides`<`P`\> | Hook returning overrides for the menu button. |

#### Returns

`Token`<`unknown`, `Omit`<`ListBaseProps`, ``"components"``\> & `Partial`<`WithNodeProps`\> & `DesignableProps`<`ListComponents`\> & `WithNodeProps`, {}\>

HOC which creates a basic mega menu list.

#### Defined in

[bodiless-navigation/src/Menu/asBodilessMenu.ts:46](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/asBodilessMenu.ts#L46)

___

### asBreadcrumb

▸ `Const` **asBreadcrumb**(`settings`): `HOC`<{}, {}, {}\>

Creates an HOC which specifies that a wrapped component is a breadcrumb. The HOC
will read link and title from the specified nodekeys and will push link and title
to the breadcrumb store. Once the wrapped component is unmounted, the corresponding link
and title are deleted from the breadcrumb store

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | [`BreadcrumbSettings`](modules.md#breadcrumbsettings) | The title and link nodekeys defining where to locate the link and title nodes. |

#### Returns

`HOC`<{}, {}, {}\>

An HOC which defines the wrapped component as a breadcrumb.

#### Defined in

[bodiless-navigation/src/Breadcrumbs/asBreadcrumb.tsx:67](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/asBreadcrumb.tsx#L67)

___

### asBreadcrumbs

▸ `Const` **asBreadcrumbs**(...`args`): `any`

HOC that adds breadcrumb props retrieved from breadcrumb store.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`any`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/Breadcrumbs.tsx:166](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/Breadcrumbs.tsx#L166)

___

### asBurgerMenu

▸ `Const` **asBurgerMenu**(...`keys`): `Token`<{}, {}, {}\>

Helper which allows specifying which submenu types are configured
by default for the Burger Menu. Transforms selected submenus into accordions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...keys` | `string`[] | List of the submenu key(s) to which the default styles will be applied to. |

#### Returns

`Token`<{}, {}, {}\>

Token that applies default burger menu styles based on provided keys.

#### Defined in

[bodiless-navigation/src/BurgerMenu/asBurgerMenu.tsx:113](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/BurgerMenu/asBurgerMenu.tsx#L113)

___

### asMenuTitle

▸ `Const` **asMenuTitle**(...`args`): `any`

Token that transforms component into MenuTitle with node and 'title' nodeKey.
MenuTitle has Link and Title design keys. Can be applied to the Title design key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`any`

#### Defined in

[bodiless-navigation/src/Menu/MenuTitles.tsx:97](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/MenuTitles.tsx#L97)

___

### asTopNav

▸ `Const` **asTopNav**(...`keys`): `Token`<{}, {}, {}\>

Helper which allows specifying which submenu types should have default navigation styling added.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...keys` | `string`[] | List of the submenu key(s) to which the default menu styles be applied to. |

#### Returns

`Token`<{}, {}, {}\>

Token that applies default top navigation styles based on provided keys.

#### Defined in

[bodiless-navigation/src/Menu/Menu.token.tsx:149](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/Menu.token.tsx#L149)

___

### isMenuContextActive

▸ `Const` **isMenuContextActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[bodiless-navigation/src/Menu/Menu.token.tsx:40](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/Menu.token.tsx#L40)

___

### isMenuContextNotActive

▸ `Const` **isMenuContextNotActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[bodiless-navigation/src/Menu/Menu.token.tsx:45](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/Menu.token.tsx#L45)

___

### useBreadcrumbContext

▸ `Const` **useBreadcrumbContext**(): `undefined` \| [`BreadcrumbItemType`](modules.md#breadcrumbitemtype)

A Hook to get the current Breadcrumb Item context values.

#### Returns

`undefined` \| [`BreadcrumbItemType`](modules.md#breadcrumbitemtype)

#### Defined in

[bodiless-navigation/src/Breadcrumbs/asBreadcrumb.tsx:31](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/asBreadcrumb.tsx#L31)

___

### useBreadcrumbStore

▸ `Const` **useBreadcrumbStore**(): `undefined` \| `BreadcrumbStoreType`

React hook to get store.

#### Returns

`undefined` \| `BreadcrumbStoreType`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/BreadcrumbStoreProvider.tsx:33](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/BreadcrumbStoreProvider.tsx#L33)

___

### useBurgerMenuContext

▸ `Const` **useBurgerMenuContext**(): `BurgerMenuContextType`

A Hook to get the current Burger Menu `isVisible` and `toggle()` context values.

#### Returns

`BurgerMenuContextType`

The current Burger Menu `isVisible` and `toggle()` context values.

#### Defined in

[bodiless-navigation/src/BurgerMenu/BurgerMenuContext.tsx:42](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/BurgerMenu/BurgerMenuContext.tsx#L42)

___

### useIsActiveTrail

▸ `Const` **useIsActiveTrail**(): `boolean`

Hook which can be used to determine if a menu item is part of
the current active breadcrumb trail.

This hook is only accurate if
- The menu is inside a BreadcrumbStoreProvider.
- The menu item has been wrapped in asBreadcrumb

#### Returns

`boolean`

true if the item is in the active trail, false otherwise.

#### Defined in

[bodiless-navigation/src/Breadcrumbs/asBreadcrumb.tsx:44](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/asBreadcrumb.tsx#L44)

___

### useIsBreadcrumbItemCurrentPage

▸ `Const` **useIsBreadcrumbItemCurrentPage**(`__namedParameters`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `CleanBreadcrumbItemType` |

#### Returns

`boolean`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/hooks.ts:17](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/hooks.ts#L17)

___

### useIsBurgerMenuHidden

▸ `Const` **useIsBurgerMenuHidden**(): `boolean`

Hook which can be used to determine if Burger Menu is hidden.

#### Returns

`boolean`

true if the Burger Menu is hidden, false otherwise.

#### Defined in

[bodiless-navigation/src/BurgerMenu/BurgerMenuContext.tsx:94](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/BurgerMenu/BurgerMenuContext.tsx#L94)

___

### useIsBurgerMenuVisible

▸ `Const` **useIsBurgerMenuVisible**(): `boolean`

Hook which can be used to determine if Burger Menu is visible.

#### Returns

`boolean`

true if the Burger Menu is visible, false otherwise.

#### Defined in

[bodiless-navigation/src/BurgerMenu/BurgerMenuContext.tsx:74](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/BurgerMenu/BurgerMenuContext.tsx#L74)

___

### useIsBurgerTransitionCompleted

▸ `Const` **useIsBurgerTransitionCompleted**(): `boolean`

Hook which returns `true` if burger menu transitions are completed.
Not active means Burger menu is hidden and all animations are completed.
This hook useful to prevent hide animations from running when component is
initially mounted, but has `isVisible = false`.

#### Returns

`boolean`

true if the Burger Menu is hidden and all animations are completed.

#### Defined in

[bodiless-navigation/src/BurgerMenu/BurgerMenuContext.tsx:84](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/BurgerMenu/BurgerMenuContext.tsx#L84)

___

### useIsHoverEnabled

▸ `Const` **useIsHoverEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[bodiless-navigation/src/Menu/Menu.token.tsx:74](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/Menu.token.tsx#L74)

___

### useIsLastBreadcrumbItemRenderedAsALink

▸ `Const` **useIsLastBreadcrumbItemRenderedAsALink**(`__namedParameters`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Partial`<[`CleanBreadcrumbsProps`](modules.md#cleanbreadcrumbsprops)\> |

#### Returns

`boolean`

#### Defined in

[bodiless-navigation/src/Breadcrumbs/hooks.ts:21](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/hooks.ts#L21)

___

### useIsMenuOpen

▸ `Const` **useIsMenuOpen**(): `boolean`

Hook which can be used to determine if menu context is activated.

#### Returns

`boolean`

true if context for any of Items is active, false otherwise.

#### Defined in

[bodiless-navigation/src/Menu/withMenuContext.tsx:76](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/withMenuContext.tsx#L76)

___

### useIsSubmenuExpanded

▸ `Const` **useIsSubmenuExpanded**(): `boolean`

#### Returns

`boolean`

#### Defined in

[bodiless-navigation/src/Menu/Menu.token.tsx:67](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/Menu.token.tsx#L67)

___

### useMenuContext

▸ `Const` **useMenuContext**(): `MenuContextType`

Hook which can be used to get a current active submenu ID
and a setter to set active submenu.

#### Returns

`MenuContextType`

#### Defined in

[bodiless-navigation/src/Menu/withMenuContext.tsx:38](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/withMenuContext.tsx#L38)

___

### useSubmenuContext

▸ `Const` **useSubmenuContext**(): `SubmenuContextType`

#### Returns

`SubmenuContextType`

#### Defined in

[bodiless-navigation/src/Menu/withMenuItemContext.tsx:42](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/withMenuItemContext.tsx#L42)

___

### withBreadcrumbItemToken

▸ `Const` **withBreadcrumbItemToken**(...`tokenDefs`): `Token`<{}, {}, {}\>

Applies supplied tokenDefs to all breadcrumb items.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...tokenDefs` | `TokenDef`<{}, {}, {}\>[] |

#### Returns

`Token`<{}, {}, {}\>

Token - a token that applies provided tokenDefs to all breadcrumb items.

#### Defined in

[bodiless-navigation/src/Breadcrumbs/Breadcrumb.token.tsx:47](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/Breadcrumb.token.tsx#L47)

___

### withBreadcrumbs

▸ `Const` **withBreadcrumbs**(`Component`): `ComponentWithMeta`<`PP`<`any`, {}, {}\>\>

HOC that adds breadcrumb store and renders breadcrumbs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `Component` | `ComponentType`<`any`\> | that pushes its data to the store. |

#### Returns

`ComponentWithMeta`<`PP`<`any`, {}, {}\>\>

#### Defined in

[bodiless-navigation/src/Breadcrumbs/withBreadcrumbs.tsx:45](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/withBreadcrumbs.tsx#L45)

___

### withCardsSubMenu

▸ `Const` **withCardsSubMenu**(`withTitleDesign?`): `Token`<{}, {}, {}\>

Helper which can be used to add a Cards submenu option to the menu.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `withTitleDesign?` | `HOC`<{}, {}, {}\> \| `Token`<{}, {}, {}\> | optional token which will be applied to the sublist title. |

#### Returns

`Token`<{}, {}, {}\>

#### Defined in

[bodiless-navigation/src/Menu/withSubMenu.tsx:77](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/withSubMenu.tsx#L77)

___

### withColumnSubMenu

▸ `Const` **withColumnSubMenu**(`withTitleDesign?`): `Token`<{}, {}, {}\>

Helper which can be used to add a Columns submenu option to the menu.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `withTitleDesign?` | `HOC`<{}, {}, {}\> \| `Token`<{}, {}, {}\> | optional token which will be applied to the sublist title. |

#### Returns

`Token`<{}, {}, {}\>

#### Defined in

[bodiless-navigation/src/Menu/withSubMenu.tsx:89](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/withSubMenu.tsx#L89)

___

### withEditableFinalTrail

▸ `Const` **withEditableFinalTrail**(`withTitleEditors?`, `nodeKeys?`): `Token`<`unknown`, {}, `Partial`<`Pick`<`BreadcrumbsProps`, ``"hasFinalTrail"``\>\>\>

Enables rendering of the final trail for a Breadcrumb component with a provided Editors.
Uses `withDefaultMenuTitleEditors` by default.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `withTitleEditors` | `Token`<{}, {}, {}\> | `withDefaultMenuTitleEditors` | Editors token that will be applied to the Title key of the FinalTrail component. |
| `nodeKeys?` | `WithNodeKeyProps` | `undefined` | Optional nodeKeys of type `WithNodeKeyProps` that will be applied to the FinalTrail. |

#### Returns

`Token`<`unknown`, {}, `Partial`<`Pick`<`BreadcrumbsProps`, ``"hasFinalTrail"``\>\>\>

Token that adds final trail with provided Title Editors and nodeKeys.

#### Defined in

[bodiless-navigation/src/Breadcrumbs/withEditableTrail.tsx:84](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/withEditableTrail.tsx#L84)

___

### withEditableStartingTrail

▸ `Const` **withEditableStartingTrail**(`withTitleEditors?`, `nodeKeys?`): `Token`<`unknown`, {}, `Partial`<`Pick`<`BreadcrumbsProps`, ``"hasStartingTrail"``\>\>\>

Enables rendering of the starting trail for a Breadcrumb component with a provided Editors.
Uses `withDefaultMenuTitleEditors` by default, pre-configured with a link to the home page.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `withTitleEditors` | `Token`<{}, {}, {}\> | `withDefaultMenuTitleEditors` | Editors token that will be applied to the Title key of the StartingTrail component. |
| `nodeKeys?` | `WithNodeKeyProps` | `undefined` | Optional nodeKeys of type `WithNodeKeyProps` that will be applied to the StartingTrail. |

#### Returns

`Token`<`unknown`, {}, `Partial`<`Pick`<`BreadcrumbsProps`, ``"hasStartingTrail"``\>\>\>

Token that adds starting trail with provided Title Editors and nodeKeys.

#### Defined in

[bodiless-navigation/src/Breadcrumbs/withEditableTrail.tsx:56](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Breadcrumbs/withEditableTrail.tsx#L56)

___

### withListSubMenu

▸ `Const` **withListSubMenu**(`withTitleDesign?`): `Token`<{}, {}, {}\>

Helper which can be used to add a List submenu option to the menu.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `withTitleDesign?` | `HOC`<{}, {}, {}\> \| `Token`<{}, {}, {}\> | optional token which will be applied to the sublist title. |

#### Returns

`Token`<{}, {}, {}\>

#### Defined in

[bodiless-navigation/src/Menu/withSubMenu.tsx:65](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/withSubMenu.tsx#L65)

___

### withMenuDesign

▸ `Const` **withMenuDesign**(`keys?`, `depths?`): (...`tokenDefs`: `TokenDef`<{}, {}, {}\>[]) => `Token`<{}, {}, {}\>

Helper which makes it easier to target a particular type of submenu.

The first parameter is a list of the submenu key(s) and the second param is the design keys depth
to which the tokens provided as a second argument should be applied.
It also accepts the special key 'Main' to apply the design to the top level menu.

**`example`**
```js
withMenuDesign('Columns') -- Applies tokens to all levels of columns submenu.
withMenuDesign('Columns', 1) -- Applies tokens to only the first level of Columns submenu.
withMenuDesign('Columns', 2) -- Applies tokens to only the second level of Columns submenu.

withMenuDesign('Main') -- Applies tokens to the Top menu.
withMenuDesign('Cards') -- Applies tokens to Cards submenu.
withMenuDesign('List') -- Applies tokens to List submenu.

withMenuDesign() -- Applies tokens to the Top menu and all submenus.
withMenuDesign(undefined, 0) -- Applies tokens to the Top menu.
withMenuDesign(undefined, 1) -- Applies tokens to all submenus of level 1.
withMenuDesign(undefined, 2) -- Applies tokens to all submenus of level 2.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `string` \| `string`[] | List of the submenu key(s) to which the token should be applied. |
| `depths` | `number` \| `number`[] | List of menu depth to wicht the token should be applied to. |

#### Returns

`fn`

Desigh token that applies supplied list of tokens to the provided design keys.

▸ (...`tokenDefs`): `Token`<{}, {}, {}\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...tokenDefs` | `TokenDef`<{}, {}, {}\>[] |

##### Returns

`Token`<{}, {}, {}\>

#### Defined in

[bodiless-navigation/src/Menu/withMenuDesign.tsx:63](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/withMenuDesign.tsx#L63)

___

### withMenuTitleEditors

▸ `Const` **withMenuTitleEditors**<`P`\>(`withTitleEditors?`, ...`tokenDefs`): `Token`<{}, {}, {}\>

A helper to apply provided `withTitleEditors` Token to the Title menu key.
Applies `withDefaultMenuTitleEditors` token by default.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends `object` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `withTitleEditors` | `Token`<{}, {}, {}\> | `withDefaultMenuTitleEditors` | Token that will be applied to the Title key |
| `...tokenDefs` | `TokenDef`<{}, {}, {}\>[] | `undefined` | - |

#### Returns

`Token`<{}, {}, {}\>

#### Defined in

[bodiless-navigation/src/Menu/MenuTitles.tsx:86](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/Menu/MenuTitles.tsx#L86)

___

### withOverviewLink

▸ `Const` **withOverviewLink**(`overviewText?`, `nodeKeys?`): `Token`<`unknown`, `object` & { `content?`: {}  }, `Partial`<{ `prependItems`: `string`[]  }\>\>

HOC that adds an overview link to a burger menu sublist.  The overview link
renders specified text with a link to the destination of the parent menu
item.  If the parent menu item is not a link, no overview link will be
rendered.

This HOC has to be applied on the List level (List, Cards or Column submenus).

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `overviewText` | `any` | `'Overview'` | The text to display or, if your menu titles render using something other than the default title editor, then an object matching the schema of that editor. |
| `nodeKeys` | `Object` | `DEFAULT_NODE_KEYS` | - |
| `nodeKeys.linkNodeKey` | `string` | `'title$link'` | - |
| `nodeKeys.titleNodeKey` | `string` | `'title$text'` | - |
| `nodeKeys.toggleNodeKey` | `string` | `'title$link-toggle'` | - |

#### Returns

`Token`<`unknown`, `object` & { `content?`: {}  }, `Partial`<{ `prependItems`: `string`[]  }\>\>

Token that adds an OverviewLink to the menu list.

#### Defined in

[bodiless-navigation/src/BurgerMenu/asBurgerMenu.tsx:45](https://github.com/guilhermegpessoa/Bodiless-JS/blob/dc380f08/packages/bodiless-navigation/src/BurgerMenu/asBurgerMenu.tsx#L45)
