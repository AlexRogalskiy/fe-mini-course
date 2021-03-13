# 枚举使用

在 Vue3 中有这样一段代码：

```ts
export const enum ElementTypes {
  ELEMENT,
  COMPONENT,
  SLOT,
  TEMPLATE
}
```

再看一段 Vue3 中的代码：

```ts
export const enum BindingTypes {
  /**
   * returned from data()
   */
  DATA = 'data',
  /**
   * decalred as a prop
   */
  PROPS = 'props',
  /**
   * declared by other options, e.g. computed, inject
   */
  OPTIONS = 'options'
}
```

再看一段 Vue3 的代码：

```ts
export const enum SlotFlags {
  STABLE = 1,
  DYNAMIC = 2,
  FORWARDED = 3
}
```

再看一段 Vue3 的代码：

```ts
export const enum ShapeFlags {
  ELEMENT = 1,
  FUNCTIONAL_COMPONENT = 1 << 1,
  STATEFUL_COMPONENT = 1 << 2,
  TEXT_CHILDREN = 1 << 3,
  ARRAY_CHILDREN = 1 << 4,
  SLOTS_CHILDREN = 1 << 5,
  TELEPORT = 1 << 6,
  SUSPENSE = 1 << 7,
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  COMPONENT_KEPT_ALIVE = 1 << 9,
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
}
```