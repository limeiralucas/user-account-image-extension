const St = imports.gi.St;
const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;

const Main = imports.ui.main;

function init() {
    button = new St.Bin({ style_class: 'uai-image-btn',
                          reactive: false,
                          can_focus: false,
                          x_fill: false,
                          y_fill: false,
                          track_hover: false });

    let gicon = Gio.icon_new_for_string('/var/lib/AccountsService/icons/' + GLib.get_user_name());
    let icon = new St.Icon({ gicon, style_class: 'uai-image' });
    icon.set_icon_size(22);
    button.set_child(icon);

}

function enable() {
    Main.panel._rightBox.insert_child_at_index(button, -1);
}

function disable() {
    Main.panel._rightBox.remove_child(button);
}