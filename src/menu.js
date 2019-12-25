const menu = () => {
  const menuClasses = 'img-background-menu';

  const menuContent = `
        <div class="container">
            <div class="row">
                <div class="col-12 subnav"></div>
                <h1 class="col-12 my-4">MENU</h1>
                <div class="col-12 background-content ">
                    <h3 class="mt-4  text-success">Veggies</h3>
                    <ul>
                        <li>
                            <h4>sautéed green beans</h4>
                            <span>fish sauce vinaigrette . cashews</span>
                        </li>
                        <li>
                            <h4>pan fried shishito peppers</h4>
                            <span>parmesan . sesame . miso</span>
                        </li>
                        <li>
                            <h4>roasted cauliflower</h4>
                            <span>pickled peppers . pine nuts . mint</span>
                        </li>
                        <li>
                            <h4>kohlrabi salad</h4>
                            <span>fennel . beemster . toasted almonds . roasted shiitake . nichols' farm apples</span>
                        </li>
                        <li>
                            <h4>roasted beets</h4>
                            <span>green beans . white anchovy . avocado crème fraîche . bread crumb</span>
                        </li>
                        <li>
                            <h4>wood grilled broccoli</h4>
                            <span>rogue smokey bleu . spiced crispies</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      `;

  return [menuContent, menuClasses];
};

export default menu;