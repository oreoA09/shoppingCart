$(function () {

	//add item btn
	$('#js-shopping-list-form button').on('click', function(e) {
		e.preventDefault();
		const value = $('input').val();
		// $('h2').text(value);
		$('ul').append(`
      <li>
      	<span class="shopping-item">${value}				</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      `)
		$('input').val("");
		alert("Confirm Item added!!.");
	})

	// strikethrough btn

	$('.shopping-item-toggle').on('click',function(e) {

$(this).parent().first().prev().toggleClass('shopping-item__checked');

		// console.log(e.currentTarget)
	})


	//delete btn
	$('.shopping-item-delete').on('click',function(e) {

$(this).parents('li').remove();
	})
})