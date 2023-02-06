# 组件库
一款拟态风格的组件库

## 一. FORM

### Radio 单选框
```
<g-radio v-model="select" label="1">xixi</g-radio>
<g-radio v-model="select" label="2">xixi</g-radio>
<g-radio v-model="select" label="3">xixi</g-radio>
```
### Checkbox
```
<g-checkbox v-model="check" @change="changeCheck" :options="['haha', 'xixi']">
</g-checkbox>
```
### Input
```
<g-input v-model="message" style="width: 500px">
    <div slot="right">
    </div>
</g-input>
```
- right: 输入框右侧内容
### InputNumber
- v-model
- max
- min
- change
### select
```
<g-select v-model="selectValue" @change="selectChange" :selects="['苹果', '香蕉', '西瓜']"> 
</g-select>
```
### slider
```
<g-slider class="slider" v-model="percent"></g-slider>
```
### switch
```
<g-switch activeText="开启" inactiveText="关闭" v-model="switchOpen" @change="swiChange"></g-switch>
```

### rate
```
<g-rate v-model="rateNum" @change="rateChange"></g-rate>
```
## 二. DATA

### Badage
```
<g-badge :value="4" :max="99" :hidden="false">
    <g-button>消息</g-button>
</g-badge>
```
- type: ```primary | warning```
### Progress
```
<g-progress :percentage="percent" :strokeWidth="20"></g-progress>
```
- strokeWidth: 进度条宽度
### Tag

## 三. BASIC

### button
- size: ```small | mid | large```
- type: ```sunk | hump```


## 四. Others

### dialog
```
<g-dialog :modal="true"  :visible="showDialog" title="提示" width="30%">
    //内容
    haha 
    //底部按钮插槽
    <span slot="footer">
    <g-button @click="showDialog = false">取消</g-button>
    <g-button @click="showDialog = false">确定</g-button>
    </span>
</g-dialog>
```

## 五. Navigator

### step
```
<g-steps :active="stepActive" style="margin-left: 20px">
        <g-step></g-step>
        <g-step></g-step>
        <g-step>
        <g-step>
            <template slot="icon">
                1
            </template>
            <template slot="title">
                hahaerre
            </template>  
            
        </g-step> 
</g-steps>
```