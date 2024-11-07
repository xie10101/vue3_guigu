<!-- @format -->

<template>
  <div>
    <Category :showchange="showchange"></Category>
    <el-card style="margin-top: 20px">
      <div v-show="!showchange">
        <el-button
          type="primary"
          icon="plus"
          style="margin-bottom: 20px"
          :disabled="!CategoryStore.selected_c3"
          @click="toAddAttrs"
          >添加平台属性</el-button
        >
        <el-table border :data="attrslist">
          <el-table-column
            label="序号"
            type="index"
            width="80px"
            align="center"
          ></el-table-column>
          <el-table-column
            label="属性名称"
            width="130px"
            prop="attrName"
          ></el-table-column>
          <el-table-column label="属性值名称">
            <template v-slot="{ row }">
              <el-tag
                style="margin-right: 8px"
                v-for="item in row.attrValueList"
                :key="item.id"
              >
                {{ item.valueName }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="150px">
            <el-button type="warning" icon="Edit"> </el-button>
            <el-button type="danger" icon="Delete"> </el-button>
          </el-table-column>
        </el-table>
      </div>
      <div v-show="showchange">
        <!-- 块级元素会独占一行 -->
        <!-- 行内块元素 可以一行放置多个 -->
        <!-- form 属性 inline="true" -->
        <el-form :inline="true">
          <el-form-item :inline="true" label="属性名称:">
            <el-input
              placeholder="请输入属性名称"
              v-model="attrname"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button
          type="primary"
          icon="plus"
          @click="addAttrsContents"
          :disabled="!attrname.trim()"
          >添加属性值</el-button
        >
        <el-button @click="clearAttrName"> 清空名称</el-button>
        <el-table
          border
          :data="attrscontent.attrValueList"
          style="margin-top: 20px; margin-bottom: 20px"
        >
          <el-table-column label="序号" type="index"></el-table-column>
          <el-table-column label="新增属性值" prop="valuename">
            <template v-slot="{ $index }">
              <span> 属性值{{ $index + 1 }}:</span>
              <el-input
                label="1231"
                name="qeqe"
                style="width: 100px; margin-left: 10px"
                v-model="attrscontent.attrValueList[$index].valueName"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column label="操作属性">
            <template v-slot="{ $index }">
              <el-button
                type="danger"
                icon="delete"
                @click="delAttrContent($index)"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button
          type="primary"
          @click="handleAddAttrs"
          :disabled="!attrname.trim()"
          >确认添加</el-button
        >
        <el-button @click="Cancel">取消</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, reactive } from "vue";
import Category from "../../../components/Category/index.vue";
import useCategoryStore from "../../../store/modules/category";
const CategoryStore = useCategoryStore();
import { addOrUpdateAttrs, reqAttrs } from "../../../api/product/attr";
import { CategoryList } from "../../../api/product/attr/type";
import { ElMessage } from "element-plus";
// 获取属性--当三级分类id获取时

//属性列表：
const attrslist = ref<CategoryList[]>([]);
watch(
  () => CategoryStore.selected_c3,
  () => {
    //在一级分类改变时  --三级与二级的id清空 不发请求
    if (!CategoryStore.selected_c3) {
      attrslist.value = [];
    } else {
      getAttrs();
    }
  },
);
//监视 watch--
// 结构失败
// const { selected_c1, selected_c2, selected_c3 } = useCategoryStore();

const getAttrs = async () => {
  const result = await reqAttrs(
    CategoryStore.selected_c1,
    CategoryStore.selected_c2,
    CategoryStore.selected_c3,
  );
  if (result.code == 200) {
    attrslist.value = result.data;
    console.log(attrslist.value);
    ElMessage({
      type: "success",
      message: "获取商品属性成功",
    });
  } else {
    ElMessage({
      type: "error",
      message: "获取商品属性失败",
    });
    return Promise.reject(new Error(result.message));
  }
};
//控制 carda中内容的改变：
const showchange = ref<boolean>(false);
const toAddAttrs = () => {
  showchange.value = true;
  //将获取到的三级分类id赋值
  attrscontent.categoryId = CategoryStore.selected_c3;
  //将属性名 属性值列表清空
  attrname.value = "";
  attrscontent.attrValueList = [];
};
const Cancel = () => {
  showchange.value = false;
};
//属性名称：
const attrname = ref<string>("");

//table数据：

const attrscontent = reactive<CategoryList>({
  attrName: "",
  categoryId: 1,
  categoryLevel: 3,
  attrValueList: [],
});
const addAttrsContents = () => {
  attrscontent.attrValueList.push({
    valueName: "",
  });
};
const clearAttrName = () => {
  //清空输入款数据：
  attrname.value = "";
  attrscontent.attrValueList = [];
};
const handleAddAttrs = async () => {
  //将输入框数据赋值 --请求对象：
  attrscontent.attrName = attrname.value;
  const result = await addOrUpdateAttrs(attrscontent);
  if (result.code == 200) {
    console.log(result);
    ElMessage({
      type: "success",
      message: "添加属性成功",
    });
  }
  //返回到展示组件
  showchange.value = false;
  //再次请求：
  getAttrs();
};
const delAttrContent = (index: number) => {
  attrscontent.attrValueList.splice(index, 1);
};
</script>

<style scoped lang="scss">
// 宽度不能写死；
</style>
