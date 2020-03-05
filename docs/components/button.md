# Button 按钮
常用的操作按钮。

## 基础用法

基础的按钮用法。

<demo-block>
::: slot source
<button-type></button-type>
:::
::: tip 温馨提示
  使用`type`、`round`和`circle`属性来定义 Button 的样式。😊
:::
::: slot highlight
```html
  <div>
    <zy-button>默认按钮</zy-button>
    <zy-button type="primary">主要按钮</zy-button>
    <zy-button type="success">成功按钮</zy-button>
    <zy-button type="info">信息按钮</zy-button>
    <zy-button type="warning">警告按钮</zy-button>
    <zy-button type="danger">危险按钮</zy-button>
  </div>
  <div>
    <zy-button round>圆角按钮</zy-button>
    <zy-button type="primary" round>主要按钮</zy-button>
    <zy-button type="success" round>成功按钮</zy-button>
    <zy-button type="info" round>信息按钮</zy-button>
    <zy-button type="warning" round>警告按钮</zy-button>
    <zy-button type="danger" round>危险按钮</zy-button>
  </div>
  <div>
    <zy-button icon="search" circle></zy-button>
    <zy-button type="primary" icon="edit" circle></zy-button>
    <zy-button type="success" icon="check" circle></zy-button>
    <zy-button type="info" icon="message" circle></zy-button>
    <zy-button type="warning" icon="star-off" circle></zy-button>
    <zy-button type="danger" icon="dzyete" circle></zy-button>
  </div>
```
:::
</demo-block>

## 禁用状态

按钮不可用状态。

<demo-block>
::: slot source
<button-disabled></button-disabled>
:::
::: tip 温馨提示
  你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。😊
:::
::: slot highlight
```html
  <div>
    <zy-button disabled>默认按钮</zy-button>
    <zy-button disabled type="primary">主要按钮</zy-button>
    <zy-button disabled type="success">成功按钮</zy-button>
    <zy-button disabled type="info">信息按钮</zy-button>
    <zy-button disabled type="warning">警告按钮</zy-button>
    <zy-button disabled type="danger">危险按钮</zy-button>
  </div>
  <div>
    <zy-button disabled round>圆角按钮</zy-button>
    <zy-button disabled type="primary" round>主要按钮</zy-button>
    <zy-button disabled type="success" round>成功按钮</zy-button>
    <zy-button disabled type="info" round>信息按钮</zy-button>
    <zy-button disabled type="warning" round>警告按钮</zy-button>
    <zy-button disabled type="danger" round>危险按钮</zy-button>
  </div>
```
:::
</demo-block>

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

<demo-block>
::: slot source
<button-icon></button-icon>
:::
::: tip 温馨提示
  设置`icon`属性即可，icon 的列表可以参考 zy-ui 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`zy-icon`标签即可，可以使用自定义图标。😊
:::
::: slot highlight
```html
  <div>
    <zy-button icon="search" circle>搜索</zy-button>
    <zy-button type="primary" icon="edit" circle></zy-button>
    <zy-button type="success" icon="check" circle></zy-button>
    <zy-button type="info" icon="camera" circle></zy-button>
    <zy-button type="warning" icon="read" circle></zy-button>
    <zy-button type="danger" icon="mail-fill" circle></zy-button>
  </div>
```
:::
</demo-block>

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

<demo-block>
::: slot source
<button-group></button-group>
:::
::: tip 温馨提示
  使用`<zy-button-group>`标签来嵌套你的按钮。😊
:::
::: slot highlight
```html
  <div>
    <zy-button-group>
        <zy-button type="primary" icon="left">上一页</zy-button>
        <zy-button type="primary" icon="right" icon-position="right">下一页</zy-button>
    </zy-button-group>
    <zy-button-group>
        <zy-button icon="edit"></zy-button>
        <zy-button icon="check"></zy-button>
        <zy-button type="primary" icon="search"></zy-button>
    </zy-button-group>
  </div>
```
:::
</demo-block>

## 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<demo-block>
::: slot source
<button-loading></button-loading>
:::
::: tip 温馨提示
  要设置为 loading 状态，只要设置`loading`属性为`true`即可😊
:::
::: slot highlight
```html
  <zy-button type="primary" loading>加载中</zy-button>
```
:::
</demo-block>

## Attributes
| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| type        | 类型           | string  | primary / success / warning / danger / info        | —      |
| round       | 是否圆角按钮   | boolean | —                                                  | false  |
| circle      | 是否圆形按钮   | boolean | —                                                  | false  |
| loading     | 是否加载中状态 | boolean | —                                                  | false  |
| disabled    | 是否禁用状态   | boolean | —                                                  | false  |
| icon        | 图标类名       | string  | —                                                  | —      |
| native-type | 原生 type 属性 | string  | button / submit / reset                            | button |
