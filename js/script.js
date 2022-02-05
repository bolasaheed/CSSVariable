const inputs = document.querySelectorAll('.controls input');

    function refresh() {
      let unit = this.dataset.sizing || '';
      let properName="--" + this.name;
      document.documentElement.style.setProperty(properName, this.value + unit);
    }
function OnChange(input)
{

input.addEventListener("change",refresh);
}
    inputs.forEach(OnChange);
    //inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
  