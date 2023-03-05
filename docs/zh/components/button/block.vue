<template>
  <div>
    <!-- 表单示例1 -->
    <div class="form-wrap">
      <div class="form-content">是否删除该信息？</div>
      <div class="form-btn">
        <bf-button block>取消</bf-button>
        <bf-button status="danger" block>删除</bf-button>
      </div>
    </div>
    <!-- 表单示例2 -->
    <div class="form-wrap" style="margin-top: 20px;">
      <div class="form-title">账号登录</div>
      <div class="form-content">
        <input type="text" class="account" placeholder="请输入账号" />
        <input type="password" class="password" placeholder="请输入密码" />
      </div>
      <div class="form-btn">
        <bf-button status="normal" size="large" round block>登录</bf-button>
        <!-- <bf-button size="large" round block>注册</bf-button> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BfButton } from '@bf-teams/bfui-vue';
</script>

<style lang="less" scoped>
.form-wrap {
  max-width: 350px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  .form-title {
    font-size: 20px;
    text-align: left;
    margin-bottom: 10px;
  }
  .form-content {
    padding-bottom: 10px;
    input {
      background-color: rgba(161, 161, 161, .1);
      width: 100%;
      height: 35px;
      margin: 5px 0;
      padding: 0 10px;
      border: 1px solid #1677ff;
      border-radius: 4px;
    }
  }
  .form-btn {
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
