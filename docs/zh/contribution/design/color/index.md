# Color 色彩

色彩在产品中起到传递信息、创建层级、表达情感、构建一致性的目的。

<script setup>
import BaseColor from './baseColor.vue'
import BrandColor from './brandColor.vue'
import FunctionalColor from './functionalColor.vue'
</script>

## 基础色板

以下是 BFUI 的基础色板，点击颜色自动复制。

<BaseColor />

## 产品色彩体系

### 品牌色

品牌色是体现产品特性和传播理念最直观的视觉元素之一。BFUI 品牌色取自基础色板中从浅至深第六个蓝色，Hex 值为 `#1677ff`，应用场景包括：关键行动点，操作状态、重要信息高亮，图形化等场景。品牌色的应用案例如下：

<BrandColor />


### 功能色

功能色代表了明确的信息以及状态，比如成功、出错、失败、提醒、链接等。功能色的选取需要遵守用户对色彩的基本认知。BFUI 的功能色板如下：

<FunctionalColor />


### 中性色

BFUI 的中性色主要被大量的应用在界面的文字部分，此外背景、边框、分割线等场景中也非常常见。产品中性色的定义需要考虑深色背景以及浅色背景的差异，同时结合 WCAG 2.0 标准。BFUI 的中性色在落地的时候是按照透明度的方式实现的，具体色板如下：

![中性色的应用](./Neutral-Color.jpg)
