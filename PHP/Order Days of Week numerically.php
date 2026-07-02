//To sort a product's Days of Week values by numerical order
add_filter('woocommerce_display_product_attributes', 'custom_sort_days_of_week_attribute', 10, 2);

//We create a function and retrieve a product and all its attributes
function custom_sort_days_of_week_attribute($product_attributes, $product) {
    
    //We create the array containing the days and give them a number
    $day_order = array('Monday' => 1, 'Tuesday' => 2, 'Wednesday' => 3, 'Thursday' => 4, 'Friday' => 5, 'Saturday' => 6, 'Sunday' => 7,);

    //For each attribute found, I think we call them $key and associate to them their respective values (The attribute Days of Week contains Monday, Tuesday etc.)
    foreach ($product_attributes as $key => $attribute) {

        //We check if an attribute named "Days of Week" actually exists. The other attributes don't matter.
        if ((isset($attribute['label']) && $attribute['label'] === 'Days of Week') || $key === 'pa_days-of-week') {
            $value = $attribute['value'];

            //At this point, we look for all links inside the attribute value (Monday, Tuesday, Wednesday, Thursday, Friday)
            preg_match_all('/<a[^>]*>(.*?)<\/a>/i', $value, $matches);

            if (!empty($matches[0])) {
                $linked_days = array();

                foreach ($matches[0] as $index => $full_link_html) {
                    $day_name = trim(wp_strip_all_tags($matches[1][$index]));
                    $linked_days[] = array('name' => $day_name,'html' => $full_link_html,);
                }

                //We compare days by the number that was assigned to them at the beginning and sort them by numerical order (based on their number. 1 first, 5 last.)
                usort($linked_days, function($a, $b) use ($day_order) {
                    $a_pos = $day_order[$a['name']] ?? 999;
                    $b_pos = $day_order[$b['name']] ?? 999;
                    return $a_pos <=> $b_pos;
                });

                $sorted_links = array_map(function($item) {
                    return $item['html'];
                }, $linked_days);

                //At this point we have ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']. We remove the , and send those values in order to the product's Days of Week attribute
                //So the Days of Week attribute now has Monday TuesDay Wednesday Thursday Friday.
                $product_attributes[$key]['value'] = implode(', ', $sorted_links);
            }
        }
    }

    return $product_attributes;
}
