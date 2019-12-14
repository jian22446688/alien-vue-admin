<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-10-22 11:59:54
 -->
# cc-layout 布局组件

用于后台管理系统上下、左右布局

## 用法

```
<xdh-layout
    :north="{resizable:true}"
    :west="{resizable:true, width:westWidth}"
    :east="false"
    :footer-in-main="true">
  <div slot="north">Header</div>
  <div slot="west">Aside</div>
  <div slot="south">Footer</div>
  <div>Main</div>
</xdh-layout>

```

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|-----|----|----|----|
| north | 头部配置 | Boolean/Object | - | true |
| south | 底部配置 | Boolean/Object | - | true |
| west | 左侧栏配置 | Boolean/Object | - | true |
| east | 右侧栏配置 | Boolean/Object | - | true |
| footer-in-main | footer是否放到main里面 | Boolean | - | false |
| fixed | 是否固定定位头部和底部 | Boolean | - | false |

### north Object 默认值
```
{
  height: '60px',
  resizable: false
}
```

### south Object 默认值
```
{
  height: '40px',
  resizable: false
}
```
### west Object 默认值
```
{
  width: '30%',
  resizable: false
}
```

### east Object 默认值
```
{
  width: '30%',
  resizable: false
}
```

## 插槽

| name | 说明 |
|-----|-----|
| north | 定义头部内容 |
| west | 定义左侧边栏内容 |
| east | 定义右侧边栏内容 |
| south | 定义底部内容 |
| - | 定义主体内容 |

## 方法

无

## 事件

无

## 更新日志

- 2017-11-04 新建组件 (by: chenhuachun )

