Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady : function() {
	    Ext.regModel('Radios', {
		    fields: ['name', 'url']
			});
        
        var groupingBase = {
            tpl: '<tpl for="."><div class="contact"><a href="{url}"><strong>{name}</strong></a></div></tpl>',
            itemSelector: 'div.contact',
            
            singleSelect: true,
            grouped: true,
            indexBar: true,
            
            store: new Ext.data.Store({

                model: 'Radios',
                sorters: 'name',
                
                getGroupString : function(record) {
                    return record.get('name')[0];
                },
                
                data: [
	{name: 'Activa', url: 'http://provisioning.streamtheworld.com/pls/ACTIVA.pls'}, 
	{name: 'ADN Radio', url: 'http://provisioning.streamtheworld.com/pls/ADN.pls'},
	{name: 'Agricultura', url: 'http://www.radioagricultura.cl/online/agricultura.m3u'},
	{name: 'Beethoven', url: 'http://sc.grupodial.net:8086/listen.pls'},
	{name: 'Biobio', url: 'http://www.radiobiobio.cl/player/iphone'},
	{name: 'Carolina', url: 'http://sc.grupodial.net:8080/listen.pls'},
	{name: 'Carolina (alternativa)', url: 'http://vivo.carolina.cl/iphone/'},
	{name: 'Concierto', url: 'http://provisioning.streamtheworld.com/pls/CONCIERTO.pls'},
	{name: 'Cooperativa', url: 'http://www.cooperativa.cl/prontus_nots/prontus/player_streaming/chile.m3u'},
	{name: 'Corazon', url: 'http://provisioning.streamtheworld.com/pls/CORAZON.pls'},
	{name: 'Cruz Roja', url: 'www.cruzrojamedia.net/iphone'},
	{name: 'Disney', url: 'http://sc.grupodial.net:8084/listen.pls'},
	{name: 'Duna', url: 'http://sc.grupodial.net:8088/listen.pls'},
	{name: 'Duna (alternativa)', url: 'http://vivo.duna.cl/iphone/'},
	{name: 'FM Dos', url: 'http://provisioning.streamtheworld.com/pls/FMDOS.pls'},
	{name: 'Futuro', url: 'http://provisioning.streamtheworld.com/pls/FUTURO.pls'},
	{name: 'Imagina', url: 'http://provisioning.streamtheworld.com/pls/IMAGINA.pls'},
	{name: 'Paula', url: 'http://sc.grupodial.net:8082/listen.pls'},
	{name: 'Pudahuel', url: 'http://provisioning.streamtheworld.com/pls/pudahuel.pls'},
	{name: 'Radio Uno', url: 'http://provisioning.streamtheworld.com/pls/RADIO_UNO.pls'},
	{name: 'Rock and Pop', url: 'http://provisioning.streamtheworld.com/pls/ROCK_AND_POP.pls'},
	{name: 'Universidad de Chile', url: 'http://stream.radio.uchile.cl/listen.pls'},
	{name: 'Zero', url: 'http://sc.grupodial.net:8090/listen.pls'},
	{name: 'Zero (alternativa)', url: 'http://vivo.radiozero.cl/iphone/'}
                ]
            })	
        };
        
        if (!Ext.platform.isPhone) {
            new Ext.List(Ext.apply(groupingBase, {
                floating: true,
                width: 350,
                height: 350,
                centered: true,
                modal: true,
                hideOnMaskTap: false
            })).show();
        } 
        else {
            new Ext.List(Ext.apply(groupingBase, {
                fullscreen: true
            }));
        }
    }
});
