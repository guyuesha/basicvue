<template>
  <div class="wrapper">
    <el-checkbox class="checkAll" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">华东</el-checkbox>
    <el-checkbox-group class="checkGroup" v-model="checkedCities" @change="handleCheckedCitiesChange">
      <template v-for="city in cities">
        <el-checkbox :label="city" :key="city" class="check" @change="chooseProvince(city)">{{city}}
        </el-checkbox>
        <div class="pop">
          <i :class="['el-icon--right', 'arrow-down', currentSelection!==city?'el-icon-caret-bottom': 'el-icon-caret-top']" @click="showDistrict(city)"></i>
          <div class="popover" v-show="currentSelection===city">
            <el-checkbox v-for="pro in province[city]" :label="pro" :key="pro" class="check">
              {{pro}}</el-checkbox>
          </div>
        </div>
      </template>
    </el-checkbox-group>
  </div>
</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  const province = {
    '上海': ['上海1', '上海2', '上海3'],
    '北京': ['北京1', '北京2', '北京3'],
    '广州': ['广州1', '广州2', '广州3'],
    '深圳': ['深圳1', '深圳2', '深圳3'],
  }
  export default {
    data() {
      return {
        checkAll: true,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        checked: true,
        province: Object.assign(province),
        currentSelection: '上海'
      };
    },
    methods: {
      handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        console.log('chos pro ', value);

      },
      showDistrict(city) {
        if (this.currentSelection === city) {
          this.currentSelection = '';
        } else {
          this.currentSelection = city;
        }
      },
      chooseProvince() {

      }
    }
  };

</script>
<style scoped>
  .wrapper {
    width: 800px;
    text-align: left;
  }

  .checkAll {
    width: 150px;
  }

  .checkGroup {
    display: inline-block;
  }

  .arrow-down {}

  .check {
    width: 60px;
  }

  .pop {
    display: inline-block;
    cursor: pointer;
    padding-left: 5px;
    padding-right: 5px;
    margin-right: 10px;
    position: relative;
  }

  .popover {
    position: absolute;
    width: 200px;
    height: 150px;
    left: -65px;
    top: 25px;
    border: 1px solid #0190fe;
    padding: 5px;
  }

</style>
