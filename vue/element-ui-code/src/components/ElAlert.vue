<template>
  <transition name="el-alert-fade">
    <div 
      class="el-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      v-show="visible"
    >
      <i class="el-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
      <div class="el-alert__content">
        <span class="el-alert__title" :class="[ isBoldTitle ]" v-if="title || $slots.title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="el-alert__description" v-if="$slots.default && !description"><slot></slot></p>
        <p class="el-alert__description" v-if="description && !$slots.default">{{ description }}</p>
        <i class="el-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>
<script>
// 常量  约定大于配置 
const TYPE_CLASSES_MAP = {
  'success': 'el-icon-success',
  'warning': 'el-icon-warning',
  'error': 'el-icon-error'
};

export default {
  name: 'ElAlert',
  props: {  
    type: {
      type: String,
      default: 'info' /* 使用好默值 */
    },
    title: {
      type: String,
      default: ''
    },
    center: Boolean,
    showIcon: Boolean, 
    effect: {
      type: String,
      default: 'light',
      validator: function(value) {
        // 其中之一 
        return ['light', 'dark'].indexOf(value) !== -1;
      }
    } 
  },
  computed: {
    // 计算属性 计算一下 
    typeClass() {
      return `el-alert--${ this.type }`;
    },
    iconClass() {
      return TYPE_CLASSES_MAP[this.type] || 'el-icon-info';
    },
    isBigIcon() {
        return this.description || this.$slots.default ? 'is-big' : '';
      },

  },
  data() {
    return {
      visible: true
    }
  }
}
</script>
<style>

</style>
