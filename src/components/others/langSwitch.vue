<template>
  <el-dropdown class="" :hide-timeout="0" trigger="click" @command="switchLang">
    <div class="flex items-center cursor-pointer gap-8">
      <Icons :name="$i18n.locale" />
      <span class="">
        {{ languages.find(item => item.value === $i18n.locale)?.name }}
      </span>
    </div>
    <template #dropdown>
      <el-dropdown-menu class="">
        <el-dropdown-item
          v-for="item in languages"
          :key="item.value"
          :command="item.value"
        >
          <div class="flex items-center gap-4">
            <Icons :name="item.value" />
            <span :class="{ active: $i18n.locale === item.value }">
              {{ item.name }}
            </span>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        {
          name: 'O‘zbekcha',
          value: 'uz'
        },
        {
          name: 'Русский',
          value: 'ru'
        }
      ]
    };
  },
  methods: {
    switchLang(value) {
      this.$i18n.locale = value;
      localStorage.setItem('locale', value);
    }
  }
};
</script>
