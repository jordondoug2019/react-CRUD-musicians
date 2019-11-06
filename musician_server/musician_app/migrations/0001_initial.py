# Generated by Django 2.0.6 on 2019-11-06 07:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MusicianModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('artistName', models.CharField(max_length=200)),
                ('genre', models.CharField(max_length=30)),
                ('popularSong', models.CharField(max_length=200)),
                ('favoriteAlbum', models.CharField(max_length=200)),
            ],
        ),
    ]
