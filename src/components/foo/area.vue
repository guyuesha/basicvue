<template>
    <div>
        <el-dialog title="选择区域" :visible.sync="areaVisition" size="large" :close-on-click-modal="false">
             <template v-for="(area, index) in areaOptions"> 
                <onearea :key="area.name" :cities="Object.keys(area.include)" :ref="area.name"
                :district="area.include" :areas="area.name">
                </onearea>
            </template>
            <div slot="footer" class="dialog-footer">
                <el-button @click="areaVisition = false">取 消</el-button>
                <el-button type="primary" @click="confirmArea">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import onearea from './onearea';
    
    export default {
        data() {
            return {
                areaVisition: true
            }
        },
        props: {
            areaOptions: {
                required: true,
                type: Array
            }
        },
        components: {
            onearea
        },
        methods: {
            confirmArea() {
                this.areaVisition = false
                 this.$emit('selectArea', this.areaOptions);
            },
            show() {
                this.areaVisition = true
            }
        }

    }
</script>