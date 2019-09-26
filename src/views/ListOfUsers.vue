<template>
  <section>
    <div class="container">
      <div class="box">
        <b-table
          :data="data"
          :checked-rows.sync="checkedRows"
          checkable
          :checkbox-position="checkboxPosition"
          :paginated="isPaginated"
          :per-page="perPage"
          :current-page.sync="currentPage"
          :pagination-simple="isPaginationSimple"
          :pagination-position="paginationPosition"
          :default-sort-direction="defaultSortDirection"
          :sort-icon="sortIcon"
          :sort-icon-size="sortIconSize"
          default-sort="user.first_name"
          aria-next-label="Next page"
          aria-previous-label="Previous page"
          aria-page-label="Page"
          aria-current-label="Current page"
        >
          <template slot-scope="props">
            <b-table-column field="id" label="ID" width="40" sortable numeric>{{ props.row.id }}</b-table-column>

            <b-table-column
              field="first_name"
              label="First Name"
              sortable
            >{{ props.row.first_name }}</b-table-column>

            <b-table-column field="last_name" label="Last Name" sortable>{{ props.row.last_name }}</b-table-column>

            <b-table-column field="date" label="Date" sortable centered>
              <span class="tag is-success">{{ new Date(props.row.date).toLocaleDateString() }}</span>
            </b-table-column>

            <b-table-column label="Gender">
              <span>
                <b-icon pack="fas" :icon="props.row.gender === 'Male' ? 'mars' : 'venus'"></b-icon>
                {{ props.row.gender }}
              </span>
            </b-table-column>
          </template>
          <template slot="bottom-left">
            <b>Total checked</b>
            : {{ checkedRows.length }}
          </template>
        </b-table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    const data = [
      {
        id: 1,
        first_name: "Jesse",
        last_name: "Simmons",
        date: "2016-10-15 13:43:27",
        gender: "Male"
      },
      {
        id: 2,
        first_name: "John",
        last_name: "Jacobs",
        date: "2016-12-15 06:00:53",
        gender: "Male"
      },
      {
        id: 3,
        first_name: "Tina",
        last_name: "Gilbert",
        date: "2016-04-26 06:26:28",
        gender: "Female"
      },
      {
        id: 4,
        first_name: "Clarence",
        last_name: "Flores",
        date: "2016-04-10 10:28:46",
        gender: "Male"
      },
      {
        id: 5,
        first_name: "Anne",
        last_name: "Lee",
        date: "2016-12-06 14:38:38",
        gender: "Female"
      }
    ];

    return {
      data,
      isPaginated: true,
      isPaginationSimple: false,
      paginationPosition: "bottom",
      defaultSortDirection: "asc",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 5,
      checkboxPosition: "right",
      checkedRows: [data[1], data[3]],
      columns: [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true
        },
        {
          field: "first_name",
          label: "First Name"
        },
        {
          field: "last_name",
          label: "Last Name"
        },
        {
          field: "date",
          label: "Date",
          centered: true
        },
        {
          field: "gender",
          label: "Gender"
        }
      ]
    };
  }
};
</script>