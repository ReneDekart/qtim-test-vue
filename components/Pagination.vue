<script setup lang="ts">
const props = defineProps<{
    totalPages: number;
    currentPage: number;
    showItems: number;
}>();

const emit = defineEmits<{
    (e: 'to-left'): void;
    (e: 'to-right'): void;
    (e: 'change-page', value: number): void;
}>();

// стрелками будем переключать саму страницу.
// Из макета не совсем ясно, какое поведени должно быть у пагинатора
const toLeft = () => {
    if (props.currentPage > 1) {
        emit('to-left');
    }
};

const toRight = () => {
    if (props.currentPage < props.totalPages) {
        emit('to-right');
    }
};

const changePage = (value: number) => {
    if (value !== props.currentPage) {
        emit('change-page', value);
    }
};

//computed
const showLeft = computed<boolean>(() => {
    const { currentPage, showItems } = props;
    return !(currentPage < showItems);
});

const showRight = computed<boolean>(() => {
    const { currentPage, showItems, totalPages } = props;
    return !(totalPages - currentPage < showItems);
});

const visibleItems = computed<Array<number>>(() => {
    const items: number[] = [];
    const { currentPage, showItems, totalPages } = props;

    if (showItems <= 1 || totalPages <= 1 || totalPages < showItems) {
        return items;
    }
    if (currentPage === Number(1) || currentPage < showItems) {
        for (let i = 1; i <= showItems; i++) {
            items.push(i);
        }
    } else if (currentPage === totalPages) {
        for (let i = totalPages - showItems + 1; i <= totalPages; i++) {
            items.push(i);
        }
    } else if (totalPages - currentPage < showItems) {
        for (let i = totalPages - showItems + 1; i <= totalPages; i++) {
            items.push(i);
        }
    } else {
        for (
            let i = currentPage - Math.floor(showItems / 2);
            i <= currentPage - Math.floor(showItems / 2) - 1 + showItems;
            i++
        ) {
            items.push(i);
        }
    }
    return items;
});
</script>

<template>
    <div class="pagination__wrapper">
        <ButtonRounded
            v-show="showLeft"
            class="pagination__arrow-button"
            @click="toLeft()"
        >
            <IconArrowLeft />
        </ButtonRounded>
        <ButtonRounded
            v-for="item in visibleItems"
            :key="item"
            :class="{ 'active-item': item === currentPage }"
            @click="changePage(item)"
            >{{ item }}
        </ButtonRounded>
        <ButtonRounded
            v-show="showRight"
            class="pagination__arrow-button"
            @click="toRight()"
        >
            <IconArrowRight />
        </ButtonRounded>
    </div>
</template>

<style lang="scss" scoped>
.pagination__wrapper {
    display: flex;
    gap: 8px;
}

.active-item {
    background-color: $black-900;
    color: white;

    &:hover {
        background-color: $black-900;
        cursor: default;
    }
}

.pagination__arrow-button {
    background-color: white;
    border: solid 1px $black-200;

    > svg {
        height: 100%;
    }

    &:hover {
        background-color: $black-200;
    }
}
</style>
