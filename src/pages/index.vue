<script lang="ts" setup></script>

<template>
  <div>
    <van-nav-bar title="首页" />
    <div class="flex flex-col gap-10px">
      <div class="flex gap-10px">
        <van-button plain type="primary">
          朴素按钮
        </van-button>
        <van-button plain type="success">
          朴素按钮
        </van-button>
      </div>
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
      </van-cell-group>
    </div>
  </div>
</template>
