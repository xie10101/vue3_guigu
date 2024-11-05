<!-- @format -->

<template>
  <div>
    <el-card style="height: 80px">
      <el-form style="display: flex">
        <el-form-item label="一级分类" style="width: 250px; margin-right: 10px">
          <el-select>
            <el-option label="上号"> </el-option>
            <el-option label="南京"> </el-option>
            <el-option label="北京"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类" style="width: 250px; margin-right: 10px">
          <el-select>
            <el-option label="上号"> </el-option>
            <el-option label="南京"> </el-option>
            <el-option label="北京"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="三级分类" style="width: 250px">
          <el-select>
            <el-option label="上号"> </el-option>
            <el-option label="南京"> </el-option>
            <el-option label="北京"> </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card style="margin-top: 20px">
      <el-button type="primary" icon="plus" style="margin-bottom: 10px"
        >添加平台属性</el-button
      >
      <el-table border>
        <el-table-column
          label="序号"
          type="index"
          width="80px"
          align="center"
        ></el-table-column>
        <el-table-column label="属性名称" width="130px"></el-table-column>
        <el-table-column label="属性值名称"></el-table-column>
        <el-table-column label="操作" width="150px"> </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
// 宽度不能写死；

</style>
