<template>
  <div class="wrapper">
    <el-checkbox class="checkAll" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">{{areas}}</el-checkbox>
    <template v-for="(city, index) in cities">
      <el-checkbox class="check-sub" :label="city" :key="city" @change="handleCheckedCityChange(city)" v-model="district[city].checkAll"
        :indeterminate="district[city].isIndeterminate">{{city}}</el-checkbox>
      <div class="pop" :key="index" @click.stop>
        <i :class="['el-icon--right', 'arrow-down', currentSelection!==city?'el-icon-caret-bottom': 'el-icon-caret-top']" @click.stop="showDistrict(city)"></i>
        <div class="popover" v-show="currentSelection===city">
          <div class="checkGroup">
            <el-checkbox-group class="checkGroup" v-model="district[city].listChecked" @change="handleCheckedDistrict(district[city].listChecked)">
              <el-checkbox v-for="pro in district[city].list" :label="pro" :key="pro" class="check-sub">
                {{pro}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
    import {
    SET_AREA_ID 
} from '@/store/mutation-types';
  export default {
    data() {
      return {
        checkAll: false,
        isIndeterminate: true,
        currentSelection: ''
      };
    },
    props: {
      cities: {
        required: true,
        type: Array
      },
      district: {
        required: true,
        type: Object
      },
      areas: {
        required: true,
        type: String
      }
    },
    methods: {
      handleCheckAllChange(event) {
        this.isIndeterminate = false;
        Object.keys(this.district).forEach((item) => {
          this.district[item].checkAll = this.checkAll;
          this.district[item].listChecked = this.checkAll ? this.district[item].list : [];
          this.district[item].isIndeterminate = false;
        });
      },
      handleCheckedCityChange(city) {
        let currentCheckAll = this.district[city].checkAll;
        console.log('click city ', city, this.district[city]);
        if (this.district[city].isIndeterminate === true) {
          this.district[city].isIndeterminate = false;
          this.district[city].listChecked = this.district[city].list;
        } else {
          this.district[city].listChecked = currentCheckAll ? this.district[city].list : [];
        }
        this.checkAllFn();
      },
      checkAllFn() {
        let ischeckAll = Object.keys(this.district).every((item) => {
          return this.district[item].checkAll === true;
        });
        let ischeckSome = Object.keys(this.district).some((item) => {
          return this.district[item].listChecked.length !== this.district[item].list.length;
        }) && Object.keys(this.district).some((item) => {
          return this.district[item].listChecked.length > 0;
        });
        this.isIndeterminate = ischeckSome;
        this.checkAll = ischeckAll;
        console.log('checkAllFn ', this.district, this.checkAll)
      },
      handleCheckedDistrict(value) {
        let checkedCount = value.length;
        let districtOne = this.district[this.currentSelection];
        console.log('value ', value, ' disone ', districtOne);
        districtOne.checkAll = checkedCount === districtOne.list.length;
        districtOne.isIndeterminate = checkedCount > 0 && checkedCount < districtOne.list.length;
        this.checkAllFn();
      },
      hideDistrict() {
        console.log('hide ', 'set current')
        this.currentSelection = '';
      },
      showDistrict(city) {
        if (this.currentSelection === city) {
          this.currentSelection = '';
        } else {
          this.currentSelection = city;
        }
          this.$store.commit(SET_AREA_ID , this.currentSelection);
            console.log('store ', this.$store.state);
      },
    },
    created() {
      document.addEventListener('click', this.hideDistrict.bind(this));
    },
    destroyed() {
      document.removeEventListener('click', this.hideDistrict);

    }
  };

</script>
<style scoped>
  .wrapper {
    width: 800px;
    text-align: left;
    margin-bottom: 20px;
  }

  .checkAll {
    width: 150px;
  }

  .checkGroup {
    display: inline-block;
  }

  .check {
    width: 60px;
  }

  .check-sub {
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
    background-color: #eee;
    z-index: 10;
  }

</style>
