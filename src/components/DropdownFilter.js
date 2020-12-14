class DropdownFilter {
  constructor(filters, apiUrl) {
    this.filters = filters;
    this.api = apiUrl;
  }

  createDropdownFilter() {
    const dropdown = document.createElement('div');
    dropdown.setAttribute('x-data', '{ isOpen: true }');

    const dropdownBtn = document.createElement('button');
    dropdownBtn.setAttribute('x-on:click', 'isOpen = !isOpen');
    dropdownBtn.setAttribute('x-on:keydown.escape', 'isOpen = false');
    dropdownBtn.classList.add(
      'w-full',
      'h-15',
      'border-solid',
      'border',
      'border-grey',
      'focus:outline-none',
      'p-4',
      'rounded-md',
      'text-grey',
      'text-left',
      'text-xl'
    );
    dropdownBtn.innerText = 'Filter';

    const filterList = document.createElement('ul');
    filterList.setAttribute('x-show', 'isOpen');
    filterList.setAttribute('x-on:click.away', 'isOpen = false');
    filterList.classList.add(
      'border-solid',
      'border',
      'border-grey-5',
      'font-light',
      'py-2.5',
      'rounded-md',
      'shadow',
      'text-xl'
    );

    this.filters.forEach((filter, i) => {
      const filterItem = document.createElement('li');
      filterItem.innerHTML = filter;
      filterItem.classList.add(
        'px-4',
        'py-2',
        'hover:bg-grey-secondary-3',
        'hover:font-normal'
      );

      filterList.appendChild(filterItem);
    });

    dropdown.append(dropdownBtn, filterList);
    return dropdown;
  }
}

export default DropdownFilter;
