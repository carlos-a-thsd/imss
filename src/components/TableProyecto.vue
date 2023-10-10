<template>
    <div class="widget col-8">
        <div class="bg-white">
            <div class="head">
                <div class="filters">
                    <h5 class="title">{{ title }}</h5>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                </div>
            </div>
            <div class="body p-0">
                <div class="row">
                    <div class="col-12">
                        <table class="table table-stripped no-wrap" :id="tableId"
                            style="width:100%;margin-top:2%;margin-bottom:3%;min-height:210px!important;">
                        </table>
                    </div>
                </div>
                <div class="row justify-content-end">
                    <p class="updatetext text-end" style="font-size:13px;"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DataTable from "datatables.net-dt";
import 'datatables.net-dt/css/jquery.dataTables.css'
export default {
    components: {},
    props: [
        "tableId",
        "tableData",
        "title",
        "tableConfig",
    ],
    methods: {
        buildTable() {
            const tableId = `#${this.tableId}`
            const dtable = new DataTable(tableId, this.tableConfig)
            const page = dtable.page()
            dtable.clear();
            dtable.rows.add(this.tableData);
            dtable.draw();
            dtable.page(page);
            dtable.draw("page");
        }
    },
    watch: {
        tableData() {
            this.buildTable()
        }
    },
    mounted() {
        this.$nextTick(() => {
            if (this.tableData) {
                this.buildTable()
            }
        })

    }

}
</script>
