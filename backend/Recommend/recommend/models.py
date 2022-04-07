# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class Analysis(models.Model):
    analysis_id = models.BigAutoField(primary_key=True)
    bean_sprouts = models.FloatField()
    beef = models.FloatField()
    blog_cnt = models.FloatField()
    cabbage = models.FloatField()
    carrot = models.FloatField()
    cheese = models.FloatField()
    chicken_breast = models.FloatField()
    chili_powder = models.FloatField()
    crawling_cnt = models.FloatField()
    delicious = models.FloatField()
    diet = models.FloatField()
    dinner = models.FloatField()
    dumpling = models.FloatField()
    egg = models.FloatField()
    eomuk = models.FloatField()
    garlic = models.FloatField()
    green_onion = models.FloatField()
    haejang = models.FloatField()
    jjol_git = models.FloatField()
    ketchup = models.FloatField()
    kimchi = models.FloatField()
    kko_deul = models.FloatField()
    lightness = models.FloatField()
    lunch = models.FloatField()
    mayonnaise = models.FloatField()
    midnight_snack = models.FloatField()
    milk = models.FloatField()
    morning = models.FloatField()
    mushroom = models.FloatField()
    not_delicious = models.FloatField()
    not_spicy = models.FloatField()
    outdoor = models.FloatField()
    pepper = models.FloatField()
    pork = models.FloatField()
    potato = models.FloatField()
    pumpkin = models.FloatField()
    red_pepper = models.FloatField()
    rice_cake = models.FloatField()
    sample_id = models.CharField(max_length=255, blank=True, null=True)
    sausage = models.FloatField()
    seafood = models.FloatField()
    seaweed = models.FloatField()
    soft_tofu = models.FloatField()
    soya_sprouts = models.FloatField()
    spicy = models.FloatField()
    taeng_geul = models.FloatField()
    tuna = models.FloatField()
    tweet_cnt = models.FloatField()
    vegan = models.FloatField()

    class Meta:
        managed = False
        db_table = 'analysis'


class Composition(models.Model):
    composition_id = models.BigAutoField(primary_key=True)
    cold = models.IntegerField()
    cup = models.IntegerField()
    jjajang = models.IntegerField()
    liquid = models.IntegerField()
    powder = models.IntegerField()
    seasoning = models.IntegerField()
    soup = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'composition'


class Fond(models.Model):
    fond_id = models.BigAutoField(primary_key=True)
    egg = models.CharField(max_length=255, blank=True, null=True)
    ingredient_garlic = models.TextField(blank=True, null=True)  # This field type is a guess.
    ingredient_green_onion = models.TextField(blank=True, null=True)  # This field type is a guess.
    ingredient_none = models.TextField(blank=True, null=True)  # This field type is a guess.
    ingredient_pepper = models.TextField(blank=True, null=True)  # This field type is a guess.
    noodle_length = models.CharField(max_length=255, blank=True, null=True)
    noodle_texture = models.CharField(max_length=255, blank=True, null=True)
    spicy = models.CharField(max_length=255, blank=True, null=True)
    topping_cheese = models.TextField(blank=True, null=True)  # This field type is a guess.
    topping_dumpling = models.TextField(blank=True, null=True)  # This field type is a guess.
    topping_none = models.TextField(blank=True, null=True)  # This field type is a guess.
    topping_tteok = models.TextField(blank=True, null=True)  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'fond'


class Member(models.Model):
    member_id = models.BigAutoField(primary_key=True)
    age = models.IntegerField()
    created_at = models.DateTimeField(blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    gender = models.CharField(max_length=255, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    updated_at = models.DateTimeField(blank=True, null=True)
    fond = models.ForeignKey(Fond, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'member'


class MemberLikeRamen(models.Model):
    member_like_ramen_id = models.BigAutoField(primary_key=True)
    member = models.ForeignKey(Member, models.DO_NOTHING, blank=True, null=True)
    ramen = models.ForeignKey('Ramen', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'member_like_ramen'


class Nutrient(models.Model):
    nutrient_id = models.BigAutoField(primary_key=True)
    carbs = models.FloatField()
    cholesterol = models.FloatField()
    kcal = models.FloatField()
    lipid = models.FloatField()
    protein = models.FloatField()
    salty = models.FloatField()
    saturated_fat = models.FloatField()
    sodium = models.FloatField()
    sugar = models.FloatField()
    sweetness = models.FloatField()
    trans_fat = models.FloatField()
    volume = models.FloatField()

    class Meta:
        managed = False
        db_table = 'nutrient'


class Ramen(models.Model):
    ramen_id = models.BigIntegerField(primary_key=True)
    brand = models.CharField(max_length=255, blank=True, null=True)
    code = models.CharField(max_length=255, blank=True, null=True)
    english_brand = models.CharField(max_length=255, blank=True, null=True)
    english_name = models.CharField(max_length=255, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    noodle = models.CharField(max_length=255, blank=True, null=True)
    sample_id = models.CharField(max_length=255, blank=True, null=True)
    survey_year = models.IntegerField()
    analysis = models.ForeignKey(Analysis, models.DO_NOTHING, blank=True, null=True)
    composition = models.ForeignKey(Composition, models.DO_NOTHING, blank=True, null=True)
    nutrient = models.ForeignKey(Nutrient, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ramen'
