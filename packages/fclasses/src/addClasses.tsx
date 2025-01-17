/**
 * Copyright © 2019 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { FC } from 'react';
import union from 'lodash/union';
import difference from 'lodash/difference';
import capitalize from 'lodash/capitalize';
import type { ComponentOrTag, Enhancer, Condition } from './types';

type Classes = string | string[];

type FClasses = {
  operation?: 'add' | 'remove',
  classes?: Classes,
  parentFClasses?: FClasses,
};

export type StylableProps = {
  fClasses?: FClasses;
};

type Classable = {
  className?: string,
};

const alwaysTrueCondition = () => true;

const modifyClassesIf = (operation: 'add' | 'remove') => <A extends object>(
  condition: Condition<A>,
) => (classes?: Classes) => {
    const hoc: Enhancer<A> = Component => {
      const ModifyClasses: FC<any> = props => {
        const { fClasses, ...rest } = props;
        const newFClasses = condition(props) ? {
          parentFClasses: fClasses,
          operation,
          classes,
        } : fClasses;
        return (
          <Component fClasses={newFClasses} {...rest as any} />
        );
      };
      ModifyClasses.displayName = `${capitalize(operation)}Classes`;
      return ModifyClasses;
    };
    return hoc;
  };

/**
 * Allows to add classes to a component conditionally.
 *
 * @param condition A function that is evaluated to determine whether classes should be added.
 * @returns HOC that can be used for adding classes to a component
 */
const addClassesIf = modifyClassesIf('add');

/**
 * HOC which specifies that a list of classes should be added to the wrapped component's className.
 *
 * @param classes A string or array of classes to add.
 */
const addClasses = addClassesIf(alwaysTrueCondition);

/**
 * Allows to remove classes from a component conditionally.
 *
 * @param condition A function that is evaluated to determine whether classes should be removed.
 * @returns HOC that can be used for removing classes from a component
 */
const removeClassesIf = modifyClassesIf('remove');

/**
 * HOC which specifies that a list of classes shoudl be removed from the wrapped component's
 * className.
 *
 * @param classes A string or array of classes to remove. If not specified, then *all* classes will
 * be removed.
 */
const removeClasses = removeClassesIf(alwaysTrueCondition);

const asArray = (classes: Classes = []) => (Array.isArray(classes) ? classes : classes.split(' '));
const asClassName = (classes: Classes) => {
  const asString = (Array.isArray(classes) ? classes.join(' ') : classes);
  return asString || undefined;
};
const asFClasses = (classes: Classes): FClasses => ({
  operation: 'add',
  classes,
});

const apply = (
  { operation, classes, parentFClasses }: FClasses = {},
  className: Classes = [],
): Classes => {
  let newClasses;
  switch (operation) {
    case 'add': newClasses = union(asArray(classes), asArray(className)); break;
    case 'remove': newClasses = classes ? difference(asArray(className), asArray(classes)) : []; break;
    default: newClasses = className;
  }
  return parentFClasses ? apply(parentFClasses, newClasses) : newClasses;
};

type ForwardRefProps = {
  forwardRef?: React.Ref<any>;
};

/**
 * Makes any component or intrinsic element stylable using FClasses. When the component is
 * wrapped by `addClasses()` or `removeClasses()`, the specified operations will be applied
 * in reverse order up the component tree, so that the outermost operations take precedence.
 *
 * @param Component The component to be made stylable.
 */
const stylable:Enhancer<StylableProps> = (Component: ComponentOrTag<any>) => {
  const Stylable = (props: StylableProps & ForwardRefProps & Classable) => {
    const {
      fClasses,
      className,
      forwardRef,
      ...rest
    } = props;
    const classes = apply(fClasses);
    const newClassName = asClassName(className ? apply(asFClasses(className), classes) : classes);
    return <Component {...rest as any} className={newClassName} ref={forwardRef} />;
  };
  Stylable.displayName = 'Stylable';
  return Stylable;
};

export {
  addClasses,
  addClassesIf,
  removeClasses,
  removeClassesIf,
  stylable,
};
