<template>
  <div class="wrapper">
    <!-- <el-checkbox :label="city" :key="city" class="check" @change="choosedistrict(city)">{{city}}
        </el-checkbox> -->
    <el-checkbox class="checkAll" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">华东</el-checkbox>
    <el-checkbox-group class="checkGroup" v-model="checkedCities" @change="handleCheckedCitiesChange">
      <template v-for="city in cities">
        <el-checkbox class="checkAll" 
        :indeterminate="district[city].isIndeterminate" 
        v-model="checkedCities" @change="handleCheckCityChange($event, city)">{{city}}</el-checkbox>
        <div class="pop">
          <i :class="['el-icon--right', 'arrow-down', currentSelection!==city?'el-icon-caret-bottom': 'el-icon-caret-top']" @click="showDistrict(city)"></i>
          <div class="popover" v-show="currentSelection===city">
            <el-checkbox-group class="checkGroup" v-model="district[city].listChecked" @change="handleCheckedDistrict">
              <el-checkbox v-for="pro in district[city].list" :label="pro" :key="pro" class="check-sub">
                {{pro}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </template>
    </el-checkbox-group>
  </div>
</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  // const cityChecked = [true, true, false, false];
  const district = {
    '上海': {
      list: ['上海1', '上海2', '上海3'],
      listChecked: ['上海1'],
      checkedAll: false,
      isIndeterminate: false
    },
    '北京': {
      list: ['北京1', '北京2', '北京3'],
      listChecked: ['北京1', '北京3'],
      checkedAll: false,
      isIndeterminate: false
    },
    '广州': {
      list: ['广州1', '广州2', '广州3'],
      listChecked: ['广州1', '广州2', '广州3'],
      checkedAll: true,
      isIndeterminate: false
    },
    '深圳': {
      list: ['深圳1', '深圳2', '深圳3'],
      listChecked: ['深圳1', '深圳2', '深圳3'],
      checkedAll: true,
      isIndeterminate: false
    }
  }
  export default {
    data() {
      return {
        checkAll: true,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        district: Object.assign(district),
        currentSelection: '上海'
      };
    },
    methods: {
      handleCheckAllChange(event) {
        console.log('handleCheckAllChange ' , event);
        this.checkedCities = event.target.checked ? cityOptions : [];
        this.isIndeterminate = false;
        console.log('checked city ',  this.checkedCities);
      },
      handleCheckCityChange($event, city) {
        console.log($event, city);
        this.district[city].listChecked = event.target.checked ? this.district[city].listChecked : [];
        this.district[city].isIndeterminate = false;
        console.log('handleCheckCityChange', this.checkedCities);
        // this.checkedCities 
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        console.log('handleCheckedCitiesChange ', this.checkedCities, 'value', value);

      },
      handleCheckedDistrict(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        console.log('chos pro2 ', this.checkedCities, 'value', value);

      },
      showDistrict(city) {
        if (this.currentSelection === city) {
          this.currentSelection = '';
        } else {
          this.currentSelection = city;
        }
      },
      choosedistrict() {

      }
    },
    mounted() {
      console.log(this.district);
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

  .check-sub {
    width: 90px;
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
