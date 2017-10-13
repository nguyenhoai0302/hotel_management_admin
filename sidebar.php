
<div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
    <div class="profile-sidebar">
        <div class="profile-userpic">
            <img src="http://placehold.it/50/30a5ff/fff" class="img-responsive" alt="">
        </div>
        <div class="profile-usertitle">
            <div class="profile-usertitle-name">Username</div>
            <div class="profile-usertitle-status"><span class="indicator label-success"></span>Online</div>
        </div>
        <div class="clear"></div>
    </div>
    <div class="divider"></div>
    <ul class="nav menu">
        <?php
        if (isset($_GET['room_mang'])){ ?>
            <li class="active">
                <a href="index.php?room_mang"><em class="fa fa-dashboard">&nbsp;</em>
                    Room Management
                </a>
            </li>
        <?php } else{?>
            <li>
                <a href="index.php?room_mang"><em class="fa fa-dashboard">&nbsp;</em>
                    Room Management
                </a>
            </li>
        <?php }
        if (isset($_GET['reservation'])){ ?>
            <li class="active">
                <a href="index.php?reservation"><em class="fa fa-calendar">&nbsp;</em>
                    Reservation
                </a>
            </li>
        <?php } else{?>
            <li>
                <a href="index.php?reservation"><em class="fa fa-calendar">&nbsp;</em>
                    Reservation
                </a>
            </li>
        <?php }
        if (isset($_GET['staff_mang'])){ ?>
            <li class="active">
                <a href="index.php?staff_mang"><em class="fa fa-dashboard">&nbsp;</em>
                    Staff Management
                </a>
            </li>
        <?php } else{?>
            <li>
                <a href="index.php?staff_mang"><em class="fa fa-dashboard">&nbsp;</em>
                    Staff Management
                </a>
            </li>
        <?php }
        if (isset($_GET['add_emp'])){ ?>
            <li class="active">
                <a href="index.php?add_emp"><em class="fa fa-plus">&nbsp;</em>
                    Add Employee
                </a>
            </li>
        <?php } else{?>
            <li>
                <a href="index.php?add_emp"><em class="fa fa-plus">&nbsp;</em>
                    Add Employee
                </a>
            </li>
        <?php }
        if (isset($_GET['notification'])){ ?>
            <li class="active">
                <a href="index.php?notification"><em class="fa fa-envelope">&nbsp;</em>
                    Notification
                </a>
            </li>
        <?php } else{?>
            <li>
                <a href="index.php?notification"><em class="fa fa-envelope">&nbsp;</em>
                    Notification
                </a>
            </li>
        <?php }
        ?>
        <li><a href="logout.php"><em class="fa fa-power-off">&nbsp;</em> Logout</a></li>
    </ul>
</div><!--/.sidebar-->