<template>
  <div class="wrapper">
    <!-- <el-checkbox :label="city" :key="city" class="check" @change="choosedistrict(city)">{{city}}
        </el-checkbox> -->
    <el-checkbox class="checkAll" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">华东</el-checkbox>
    <el-checkbox-group class="checkGroup" v-model="checkedCities" @change="handleCheckedCitiesChange">
      <template v-for="(city, index) in cities">
        <el-checkbox class="check-sub" :label="city" :key="city" @change="handleCheckedCityChange(city)" :indeterminate="district[city].isIndeterminate">{{city}}</el-checkbox>
        <!-- <el-checkbox class="check-sub"  :key="index" 
        :indeterminate="district[city].isIndeterminate" 
        v-model="district[city].checkAll" @change="handleCheckCityChange($event, city)">{{city}}</el-checkbox> -->
        <div class="pop" :key="index">
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
      isIndeterminate: true
    },
    '北京': {
      list: ['北京1', '北京2', '北京3'],
      listChecked: ['北京1', '北京3'],
      checkedAll: false,
      isIndeterminate: true
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
        // checkAll: true,
        // checkedCities: ['广州', '深圳'],
        cities: cityOptions,
        // isIndeterminate: true,
        district: Object.assign(district),
        currentSelection: '上海'
      };
    },
    computed: {
      isIndeterminate: {
        get: function () {
          return this.checkedCities.length > 0 && this.checkedCities.length !== cityOptions.length;
        },
        set: function () {

        }
      },
      checkedCities: {
        get: function () {
          let keysArray = Object.keys(this.district);
          let cityArray = [];
          keysArray.forEach((item) => {
            if (this.district[item].checkedAll === true) {
              cityArray.push(item);
            }
          });
          return cityArray;
        },
        set: function(checkArray) {

           let keysArray = Object.keys(this.district);
          keysArray.forEach((item)=>{
            if(checkArray.indexOf(item)!==-1){
            this.district[item].checkedAll = true
            } else {
            this.district[item].checkedAll =false   
            }
          })
        }
      },
      checkAll: {
        get: function () {
          
        },
        set: function () {
          return Object.keys(this.district).every((item) => {
            return this.district[item].checkAll === true
          });
        }

      }
    },
    methods: {
      handleCheckAllChange(event) {
        console.log('handleCheckAllChange ', event);
        this.checkedCities = event.target.checked ? cityOptions : [];
        this.isIndeterminate = false;
        console.log('checked city ', this.checkedCities);
      },
      // handleCheckCityChange($event, city) {
      //   console.log($event, city);
      //   this.district[city].listChecked = event.target.checked ? this.district[city].list : [];
      //   this.district[city].isIndeterminate = false;
      //   console.log('handleCheckCityChange', this.checkedCities);
      //   // this.checkedCities 
      // },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === cityOptions.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < cityOptions.length;
        console.log('handleCheckedCitiesChange ', this.checkedCities, 'value', value);

      },
      handleCheckedCityChange(city) {
        if(this.district[city].isIndeterminate===true) {
          this.district[city].isIndeterminate = false;
          this.district[city].checkedAll = true;
        } else {
          // this.district[city].checkedAll = !this.district[city].checkedAll;        
        }
        console.log('city click handleCheckedCityChange ', city,this.district[city])
      }, 
      handleCheckedDistrict(value) {
        let checkedCount = value.length;
        let districtOne = this.district[this.currentSelection];
        districtOne.checkedAll = checkedCount === districtOne.list.length;
        districtOne.isIndeterminate = checkedCount > 0 && checkedCount < districtOne.list.length;
        // if(checkedCount.length===0) {
        // }
        console.log('handleCheckedDistrict ', this.checkedCities, 'value', value, 'disone ',
          districtOne, this.checkedCities);

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
